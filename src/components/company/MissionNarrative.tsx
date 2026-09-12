/**
 * The one place on the site with room for a sentence of actual conviction.
 * Kept instrumental, not sentimental -- and the single permitted Signal Sky
 * accent for this page is spent here, on the italic "result".
 */
export function MissionNarrative() {
  return (
    <section className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid-hairline">
          <div className="pb-space-xl lg:pb-0 lg:pr-space-2xl flex items-center">
            <p className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
              Calibration is not a value we hold. It is a{' '}
              <span className="accent-mark">result</span> we publish.
            </p>
          </div>
          <div className="pt-space-xl lg:pt-0 lg:pl-space-2xl flex flex-col justify-center">
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-sm">
              01 / MISSION
            </span>
            <p className="text-body-default text-on-surface-variant max-w-lg">
              OMX Lab operates on evidence rather than
              narrative. Every module leaving the laboratory carries a registry code, a
              benchmark trail, and a named reviewer. Deployment is granted on
              measurement, not on confidence, and every measurement stays open to
              audit for the life of the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionNarrative;
