/**
 * Five stacked detail rows, one per module. Bodies are reused verbatim
 * from the landing page's BentoConstellation section; spec bullets are
 * reused verbatim from the landing page's StackIndex section where that
 * section covers the module (Helios, Foundry, OMX Studio, Rune Agent).
 * StackIndex does not cover Sage Core, so its three bullets are built
 * outward from its own canon badge ("CONTINUOUS TENSOR LATENT") in the
 * same voice.
 */

type ModuleDetail = {
  name: string;
  code: string;
  swatchClassName: string;
  title: string;
  body: string;
  specs: [string, string, string];
};

const MODULE_DETAILS: ModuleDetail[] = [
  {
    name: 'HELIOS',
    code: 'MOD_01',
    swatchClassName: 'bg-swatch-helios',
    title: 'Identity & Verification',
    body: 'High-throughput biometric and credential authentication engine with sub-80ms cryptographic verification matrices.',
    specs: ['PASSIVE LIVENESS LEVEL 2', 'EAL6+ SECURE ENCLAVE', 'ZERO LATENT RESIDUE'],
  },
  {
    name: 'FOUNDRY',
    code: 'MOD_02',
    swatchClassName: 'bg-swatch-foundry',
    title: 'Distributed Training',
    body: 'Scalable multi-GPU orchestration fabric delivering linear throughput scaling up to 16,384 discrete accelerator clusters.',
    specs: ['ROCE V2 NON-BLOCKING', 'CHECKPOINT-LESS RESTORE', 'BF16 / FP8 NATIVE'],
  },
  {
    name: 'OMX STUDIO',
    code: 'MOD_03',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    title: 'Model Evaluation Hub',
    body: 'Interactive playground and synthetic benchmarking suite for adversarial testing and edge degradation probing.',
    specs: ['TOKEN ATTENTION PROFILES', 'ADVERSARIAL RED-TEAMING', 'SYNTHETIC NOISE INJECTION'],
  },
  {
    name: 'RUNE AGENT',
    code: 'MOD_04',
    swatchClassName: 'bg-swatch-rune',
    title: 'Autonomous Code Synthesis',
    body: 'Self-correcting formal syntax generation engine designed to audit, refactor, and deploy low-level Rust and CUDA kernel codebases directly within sandboxed virtual boundaries.',
    specs: ['FORMAL VERIFICATION KERNELS', 'ISOLATED MICROVM PODS', 'DETERMINISTIC REPRODUCIBILITY'],
  },
  {
    name: 'SAGE CORE',
    code: 'MOD_05',
    swatchClassName: 'bg-swatch-sage',
    title: 'Foundation Multimodal Model',
    body: 'Ground-truth physical domain neural reasoning matrix operating on continuous spatio-temporal representations, spatial audio, and dense sensory telemetry.',
    specs: ['CONTINUOUS TENSOR LATENT', 'MULTIMODAL FUSION KERNEL', 'DENSE SENSORY TELEMETRY'],
  },
];

export function ModuleDetailRows() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            MODULE DETAIL
          </span>
          <h2 className="text-headline-lg text-text-primary">
            Specification by module.
          </h2>
        </div>

        <div className="border-y border-grid-hairline divide-y divide-grid-hairline">
          {MODULE_DETAILS.map((module) => (
            <div
              key={module.code}
              className="py-space-xl px-space-md lg:px-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md"
            >
              <div className="md:col-span-3 flex items-center md:flex-col md:items-start gap-space-sm md:gap-space-xs">
                <span className={`w-3 h-3 shrink-0 ${module.swatchClassName}`} aria-hidden="true" />
                <div className="flex flex-col leading-tight">
                  <span className="text-body-compact text-text-primary font-semibold uppercase tracking-wide">
                    {module.name}
                  </span>
                  <span className="text-label-code text-text-muted uppercase tracking-[0.2em]">
                    {module.code}
                  </span>
                </div>
              </div>

              <div className="md:col-span-9 flex flex-col gap-space-md">
                <h3 className="text-headline-md text-text-primary">{module.title}</h3>
                <p className="text-body-default text-on-surface-variant max-w-2xl">
                  {module.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {module.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-studio-grey border border-grid-hairline text-[11px] uppercase tracking-wider text-text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModuleDetailRows;
