import Link from 'next/link';
import { SITE, START_PROJECT_HREF } from '@/lib/site';

/** Closing call to action, shared by every page. */
export function ContactBand({
  title = 'Have something to build?',
  body = 'Tell us what it needs to do and who it is for. We reply with a plan, a timeline and a price.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section id="contact" className="w-full bg-inverse-surface text-inverse-on-surface py-space-3xl scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row md:items-center md:justify-between gap-space-lg">
        <div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg tracking-tight">{title}</h2>
          <p className="mt-space-xs text-body-compact opacity-80 max-w-xl">{body}</p>
          <p className="mt-space-sm text-body-compact">
            <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:opacity-80">
              {SITE.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-space-sm">
          <a
            href={START_PROJECT_HREF}
            className="inline-flex items-center justify-center bg-signal-orange text-text-primary px-space-lg py-space-sm text-body-compact font-semibold hover:opacity-90 transition-opacity"
          >
            Start a project
          </a>
          <Link
            href="/work"
            className="inline-flex items-center justify-center border border-inverse-on-surface/40 px-space-lg py-space-sm text-body-compact hover:bg-white/10 transition-colors"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactBand;
