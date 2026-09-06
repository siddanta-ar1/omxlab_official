import React from 'react';

export const OurMission = () => {
    return (
        <section className="bg-[var(--color-body)] py-20 md:py-28 border-t border-[var(--color-border)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Block */}
                <div className="max-w-3xl mb-16">
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-[3px] text-xs font-semibold text-[var(--color-primary-ink)] bg-[var(--color-accent)] border border-[var(--color-border)]">
                            Our Mission & Values
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                        Building software that <span className="text-[var(--color-primary-ink)]">empowers growth</span> and long-term capability.
                    </h2>

                    <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                        Our purpose is to bridge top-tier global talent with ambitious enterprise goals, delivering high-velocity engineering without sacrificing code quality or structural integrity.
                    </p>
                </div>

                {/* Core Pillars / Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/50">
                        <div>
                            <div className="w-12 h-12 rounded-[3px] bg-[var(--color-accent)] text-[var(--color-primary-ink)] font-mono font-bold text-lg flex items-center justify-center mb-6">
                                01
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                Uncompromised Quality
                            </h3>
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                We believe in writing production-grade software meant to scale. Every pull request, automated agent output, and architecture design undergoes strict senior review.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/50">
                        <div>
                            <div className="w-12 h-12 rounded-[3px] bg-[var(--color-accent)] text-[var(--color-primary-ink)] font-mono font-bold text-lg flex items-center justify-center mb-6">
                                02
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                True Partnership
                            </h3>
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                We embed directly into your workflows. No black boxes or transactional handoffs—just collaborative engineering aligned with your business milestones.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/50">
                        <div>
                            <div className="w-12 h-12 rounded-[3px] bg-[var(--color-accent)] text-[var(--color-primary-ink)] font-mono font-bold text-lg flex items-center justify-center mb-6">
                                03
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                Continuous Innovation
                            </h3>
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                By combining expert human oversight with cutting-edge agentic development tools, we compress shipping timelines and keep you ahead of the curve.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};