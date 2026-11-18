import Link from 'next/link';
import type { IconType } from 'react-icons';
import { MdWeb, MdPhoneIphone, MdStorefront, MdGroups, MdLock, MdViewInAr } from 'react-icons/md';
import { SERVICES, type ServiceCode } from '@/lib/work';

const ICONS: Record<ServiceCode, IconType> = {
  SVC_01: MdWeb,
  SVC_02: MdPhoneIphone,
  SVC_03: MdStorefront,
  SVC_04: MdGroups,
  SVC_05: MdLock,
  SVC_06: MdViewInAr,
};

/* Each service reads top to bottom as: what it is → what you get → where we
   have already done it. The proof links land on the matching project. */
export function SystemServices() {
  return (
    <section id="services" className="w-full bg-paper-white py-space-3xl border-b border-grid-hairline scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl flex flex-col md:flex-row md:items-end md:justify-between gap-space-md">
          <div>
            <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
              SERVICES
            </span>
            <h2 className="text-headline-xl-mobile sm:text-headline-xl text-text-primary tracking-tight">
              What we build.
            </h2>
            <p className="mt-space-sm max-w-xl text-body-compact text-on-surface-variant">
              Six services, each one backed by products we have shipped. Pick the one closest to your problem and
              follow the links to see it working.
            </p>
          </div>
          <Link
            href="/work"
            className="text-body-compact text-text-primary underline underline-offset-4 hover:text-action-hover"
          >
            See all our work
          </Link>
        </div>
        {/* Container carries the top/left hairlines, each cell its own right/bottom. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.code];
            return (
              <div
                key={service.code}
                data-anim=""
                style={{ transitionDelay: `${(index % 3) * 60}ms` }}
                className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col gap-space-lg hover:bg-studio-grey transition-colors duration-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">{service.code}</span>
                  <Icon aria-hidden="true" className="text-text-primary" size={22} />
                </div>
                <div>
                  <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">{service.title}</h3>
                  <p className="text-body-compact text-on-surface-variant">{service.body}</p>
                </div>
                <div>
                  <h4 className="text-[12px] text-text-muted mb-space-xs">You get</h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((d) => (
                      <li key={d} className="text-body-compact text-text-primary flex gap-space-xs">
                        <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-signal-orange" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <h4 className="text-[12px] text-text-muted mb-space-xs">Done for</h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {service.proof.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="inline-block text-[12px] text-text-primary bg-surface-container px-2 py-1 hover:bg-action hover:text-on-primary transition-colors"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
