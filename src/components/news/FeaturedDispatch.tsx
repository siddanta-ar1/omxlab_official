import Link from 'next/link';
import { toIsoDate } from '@/lib/registry-date';

/**
 * The canon lead dispatch, reproduced verbatim from the hero widget
 * (release code, title) and given the large-headline treatment the
 * registry's top slot calls for.
 *
 * Signal Sky is spent exactly once on this page: the italic "deterministic
 * accuracy" below. Nowhere else on /news carries the literal
 * accent-mark rule.
 */
export function FeaturedDispatch() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto border-l border-r border-grid-hairline">
        <div className="p-space-md sm:p-space-lg lg:p-space-xl">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <span className="w-2.5 h-2.5 bg-text-primary shrink-0" aria-hidden="true" />
            <span className="text-label-code text-text-muted uppercase tracking-[0.2em]">
              SYSTEM RELEASE · 03.14
            </span>
            <span className="text-text-muted" aria-hidden="true">
              ·
            </span>
            <time
              dateTime={toIsoDate('02 SEP 2026')}
              className="text-label-code text-text-muted"
            >
              02 SEP 2026
            </time>
          </div>

          <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-[-0.025em] leading-[0.98] max-w-4xl">
            Introducing Helios: Autonomous Verification Matrix
          </h2>

          <p className="text-body-lead text-on-surface-variant mt-space-lg max-w-2xl">
            Helios MOD_01 ships its autonomous verification matrix to general
            availability, closing the gap between biometric capture and
            credential issuance without a manual review stage. Sub-80ms
            cryptographic checks now run continuously against the ISO
            30107-3 liveness baseline, holding{' '}
            <em className="accent-mark">deterministic accuracy</em>{' '}
            across every module in the registry.
          </p>

          <Link href="/products" className="lab-link text-cta-button mt-space-lg inline-flex">
            Read the full release <span className="lab-link-glyph">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDispatch;
