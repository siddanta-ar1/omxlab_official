import Link from 'next/link';
import { ArrowButton } from '@/components/common/ArrowButton';

export function SolutionsCTA() {
  return (
    <section
      data-anim="" className="w-full bg-action py-space-3xl text-on-primary">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin flex flex-col lg:flex-row lg:items-center justify-between gap-space-2xl">
        <div className="max-w-3xl">
          <span className="text-micro-eyebrow text-on-primary/80 uppercase tracking-[0.25em] block mb-space-sm">
            DEPLOY YOUR VERTICAL
          </span>
          <h2 className="text-headline-xl-mobile sm:text-headline-xl sm:text-[60px] text-on-primary font-black tracking-tight leading-[1.1]">
            Every sector, one deterministic path.
          </h2>
          <p className="text-body-lead text-on-primary/90 mt-space-md">
            The same five modules, re-certified for your compliance boundary —
            reach out and we scope the deployment against your sector&apos;s
            registry.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
          <ArrowButton href="/developers" variant="onDark">
            Start building
          </ArrowButton>
          <Link
            href="/company"
            className="lab-link px-5 py-[10px] border border-on-primary text-on-primary hover:bg-on-primary/10 rounded-lg text-cta-button flex items-center justify-center transition-all duration-200"
          >
            Talk to an engineer <span className="lab-link-glyph">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SolutionsCTA;
