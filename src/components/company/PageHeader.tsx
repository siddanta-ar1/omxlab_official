export function PageHeader() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">
          INSTITUTIONAL PROFILE
        </span>
        <h1 className="text-headline-xl-mobile md:text-headline-xl text-text-primary max-w-4xl">
          OMX Lab
        </h1>
        <p className="mt-space-md max-w-2xl text-body-lead text-on-surface-variant">
          The facilities, leadership, and governance record behind every system we
          ship — a technology and research laboratory, audited end to end.
        </p>
      </div>
    </section>
  );
}

export default PageHeader;
