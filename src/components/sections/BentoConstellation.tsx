interface BentoModule {
  name: string;
  code: string;
  title: string;
  body: string;
  badge: string;
  swatch: string;
  href: string;
}

const MODULES: BentoModule[] = [
  {
    name: "HELIOS",
    code: "MOD_01",
    title: "Identity & Verification",
    body: "High-throughput biometric and credential authentication engine with sub-80ms cryptographic verification matrices.",
    badge: "ISO 30107-3 CERTIFIED",
    swatch: "bg-swatch-helios",
    href: "/products",
  },
  {
    name: "FOUNDRY",
    code: "MOD_02",
    title: "Distributed Training",
    body: "Scalable multi-GPU orchestration fabric delivering linear throughput scaling up to 16,384 discrete accelerator clusters.",
    badge: "RDMA LINE-RATE FABRIC",
    swatch: "bg-swatch-foundry",
    href: "/products",
  },
  {
    name: "OMX STUDIO",
    code: "MOD_03",
    title: "Model Evaluation Hub",
    body: "Interactive playground and synthetic benchmarking suite for adversarial testing and edge degradation probing.",
    badge: "LIVE TELEMETRY TRACE",
    swatch: "bg-swatch-studio",
    href: "/products",
  },
  {
    name: "RUNE AGENT",
    code: "MOD_04",
    title: "Autonomous Code Synthesis",
    body: "Self-correcting formal syntax generation engine designed to audit, refactor, and deploy low-level Rust and CUDA kernel codebases directly within sandboxed virtual boundaries.",
    badge: "SANDBOXED LLVM VERIFIER",
    swatch: "bg-swatch-rune",
    href: "/products",
  },
  {
    name: "SAGE CORE",
    code: "MOD_05",
    title: "Foundation Multimodal Model",
    body: "Ground-truth physical domain neural reasoning matrix operating on continuous spatio-temporal representations, spatial audio, and dense sensory telemetry.",
    badge: "CONTINUOUS TENSOR LATENT",
    swatch: "bg-swatch-sage",
    href: "/products",
  },
];

// Structural layout per cell, kept separate from content so MODULES stays a
// pure content array. Index-aligned with MODULES.
const CELL_LAYOUT: {
  colSpan: string;
  borders: string;
  corner?: string;
}[] = [
  {
    colSpan: "lg:col-span-2",
    borders: "border-b md:border-r border-grid-hairline",
    corner: "-top-[2px] -left-[2px]",
  },
  {
    colSpan: "lg:col-span-2",
    borders: "border-b lg:border-r border-grid-hairline",
  },
  {
    colSpan: "lg:col-span-2",
    borders: "border-b md:border-r lg:border-r-0 border-grid-hairline",
    corner: "-top-[2px] -right-[2px]",
  },
  {
    colSpan: "lg:col-span-3",
    borders: "border-b lg:border-r lg:border-b-0 border-grid-hairline",
    corner: "-bottom-[2px] -left-[2px]",
  },
  {
    colSpan: "lg:col-span-3",
    borders: "border-grid-hairline",
    corner: "-bottom-[2px] -right-[2px]",
  },
];

export function BentoConstellation() {
  return (
    <section className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            THE BENTO CONSTELLATION
          </span>
          <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary font-extrabold tracking-tight leading-none">
            Unified intelligent systems.
          </h2>
          <p className="text-body-lead text-on-surface-variant mt-space-sm">
            Interlocking computational primitives engineered for deterministic performance.
          </p>
        </div>

        {/* Bento layout with sharp 0px corners, 1px lines, corner registration marks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 border border-grid-hairline bg-paper-white">
          {MODULES.map((module, index) => {
            const layout = CELL_LAYOUT[index];
            return (
              // The animated wrapper IS the grid item, so it carries the
              // column span; the cell inside keeps the hairlines and fills it.
              // Tiles arrive staggered -- the constellation's whole trick.
              <div
                key={module.code}
                className={layout.colSpan}
                data-anim=""
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div
                  className={`h-full p-space-lg ${layout.borders} flex flex-col justify-between relative group hover:bg-studio-grey transition-colors duration-100`}
                >
                {layout.corner && (
                  <div
                    className={`absolute ${layout.corner} w-1.5 h-1.5 bg-text-primary z-10`}
                    aria-hidden="true"
                  />
                )}
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-[10px] h-[10px] rounded-none ${module.swatch} ${
                          module.swatch === "bg-swatch-studio"
                            ? "border border-grid-hairline"
                            : ""
                        } shrink-0`}
                      />
                      <span className="text-label-code font-semibold tracking-wider text-text-primary uppercase">
                        {module.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-text-muted">{module.code}</span>
                  </div>
                  <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">
                    {module.title}
                  </h3>
                  <p className="text-body-compact text-on-surface-variant mb-space-md">
                    {module.body}
                  </p>
                </div>
                <div className="pt-space-md border-t border-grid-hairline flex items-center justify-between">
                  <span className="text-[10px] text-text-muted">{module.badge}</span>
                  <a className="lab-link text-cta-button" href={module.href}>
                    Explore <span className="lab-link-glyph">→</span>
                  </a>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BentoConstellation;
