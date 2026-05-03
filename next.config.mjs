import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin tracing root to this project. Without this, Next.js may pick up a
  // stray lockfile in a parent directory and pick the wrong workspace root,
  // which can break .env.local loading and output file tracing.
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
