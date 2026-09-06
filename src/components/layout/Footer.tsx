import React from 'react';
import { LuInstagram, LuLinkedin, LuFacebook } from 'react-icons/lu';
import { OmxLockup } from '@/components/common/OmxLockup';

export const Footer = () => {
    return (
        <footer className="bg-[var(--color-body)] text-[var(--color-secondary)] pt-16 pb-8 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col justify-between">
                        <div>
                            <OmxLockup
                                variant="exact"
                                className="h-14 sm:h-16 w-auto mb-4 text-secondary"
                                title="OMX Lab"
                            />

                            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
                                At OMX Lab, we build custom software that helps businesses innovate, streamline operations, and deliver seamless digital experiences.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6 text-[var(--color-muted)]">
                            <a
                                href="https://www.instagram.com/omxlabofficial/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary-ink)] transition-colors"
                                aria-label="Instagram"
                            >
                                <LuInstagram className="w-4 h-4" strokeWidth={2} />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary-ink)] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LuLinkedin className="w-4 h-4" strokeWidth={2} />
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61592215359202"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary-ink)] transition-colors"
                                aria-label="Facebook"
                            >
                                <LuFacebook className="w-4 h-4" strokeWidth={2} />
                            </a>
                        </div>
                    </div>

                    {/* Nav Links Column 1: Explore */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs omx-label font-bold uppercase tracking-[0.08em] text-[var(--color-muted)] mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/services" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/initiatives" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Initiatives
                                </a>
                            </li>
                            <li>
                                <a href="/research" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Research
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="/career" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Nav Links Column 2: About */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs omx-label font-bold uppercase tracking-[0.08em] text-[var(--color-muted)] mb-4">
                            About
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/about" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/team" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs omx-label font-bold uppercase tracking-[0.08em] text-[var(--color-muted)] mb-4">
                            Contact
                        </h4>

                        {/* Offices */}
                        <div className="grid grid-cols-2 gap-4 text-xs text-[var(--color-muted)] mb-6">
                            <div>
                                <span className="omx-label font-bold text-[var(--color-primary-ink)] uppercase block mb-1">
                                    NEPAL
                                </span>
                                <p>Chitwan</p>
                                <p className="mt-1 text-[var(--color-secondary)] font-medium">980XXXXXXX</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <span className="omx-label font-bold text-xs uppercase text-[var(--color-primary-ink)] block mb-1">
                                @ Email
                            </span>

                            <a
                                href="mailto:contact@omxlab.tech"
                                className="text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] transition-colors"
                            >
                                contact@omxlab.tech
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--color-muted)] gap-4">
                    <p>© 2026 OMX Lab · omxlab.tech</p>
                </div>

            </div>
        </footer>
    );
};