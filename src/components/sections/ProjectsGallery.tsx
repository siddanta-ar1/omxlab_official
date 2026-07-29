'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { projects, projectCategories } from '@/data/projects';

export const ProjectsGallery = ({ activeType }: { activeType?: string }) => {
    const tabs = ['All', ...projectCategories];

    // Filter lives in the URL so a filtered view can be linked and the back
    // button restores it — same pattern as the research index.
    const router = useRouter();
    const pathname = usePathname();
    // The active filter arrives from the server so the list is in the HTML,
    // rather than appearing only once the client has hydrated.
    const activeTab = activeType && tabs.includes(activeType) ? activeType : 'All';

    const selectTab = (tab: string) => {
        const target =
            tab === 'All' ? pathname : `${pathname}?type=${encodeURIComponent(tab)}`;
        router.replace(target, { scroll: false });
    };

    const visible =
        activeTab === 'All'
            ? projects
            : projects.filter((project) => project.category === activeTab);

    const featured = visible.find((project) => project.featured);
    const rest = visible.filter((project) => project !== featured);

    return (
        <section
            id="case-studies"
            className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)] scroll-mt-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-accent)] border border-[var(--color-border)]">
                        Case Studies
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                    Selected work.
                </h2>

                <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-2xl">
                    A sample of what we have shipped. Figures quoted are the client's own
                    measurements, taken at least three months after launch.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-sm w-full md:w-fit mb-10">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab;

                        return (
                            <button
                                key={tab}
                                onClick={() => selectTab(tab)}
                                className={`font-semibold text-sm transition-all duration-200 rounded-lg py-2 px-5 cursor-pointer ${isActive
                                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                                    : 'text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]'
                                    }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {visible.length > 0 ? (
                    <>
                        {/* Featured Project */}
                        {featured && (
                            <Link
                                href={`/projects/${featured.id}`}
                                className="group block rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] mb-6 transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/50"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12">
                                    {/* Image */}
                                    <div className="lg:col-span-7 relative overflow-hidden min-h-[260px] lg:min-h-[420px]">
                                        <img
                                            src={featured.image}
                                            alt={featured.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/60 via-transparent to-transparent" />
                                        <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-mono font-bold uppercase tracking-widest">
                                            Featured
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
                                        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono font-bold uppercase tracking-widest">
                                            <span className="text-[var(--color-primary)]">{featured.category}</span>
                                            <span className="text-[var(--color-muted)]">
                                                {featured.client} · {featured.year}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-secondary)] tracking-tight leading-tight mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                                            {featured.title}
                                        </h3>

                                        <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                                            {featured.summary}
                                        </p>

                                        {/* Inline stats */}
                                        <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-[var(--color-border)]">
                                            {featured.stats.map((stat) => (
                                                <div key={stat.label}>
                                                    <span className="block text-lg font-extrabold font-mono text-[var(--color-primary)] leading-none">
                                                        {stat.value}
                                                    </span>
                                                    <span className="mt-1.5 block text-[11px] text-[var(--color-muted)] leading-snug">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--color-primary)] uppercase">
                                            <span className="border-b border-[var(--color-primary)]/30 pb-0.5">
                                                Read case study
                                            </span>
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rest.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                    className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/50"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/50 to-transparent" />
                                    </div>

                                    <div className="p-8 flex flex-col grow">
                                        {/* Meta Row */}
                                        <div className="flex items-center justify-between gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-mono font-bold uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                            <span className="text-xs font-mono text-[var(--color-muted)]">
                                                {project.year}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 grow">
                                            {project.summary}
                                        </p>

                                        {/* Footer Row */}
                                        <div className="flex items-center justify-between gap-3 pt-5 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
                                            <span className="truncate">{project.client}</span>
                                            <span className="shrink-0">{project.duration}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12 text-[var(--color-muted)]">
                        No projects currently listed under this category.
                    </div>
                )}
            </div>
        </section>
    );
};
