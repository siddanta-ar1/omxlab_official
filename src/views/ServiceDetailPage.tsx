import Link from 'next/link';
import { getServiceById, getRelatedServices } from '@/data/services';
import { ServiceIcon } from '@/components/common/ServiceIcon';
import { DeliveryProcess } from '@/components/sections/DeliveryProcess';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

const NotFound = () => (
    <section className="bg-[var(--color-surface)] py-24 md:py-32 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                404 — Not Found
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                We don't offer that service.
            </h1>
            <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-xl mx-auto">
                The page you're looking for may have been renamed or merged into another
                capability. The full list is still available.
            </p>
            <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-[var(--color-primary)]/20"
            >
                <span>←</span> Back to Services
            </Link>
        </div>
    </section>
);

export const ServiceDetailPage = ({ id }: { id: string }) => {
    const service = getServiceById(id);

    if (!service) return <NotFound />;

    const related = getRelatedServices(service);

    return (
        <>
            {/* SERVICE HEADER */}
            <section className="relative overflow-hidden bg-[var(--color-surface)] pt-12 pb-14 lg:pt-16 lg:pb-20 border-b border-[var(--color-border)]">

                {/* Full-width Background Effects */}
                <div className="pointer-events-none absolute top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-full overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent" />
                    <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />
                    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        All Services
                    </Link>

                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)] border border-[var(--color-border)] flex items-center justify-center mb-6">
                        <ServiceIcon name={service.icon} />
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-[1.1] max-w-4xl mb-5">
                        {service.title}
                    </h1>

                    <p className="text-[var(--color-primary)] text-lg sm:text-xl font-semibold max-w-3xl mb-4">
                        {service.tagline}
                    </p>

                    <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed">
                        {service.summary}
                    </p>
                </div>
            </section>

            {/* SERVICE BODY */}
            <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Main Column */}
                        <article className="lg:col-span-8">
                            {/* Overview */}
                            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-secondary)] tracking-tight mb-4">
                                Overview
                            </h2>
                            <div className="space-y-4 mb-12">
                                {service.overview.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Deliverables */}
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-5">
                                    What's Included
                                </span>
                                <ul className="space-y-4">
                                    {service.deliverables.map((item, index) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="shrink-0 w-6 h-6 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-mono font-bold text-[11px] flex items-center justify-center mt-0.5">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-[var(--color-secondary)] text-sm sm:text-base leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-8">
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
                                {/* Outcomes */}
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] block mb-5">
                                    At a Glance
                                </span>

                                <div className="grid grid-cols-2 gap-4 mb-7">
                                    {service.outcomes.map((outcome) => (
                                        <div key={outcome.label}>
                                            <span className="text-2xl font-extrabold font-mono text-[var(--color-primary)] tracking-tight leading-none block">
                                                {outcome.value}
                                            </span>
                                            <span className="mt-2 text-xs text-[var(--color-muted)] leading-snug block">
                                                {outcome.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack */}
                                <div className="pt-6 border-t border-[var(--color-border)]">
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-3">
                                        Typical Stack
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {service.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-md bg-[var(--color-body)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-muted)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-7 pt-6 border-t border-[var(--color-border)] flex flex-col gap-3">
                                    <Link
                                        href="/contact"
                                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                                    >
                                        Discuss this service <span>→</span>
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-body)] text-[var(--color-secondary)] px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all"
                                    >
                                        See all services
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <DeliveryProcess />

            {/* RELATED SERVICES */}
            <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                        Often Paired With
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-10">
                        Related services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                href={`/services/${item.id}`}
                                className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 transition-all hover:shadow-lg hover:border-[var(--color-primary)]/40 flex flex-col items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/60 flex items-center justify-center">
                                    <ServiceIcon name={item.icon} />
                                </div>

                                <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-[var(--color-muted)] text-sm leading-relaxed grow">
                                    {item.summary}
                                </p>

                                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary)]">
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

            <ServicesCTA />
        </>
    );
};

export default ServiceDetailPage;
