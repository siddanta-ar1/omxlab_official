import Link from 'next/link';
import { services } from '@/data/services';
import { ServiceIcon } from '@/components/common/ServiceIcon';

export const WhatWeBuild = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            {/* Subtitle / Category Header */}
            <span className="text-xs font-bold font-mono tracking-widest text-muted uppercase block mb-3">
                WHAT WE BUILD
            </span>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight mb-6">
                OMX Lab is a <span className="text-primary">Tech Shop.</span> We <span className="text-primary">Build Things.</span>
            </h2>

            {/* Paragraph intro */}
            <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
                Six capabilities, one accountable team. Most engagements combine two or
                three of these — you get a single point of ownership from discovery
                through to production support, not a handoff between specialists.
            </p>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/60 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:to-indigo-50/30 flex flex-col items-start gap-5"
                    >
                        {/* Real SVG Icon */}
                        <ServiceIcon name={service.icon} />

                        {/* Title */}
                        <h3 className="text-lg font-bold text-secondary tracking-tight mt-1 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted text-sm leading-relaxed grow">
                            {service.summary}
                        </p>

                        {/* Affordance */}
                        <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary">
                            <span className="border-b border-primary/30 pb-0.5">
                                Explore service
                            </span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </span>
                    </Link>
                ))}
            </div>

            {/* Section CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                    href="/services"
                    className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
                >
                    View all services <span>→</span>
                </Link>
                <Link
                    href="/projects"
                    className="w-full sm:w-auto justify-center border border-border bg-surface hover:bg-body text-secondary px-6 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all"
                >
                    See our work <span className="text-xs">↗</span>
                </Link>
            </div>
        </section>
    );
};
