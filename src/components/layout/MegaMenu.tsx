'use client';

import Link from 'next/link';
import type { MenuColumn } from '@/components/layout/nav-data';

/* ---------------------------------------------------------------------------
   MegaMenu — the skirted drawer

   DESIGN.md §7.2 describes the panel: welded to the header bar with a square
   top edge, rounded at the bottom, divided internally by vertical rules, and
   floating on the single shadow the system permits.

   §12 calls the reference implementation "the most significant a11y defect"
   on that site: hover-only, no aria-expanded, no aria-haspopup, no Escape, no
   focus-open, and sub-links that stay in the tab order while invisible — so a
   keyboard user tabs into links they cannot see.

   This one fixes all of that. The panel is removed from the DOM when closed
   (so nothing invisible is focusable), the trigger carries the full ARIA
   contract, and opening works from hover, click and keyboard alike. The
   row hover choreography — an arrow sliding in from the left while the label
   steps aside to make room — is reproduced as specified.
   --------------------------------------------------------------------------- */

type MegaMenuProps = {
  id: string;
  columns: MenuColumn[];
  onNavigate: () => void;
};

export function MegaMenu({ id, columns, onNavigate }: MegaMenuProps) {
  return (
    <div
      id={id}
      className="absolute left-0 right-0 top-[49px] z-40 bg-paper-white
                 border-b border-x border-nav-hairline border-t-0
                 rounded-b-lg mega-menu-veil"
    >
      <div className="max-w-[1600px] mx-auto flex flex-nowrap divide-x divide-grid-hairline overflow-x-auto">
        {columns.map((column) => (
          <div
            key={column.eyebrow}
            className={
              column.feature
                ? 'w-[29rem] shrink-0 p-space-lg'
                : 'min-w-[14rem] flex-1 p-space-lg bg-studio-grey'
            }
          >
            <span className="text-micro-eyebrow uppercase text-text-muted block mb-space-md">
              {column.eyebrow}
            </span>

            <ul className="flex flex-col">
              {column.links.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="group/link relative flex items-start gap-space-sm
                               px-space-sm py-space-sm -mx-space-sm
                               transition-colors duration-300
                               hover:bg-studio-grey focus-visible:bg-studio-grey"
                  >
                    {/* The arrow parked off the left, which slides in and
                        pushes the row's content aside. */}
                    <span
                      aria-hidden="true"
                      className="absolute left-space-sm top-space-sm -translate-x-10 opacity-0
                                 text-text-primary will-change-transform
                                 transition-all duration-300 delay-[50ms]
                                 group-hover/link:translate-x-0 group-hover/link:opacity-100
                                 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100
                                 motion-reduce:transition-none"
                    >
                      →
                    </span>

                    {link.swatch && (
                      <span
                        aria-hidden="true"
                        className={`mt-[5px] w-2.5 h-2.5 shrink-0 will-change-transform
                                    transition-transform duration-300
                                    group-hover/link:translate-x-8
                                    group-focus-visible/link:translate-x-8
                                    motion-reduce:transition-none
                                    motion-reduce:group-hover/link:translate-x-0
                                    ${link.swatch}`}
                      />
                    )}

                    <span
                      className="flex flex-col min-w-0 will-change-transform
                                 transition-transform duration-300
                                 group-hover/link:translate-x-8
                                 group-focus-visible/link:translate-x-8
                                 motion-reduce:transition-none
                                 motion-reduce:group-hover/link:translate-x-0"
                    >
                      <span className="flex items-center gap-space-sm">
                        <span className="text-body-default text-text-primary font-medium">
                          {link.label}
                        </span>
                        {link.code && (
                          <span className="text-label-code uppercase text-text-muted">
                            {link.code}
                          </span>
                        )}
                      </span>
                      {link.detail && (
                        <span className="text-body-compact text-on-surface-variant">
                          {link.detail}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
