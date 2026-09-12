import { ArrowButton } from '@/components/common/ArrowButton';

/**
 * Closing conversion band, in the same bg-action idiom used site-wide
 * for the single closing CTA per page. Scoped to this page's own ask --
 * requesting an API key -- rather than reusing the homepage's generic
 * InitiateArchitecture copy.
 */
export function ApiKeyCta() {
  return (
    <section
      data-anim="" className="w-full bg-action py-space-3xl text-on-primary">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin flex flex-col lg:flex-row lg:items-center justify-between gap-space-2xl">
        <div className="max-w-3xl">
          <span className="text-micro-eyebrow text-on-primary/80 uppercase tracking-[0.25em] block mb-space-sm">
            GET STARTED
          </span>
          <h2 className="text-headline-xl sm:text-[52px] text-on-primary font-black tracking-tight leading-[1.1]">
            Get an API key.
          </h2>
          <p className="text-body-lead text-on-primary/90 mt-space-md">
            Provisioned in minutes, scoped to the modules you need, and billed
            against the same registry that powers our own production traffic.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
          <ArrowButton href="/company" variant="onDark">
            Request an API key
          </ArrowButton>
          <a
            href="#api-reference"
            className="lab-link px-5 py-[10px] border border-on-primary text-on-primary hover:bg-on-primary/10 rounded-lg text-cta-button flex items-center justify-center transition-all duration-200"
          >
            Browse the reference <span className="lab-link-glyph">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ApiKeyCta;
