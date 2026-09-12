import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center border-b border-grid-hairline">
      <div className="w-full px-margin-mobile md:px-margin py-space-3xl">
        <p className="text-micro-eyebrow uppercase text-text-muted">
          SYS_REF // REGISTRY MISS 404
        </p>
        <h1 className="mt-space-md text-headline-xl-mobile md:text-headline-xl text-text-primary">
          No specimen at this address.
        </h1>
        <p className="mt-space-md max-w-xl text-body-lead text-on-surface-variant">
          The requested registry entry is not present in this facility. Return to
          the index and re-enter the matrix.
        </p>
        <Link
          href="/"
          className="lab-link mt-space-xl text-cta-button uppercase"
        >
          Return to index
          <span className="lab-link-glyph" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
