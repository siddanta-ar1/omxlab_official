/* ---------------------------------------------------------------------------
   Search index

   The site is fully static, so search is too: a hand-kept index of everything
   the registry actually holds, matched in the browser. No network, no service,
   nothing to go stale at runtime.

   Entries carry a `kind` so results can be grouped the way the rest of the site
   groups things — by registry section rather than by relevance alone.
   --------------------------------------------------------------------------- */

import { PROJECTS, SERVICES } from '@/lib/work';
import { RESEARCH } from '@/lib/research';
import { SITE, START_PROJECT_HREF } from '@/lib/site';

export type SearchKind = 'Page' | 'Work' | 'Research';

export type SearchEntry = {
  title: string;
  href: string;
  kind: SearchKind;
  /** Shown under the title in the result row. */
  detail?: string;
  /** Extra terms that should match but need not be displayed. */
  keywords?: string;
  /** Product swatch class, where the entry has one. */
  swatch?: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  // --- Pages ---------------------------------------------------------------
  { kind: 'Page', title: 'Home', href: '/', detail: 'Technology and research from Bharatpur, Chitwan.', keywords: 'index start overview omx lab' },
  { kind: 'Page', title: 'Work', href: '/work', detail: 'Products and client projects we have shipped.', keywords: 'portfolio projects clients case studies' },
  { kind: 'Page', title: 'Services', href: '/#services', detail: 'What we build, and where we have done it.', keywords: 'services offer hire' },
  { kind: 'Page', title: 'Products', href: '/products', detail: 'Products we make and run ourselves.', keywords: 'saksi kkkhane unsaid noteacher focusift' },
  { kind: 'Page', title: 'Solutions', href: '/solutions', detail: 'What we build for each kind of organisation.', keywords: 'industries sectors hospitality retail education heritage events' },
  { kind: 'Page', title: 'Research', href: '/research', detail: 'Papers, proposals and research projects.', keywords: 'papers science humansign sign language' },
  { kind: 'Page', title: 'Company', href: '/company', detail: 'Who we are, how we work, company details.', keywords: 'about registration pan address contact' },
  { kind: 'Page', title: 'Start a project', href: START_PROJECT_HREF, detail: SITE.email, keywords: 'contact email hire quote' },

  // --- Work (generated from the work register) ----------------------------
  ...PROJECTS.map((p): SearchEntry => ({
    kind: 'Work',
    title: p.name,
    href: `/work#${p.slug}`,
    detail: p.kind === 'Client' ? `${p.sector} · for ${p.client}` : `${p.sector} · ${p.kind}`,
    keywords: [p.client, ...p.stack, ...p.points].join(' '),
  })),
  ...RESEARCH.map((r): SearchEntry => ({
    kind: 'Research',
    title: r.short,
    href: `/research#${r.slug}`,
    detail: `${r.status} · ${r.area}`,
    keywords: [r.title, r.question, ...r.methods].join(' '),
  })),
  ...SERVICES.map((s): SearchEntry => ({
    kind: 'Work',
    title: s.title,
    href: '/#services',
    detail: s.body,
    keywords: 'service services',
  })),
];

export type ScoredEntry = SearchEntry & { score: number };

/**
 * Rank the index against a query. Scoring is deliberately simple and
 * explainable: a title that starts with the query beats one that merely
 * contains it, which beats a keyword-only match. Every term must match
 * somewhere, so "rust sdk" narrows rather than widens.
 */
export function searchEntries(query: string, limit = 8): ScoredEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.map((entry) => {
    const title = entry.title.toLowerCase();
    const detail = (entry.detail ?? '').toLowerCase();
    const keywords = (entry.keywords ?? '').toLowerCase();
    const haystack = `${title} ${detail} ${keywords}`;

    if (!terms.every((t) => haystack.includes(t))) return { ...entry, score: 0 };

    let score = 0;
    if (title === q) score += 100;
    else if (title.startsWith(q)) score += 60;
    else if (title.includes(q)) score += 40;
    if (detail.includes(q)) score += 12;
    if (keywords.includes(q)) score += 8;
    // A partial multi-term match still ranks, just below whole-phrase hits.
    score += terms.filter((t) => title.includes(t)).length * 6;

    return { ...entry, score: score || 1 };
  })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
