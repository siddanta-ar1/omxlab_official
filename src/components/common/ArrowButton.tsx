import Link from 'next/link';
import type { ReactNode } from 'react';

/* ---------------------------------------------------------------------------
   ArrowButton — the arrow shuffle

   DESIGN.md §7.12 calls this the system's signature interaction: an arrow
   parked off the left edge slides in while the label steps aside to make room
   and the trailing arrow exits right. Staggered delays (75ms on the label,
   100ms on the incoming arrow) make the arrow appear to *push* the text.

   Three rules kept from the spec:
   - all three parts run at 300ms, the house tempo
   - everything is a transform, tagged will-change, so no layout is animated
   - the offsets are CSS variables so the same component serves a wide CTA and
     a tight inline link without re-tuning the classes

   The whole choreography is CSS. Under prefers-reduced-motion every part is
   pinned to its resting state — no transition, and neither arrow's hover
   target overrides its default — so the button reads exactly the same
   hovered or not: one arrow, no shuffle.
   --------------------------------------------------------------------------- */

type Variant = 'primary' | 'secondary' | 'onDark';

type ArrowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  'aria-label'?: string;
};

const VARIANTS: Record<Variant, string> = {
  // Abyss carrying white at 9.72:1 — the one solid action colour.
  primary:
    'bg-action text-on-primary rounded-lg hover:bg-action-hover',
  // Hairline on paper; the ground fills on hover rather than the border moving.
  secondary:
    'bg-paper-white text-text-primary border border-border-subtle rounded hover:bg-studio-grey hover:border-text-primary',
  // Sits inside a conversion band, so it inverts.
  onDark:
    'bg-paper-white text-text-primary rounded-lg hover:bg-studio-grey',
};

export function ArrowButton({
  href,
  children,
  variant = 'primary',
  className = '',
  'aria-label': ariaLabel,
}: ArrowButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center justify-center overflow-hidden
                  px-5 py-[10px] text-cta-button uppercase
                  transition-colors duration-300 active:scale-[0.99]
                  ${VARIANTS[variant]} ${className}`}
    >
      {/* Incoming arrow, parked off the left edge. Under reduced motion it
          must stay parked on hover too, or it and the trailing arrow (which
          is pinned visible below) would show at once. */}
      <span
        aria-hidden="true"
        className="absolute left-4 -translate-x-10 opacity-0 will-change-transform
                   transition-all duration-300 delay-100
                   group-hover:translate-x-0 group-hover:opacity-100
                   motion-reduce:transition-none
                   motion-reduce:group-hover:-translate-x-10 motion-reduce:group-hover:opacity-0"
      >
        →
      </span>

      {/* The label steps aside to make room. */}
      <span
        className="will-change-transform transition-transform duration-300 delay-75
                   group-hover:translate-x-3 motion-reduce:transition-none
                   motion-reduce:group-hover:translate-x-0"
      >
        {children}
      </span>

      {/* Trailing arrow exits right. */}
      <span
        aria-hidden="true"
        className="ml-2 will-change-transform transition-all duration-300
                   group-hover:translate-x-10 group-hover:opacity-0
                   motion-reduce:transition-none
                   motion-reduce:group-hover:translate-x-0
                   motion-reduce:group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}

export default ArrowButton;
