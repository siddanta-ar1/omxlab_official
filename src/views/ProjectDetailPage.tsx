import Link from 'next/link';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

const NotFound = () => (
    <section className="bg-[var(--color-surface)] py-24 md:py-32 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                404 — Not Found
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                We can't find that case study.
            </h1>
            <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-xl mx-auto">
                The project you're looking for may have been renamed or withdrawn at the
                client's request. Our other work is still listed.
            </p>
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-[var(--color-primary)]/20"
            >
                <span>←</span> Back to Projects
            </Link>
        </div>
    </section>
);

// Challenge / Approach / Outcome share one layout.
const Chapter = ({
    number,
    title,
    paragraphs,
}: {
    number: string;
    title: string;
    paragraphs: string[];
}) => (
    <div className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group">
        <div className="md:col-span-2 text-[var(--color-primary)] font-mono font-bold text-lg tracking-wider transition-colors duration-200 group-hover:text-[var(--color-primary-hover)]">
            {number}
        </div>
        <div className="md:col-span-10">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-secondary)] mb-3">
                {title}
            </h2>
            <div className="space-y-4">
                {paragraphs.map((paragraph: string, index: number) => (
                    <p
                        key={index}
                        className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

export const ProjectDetailPage = ({ id }: { id: string }) => {
    const project = getProjectById(id);

    if (!project) return <NotFound />;

    const related = getRelatedProjects(project);

    return (
        <>
            {/* PROJECT HEADER */}
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
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        All Projects
                    </Link>

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] border border-[var(--color-border)]">
                            {project.category}
                        </span>
                        <span className="text-[var(--color-muted)]">
                            {project.client} · {project.year} · {project.duration}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-[1.1] max-w-4xl mb-6">
                        {project.title}
                    </h1>

                    <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                        {project.summary}
                    </p>

                    {/* Hero Image */}
                    <div className="relative rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-2xl">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/30 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 pt-8 border-t border-[var(--color-border)]">
                        {project.stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-start">
                                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--color-primary)] tracking-tight leading-none">
                                    {stat.value}
                                </span>
                                <span className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT BODY */}
            <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Main Column */}
                        <article className="lg:col-span-8">
                            <div className="divide-y divide-[var(--color-border)]">
                                <Chapter number="01" title="The challenge" paragraphs={project.challenge} />
                                <Chapter number="02" title="Our approach" paragraphs={project.approach} />
                                <Chapter number="03" title="The outcome" paragraphs={project.outcome} />
                            </div>

                            {/* Testimonial */}
                            {project.testimonial && (
                                <figure className="mt-10 relative overflow-hidden rounded-3xl bg-[var(--color-secondary)] text-white p-8 sm:p-10 shadow-2xl">
                                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />

                                    <blockquote className="relative z-10">
                                        <span className="text-4xl font-extrabold text-[var(--color-accent)] leading-none block mb-4">
                                            "
                                        </span>
                                        <p className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-6">
                                            {project.testimonial.quote}
                                        </p>
                                    </blockquote>

                                    <figcaption className="relative z-10 flex items-center gap-3 pt-5 border-t border-white/10">
                                        <div>
                                            <span className="block text-sm font-semibold text-white">
                                                {project.testimonial.name}
                                            </span>
                                            <span className="block text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mt-0.5 opacity-90">
                                                {project.testimonial.role}
                                            </span>
                                        </div>
                                    </figcaption>
                                </figure>
                            )}

                            {/* Demo notice */}
                            <div className="mt-8 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                                <p className="text-xs font-mono text-[var(--color-muted)] leading-relaxed">
                                    <span className="font-bold text-[var(--color-primary)] uppercase tracking-widest">
                                        Demo content
                                    </span>{' '}
                                    — this case study is placeholder copy for layout review. Replace
                                    the entry in <span className="text-[var(--color-secondary)]">src/data/projects.js</span> and confirm figures with the client before publishing.
                                </p>
                            </div>
                        </article>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-8">
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)] block mb-5">
                                    Project Details
                                </span>

                                <dl className="space-y-5">
                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Client
                                        </dt>
                                        <dd className="text-sm font-medium text-[var(--color-secondary)]">
                                            {project.client}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Category
                                        </dt>
                                        <dd className="text-sm font-medium text-[var(--color-secondary)]">
                                            {project.category}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                                            Timeline
                                        </dt>
                                        <dd className="text-sm font-medium text-[var(--color-secondary)]">
                                            {project.duration} · {project.year}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                                            Stack
                                        </dt>
                                        <dd className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
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
                                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                                    >
                                        Start a similar project <span>→</span>
                                    </Link>
                                    <Link
                                        href={`/projects?type=${encodeURIComponent(project.category)}`}
                                        className="border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-body)] text-[var(--color-secondary)] px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all"
                                    >
                                        More {project.category} work
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* RELATED PROJECTS */}
            <section className="bg-[var(--color-surface)] py-16 md:py-20 border-t border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                        Keep Exploring
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-10">
                        Related projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                href={`/projects/${item.id}`}
                                className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden flex flex-col transition-all hover:shadow-lg hover:border-[var(--color-primary)]/40"
                            >
                                <div className="relative overflow-hidden h-40">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/50 to-transparent" />
                                </div>

                                <div className="p-8 flex flex-col grow">
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-mono font-bold uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-xs font-mono text-[var(--color-muted)]">
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-[var(--color-muted)] text-sm leading-relaxed grow">
                                        {item.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ServicesCTA />
        </>
    );
};

export default ProjectDetailPage;
