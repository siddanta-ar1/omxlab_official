/* Designed loading, per DESIGN.md §8.3: reserve the boxes at the right ratio
   so nothing shifts when the content lands. The skeleton is a studio-grey fill
   breathing on the system's own pulse, not a shimmer — this system has no
   gradients. */
export default function Loading() {
  return (
    <div className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <p className="text-micro-eyebrow uppercase text-text-muted">
          CALIBRATION: NODE_ACTIVE
        </p>

        {/* Headline block */}
        <div className="mt-space-lg space-y-space-sm max-w-3xl">
          <div className="omx-skeleton h-10 w-4/5" />
          <div className="omx-skeleton h-10 w-2/5" />
        </div>

        {/* A 16:9 plate well, reserved at its true ratio so the layout holds */}
        <div className="mt-space-2xl border border-grid-hairline">
          <div className="omx-skeleton w-full aspect-[16/9]" />
        </div>

        {/* Three hairline cells */}
        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-3 border-t border-l border-grid-hairline">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-r border-b border-grid-hairline p-space-lg">
              <div className="omx-skeleton h-3 w-1/3" />
              <div className="omx-skeleton mt-space-sm h-6 w-3/4" />
              <div className="omx-skeleton mt-space-sm h-3 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
