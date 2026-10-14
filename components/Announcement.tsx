import Link from 'next/link';
import { ANNOUNCEMENT } from '@/lib/data';
import { ArrowIcon } from './Icons';

export function Announcement() {
  return (
    <div className="announce">
      <Link href={ANNOUNCEMENT.href} className="announce-link">
        <span className="announce-text">{ANNOUNCEMENT.text}</span>
        <span className="announce-more">
          {ANNOUNCEMENT.linkLabel} <ArrowIcon />
        </span>
      </Link>
    </div>
  );
}
