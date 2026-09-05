import Link from 'next/link';

export const ResearchCollaborate = () => {
    return (
        <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Dark Floating Card with Subtle Gradient */}
                <div className="relative overflow-hidden rounded-3xl bg-[var(--color-secondary)] text-white p-8 sm:p-12 md:p-16 shadow-2xl">

                    {/* Subtle Ambient Background Light */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                        {/* Left Content Column */}
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3 opacity-90">
                                Collaborate
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                                Have a problem worth <br className="hidden sm:inline" />
                                studying properly?
                            </h2>

                            <p className="text-soft text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                                We partner with universities, product teams, and open-source
                                maintainers on scoped investigations. If you have the problem and
                                the data, we will bring the engineers and publish what we find
                                together.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                            >
                                <span>Start a conversation</span>
                                <span className="text-base">↗</span>
                            </Link>
                        </div>

                        {/* Right Card Column */}
                        <div className="lg:col-span-5">
                            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent)] block mb-4 opacity-90">
                                        Research Digest
                                    </span>
                                    <p className="text-soft text-sm sm:text-base leading-relaxed mb-6">
                                        One email when we publish — a short summary, the method, and
                                        the caveats. No newsletter cadence, no marketing. We send it
                                        roughly once a month, and only when there is something real
                                        to report.
                                    </p>
                                </div>

                                <a
                                    href="mailto:contact@omxlab.tech?subject=Research%20Digest"
                                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase group hover:text-[var(--color-accent)] transition-colors duration-200 mt-2"
                                >
                                    <span className="border-b border-white/30 group-hover:border-[var(--color-accent)] pb-0.5">
                                        Subscribe by email
                                    </span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
