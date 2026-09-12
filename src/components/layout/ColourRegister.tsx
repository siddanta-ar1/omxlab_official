/* ---------------------------------------------------------------------------
   ColourRegister

   The brand's own colour ramp, reproduced as a printed register strip at the
   foot of the page — the same two families, in the same order, as the OMX Lab
   palette sheet. A print register is the mark a press leaves to prove the
   plates were aligned, which is exactly what this is: proof that the page and
   the brand document are running off the same plate.

   It is decoration with a job, and the one place the full ramp is allowed to
   appear at once. Everywhere else the palette stays rationed.
   --------------------------------------------------------------------------- */

const WARM = [
  'bg-brand-lilac',
  'bg-brand-mauve',
  'bg-brand-rose',
  'bg-brand-blush',
  'bg-brand-salmon',
  'bg-brand-peach',
  'bg-brand-coral',
  'bg-brand-orange',
];

const COOL = [
  'bg-brand-abyss',
  'bg-brand-pine',
  'bg-brand-teal-deep',
  'bg-brand-sage-teal',
  'bg-brand-sage',
  'bg-brand-pale-sage',
  'bg-brand-mist',
  'bg-brand-sky',
  'bg-brand-aqua',
  'bg-brand-teal',
];

export function ColourRegister() {
  return (
    <div
      className="w-full border-t border-grid-hairline"
      aria-hidden="true"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-md">
        <div className="flex items-center justify-between gap-space-md">
          <span className="text-micro-eyebrow uppercase text-text-muted shrink-0 hidden sm:block">
            COLOUR REGISTER
          </span>

          {/* Two families, flush, separated by a single rule — no gaps, in
              keeping with the rest of the page. */}
          <div className="flex h-3 flex-1 min-w-0">
            {WARM.map((c) => (
              <span key={c} className={`flex-1 ${c}`} />
            ))}
            <span className="w-px bg-paper-white shrink-0" />
            {COOL.map((c) => (
              <span key={c} className={`flex-1 ${c}`} />
            ))}
          </div>

          <span className="text-micro-eyebrow uppercase text-text-muted shrink-0 hidden sm:block tabular-nums">
            18 / 18
          </span>
        </div>
      </div>
    </div>
  );
}

export default ColourRegister;
