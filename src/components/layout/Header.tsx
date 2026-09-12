'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdClose, MdExpandMore, MdMenu, MdPerson, MdSearch } from 'react-icons/md';
import { NAV_ITEMS } from '@/components/layout/nav-data';
import { MegaMenu } from '@/components/layout/MegaMenu';

export const Header = () => {
    const pathname = usePathname();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);

    // Close everything whenever the route changes. Adjusting state during
    // render is React's documented pattern for deriving from a changed value,
    // and costs no extra commit on navigation.
    const [navPathname, setNavPathname] = useState(pathname);
    if (navPathname !== pathname) {
        setNavPathname(pathname);
        setIsMobileNavOpen(false);
        setOpenMenu(null);
    }

    const closeMenu = useCallback(() => setOpenMenu(null), []);

    // Hover opens instantly but closes on a short delay, so crossing the gap
    // between the trigger and the panel does not dismiss it.
    const cancelClose = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
    const scheduleClose = () => {
        cancelClose();
        closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
    };
    useEffect(() => () => cancelClose(), []);

    // Escape closes the open drawer and returns focus to its trigger; a click
    // or a focus landing outside the nav closes it too.
    useEffect(() => {
        if (!openMenu && !isMobileNavOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return;
            if (openMenu) {
                const trigger = navRef.current?.querySelector<HTMLButtonElement>(
                    `[data-menu-trigger="${openMenu}"]`,
                );
                setOpenMenu(null);
                trigger?.focus();
            }
            setIsMobileNavOpen(false);
        };

        const onAway = (event: Event) => {
            if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onAway);
        document.addEventListener('focusin', onAway);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onAway);
            document.removeEventListener('focusin', onAway);
        };
    }, [openMenu, isMobileNavOpen]);

    const isItemActive = (href: string) =>
        pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-paper-white border-b border-nav-hairline">
            <div ref={navRef}>
                <div className="h-[49px] w-full flex items-stretch divide-x divide-nav-hairline">
                    <Link
                        href="/"
                        aria-label="OMX Lab, home"
                        className="flex items-center gap-space-sm px-space-md shrink-0 hover:bg-studio-grey transition-colors duration-300"
                    >
                        <Image
                            src="/logo-mark.svg"
                            alt=""
                            width={215}
                            height={100}
                            priority
                            className="h-5 w-auto object-contain"
                        />
                        <span className="text-label-code text-on-surface uppercase font-medium">
                            OMX LAB
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-studio-grey text-on-surface-variant font-medium border border-grid-hairline">
                            V.4.2
                        </span>
                    </Link>

                    <nav
                        className="hidden lg:flex items-stretch flex-1 divide-x divide-nav-hairline"
                        aria-label="Primary"
                    >
                        {NAV_ITEMS.map((item) => {
                            const active = isItemActive(item.href);
                            const base = `flex items-center gap-1 px-space-md transition-colors duration-300 ${active
                                ? 'text-on-surface font-medium border-b-2 border-primary-container'
                                : 'text-on-surface-variant hover:text-on-surface hover:bg-studio-grey text-body-compact'
                                }`;

                            // Items with a sub-tree are buttons, not links: they
                            // open a drawer rather than navigate, and the ARIA
                            // contract has to say so.
                            if (item.columns) {
                                const panelId = `menu-${item.label.toLowerCase()}`;
                                const expanded = openMenu === item.label;
                                return (
                                    <div
                                        key={item.href}
                                        className="flex items-stretch"
                                        onMouseEnter={() => { cancelClose(); setOpenMenu(item.label); }}
                                        onMouseLeave={scheduleClose}
                                    >
                                        <button
                                            type="button"
                                            data-menu-trigger={item.label}
                                            aria-haspopup="true"
                                            aria-expanded={expanded}
                                            aria-controls={expanded ? panelId : undefined}
                                            aria-current={active ? 'page' : undefined}
                                            onClick={() =>
                                                setOpenMenu((open) => (open === item.label ? null : item.label))
                                            }
                                            className={base}
                                        >
                                            {item.label}
                                            <MdExpandMore
                                                size={14}
                                                aria-hidden="true"
                                                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={active ? 'page' : undefined}
                                    onMouseEnter={scheduleClose}
                                    className={base}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Below lg the nav above is hidden; this spacer preserves the
                        flex-1 push so the utility cluster still lands on the right. */}
                    <div className="flex lg:hidden flex-1" aria-hidden="true" />

                    <div className="flex items-stretch shrink-0 divide-x divide-nav-hairline">
                        <button
                            type="button"
                            onClick={() => setIsMobileNavOpen((open) => !open)}
                            aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileNavOpen}
                            aria-controls="mobile-nav-drawer"
                            className="flex lg:hidden items-center justify-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey transition-colors duration-300"
                        >
                            {isMobileNavOpen ? (
                                <MdClose size={18} aria-hidden="true" />
                            ) : (
                                <MdMenu size={18} aria-hidden="true" />
                            )}
                        </button>

                        <button
                            aria-label="Search"
                            className="flex items-center justify-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey transition-colors duration-300"
                            type="button"
                        >
                            <MdSearch size={18} aria-hidden="true" />
                        </button>

                        <Link
                            className="hidden sm:flex items-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey text-cta-button transition-colors duration-300"
                            href="/developers"
                        >
                            Start building
                        </Link>

                        <Link
                            className="flex items-center px-space-md bg-inverse-surface text-on-primary hover:bg-action-hover text-cta-button transition-colors duration-300"
                            href="/company"
                        >
                            Contact sales
                        </Link>

                        <Link
                            href="/company"
                            aria-label="OMX Lab account"
                            className="flex items-center justify-center px-space-md"
                        >
                            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <MdPerson className="text-on-primary" size={18} aria-hidden="true" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* The drawer is mounted only while open, so nothing invisible
                    is ever in the tab order. */}
                {openMenu && (
                    <div
                        className="hidden lg:block"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                    >
                        <MegaMenu
                            id={`menu-${openMenu.toLowerCase()}`}
                            columns={NAV_ITEMS.find((i) => i.label === openMenu)!.columns!}
                            onNavigate={closeMenu}
                        />
                    </div>
                )}
            </div>

            {isMobileNavOpen && (
                <div
                    id="mobile-nav-drawer"
                    className="lg:hidden absolute left-0 right-0 top-[49px] bg-paper-white border-b border-nav-hairline rounded-b-lg mega-menu-veil max-h-[80vh] overflow-y-auto"
                >
                    <nav aria-label="Mobile primary" className="flex flex-col divide-y divide-nav-hairline">
                        {NAV_ITEMS.map((item) => {
                            const active = isItemActive(item.href);
                            return (
                                <div key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`flex items-center px-space-md py-space-md text-label-code uppercase transition-colors duration-300 hover:bg-studio-grey ${active ? 'text-on-surface font-medium' : 'text-on-surface-variant'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>

                                    {/* Sub-links are listed inline on mobile rather
                                        than behind a second tap. */}
                                    {item.columns && (
                                        <ul className="pb-space-sm">
                                            {item.columns
                                                .flatMap((c) => c.links)
                                                .map((link) => (
                                                    <li key={`${item.label}-${link.label}`}>
                                                        <Link
                                                            href={link.href}
                                                            className="flex items-center gap-space-sm pl-space-xl pr-space-md py-2 text-body-compact text-on-surface-variant hover:bg-studio-grey hover:text-on-surface transition-colors duration-300"
                                                        >
                                                            {link.swatch && (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className={`w-2 h-2 shrink-0 ${link.swatch}`}
                                                                />
                                                            )}
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
