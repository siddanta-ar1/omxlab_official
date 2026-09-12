export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center border-b border-grid-hairline">
      <div className="w-full px-margin-mobile md:px-margin py-space-3xl">
        <p className="text-micro-eyebrow uppercase text-text-muted">
          CALIBRATION: NODE_ACTIVE
        </p>
        <div className="mt-space-lg h-px w-full bg-grid-hairline" />
        <div className="mt-space-lg halftone-strip h-6 w-full" />
      </div>
    </div>
  );
}
