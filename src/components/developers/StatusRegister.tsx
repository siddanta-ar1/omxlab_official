/**
 * Five-module uptime strip. Dots use bg-primary rather than the single
 * permitted Signal Sky accent (already unspent on this page, but the
 * spec allows keeping it achromatic-adjacent here, matching the
 * "ONLINE" dot idiom already established in the homepage Hero).
 */
type ModuleStatus = {
  code: string;
  name: string;
  swatchClassName: string;
  uptime: string;
};

const MODULES: ModuleStatus[] = [
  { code: 'MOD_01', name: 'HELIOS', swatchClassName: 'bg-swatch-helios', uptime: '99.99%' },
  { code: 'MOD_02', name: 'FOUNDRY', swatchClassName: 'bg-swatch-foundry', uptime: '99.95%' },
  {
    code: 'MOD_03',
    name: 'OMX STUDIO',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    uptime: '99.97%',
  },
  { code: 'MOD_04', name: 'RUNE AGENT', swatchClassName: 'bg-swatch-rune', uptime: '99.92%' },
  { code: 'MOD_05', name: 'SAGE CORE', swatchClassName: 'bg-swatch-sage', uptime: '99.98%' },
];

export function StatusRegister() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey py-space-2xl lg:py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              STATUS REGISTER
            </span>
            <h2 className="text-headline-lg text-text-primary tracking-tight">
              Live across all five modules.
            </h2>
          </div>
          <span className="text-label-code text-text-muted">GET /v1/status</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-grid-hairline bg-paper-white">
          {MODULES.map((module) => (
            <div key={module.code} className="p-space-lg flex flex-col gap-space-md border-b border-r border-grid-hairline">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 shrink-0 ${module.swatchClassName}`} aria-hidden="true" />
                  <span className="text-label-code text-text-muted uppercase tracking-wider">
                    {module.code}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-label-code text-[10px] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  ONLINE
                </span>
              </div>
              <div>
                <p className="text-body-default text-text-primary font-medium">{module.name}</p>
                <p className="text-headline-md text-text-primary font-semibold mt-1">{module.uptime}</p>
                <p className="text-[11px] text-text-muted uppercase tracking-wider mt-1">30-day uptime</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatusRegister;
