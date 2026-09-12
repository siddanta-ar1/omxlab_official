import Link from 'next/link';

/* The press kit is a registry of physical assets, so it is listed the way the
   rest of the site lists specimens: a hairline matrix of coded rows. */

type KitItem = {
  code: string;
  label: string;
  detail: string;
  format: string;
};

const KIT_ITEMS: KitItem[] = [
  {
    code: 'KIT_01',
    label: 'Logo package',
    detail:
      'Primary mark, horizontal lockup and monochrome reversals at print and screen resolution.',
    format: 'SVG · EPS · PNG',
  },
  {
    code: 'KIT_02',
    label: 'Facility photography',
    detail:
      'Kathmandu studio interiors cleared for editorial reproduction with attribution.',
    format: 'TIFF · 300 DPI',
  },
  {
    code: 'KIT_03',
    label: 'Founder biography',
    detail:
      'Approved short-form and long-form biography for the founder of OMX Lab.',
    format: 'PDF · DOCX',
  },
  {
    code: 'KIT_04',
    label: 'Brand guidelines',
    detail:
      'Typographic scale, colour architecture and clear-space rules governing the mark.',
    format: 'PDF',
  },
];

export function PressKitBand() {
  return (
    <section
      data-anim=""
      className="w-full bg-studio-grey border-b border-grid-hairline"
      aria-labelledby="press-kit-heading"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-space-md mb-space-xl">
          <div>
            <span className="text-micro-eyebrow uppercase text-text-muted block mb-space-xs">
              PRESS KIT
            </span>
            <h2
              id="press-kit-heading"
              className="text-headline-lg-mobile md:text-headline-lg text-text-primary"
            >
              Reproduction assets.
            </h2>
          </div>
          <p className="text-body-default text-on-surface-variant max-w-md">
            Released under editorial licence. Attribution to OMX Instrumentation
            Labs AG is required on reproduction.
          </p>
        </div>

        <div className="border border-grid-hairline bg-paper-white divide-y divide-grid-hairline">
          {KIT_ITEMS.map((item) => (
            <Link
              key={item.code}
              href="/company"
              className="group flex flex-col md:flex-row md:items-center gap-space-xs md:gap-space-md
                         px-space-md py-space-md transition-colors duration-100 hover:bg-studio-grey"
            >
              <span className="text-label-code uppercase text-text-muted md:w-24 shrink-0">
                {item.code}
              </span>
              <span className="text-body-default font-medium text-text-primary md:w-56 shrink-0">
                {item.label}
              </span>
              <span className="text-body-compact text-on-surface-variant flex-1">
                {item.detail}
              </span>
              <span className="text-label-code uppercase text-text-muted md:w-36 shrink-0 md:text-right">
                {item.format}
              </span>
              <span
                className="text-cta-button text-text-primary shrink-0 transition-transform duration-[180ms] group-hover:translate-x-[3px]"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressKitBand;
