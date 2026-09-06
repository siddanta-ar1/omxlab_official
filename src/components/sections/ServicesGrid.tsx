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
                <span className="text-xs font-bold omx-label tracking-[0.08em] text-[var(--color-muted)] uppercase block mb-3">
                    What We Do
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                    Six capabilities, <span className="text-[var(--color-primary-ink)]">one accountable team.</span>
                </h2>

                <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                    Most engagements combine two or three of these. You get one team and one
                    point of accountability rather than a handoff between specialists.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="group bg-[var(--color-surface)] border-r border-b border-[var(--color-border)] p-8 transition-colors duration-200 hover:bg-[var(--color-accent)] flex flex-col items-start gap-4"
                        >
                            {/* Icon Container with subtle background tint */}
                            <div className="w-10 h-10 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-body)] flex items-center justify-center">
                                <ServiceIcon name={service.icon} />
                            </div>

                            {/* Title */}
                            <h3 className="text-[17px] font-semibold text-[var(--color-secondary)] tracking-[-0.01em] mt-1">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-muted)] text-[14px] leading-relaxed grow">
                                {service.summary}
                            </p>

                            {/* Affordance */}
                            <span className="inline-flex items-center gap-2 omx-label text-[var(--color-primary)]">
                                <span className="omx-underline">Explore service</span>
                                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
