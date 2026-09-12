import Link from 'next/link';
import { ArrowButton } from '@/components/common/ArrowButton';

export function OpenScienceGrantBand() {
  return (
    <section className="w-full bg-action py-space-3xl text-on-primary">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin flex flex-col lg:flex-row lg:items-center justify-between gap-space-2xl">
        <div className="max-w-3xl">
          <span className="text-micro-eyebrow text-on-primary/80 uppercase tracking-[0.25em] block mb-space-sm">
            OPEN SCIENCE GRANT
          </span>
          <h2 className="text-headline-xl sm:text-[52px] text-on-primary font-black tracking-tight leading-[1.1]">
            Fund the next registry entry.
          </h2>
          <p className="text-body-lead text-on-primary/90 mt-space-md">
            Independent labs and academic groups can apply for compute,
            dataset access, and publication support through the Open Science
            Grant.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
          <ArrowButton href="/developers" variant="onDark">
            Apply for the grant
          </ArrowButton>
          <Link
            href="/company"
            className="lab-link px-5 py-[10px] border border-on-primary text-on-primary hover:bg-on-primary/10 rounded-lg text-cta-button flex items-center justify-center transition-all duration-200"
          >
            Contact governance <span className="lab-link-glyph">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenScienceGrantBand;
