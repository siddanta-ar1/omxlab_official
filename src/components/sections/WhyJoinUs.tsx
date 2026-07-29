import { benefits, values } from '@/data/career';
import { BenefitIcon } from '@/components/common/BenefitIcon';

export const WhyJoinUs = () => {
    return (
        <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                    Why Join Us
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-6">
                    What you actually get <span className="text-[var(--color-primary)]">working here.</span>
                </h2>

                <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                    No ping-pong tables on this list. These are the things our team says
                    matter when we ask them why they stayed.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:border-[var(--color-primary)]/50 flex flex-col items-start gap-4"
                        >
                            {/* Premium Icon Container */}
                            <BenefitIcon name={benefit.icon} />

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight mt-1">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* How We Work */}
                <div className="max-w-3xl mb-10">
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-accent)] border border-[var(--color-border)]">
                            How we work
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                        Three things we hold each other to.
                    </h2>

                    <p className="text-[var(--color-muted)] text-base leading-relaxed">
                        These come up in code review, in planning, and in the final interview.
                        If they sound like a fit, we should talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div
                            key={value.number}
                            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:border-[var(--color-primary)]/50"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-mono font-bold text-lg flex items-center justify-center mb-6">
                                {value.number}
                            </div>

                            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                                {value.title}
                            </h3>

                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
