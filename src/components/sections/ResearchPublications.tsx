'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { publications, publicationCategories } from '@/data/research';

export const ResearchPublications = ({ activeTopic }: { activeTopic?: string }) => {
    const tabs = ['All', ...publicationCategories];

    // Filter lives in the URL so focus-area cards and detail pages can deep-link
    // straight to a category, and the back button restores the right view.
    const router = useRouter();
    const pathname = usePathname();
    // The active filter arrives from the server so the list is in the HTML,
    // rather than appearing only once the client has hydrated.
    const activeTab = activeTopic && tabs.includes(activeTopic) ? activeTopic : 'All';

    const selectTab = (tab: string) => {
        const target =
            tab === 'All' ? pathname : `${pathname}?topic=${encodeURIComponent(tab)}`;
        router.replace(target, { scroll: false });
    };

    const visible =
        activeTab === 'All'
            ? publications
            : publications.filter((paper) => paper.category === activeTab);

    const featured = visible.find((paper) => paper.featured);
    const rest = visible.filter((paper) => paper !== featured);

    return (
        <section
            id="publications"
            className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)] scroll-mt-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-primary-ink)] bg-[var(--color-accent)] border border-[var(--color-border)]">
                        Publications
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                    Everything we've written down.
                </h2>

                <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-2xl">
                    Papers, field reports, and case studies from live engagements. Every
                    result here was reproduced internally before it went out.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-body)] p-2 shadow-sm w-full md:w-fit mb-10">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab;

                        return (
                            <button
                                key={tab}
                                onClick={() => selectTab(tab)}
                                className={`font-semibold text-sm transition-all duration-200 rounded-lg py-2 px-5 cursor-pointer ${isActive
                                    ? 'bg-[var(--color-primary)] text-secondary shadow-sm'
                                    : 'text-[var(--color-muted)] hover:text-[var(--color-primary-ink)] hover:bg-[var(--color-accent)]'
                                    }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {visible.length > 0 ? (
                    <>
                        {/* Featured Publication */}
                        {featured && (
                            <Link
                                href={`/research/${featured.id}`}
                                className="group relative block overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-body)] p-8 sm:p-10 mb-6 transition-all hover:shadow-xl hover:border-[var(--color-primary)]/40"
                            >
                                {/* Ambient glow */}
                                <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    <div className="lg:col-span-8">
                                        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono font-bold uppercase tracking-widest">
                                            <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-secondary">
                                                Latest
                                            </span>
                                            <span className="text-[var(--color-primary-ink)]">
                                                {featured.category}
                                            </span>
                                            <span className="text-[var(--color-muted)]">
                                                {featured.type} · {featured.year} · {featured.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-secondary)] tracking-tight leading-tight mb-4 group-hover:text-[var(--color-primary-ink)] transition-colors">
                                            {featured.title}
                                        </h3>

                                        <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                                            {featured.abstract}
                                        </p>

                                        <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--color-primary-ink)] uppercase">
                                            <span className="border-b border-[var(--color-primary)]/30 pb-0.5">
                                                Read the paper
                                            </span>
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </span>
                                    </div>

                                    <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-border)] lg:pl-8">
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] block mb-3">
                                            Authors
                                        </span>
                                        <ul className="space-y-2">
                                            {featured.authors.map((author) => (
                                                <li
                                                    key={author}
                                                    className="text-sm font-medium text-[var(--color-secondary)]"
                                                >
                                                    {author}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Publication Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rest.map((paper) => (
                                <Link
                                    key={paper.id}
                                    href={`/research/${paper.id}`}
                                    className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col transition-all hover:shadow-lg hover:border-[var(--color-primary)]/40"
                                >
                                    {/* Meta Row */}
                                    <div className="flex items-center justify-between gap-3 mb-5">
                                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-ink)] text-xs font-mono font-bold uppercase tracking-wider">
                                            {paper.type}
                                        </span>
                                        <span className="text-xs font-mono text-[var(--color-muted)]">
                                            {paper.year}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight leading-snug mb-3 group-hover:text-[var(--color-primary-ink)] transition-colors">
                                        {paper.title}
                                    </h3>

                                    <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 grow">
                                        {paper.abstract}
                                    </p>

                                    {/* Footer Row */}
                                    <div className="flex items-center justify-between gap-3 pt-5 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
                                        <span className="truncate">{paper.authors.join(', ')}</span>
                                        <span className="shrink-0">{paper.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12 text-[var(--color-muted)]">
                        No publications currently listed under this category.
                    </div>
                )}
            </div>
        </section>
    );
};
