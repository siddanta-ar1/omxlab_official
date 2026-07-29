'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Next has no NavLink, so this reproduces react-router's active-state API:
 * a className callback that receives whether the current path matches.
 */
const NavLink = ({
    href,
    className,
    onClick,
    children,
}: {
    href: string;
    className: (state: { isActive: boolean }) => string;
    onClick?: () => void;
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link href={href} className={className({ isActive })} onClick={onClick}>
            {children}
        </Link>
    );
};

export const Navbar = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

    // Helper function for active link styling
    const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
        `transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`;

    const mobileNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-3 text-base transition-colors ${isActive ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'}`;

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileAboutOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Clickable Brand Logo -> Home */}
                    <Link href="/" className="flex items-center hover:opacity-85 transition-opacity" onClick={closeMobileMenu}>
                    <img
                        src="/logo-lockup.png"
                        alt="OMX Lab"
                        width="740"
                        height="200"
                        className="h-8 md:h-9 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-secondary">
                    <NavLink href="/services" className={navLinkStyle}>Services</NavLink>
                    <NavLink href="/initiatives" className={navLinkStyle}>Initiatives</NavLink>
                    <NavLink href="/research" className={navLinkStyle}>Research</NavLink>
                    <NavLink href="/projects" className={navLinkStyle}>Projects</NavLink>
                    <NavLink href="/career" className={navLinkStyle}>Career</NavLink>

                    {/* Dropdown for About / Contact / Team */}
                    <div
                        className="relative py-2"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                            About
                            <span className={`text-xs transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}>▾</span>
                        </button>

                        {isAboutOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-36 bg-surface border border-border rounded-xl shadow-xl py-2 flex flex-col z-50">
                                <Link href="/about" className="px-4 py-2 text-xs text-secondary hover:bg-body hover:text-primary">About Us</Link>
                                <Link href="/team" className="px-4 py-2 text-xs text-secondary hover:bg-body hover:text-primary">Team</Link>
                                <Link href="/contact" className="px-4 py-2 text-xs text-secondary hover:bg-body hover:text-primary">Contact</Link>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Action Button (Desktop) */}
                <Link
                    href="/contact"
                    className="hidden md:flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium text-sm items-center gap-2 transition-all shadow-md hover:shadow-primary/25 cursor-pointer"
                >
                    Schedule a call <span>→</span>
                </Link>

                {/* Hamburger Button (Mobile) */}
                <button
                    className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 cursor-pointer z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col bg-surface border border-border rounded-2xl shadow-xl overflow-hidden">
                    <NavLink href="/services" className={mobileNavLinkStyle} onClick={closeMobileMenu}>Services</NavLink>
                    <NavLink href="/initiatives" className={mobileNavLinkStyle} onClick={closeMobileMenu}>Initiatives</NavLink>
                    <NavLink href="/research" className={mobileNavLinkStyle} onClick={closeMobileMenu}>Research</NavLink>
                    <NavLink href="/projects" className={mobileNavLinkStyle} onClick={closeMobileMenu}>Projects</NavLink>
                    <NavLink href="/career" className={mobileNavLinkStyle} onClick={closeMobileMenu}>Career</NavLink>

                    {/* About accordion */}
                    <button
                        className="flex items-center justify-between px-4 py-3 text-base text-secondary hover:text-primary transition-colors cursor-pointer"
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    >
                        About
                        <span className={`text-xs transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out bg-body/50 ${
                            isMobileAboutOpen ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <Link href="/about" className="block px-8 py-2.5 text-sm text-secondary hover:text-primary" onClick={closeMobileMenu}>About Us</Link>
                        <Link href="/team" className="block px-8 py-2.5 text-sm text-secondary hover:text-primary" onClick={closeMobileMenu}>Team</Link>
                        <Link href="/contact" className="block px-8 py-2.5 text-sm text-secondary hover:text-primary" onClick={closeMobileMenu}>Contact</Link>
                    </div>

                    {/* Action Button (Mobile) */}
                    <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="m-4 bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                        Schedule a call <span>→</span>
                    </Link>
                </nav>
            </div>
            </div>
        </header>
    );
};