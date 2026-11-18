import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/work';
import { RESEARCH } from '@/lib/research';
import { PageHero } from '@/components/common/PageHero';
import { ContactBand } from '@/components/common/ContactBand';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'What OMX Lab builds for each kind of organisation: hospitality, retail, heritage and tourism, education, community and events, and research partners.',
};

type Sector = {
  name: string;
  need: string;
  offer: string[];
  /** Slugs of projects (on /work) or research (on /research) that show it. */
  work: string[];
  research?: string[];
};

const SECTORS: Sector[] = [
  {
    name: 'Hotels, restaurants and cafes',
    need: 'Orders, kitchen, rooms and accounts in one place, instead of paper and three different apps.',
    offer: ['Point of sale and QR table ordering', 'Kitchen and bar display', 'Room bookings, folios and daily books'],
    work: ['kkkhane'],
  },
  {
    name: 'Shops and brands',
    need: 'A store customers trust, that the team can update without calling a developer.',
    offer: ['Storefront, cart and online payment', 'Product catalogue and order admin', 'Posters, print and video from one brand kit'],
    work: ['madeinnepal', 'naarisringaar', 'ecovera', 'gstradelink', 'techraj', 'contentkit'],
  },
  {
    name: 'Heritage, tourism and culture',
    need: 'Visitors who understand what they are looking at, and a record of how a place is changing.',
    offer: ['Guide apps with live 3D maps and 360° views', '3D models of monuments from a photo survey', 'Explanations that cite their sources'],
    work: ['saksi'],
    research: ['saksi-evidence'],
  },
  {
    name: 'Schools, colleges and institutes',
    need: 'Course portals, learning tools and scholarship information that students actually use.',
    offer: ['Course and admissions portals', 'Interactive lessons with an AI teacher', 'Student-facing discovery tools'],
    work: ['rsgrt', 'noteacher', 'scholarspoint', 'inovex'],
  },
  {
    name: 'Clubs, communities and events',
    need: 'Registration, check-in and engagement on the day, without spreadsheets.',
    offer: ['QR check-in and digital ID cards', 'Live leaderboards, quizzes and announcements', 'Organiser admin and auto-made posters'],
    work: ['mileplus', 'codefest'],
  },
  {
    name: 'Research partners',
    need: 'A team that can collect data, build prototypes and evaluate them honestly.',
    offer: ['Data-collection apps and pipelines', 'Prototype models and evaluation', 'Privacy-preserving system design'],
    work: ['unsaid'],
    research: ['humansign', 'nsl', 'raksha-net'],
  },
];

const chip =
  'inline-block text-[12px] text-text-primary bg-surface-container px-2 py-1 hover:bg-action hover:text-on-primary transition-colors';

export default function SolutionsPage() {
  const name = (slug: string) =>
    PROJECTS.find((p) => p.slug === slug)?.name ?? RESEARCH.find((r) => r.slug === slug)?.short ?? slug;

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="SOLUTIONS"
        title="Start from your kind of organisation."
        lead="Each block says what organisations like yours usually need, what we build for it, and where we have already done it."
      />
      <section className="w-full bg-paper-white border-b border-grid-hairline">
        <div className="max-w-[1600px] mx-auto px-space-md md:px-margin py-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-grid-hairline">
            {SECTORS.map((s, i) => (
              <article
                key={s.name}
                data-anim=""
                style={{ transitionDelay: `${(i % 2) * 60}ms` }}
                className="p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col gap-space-lg"
              >
                <div>
                  <h2 className="text-headline-md text-text-primary font-semibold">{s.name}</h2>
                  <p className="mt-space-xs text-body-compact text-on-surface-variant">{s.need}</p>
                </div>
                <div>
                  <h3 className="text-[12px] text-text-muted mb-space-xs">What we build</h3>
                  <ul className="space-y-1">
                    {s.offer.map((o) => (
                      <li key={o} className="text-body-compact text-text-primary flex gap-space-xs">
                        <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-signal-orange" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <h3 className="text-[12px] text-text-muted mb-space-xs">Done for</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {s.work.map((slug) => (
                      <li key={slug}>
                        <Link href={`/work#${slug}`} className={chip}>
                          {name(slug)}
                        </Link>
                      </li>
                    ))}
                    {(s.research ?? []).map((slug) => (
                      <li key={slug}>
                        <Link href={`/research#${slug}`} className={chip}>
                          {name(slug)} (research)
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </div>
  );
}
