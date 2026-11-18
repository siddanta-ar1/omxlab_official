import Link from 'next/link';
import { PROJECTS } from '@/lib/work';
import { ProjectCell } from '@/components/work/ProjectCard';

/** Home-page teaser: our three products, then a way into the full register. */
export function SelectedWork() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl flex flex-col md:flex-row md:items-end md:justify-between gap-space-md">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              SELECTED WORK
            </span>
            <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-tight">
              Built here, in use now.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
          >
            All {PROJECTS.length} projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline">
          {featured.map((project, i) => (
            <ProjectCell key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
