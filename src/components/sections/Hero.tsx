import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { SpecimenPlate } from '@/components/common/SpecimenPlate';

/**
 * Split 70/30 hero. Left column carries the narrative headline and the
 * technical illustration well; the right rail stacks the mission statement,
 * the metric ledger, the instrument spec card, and the dispatch
 * registry widget behind a hairline divider.
 *
 * The accent is spent exactly once in this section, per the
 * design system's surgical-scarcity rule, on the italic "reality." in the
 * headline. The source markup repeats that same accent value on the
 * GEO_LAT pulse dot and on the dispatch-card hover state — both have been
 * recolored to text-on-surface-variant / bg-on-surface-variant here.
 */

type Metric = {
  label: string;
  value: string;
};

const METRICS: Metric[] = [
  { label: 'Inference Reliability', value: '99.98%' },
  { label: 'Compute Efficiency', value: '14.2x' },
  { label: 'Deterministic Latency', value: '< 12ms' },
];

// Hairline alignment overlay: a decorative 4x3 grid drawn over the hero
// illustration with divider rules only, no content.
const OVERLAY_CELLS = Array.from({ length: 12 });

export function Hero() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto border-l border-r border-grid-hairline">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Column (70%) */}
          <div className="w-full lg:w-[70%] flex flex-col justify-between p-space-md sm:p-space-lg lg:p-space-xl">
            <div className="pt-space-md lg:pt-space-xl">
              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="w-2.5 h-2.5 bg-swatch-sage" />
                <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-[0.25em]">
                  OMX LAB // SYSTEMS ARCHITECTURE V4.2
                </span>
              </div>
              <h1 className="text-headline-xl-mobile sm:text-headline-xl sm:text-[68px] lg:text-display-hero-mobile sm:text-display-hero text-text-primary tracking-[-0.03em] leading-[0.92] max-w-4xl">
                Frontier AI infrastructure for
                <br />
                <span className="accent-mark font-semibold">reality.</span>
              </h1>
            </div>

            {/* Technical hero illustration well with hairline rules & coordinates */}
            <div className="mt-space-2xl relative w-full aspect-[16/9] border border-grid-hairline bg-studio-grey overflow-hidden group">
              {/* Registration corner marks */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-text-primary z-20" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-text-primary z-20" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-text-primary z-20" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-text-primary z-20" />

              {/* Technical coordinate overlays */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-space-sm bg-paper-white/95 px-2.5 py-1 border border-grid-hairline text-[10px] text-on-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant omx-pulse-slow" />
                <span>GEO_LAT: 27.7172° N · LON: 85.3240° E</span>
                <span className="text-text-muted">|</span>
                <span>CALIBRATION: NODE_ACTIVE</span>
              </div>
              <div className="absolute bottom-3 right-3 z-20 bg-paper-white/95 px-2.5 py-1 border border-grid-hairline text-[10px] text-text-muted">
                SYS_REF // MATRIX 04.981A
              </div>

              {/* A plotted specimen plate rather than photography: the system
                  draws with hairlines, and a chart recording carries the
                  laboratory register the panel is asking for. */}
              <SpecimenPlate seed={41} variant="trace" className="border-0" />

              {/* Hairline alignment overlay grid */}
              <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-3 divide-x divide-y divide-grid-hairline/40">
                {OVERLAY_CELLS.map((_, i) => (
                  <div key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Rail (30%) */}
          <div className="w-full lg:w-[30%] bg-studio-grey border-t lg:border-t-0 lg:border-l border-grid-hairline p-space-lg lg:p-space-xl flex flex-col justify-between">
            <div className="flex flex-col gap-space-lg">
              <div className="border-b border-grid-hairline pb-space-md">
                <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
                  01 / ARCHITECTURAL MISSION
                </span>
                <p className="text-body-lead text-text-primary tracking-[-0.01em]">
                  Building foundational models, high-throughput training platforms, and applied intelligence for the
                  physical world.
                </p>
              </div>

              {/* Metric badges */}
              <div className="flex flex-col divide-y divide-grid-hairline border-y border-grid-hairline">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="py-space-md flex items-center justify-between">
                    <span className="text-body-compact text-on-surface-variant">{metric.label}</span>
                    <span className="text-headline-md text-text-primary font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Stencil micro-spec */}
              <div className="p-space-md bg-paper-white border border-grid-hairline">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="text-label-code text-on-surface font-semibold">INST. SPEC 08</span>
                  <span className="text-label-code text-[10px] text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    ONLINE
                  </span>
                </div>
                <p className="text-body-compact text-on-surface-variant text-[12px]">
                  Deterministic latency guarantees enforced via strict hardware L1 register partitioning.
                </p>
              </div>
            </div>

            {/* Featured news mini-card widget with stacked hairline arrows */}
            <div className="mt-space-xl pt-space-lg border-t border-grid-hairline">
              <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-sm">
                DISPATCH REGISTRY
              </span>
              <div className="flex border border-grid-hairline bg-paper-white group hover:border-on-surface transition-colors duration-200">
                <div className="w-20 h-20 shrink-0 border-r border-grid-hairline overflow-hidden halftone-strip" aria-hidden="true" />
                <div className="flex-1 p-space-sm flex flex-col justify-center">
                  <span className="text-label-code text-[10px] text-text-muted">SYSTEM RELEASE · 03.14</span>
                  <a
                    className="text-body-compact font-medium text-text-primary group-hover:text-on-surface-variant transition-colors line-clamp-2"
                    href="#helios"
                  >
                    Introducing Helios: Autonomous Verification Matrix
                  </a>
                </div>
                <div className="w-10 flex flex-col border-l border-grid-hairline divide-y divide-grid-hairline shrink-0">
                  <button
                    aria-label="Previous dispatch"
                    className="h-10 flex items-center justify-center text-text-primary hover:bg-studio-grey transition-colors"
                    type="button"
                  >
                    <MdArrowUpward size={16} aria-hidden="true" />
                  </button>
                  <button
                    aria-label="Next dispatch"
                    className="h-10 flex items-center justify-center text-text-primary hover:bg-studio-grey transition-colors"
                    type="button"
                  >
                    <MdArrowDownward size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
