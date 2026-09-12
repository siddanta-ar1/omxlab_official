'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdClose, MdMenu, MdPerson, MdSearch } from 'react-icons/md';

type NavItem = {
    label: string;
    href: string;
};

const NAV_ITEMS: NavItem[] = [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Research', href: '/research' },
    { label: 'Developers', href: '/developers' },
    { label: 'Company', href: '/company' },
    { label: 'News', href: '/news' },
];

export const Header = () => {
    const pathname = usePathname();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Close the drawer whenever the route changes. Adjusting state during
    // render (rather than in an effect) is React's documented pattern for
    // deriving from a changed value, and avoids the extra commit an effect
    // would cost on every navigation.
    const [navPathname, setNavPathname] = useState(pathname);
    if (navPathname !== pathname) {
        setNavPathname(pathname);
        setIsMobileNavOpen(false);
    }

    // Close the drawer on Escape.
    useEffect(() => {
        if (!isMobileNavOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileNavOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMobileNavOpen]);

    const isItemActive = (href: string) =>
        pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-paper-white border-b border-nav-hairline">
            <div className="h-[49px] w-full flex items-stretch divide-x divide-nav-hairline">
                <div className="flex items-center gap-space-sm px-space-md shrink-0">
                    <Image
                        src="/logo-mark.svg"
                        alt="OMX Lab"
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
                </div>

                <nav
                    className="hidden lg:flex items-stretch flex-1 divide-x divide-nav-hairline overflow-x-auto"
                    aria-label="Primary"
                >
                    {NAV_ITEMS.map((item) => {
                        const active = isItemActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? 'page' : undefined}
                                className={`flex items-center px-space-md transition-colors group ${active
                                        ? 'text-on-surface font-medium border-b-2 border-primary-container'
                                        : 'text-on-surface-variant hover:text-on-surface text-body-compact'
                                    }`}
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
                        className="flex lg:hidden items-center justify-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey transition-colors"
                    >
                        {isMobileNavOpen ? (
                            <MdClose size={18} aria-hidden="true" />
                        ) : (
                            <MdMenu size={18} aria-hidden="true" />
                        )}
                    </button>

                    <button
                        aria-label="Search"
                        className="flex items-center justify-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey transition-colors"
                        type="button"
                    >
                        <MdSearch size={18} aria-hidden="true" />
                    </button>

                    <Link
                        className="hidden sm:flex items-center px-space-md text-on-surface-variant hover:text-on-surface hover:bg-studio-grey text-cta-button transition-colors"
                        href="/developers"
                    >
                        Start building
                    </Link>

                    <Link
                        className="flex items-center px-space-md bg-inverse-surface text-on-primary hover:bg-text-primary text-cta-button transition-colors"
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

            {isMobileNavOpen && (
                <div
                    id="mobile-nav-drawer"
                    className="lg:hidden absolute left-0 right-0 top-[49px] bg-paper-white border-b border-nav-hairline mega-menu-veil"
                >
                    <nav aria-label="Mobile primary" className="flex flex-col divide-y divide-nav-hairline">
                        {NAV_ITEMS.map((item) => {
                            const active = isItemActive(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={active ? 'page' : undefined}
                                    className={`flex items-center px-space-md py-space-md text-label-code uppercase transition-colors hover:bg-studio-grey ${active ? 'text-on-surface font-medium' : 'text-on-surface-variant'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
