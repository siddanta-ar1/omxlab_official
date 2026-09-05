import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceIcon } from '@/components/common/ServiceIcon';

export const ServicesGrid = () => {
    return (
        <section
            id="capabilities"
            className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)] scroll-mt-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                    What We Do
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-6">
                    Six capabilities, <span className="text-[var(--color-primary-ink)]">one accountable team.</span>
                </h2>

                <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                    Most engagements combine two or three of these. You get one team and one
                    point of accountability rather than a handoff between specialists.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/50 flex flex-col items-start gap-4"
                        >
                            {/* Icon Container with subtle background tint */}
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/60 flex items-center justify-center">
                                <ServiceIcon name={service.icon} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight mt-1 group-hover:text-[var(--color-primary-ink)] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed grow">
                                {service.summary}
                            </p>

                            {/* Affordance */}
                            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary-ink)]">
                                <span className="border-b border-[var(--color-primary)]/30 pb-0.5">
                                    Explore service
                                </span>
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
