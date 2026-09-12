export function DispatchHeader() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-2xl">
        <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-sm">
          DISPATCH REGISTRY
        </span>
        <h1 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-[-0.025em] leading-[0.98] max-w-3xl">
          Every release, logged in sequence.
        </h1>
        <p className="text-body-lead text-on-surface-variant mt-space-md max-w-2xl">
          System releases, research findings, partnership disclosures, and
          facility updates — filed as they clear internal review, newest
          entry first.
        </p>
      </div>
    </section>
  );
}

export default DispatchHeader;
