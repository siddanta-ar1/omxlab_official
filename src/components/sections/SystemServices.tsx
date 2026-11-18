import Link from 'next/link';
import type { IconType } from 'react-icons';
import { MdWeb, MdPhoneIphone, MdStorefront, MdGroups, MdLock, MdViewInAr } from 'react-icons/md';
import { SERVICES, projectsFor, type ServiceCode } from '@/lib/work';

const ICONS: Record<ServiceCode, IconType> = {
  SVC_01: MdWeb,
  SVC_02: MdPhoneIphone,
  SVC_03: MdStorefront,
  SVC_04: MdGroups,
  SVC_05: MdLock,
  SVC_06: MdViewInAr,
};

export function SystemServices() {
  return (
    <section id="services" className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl flex flex-col md:flex-row md:items-end md:justify-between gap-space-md">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              SERVICES
            </span>
            <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-tight">
              What we build.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
          >
            See the work behind each one
          </Link>
        </div>
        {/* Square cells, breakpoint-aware edge suppression: container carries the
            top/left hairlines, each cell carries its own right/bottom hairline. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.code];
            const proof = projectsFor(service.code).map((p) => p.name);
            return (
              <div
                key={service.code}
                data-anim=""
                style={{ transitionDelay: `${index * 60}ms` }}
                className="min-h-[300px] lg:aspect-square p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col justify-between gap-space-lg hover:bg-studio-grey transition-colors duration-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">{service.code}</span>
                  <Icon aria-hidden="true" className="text-text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">{service.title}</h3>
                  <p className="text-body-compact text-on-surface-variant">{service.body}</p>
                  {proof.length > 0 && (
                    <p className="mt-space-sm text-[12px] text-text-muted">
                      <span className="sr-only">Built for: </span>
                      {proof.join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SystemServices;
