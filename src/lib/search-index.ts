/* ---------------------------------------------------------------------------
   Search index

   The site is fully static, so search is too: a hand-kept index of everything
   the registry actually holds, matched in the browser. No network, no service,
   nothing to go stale at runtime.

   Entries carry a `kind` so results can be grouped the way the rest of the site
   groups things — by registry section rather than by relevance alone.
   --------------------------------------------------------------------------- */

export type SearchKind =
  | 'Page'
  | 'Module'
  | 'Instrument'
  | 'Solution'
  | 'Research'
  | 'Developer'
  | 'Company'
  | 'Dispatch';

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
  { kind: 'Page', title: 'Home', href: '/', detail: 'Frontier AI infrastructure for reality.', keywords: 'index start overview' },
  { kind: 'Page', title: 'Products', href: '/products', detail: 'The product registry and deployment tiers.', keywords: 'catalogue modules matrix' },
  { kind: 'Page', title: 'Solutions', href: '/solutions', detail: 'Deployment verticals and case studies.', keywords: 'industries sectors' },
  { kind: 'Page', title: 'Research', href: '/research', detail: 'Publications, datasets and the grant programme.', keywords: 'papers science' },
  { kind: 'Page', title: 'Developers', href: '/developers', detail: 'SDKs, API reference and the status register.', keywords: 'api docs sdk' },
  { kind: 'Page', title: 'Company', href: '/company', detail: 'Institutional profile, founder and open roles.', keywords: 'about team careers' },
  { kind: 'Page', title: 'News', href: '/news', detail: 'The dispatch registry.', keywords: 'press releases updates' },

  // --- Modules -------------------------------------------------------------
  { kind: 'Module', title: 'Helios', href: '/products', swatch: 'bg-swatch-helios', detail: 'MOD_01 — Identity and verification, sub-80ms.', keywords: 'biometric liveness credential eal6 iso 30107' },
  { kind: 'Module', title: 'Foundry', href: '/products', swatch: 'bg-swatch-foundry', detail: 'MOD_02 — Distributed training across 16,384 accelerators.', keywords: 'gpu cluster rdma tensor parallelism bf16 fp8' },
  { kind: 'Module', title: 'OMX Studio', href: '/products', swatch: 'bg-swatch-studio', detail: 'MOD_03 — Evaluation, drift and adversarial probing.', keywords: 'benchmark observability red team playground' },
  { kind: 'Module', title: 'Rune Agent', href: '/products', swatch: 'bg-swatch-rune', detail: 'MOD_04 — Autonomous code synthesis, formally verified.', keywords: 'codegen rust cuda microvm llvm' },
  { kind: 'Module', title: 'Sage Core', href: '/products', swatch: 'bg-swatch-sage', detail: 'MOD_05 — Foundation multimodal reasoning.', keywords: 'multimodal spatial audio telemetry tensor' },

  // --- Instruments ---------------------------------------------------------
  { kind: 'Instrument', title: 'OMX Synth 4', href: '/products', detail: 'Instrument catalogue.' },
  { kind: 'Instrument', title: 'Spectra Core', href: '/products', detail: 'Instrument catalogue.' },
  { kind: 'Instrument', title: 'Flow Array 200', href: '/products', detail: 'Instrument catalogue.' },
  { kind: 'Instrument', title: 'Calibrator Pro', href: '/products', detail: 'Instrument catalogue.' },
  { kind: 'Instrument', title: 'LIMS Bridge', href: '/products', detail: 'Instrument catalogue.' },
  { kind: 'Instrument', title: 'Deployment tiers', href: '/products', detail: 'Sandbox, Enterprise and Sovereign.', keywords: 'pricing plans isolation' },

  // --- Solutions -----------------------------------------------------------
  { kind: 'Solution', title: 'Infrastructure', href: '/solutions', swatch: 'bg-swatch-foundry', detail: 'Telemetry verification across foundry lines.', keywords: 'axis automation manufacturing' },
  { kind: 'Solution', title: 'Healthcare', href: '/solutions', swatch: 'bg-swatch-sage', detail: 'Sequence alignment at 18.4x throughput.', keywords: 'helvetia bio protein clinical hipaa' },
  { kind: 'Solution', title: 'Fintech', href: '/solutions', swatch: 'bg-swatch-helios', detail: 'Deterministic KYC under Tier-1 supervision.', keywords: 'zurich capital finma identity' },
  { kind: 'Solution', title: 'Defence & Sovereign', href: '/solutions', swatch: 'bg-swatch-rune', detail: 'Air-gapped deployment on customer premises.', keywords: 'enclave sovereign secure' },
  { kind: 'Solution', title: 'Compliance', href: '/solutions', detail: 'FINMA, HIPAA, SOC 2, ISO 30107-3, EAL6+.', keywords: 'certification regulatory audit' },

  // --- Research ------------------------------------------------------------
  { kind: 'Research', title: 'Publications', href: '/research', detail: 'The peer-reviewed registry.', keywords: 'papers neurips icml iclr nature' },
  { kind: 'Research', title: 'Benchmark datasets', href: '/research', detail: 'Released under open licence.', keywords: 'data corpus evaluation' },
  { kind: 'Research', title: 'Open Science Grant', href: '/research', detail: 'Funding for reproducible work.', keywords: 'funding grant academic' },
  { kind: 'Research', title: 'Protein folding', href: '/research', detail: 'Research area.', keywords: 'structure cryo-em molecular' },
  { kind: 'Research', title: 'Sequence matrix', href: '/research', detail: 'Research area.', keywords: 'alignment genomics variant calling' },

  // --- Developers ----------------------------------------------------------
  { kind: 'Developer', title: 'API reference', href: '/developers', detail: 'Endpoints, methods and rate limits.', keywords: 'rest http endpoint' },
  { kind: 'Developer', title: 'Python SDK', href: '/developers', swatch: 'bg-swatch-foundry', detail: 'The reference client.', keywords: 'pip install client' },
  { kind: 'Developer', title: 'Rust bindings', href: '/developers', swatch: 'bg-swatch-rune', detail: 'Zero-copy, for latency-bound callers.', keywords: 'cargo crate' },
  { kind: 'Developer', title: 'TypeScript SDK', href: '/developers', swatch: 'bg-swatch-studio', detail: 'Browser and server, fully typed.', keywords: 'npm node javascript' },
  { kind: 'Developer', title: 'Webhooks & events', href: '/developers', detail: 'Delivery, retries and signatures.', keywords: 'callback subscribe' },
  { kind: 'Developer', title: 'Status register', href: '/developers', detail: 'Uptime per module.', keywords: 'uptime health incident' },
  { kind: 'Developer', title: 'Quickstart', href: '/developers', detail: 'Authenticate and run a verification.', keywords: 'getting started example' },

  // --- Company -------------------------------------------------------------
  { kind: 'Company', title: 'Siddanta Sodari', href: '/company', swatch: 'bg-swatch-helios', detail: 'Founder. OMX Lab, established September 2026.', keywords: 'founder leadership who' },
  { kind: 'Company', title: 'Registry entry', href: '/company', swatch: 'bg-swatch-sage', detail: 'Kathmandu. 27.7172° N / 85.3240° E.', keywords: 'address location nepal facility hq' },
  { kind: 'Company', title: 'Open roles', href: '/company#open-roles', swatch: 'bg-swatch-foundry', detail: 'Six entries across engineering, research and design.', keywords: 'careers jobs hiring vacancy' },
  { kind: 'Company', title: 'Governance', href: '/company', detail: 'Ethics, biosafety, SOC 2 and data residency.', keywords: 'compliance ethics audit policy' },

  // --- Dispatches ----------------------------------------------------------
  { kind: 'Dispatch', title: 'Introducing Helios', href: '/news', detail: 'SYSTEM RELEASE · 03.14 — Autonomous Verification Matrix.', keywords: 'launch announcement' },
  { kind: 'Dispatch', title: 'Press kit', href: '/news', detail: 'Logo package, photography and brand guidelines.', keywords: 'media brand assets download' },
  { kind: 'Dispatch', title: 'Dispatch registry', href: '/news', detail: 'Every release, in order.', keywords: 'archive changelog history' },
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
