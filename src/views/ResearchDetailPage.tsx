import Link from 'next/link';
import {
    getPublicationById,
    getRelatedPublications,
} from '@/data/research';
import { ResearchCollaborate } from '@/components/sections/ResearchCollaborate';

const NotFound = () => (
    <section className="bg-[var(--color-surface)] py-24 md:py-32 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                404 — Not Found
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                We can't find that publication.
            </h1>
            <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-xl mx-auto">
                The paper you're looking for may have been renamed or withdrawn.
                The full index is still available.
            </p>
            <Link
                href="/research"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-[var(--color-primary)]/20"
            >
                <span>←</span> Back to Research
            </Link>
        </div>
    </section>
);

export const ResearchDetailPage = ({ id }: { id: string }) => {
    const paper = getPublicationById(id);

    if (!paper) return <NotFound />;

    const related = getRelatedPublications(paper);

    return (
        <>
            {/* ARTICLE HEADER */}
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
                        href="/research"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        All Research
                    </Link>

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] border border-[var(--color-border)]">
                            {paper.category}
                        </span>
                        <span className="text-[var(--color-muted)]">
                            {paper.type} · {paper.year} · {paper.readTime} read
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-[1.1] max-w-4xl mb-6">
                        {paper.title}
                    </h1>

                    <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed">
                        {paper.abstract}
                    </p>
                </div>
            </section>

            {/* ARTICLE BODY */}
            <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Main Column */}
                        <article className="lg:col-span-8">
                            {/* Key Findings callout */}
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-12 shadow-sm">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-5">
                                    Key Findings
                                </span>
                                <ul className="space-y-4">
                                    {paper.findings.map((finding, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="shrink-0 w-6 h-6 rounded-md bg-[var(--color-accent)] text-[var(--color-primary)] font-mono font-bold text-[11px] flex items-center justify-center mt-0.5">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-[var(--color-secondary)] text-sm sm:text-base leading-relaxed">
                                                {finding}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Body sections */}
                            <div className="divide-y divide-[var(--color-border)]">
                                {paper.sections.map((section) => (
                                    <div key={section.heading} className="py-8 first:pt-0 last:pb-0">
                                        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-secondary)] tracking-tight mb-4">
                                            {section.heading}
                                        </h2>
                                        <div className="space-y-4">
                                            {section.paragraphs.map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Demo notice */}
                            <div className="mt-10 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                                <p className="text-xs font-mono text-[var(--color-muted)] leading-relaxed">
                                    <span className="font-bold text-[var(--color-primary)] uppercase tracking-widest">
                                        Demo content
                                    </span>{' '}
                                    — this article is placeholder copy for layout review. Replace the
                                    entry in <span className="text-[var(--color-secondary)]">src/data/research.js</span> with the real publication.
                                </p>
                            </div>
                        </article>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-8">
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] block mb-5">
                                    At a Glance
                                </span>

                                <dl className="space-y-5">
                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Authors
                                        </dt>
                                        <dd className="space-y-1">
                                            {paper.authors.map((author) => (
                                                <p
                                                    key={author}
                                                    className="text-sm font-medium text-[var(--color-secondary)]"
                                                >
                                                    {author}
                                                </p>
                                            ))}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Published
                                        </dt>
                                        <dd className="text-sm font-medium text-[var(--color-secondary)]">
                                            {paper.type} · {paper.year}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Reading Time
                                        </dt>
                                        <dd className="text-sm font-medium text-[var(--color-secondary)]">
                                            {paper.readTime}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                                            Topics
                                        </dt>
                                        <dd className="flex flex-wrap gap-2">
                                            {paper.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 rounded-md bg-[var(--color-body)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-muted)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                </dl>

                                <div className="mt-7 pt-6 border-t border-[var(--color-border)] flex flex-col gap-3">
                                    <Link
                                        href="/contact"
                                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                                    >
                                        Discuss this work <span>→</span>
                                    </Link>
                                    <Link
                                        href={`/research?topic=${encodeURIComponent(paper.category)}`}
                                        className="border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-body)] text-[var(--color-secondary)] px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all"
                                    >
                                        More in {paper.category}
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* RELATED PUBLICATIONS */}
            <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                        Keep Reading
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-10">
                        Related publications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                href={`/research/${item.id}`}
                                className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col transition-all hover:shadow-lg hover:border-[var(--color-primary)]/40"
                            >
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-mono font-bold uppercase tracking-wider">
                                        {item.type}
                                    </span>
                                    <span className="text-xs font-mono text-[var(--color-muted)]">
                                        {item.year}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 grow">
                                    {item.abstract}
                                </p>

                                <div className="flex items-center justify-between gap-3 pt-5 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)]">
                                    <span className="truncate">{item.authors.join(', ')}</span>
                                    <span className="shrink-0">{item.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ResearchCollaborate />
        </>
    );
};

export default ResearchDetailPage;
