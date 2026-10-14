import { CONTACT, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';

export function ContactCard() {
  return (
    <section className="section contact" id="kontakt" aria-labelledby="contact-title">
      <div className="contact-card">
        <div className="contact-copy">
          <div>
            <h2 id="contact-title" className="contact-title">
              {CONTACT.title}
            </h2>
            <p className="contact-text">{CONTACT.text}</p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${SITE.email}`} className="btn btn--light">
              E-Mail schreiben
              <span className="btn-icon">
                <ArrowIcon />
              </span>
            </a>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener"
              className="hook-link hook-link--light"
            >
              Gespräch buchen
            </a>
          </div>
        </div>

        {/* Dekoratives Swift-Snippet — iOS-Nicken, kein inhaltlicher Text */}
        <div className="contact-code" aria-hidden="true">
          <div className="code-bar">
            <span />
            <span />
            <span />
            <em>Studio.swift</em>
          </div>
          <pre>
            <code>
              <span className="c-com">{'// 1020.dev'}</span>
              {'\n'}
              <span className="c-key">let</span> studio = <span className="c-type">Studio</span>(
              {'\n'}
              {'  '}ort: <span className="c-str">&quot;Wien&quot;</span>,{'\n'}
              {'  '}fokus: [<span className="c-case">.legalAI</span>,{' '}
              <span className="c-case">.iOS</span>],{'\n'}
              {'  '}modus: <span className="c-case">.neugierig</span>
              {'\n'}){'\n\n'}
              <span className="c-key">try await</span> studio.
              <span className="c-fn">umsetzen</span>(idee)
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
