/**
 * Page header band. Full-width, single eyebrow + h1 + lead line, matched to
 * the same left-aligned rhythm as the homepage hero but without the split
 * illustration well -- this is a secondary page, so the headline sits at
 * headline-xl rather than the homepage's display-hero scale.
 */
export function DeveloperHeader() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="w-2.5 h-2.5 bg-swatch-sage" aria-hidden="true" />
          <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-[0.25em]">
            DEVELOPER PLATFORM
          </span>
        </div>
        <h1 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-[-0.02em] leading-[0.98] max-w-4xl">
          Direct, versioned access to every module.
        </h1>
        <p className="text-body-lead text-on-surface-variant mt-space-md max-w-2xl">
          The OMX Lab API surfaces Helios verification, Foundry training orchestration,
          Studio evaluation, Rune synthesis, and Sage Core inference as five deterministic,
          rate-limited endpoints families -- instrumented from first request to production.
        </p>
      </div>
    </section>
  );
}

export default DeveloperHeader;
