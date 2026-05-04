import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Persistent rate limit via Upstash Redis when env vars are present.
// Falls back to per-instance in-memory limiter for local dev or when
// Upstash is not configured. The fallback is best-effort: serverless
// cold starts reset state and each warm instance has its own bucket.

const hasUpstash = !!(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

const redis = hasUpstash ? Redis.fromEnv() : null;

export interface LimiterOptions {
  /** Identifier used as Redis-key prefix and in-memory bucket namespace. */
  name: string;
  /** Max requests per IP per window. */
  max: number;
  /** Window duration in seconds. */
  windowSeconds: number;
}

interface MemoryBuckets {
  buckets: Map<string, number[]>;
}

const memoryStore = new Map<string, MemoryBuckets>();

function memoryCheck(
  ns: string,
  ip: string,
  max: number,
  windowMs: number,
): { ok: boolean; retryAfter: number } {
  let store = memoryStore.get(ns);
  if (!store) {
    store = { buckets: new Map() };
    memoryStore.set(ns, store);
  }
  const now = Date.now();
  const stamps = (store.buckets.get(ip) || []).filter((t) => now - t < windowMs);
  if (stamps.length >= max) {
    const retryAfter = Math.ceil((windowMs - (now - stamps[0])) / 1000);
    store.buckets.set(ip, stamps);
    return { ok: false, retryAfter };
  }
  stamps.push(now);
  store.buckets.set(ip, stamps);
  if (store.buckets.size > 500) {
    for (const [k, v] of store.buckets) {
      if (v.length === 0 || now - v[v.length - 1] > windowMs) store.buckets.delete(k);
    }
  }
  return { ok: true, retryAfter: 0 };
}

export function createLimiter(opts: LimiterOptions) {
  const upstash = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(opts.max, `${opts.windowSeconds} s`),
        analytics: false,
        prefix: `1020:rl:${opts.name}`,
      })
    : null;

  return {
    backend: upstash ? ('upstash' as const) : ('memory' as const),
    async check(ip: string): Promise<{ ok: boolean; retryAfter: number }> {
      if (upstash) {
        const res = await upstash.limit(ip);
        if (res.success) return { ok: true, retryAfter: 0 };
        const retryAfter = Math.max(1, Math.ceil((res.reset - Date.now()) / 1000));
        return { ok: false, retryAfter };
      }
      return memoryCheck(opts.name, ip, opts.max, opts.windowSeconds * 1000);
    },
  };
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}
