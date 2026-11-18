import { MdArrowOutward } from 'react-icons/md';
import type { Project } from '@/lib/work';

/** A featured project: one wide row with the summary, what it does and the stack. */
export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-anim=""
      style={{ transitionDelay: `${index * 60}ms` }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg py-space-2xl border-b border-grid-hairline"
    >
      <div className="lg:col-span-5">
        <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 text-[12px] text-text-muted mb-space-sm">
          <span>{project.kind === 'Product' ? 'Our product' : project.client}</span>
          <span aria-hidden="true">·</span>
          <span>{project.sector}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-headline-lg text-text-primary font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-space-sm text-body-lead text-on-surface-variant max-w-xl">{project.summary}</p>
        {project.href && <ProjectLink project={project} className="mt-space-md" />}
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-lg lg:pl-space-xl">
        <div>
          <h4 className="text-[12px] text-text-muted mb-space-xs">What it does</h4>
          <ul className="space-y-space-xs">
            {project.points.map((point) => (
              <li key={point} className="text-body-compact text-text-primary flex gap-space-xs">
                <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-signal-orange" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] text-text-muted mb-space-xs">Built with</h4>
          <StackList stack={project.stack} />
        </div>
      </div>
    </article>
  );
}

/** A project in the register grid. */
export function ProjectCell({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-anim=""
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
      className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col gap-space-md hover:bg-studio-grey transition-colors duration-100"
    >
      <div className="flex items-center justify-between text-[12px] text-text-muted">
        <span>{project.sector}</span>
        <span>{project.kind === 'Client' ? 'Client' : project.kind}</span>
      </div>
      <div>
        <h3 className="text-headline-md text-text-primary font-semibold">{project.name}</h3>
        {project.kind === 'Client' && project.client !== project.name && (
          <p className="text-[12px] text-text-muted mt-1">For {project.client}</p>
        )}
        <p className="mt-space-sm text-body-compact text-on-surface-variant">{project.summary}</p>
      </div>
      <div className="mt-auto flex flex-col gap-space-sm">
        <StackList stack={project.stack} />
        {project.href && <ProjectLink project={project} />}
      </div>
    </article>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {stack.map((item) => (
        <li key={item} className="text-[12px] text-text-primary bg-surface-container px-2 py-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover ${className}`}
    >
      {project.linkLabel ?? 'Visit'}
      <MdArrowOutward aria-hidden="true" size={16} />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
