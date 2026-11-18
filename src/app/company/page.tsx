import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/work';
import { RESEARCH } from '@/lib/research';
import { PageHero, StatRow } from '@/components/common/PageHero';
import { ContactBand } from '@/components/common/ContactBand';

export const metadata: Metadata = {
  title: 'Company',
  description: `${SITE.legalName}: a technology and research company from Bharatpur, Chitwan, founded in ${SITE.founded}.`,
};

const VALUES = [
  { title: 'Research', body: 'We learn before we build, and choose tools for good reasons.' },
  { title: 'Innovation', body: 'We use current, proven technology and keep improving it.' },
  { title: 'Impact', body: 'We measure success by what it does for the people who use it.' },
];

const HOW_WE_WORK = [
  { step: 'Listen', body: 'We start with who will use it and what they need to get done, not with a feature list.' },
  { step: 'Plan', body: 'You get a written plan with scope, timeline and price before any build starts.' },
  { step: 'Build in the open', body: 'You see working software early and often, on a real link, not only screenshots.' },
  { step: 'Hand over and stay', body: 'You own the code and the accounts. We keep it running and improve it if you want us to.' },
];

export default function CompanyPage() {
  const details: [string, string][] = [
    ['Registered name', SITE.legalName],
    ['Address', SITE.address],
    ['Registration no.', SITE.registrationNo],
    ['PAN', SITE.pan],
    ['Founded', String(SITE.founded)],
    ['Email', SITE.email],
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="COMPANY"
        title={SITE.legalName}
        lead={`A technology and research company from Bharatpur, Chitwan, founded in ${SITE.founded}. We build websites, apps and platforms, and research better ways to build them. Sākṣī is our product: we made it, we run it, and we answer for it.`}
      >
        <StatRow
          stats={[
            { label: 'Projects', value: PROJECTS.length },
            { label: 'Research', value: RESEARCH.length },
            { label: 'Founded', value: SITE.founded },
          ]}
        />
      </PageHero>

      <section className="w-full bg-studio-grey border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-space-lg">What we hold to</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                data-anim=""
                style={{ transitionDelay: `${i * 60}ms` }}
                className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline"
              >
                <h3 className="text-headline-md text-text-primary font-semibold">{v.title}</h3>
                <p className="mt-space-xs text-body-compact text-on-surface-variant">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-space-lg">How we work</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-grid-hairline">
            {HOW_WE_WORK.map((h, i) => (
              <li key={h.step} className="p-space-lg border-r border-b border-grid-hairline">
                <span className="text-[12px] text-text-muted tabular-nums">Step {i + 1}</span>
                <h3 className="mt-space-xs text-[18px] text-text-primary font-semibold">{h.step}</h3>
                <p className="mt-space-xs text-body-compact text-on-surface-variant">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-4">
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">Company details</h2>
            <p className="mt-space-xs text-body-compact text-on-surface-variant">
              Registered in Nepal. Use these details for contracts, invoices and tenders.
            </p>
          </div>
          <dl className="lg:col-span-8 border-t border-grid-hairline">
            {details.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs py-space-md border-b border-grid-hairline">
                <dt className="text-[13px] text-text-muted">{k}</dt>
                <dd className="sm:col-span-2 text-body-compact text-text-primary tabular-nums">
                  {k === 'Email' ? (
                    <a href={`mailto:${v}`} className="underline underline-offset-4 hover:text-action-hover">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand />
    </div>
  );
}
