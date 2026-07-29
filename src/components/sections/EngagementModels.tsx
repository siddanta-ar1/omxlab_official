import { engagementModels } from '@/data/services';

export const EngagementModels = () => {
    return (
        <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Block */}
                <div className="max-w-3xl mb-12">
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-accent)] border border-[var(--color-border)]">
                            Engagement Models
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-6">
                        Three ways to <span className="text-[var(--color-primary)]">work with us.</span>
                    </h2>

                    <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                        The right structure depends on how settled your scope is. If you are
                        not sure which fits, a discovery conversation usually makes it obvious
                        within half an hour.
                    </p>
                </div>

                {/* Model Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModels.map((model) => (
                        <div
                            key={model.number}
                            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:border-[var(--color-primary)]/50"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-mono font-bold text-lg flex items-center justify-center mb-6">
                                {model.number}
                            </div>

                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                {model.title}
                            </h3>

                            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 grow">
                                {model.description}
                            </p>

                            <ul className="space-y-2.5 pt-5 border-t border-[var(--color-border)]">
                                {model.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-2 text-sm text-[var(--color-secondary)]"
                                    >
                                        <span className="text-[var(--color-primary)] font-bold leading-relaxed">✓</span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
