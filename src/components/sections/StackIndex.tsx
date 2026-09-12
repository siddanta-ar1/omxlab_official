import Link from 'next/link';
import { SpecimenPlate } from '@/components/common/SpecimenPlate';

type RailItem = {
  href: string;
  swatchClassName: string;
  label: string;
};

const railItems: RailItem[] = [
  { href: '#helios', swatchClassName: 'bg-swatch-helios', label: '01 / Helios' },
  { href: '#foundry', swatchClassName: 'bg-swatch-foundry', label: '02 / Foundry' },
  { href: '#studio', swatchClassName: 'bg-swatch-studio border border-grid-hairline', label: '03 / Studio' },
  { href: '#rune', swatchClassName: 'bg-swatch-rune', label: '04 / Rune' },
  { href: '#applied-ai', swatchClassName: 'bg-swatch-sage', label: '05 / Applied AI' },
];

type Product = {
  id: string;
  swatchClassName: string;
  code: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  body: string;
  specs: [string, string, string];
};

const products: Product[] = [
  {
    id: 'helios',
    swatchClassName: 'bg-swatch-helios',
    code: 'PRODUCT 01',
    title: 'Helios Identity Fabric',
    ctaLabel: 'Full documentation',
    ctaHref: '/developers',
    body: 'Deterministic, zero-trust biometric verification matrix engineered for sovereign identification registries and automated transaction security.',
    specs: ['PASSIVE LIVENESS LEVEL 2', 'EAL6+ SECURE ENCLAVE', 'ZERO LATENT RESIDUE'],
  },
  {
    id: 'foundry',
    swatchClassName: 'bg-swatch-foundry',
    code: 'PRODUCT 02',
    title: 'Foundry Parallel Matrix',
    ctaLabel: 'Cluster benchmarks',
    ctaHref: '/products',
    body: 'Continuous model distillation and distributed optimizer infrastructure with hardware-level memory pooling and tensor parallelism.',
    specs: ['ROCE V2 NON-BLOCKING', 'CHECKPOINT-LESS RESTORE', 'BF16 / FP8 NATIVE'],
  },
  {
    id: 'studio',
    swatchClassName: 'bg-swatch-studio border border-grid-hairline',
    code: 'PRODUCT 03',
    title: 'OMX Studio Workspace',
    ctaLabel: 'Launch sandbox',
    ctaHref: '/products',
    body: 'Deep observability workbench allowing laboratory teams to slice model token activations, measure drift coefficients, and orchestrate A/B runtime probes.',
    specs: ['TOKEN ATTENTION PROFILES', 'ADVERSARIAL RED-TEAMING', 'SYNTHETIC NOISE INJECTION'],
  },
  {
    id: 'rune',
    swatchClassName: 'bg-swatch-rune',
    code: 'PRODUCT 04',
    title: 'RUNE Autonomous Engineer',
    ctaLabel: 'API documentation',
    ctaHref: '/developers',
    body: 'Deterministic coding system executing automated integration loops, unit verification proofs, and zero-overhead hardware compiler passes.',
    specs: ['FORMAL VERIFICATION KERNELS', 'ISOLATED MICROVM PODS', 'DETERMINISTIC REPRODUCIBILITY'],
  },
];

export function StackIndex() {
  return (
    <section className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-0">
          {/* Sticky index rail: plain in-page anchors, not a tab switcher. */}
          <div className="hidden md:flex md:col-span-2 flex-col justify-end sticky bottom-8 self-end pr-space-lg pb-space-lg">
            {/* Flat and square: the system allows no shadow on the page canvas
                and no radius on structural containers. */}
            <div className="border border-grid-hairline bg-paper-white p-space-sm flex flex-col gap-2">
              <span className="text-micro-eyebrow text-text-muted uppercase tracking-wider px-2 py-1">
                STACK INDEX
              </span>
              {railItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 p-2 rounded hover:bg-studio-grey text-on-surface-variant hover:text-text-primary transition-colors text-body-compact font-medium"
                >
                  <span className={`w-2.5 h-2.5 ${item.swatchClassName}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product entries, stacked and divided by hairlines. */}
          <div className="col-span-1 md:col-span-8 md:border-x border-grid-hairline divide-y divide-grid-hairline">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className="py-space-2xl first:pt-0 px-space-md lg:px-space-2xl flex flex-col gap-space-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className={`w-3 h-3 ${product.swatchClassName}`} aria-hidden="true" />
                    <span className="text-label-code text-text-muted uppercase tracking-[0.2em]">
                      {product.code}
                    </span>
                    <h3 className="text-headline-lg text-text-primary">{product.title}</h3>
                  </div>
                  <div className="hidden lg:block">
                    <Link href={product.ctaHref} className="lab-link text-cta-button">
                      {product.ctaLabel}
                      <span className="lab-link-glyph" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="text-body-lead text-on-surface-variant max-w-2xl">{product.body}</p>
                <SpecimenPlate
                  seed={100 + index * 7}
                  variant={index % 2 === 0 ? 'trace' : 'matrix'}
                  code={`PLATE ${String(index + 1).padStart(2, '0')} / ${product.title}`}
                  reading={product.specs[0]}
                />
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-studio-grey border border-grid-hairline text-[11px] uppercase tracking-wider text-text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackIndex;
