/**
 * Instrument catalogue. Names are canon (footer's "02 / Instruments"
 * column): OMX Synth 4, Spectra Core, Flow Array 200, Calibrator Pro,
 * LIMS Bridge. Model codes, descriptions and spec figures are invented
 * outward from that canon, in the same registry voice as the rest of
 * the page. Desktop 5-col hairline matrix folds to 2-col tablet, 1-col
 * mobile rail, per the design system's responsive rule.
 */

type Instrument = {
  name: string;
  modelCode: string;
  description: string;
  specFigure: string;
};

const INSTRUMENTS: Instrument[] = [
  {
    name: 'OMX Synth 4',
    modelCode: 'INST_04A',
    description:
      'Solid-state synthesis unit for calibrated biometric and credential test artifacts.',
    specFigure: '0.02mm TOLERANCE',
  },
  {
    name: 'Spectra Core',
    modelCode: 'INST_07C',
    description:
      'Multi-band spectral analysis core for model input telemetry capture.',
    specFigure: '340-980nm RANGE',
  },
  {
    name: 'Flow Array 200',
    modelCode: 'INST_12F',
    description:
      '200-channel parallel data flow array for distributed training ingest.',
    specFigure: '200 CHANNELS',
  },
  {
    name: 'Calibrator Pro',
    modelCode: 'INST_03B',
    description:
      'Reference calibration bench for deterministic latency verification.',
    specFigure: '±0.4ms DRIFT',
  },
  {
    name: 'LIMS Bridge',
    modelCode: 'INST_09L',
    description:
      'Laboratory information management system bridge for registry data continuity.',
    specFigure: '10Gb/s SYNC',
  },
];

export function InstrumentCatalogue() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            02 / INSTRUMENT CATALOGUE
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
            The hardware behind the register.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-grid-hairline bg-paper-white">
          {INSTRUMENTS.map((instrument) => (
            <div
              key={instrument.modelCode}
              className="p-space-lg flex flex-col justify-between gap-space-lg border-b border-r border-grid-hairline transition-colors duration-100 hover:bg-studio-grey"
            >
              <div>
                <span className="text-label-code text-text-muted uppercase tracking-[0.2em] block mb-space-xs">
                  {instrument.modelCode}
                </span>
                <h3 className="text-body-lead text-text-primary font-semibold mb-space-xs">
                  {instrument.name}
                </h3>
                <p className="text-body-compact text-on-surface-variant">
                  {instrument.description}
                </p>
              </div>
              <div className="pt-space-sm border-t border-grid-hairline">
                <span className="text-[11px] text-text-primary uppercase tracking-wider tabular-nums">
                  {instrument.specFigure}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstrumentCatalogue;
