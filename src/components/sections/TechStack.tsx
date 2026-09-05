import { techStack } from '@/data/services';

export const TechStack = () => {
    return (
        <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                    Technology
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                    Boring tools, chosen deliberately.
                </h2>

                <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl mb-10">
                    We default to mature, well-documented technology your next engineer will
                    already know. Novelty is a cost we only pay when it buys something real.
                </p>

                {/* Grouped Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((group) => (
                        <div
                            key={group.group}
                            className="bg-[var(--color-body)] border border-[var(--color-border)] rounded-2xl p-6"
                        >
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary-ink)] block mb-4">
                                {group.group}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-secondary)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
