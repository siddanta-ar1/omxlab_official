import Link from 'next/link';

export const ServicesCTA = () => {
    return (
        <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
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
                                Start Here
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                                Tell us what's <br className="hidden sm:inline" />
                                slowing you down.
                            </h2>

                            <p className="text-soft text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                                A first call is thirty minutes and costs nothing. We will tell you
                                whether we are the right fit — including when the honest answer is
                                that you need something smaller than you asked for.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                            >
                                <span>Schedule a call</span>
                                <span className="text-base">↗</span>
                            </Link>
                        </div>

                        {/* Right Card Column */}
                        <div className="lg:col-span-5">
                            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent)] block mb-4 opacity-90">
                                        What To Expect
                                    </span>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            'A scoping conversation, not a sales pitch',
                                            'An honest read on feasibility and cost',
                                            'A written summary within two working days',
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-soft text-sm sm:text-base leading-relaxed">
                                                <span className="text-[var(--color-accent)] font-bold">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="mailto:contact@omxlab.tech"
                                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase group hover:text-[var(--color-accent)] transition-colors duration-200 mt-2"
                                >
                                    <span className="border-b border-white/30 group-hover:border-[var(--color-accent)] pb-0.5">
                                        Or email us directly
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
