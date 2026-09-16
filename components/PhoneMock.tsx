import Image from 'next/image';
import { APPS_SHOWCASE } from '@/lib/data';

type ShowcaseApp = (typeof APPS_SHOWCASE)[number];

/* Inline-Icons des Mockups — bewusst klein gehalten und rein dekorativ.
   Als SVG statt CSS-Formen, damit sie in jeder Größe sauber rendern. */
const ICON = {
  stack: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <rect x="6" y="3" width="12" height="2.5" rx="1.25" />
      <rect x="4" y="7.5" width="16" height="13.5" rx="3.5" fill="none" strokeWidth="2" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <path
        d="M12 3a6 6 0 0 0-6 6c0 3.5-1 5-2 6h16c-1-1-2-2.5-2-6a6 6 0 0 0-6-6z"
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" fill="none" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" className="spin-glyph spin-glyph--filled">
      <path d="M12 20.7 4.3 13a4.8 4.8 0 0 1 6.8-6.8l.9.9.9-.9A4.8 4.8 0 1 1 19.7 13z" />
    </svg>
  ),
  comment: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <path
        d="M4 5.5h16v11H9.5L5 20.5v-4H4z"
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  more: (
    <svg viewBox="0 0 24 24" className="spin-glyph spin-glyph--filled">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <path
        d="M3.5 10.5 12 3.5l8.5 7M5.5 9.5v11h13v-11"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" strokeWidth="2" />
      <path d="m15.5 15.5 5 5" fill="none" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" className="spin-glyph">
      <circle cx="12" cy="12" r="9" fill="none" strokeWidth="2" />
      <circle cx="12" cy="9.8" r="3" fill="none" strokeWidth="2" />
      <path d="M6.3 19.2a6.4 6.4 0 0 1 11.4 0" fill="none" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
} as const;

/**
 * CSS-only Smartphone-Rahmen mit nachgebautem spin.-Feed.
 *
 * Rendert einen echten Screenshot, sobald `screenshot` in `APPS_SHOWCASE`
 * gesetzt ist — sonst das Mockup aus `screen`. Das Mockup ist rein
 * dekorativ (`aria-hidden`), Namen und Tracks darin sind fiktiv.
 */
export function PhoneMock({ app = APPS_SHOWCASE[0] }: { app?: ShowcaseApp } = {}) {
  return (
    <div className="phone" role="presentation">
      <div className="phone-screen">
        {app.screenshot ? (
          <Image
            src={app.screenshot.src}
            alt={app.screenshot.alt}
            fill
            sizes="(max-width: 920px) 74vw, 300px"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        ) : (
          <div className="spin-ui" aria-hidden="true">
            <div className="spin-status">
              <span>10:20</span>
              <span className="spin-status-icons">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>

            <div className="spin-head">
              <span className="spin-icon">{ICON.stack}</span>
              <span className="spin-wordmark">{app.wordmark}</span>
              <span className="spin-icon spin-icon--end">{ICON.bell}</span>
            </div>

            <span className="spin-date">{app.screen.date}</span>
            <span className="spin-bonus">{app.screen.bonus}</span>

            <div className="spin-feed">
              {app.screen.posts.map((post) => (
                <article key={post.user} className="spin-post">
                  <header className="spin-post-head">
                    <span className="spin-avatar"></span>
                    <span className="spin-post-meta">
                      <span className="spin-post-user">{post.user}</span>
                      <span className="spin-post-ago">{post.ago}</span>
                    </span>
                    <span className="spin-post-more">{ICON.more}</span>
                  </header>

                  <div className="spin-post-track">
                    <span className="spin-cover"></span>
                    <span className="spin-track-meta">
                      <span className="spin-track-title">{post.track}</span>
                      <span className="spin-track-artist">{post.artist}</span>
                    </span>
                  </div>

                  <footer className="spin-post-actions">
                    <span className="spin-action">
                      {ICON.heart}
                      {post.likes}
                    </span>
                    <span className="spin-action">
                      {ICON.comment}
                      {post.comments}
                    </span>
                    <span className="spin-react"></span>
                    <span className="spin-listen">Hören</span>
                  </footer>
                </article>
              ))}
            </div>

            <div className="spin-tabbar">
              <span className="spin-tab spin-tab--active">{ICON.home}</span>
              <span className="spin-tab">{ICON.search}</span>
              <span className="spin-tab-plus"></span>
              <span className="spin-tab">{ICON.profile}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
