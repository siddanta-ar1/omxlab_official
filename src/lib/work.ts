/* ---------------------------------------------------------------------------
   Work register: what OMX Lab has actually built and shipped.

   Every entry is a real project. `href` is set only where the public site was
   checked and answering (Nov 2026); everything else is listed without a link
   rather than with a dead one. No invented metrics: the facts below come from
   each project's own repository.
   --------------------------------------------------------------------------- */

export type ServiceCode = 'SVC_01' | 'SVC_02' | 'SVC_03' | 'SVC_04' | 'SVC_05' | 'SVC_06';

export type Project = {
  slug: string;
  name: string;
  /** Who it was built for; "OMX Lab" for our own products. */
  client: string;
  kind: 'Product' | 'Client' | 'Open source';
  sector: string;
  year: string;
  summary: string;
  /** Three to four concrete things it does. */
  points: string[];
  stack: string[];
  services: ServiceCode[];
  href?: string;
  /** Short label for the link, e.g. the bare domain. */
  linkLabel?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: 'saksi',
    name: 'Sākṣī',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Heritage & tourism',
    year: '2026',
    summary:
      'A real-time guide to Nepal’s heritage sites: a live 3D map you can walk, 360° views that explain what you are looking at, and answers that cite their sources. Rising Star Innovation semi-finalist, ICT Award 2026.',
    points: [
      '360° photographs and 3D models open inside the live map',
      'Swayambhu, Pashupatinath, Lumbini and Basantapur modelled from our own survey',
      'Walking view that follows the real paths of each site',
      'Works offline, in English and Nepali',
    ],
    stack: ['Expo', 'React Native', 'Supabase', 'MapLibre', 'Blender'],
    services: ['SVC_02', 'SVC_05', 'SVC_06'],
    href: 'https://saksi.omxlab.site',
    linkLabel: 'saksi.omxlab.site',
    featured: true,
  },
  {
    slug: 'kkkhane',
    name: 'KKKhane',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Hospitality SaaS',
    year: '2026',
    summary:
      'Multi-tenant hotel and restaurant management for Nepal. One deployment serves many businesses, each with its own point of sale, menu, kitchen and books.',
    points: [
      'Point of sale, QR table ordering and a kitchen and bar display',
      'Room bookings with folio billing',
      'Day book, cash book, bank book and shift reconciliation',
      'Realtime updates across every screen in the venue',
    ],
    stack: ['Next.js 16', 'Supabase', 'Postgres', 'Realtime'],
    services: ['SVC_01'],
    href: 'https://kkkhane.com',
    linkLabel: 'kkkhane.com',
    featured: true,
  },
  {
    slug: 'unsaid',
    name: 'UNSAID',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Privacy & AI',
    year: '2026',
    summary:
      'A private journal with an AI that can’t read your secrets. Entries are encrypted on the device, the AI runs in an attested hardware enclave, and every access leaves a public receipt on Solana.',
    points: [
      'Client-side encryption: the server never sees plain text',
      'AI reflection inside an Intel TDX enclave, attested',
      'A content-free consent receipt on Solana for every access',
    ],
    stack: ['Next.js', 'Web Crypto', 'Intel TDX', 'Solana'],
    services: ['SVC_05'],
    href: 'https://myunsaid.tech',
    linkLabel: 'myunsaid.tech',
    featured: true,
  },
  {
    slug: 'mileplus',
    name: 'Mile Plus Run Club',
    client: 'Mile Plus RC, Chitwan',
    kind: 'Client',
    sector: 'Community & sport',
    year: '2026',
    summary:
      'Club website and runner app. Runners join a run, check in with the code read out at the meetup, and track kilometres and streaks; organisers run the club from one admin.',
    points: [
      'Self check-in with a 4-digit code, attendance and walk-ins',
      'Kilometres, runs and Saturday streaks on a leaderboard',
      'An Instagram poster generated for every run',
    ],
    stack: ['Next.js 16', 'Supabase'],
    services: ['SVC_04'],
  },
  {
    slug: 'codefest',
    name: 'Codefest Chitwan 2026',
    client: 'Code for Change Chitwan',
    kind: 'Client',
    sector: 'Events',
    year: '2026',
    summary:
      'Site and member app for a three-day hackathon at Forbes College, Bharatpur. Installable on phones and closed by design: only registered participants get an account.',
    points: [
      'Digital ID card with a scannable QR, colour-coded by category',
      'Timed quizzes and games with a live leaderboard',
      'Live schedule and announcements targeted by category',
    ],
    stack: ['Next.js', 'Supabase', 'PWA'],
    services: ['SVC_04'],
  },
  {
    slug: 'madeinnepal',
    name: 'Made in Nepal Stores',
    client: 'Made in Nepal Stores',
    kind: 'Client',
    sector: 'E-commerce',
    year: '2026',
    summary: 'An online store for authentic handmade Nepali products: clothing, handicrafts, jewellery and gifts from Nepali makers, delivered in Nepal and shipped worldwide.',
    points: ['Storefront with catalogue and product pages', 'Online checkout and payments', 'Store admin, sitemap and social previews'],
    stack: ['Next.js', 'Supabase', 'Stripe'],
    services: ['SVC_03'],
    href: 'https://www.madeinnepalstores.com',
    linkLabel: 'madeinnepalstores.com',
  },
  {
    slug: 'naarisringaar',
    name: 'Naari Sringaar',
    client: 'Naari Sringaar',
    kind: 'Client',
    sector: 'E-commerce',
    year: '2026',
    summary: 'A fashion store built for the Nepali market, mobile first, from browsing to payment.',
    points: ['Categories, search, wishlist and a size guide', 'Accounts, cart and online payment', 'Admin for the store team'],
    stack: ['Next.js', 'Supabase'],
    services: ['SVC_03'],
    href: 'https://www.naarisringaar.com.np',
    linkLabel: 'naarisringaar.com.np',
  },
  {
    slug: 'gstradelink',
    name: 'GSTradeLink',
    client: 'GSTradeLink, Bharatpur',
    kind: 'Client',
    sector: 'Industrial trade',
    year: '2026',
    summary: 'Website and product catalogue for digital scales and beam balances, spare parts, calibration and repair. Maintained by OMX Lab.',
    points: ['Product catalogue with photos', 'Google sign-in for customers', 'Every push to main deploys to production'],
    stack: ['Next.js 16', 'Supabase'],
    services: ['SVC_03'],
    href: 'https://www.gstradelink.com.np',
    linkLabel: 'gstradelink.com.np',
  },
  {
    slug: 'techraj',
    name: 'Techraj Digital Shop',
    client: 'Techraj',
    kind: 'Client',
    sector: 'E-commerce',
    year: '2026',
    summary: 'A marketplace for instant digital products in Nepal: game top-ups, gift cards and streaming subscriptions, over 100 products.',
    points: ['Catalogue of 100+ digital products', 'Instant delivery after purchase', 'Mobile-first storefront'],
    stack: ['Next.js', 'TypeScript'],
    services: ['SVC_03'],
    href: 'https://www.techrajshop.com',
    linkLabel: 'techrajshop.com',
  },
  {
    slug: 'contentkit',
    name: 'contentkit',
    client: 'OMX Lab',
    kind: 'Open source',
    sector: 'Brand & content',
    year: '2026',
    summary:
      'An open-source content studio: grid-based posters and carousels, print-ready CMYK PDFs and branded video with captions and sound, all from short recipes. Runs offline, with no subscriptions and no watermarks.',
    points: ['Print export with bleed, crop marks and CMYK', 'One colour system for stills and video', 'Loudness-matched video masters'],
    stack: ['Python', 'FFmpeg'],
    services: ['SVC_06'],
    href: 'https://github.com/siddanta-ar1/contentkit',
    linkLabel: 'GitHub',
  },
  {
    slug: 'rsgrt',
    name: 'RSGRT Institute',
    client: 'RSGRT Institute',
    kind: 'Client',
    sector: 'Education',
    year: '2026',
    summary: 'Course portal for training in GIS, remote sensing and data science: ArcGIS, QGIS, Google Earth Engine, Python and R.',
    points: ['Course catalogue with a page per course', 'Content managed in Supabase', '3D and motion on the landing page'],
    stack: ['Next.js 15', 'Supabase', 'Three.js'],
    services: ['SVC_01'],
  },
  {
    slug: 'scholarspoint',
    name: 'ScholarsPoint',
    client: 'ScholarsPoint',
    kind: 'Client',
    sector: 'Education',
    year: '2026',
    summary: 'Scholarship discovery for students: listings from universities worldwide, filtered by country, degree and deadline.',
    points: ['Filters by location, degree level and deadline', 'Deadline tracking', 'Categories such as fully funded, Master’s and PhD'],
    stack: ['Next.js', 'Supabase'],
    services: ['SVC_01'],
  },
  {
    slug: 'inovex',
    name: 'Inovex',
    client: 'Inovex',
    kind: 'Client',
    sector: 'Youth & technology',
    year: '2026',
    summary: 'Website for a youth technology organisation: programmes, career guidance, research and community initiatives.',
    points: ['Programmes and initiatives', 'Responsive on phones and desktops'],
    stack: ['React', 'Vite'],
    services: ['SVC_01'],
  },
  {
    slug: 'krixnova',
    name: 'Krixnova',
    client: 'OMX Digital',
    kind: 'Client',
    sector: 'Marketing agency',
    year: '2026',
    summary: 'Website for a creative digital marketing agency that helps businesses grow through marketing strategy and content.',
    points: ['Services and contact', 'Responsive on phones and desktops'],
    stack: ['Next.js', 'TypeScript'],
    services: ['SVC_01', 'SVC_06'],
    href: 'https://krixnova.vercel.app',
    linkLabel: 'krixnova.vercel.app',
  },
  {
    slug: 'noteacher',
    name: 'NOTEacher',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Education',
    year: '2026',
    summary:
      'Lessons told as stories instead of textbook chapters: scroll-driven explanations, hands-on simulations and an AI teacher, on the web and Android.',
    points: [
      'Scrollytelling lessons with a hook, a guide and a resolution',
      '15+ interactive simulations, from anchoring bias to Monte Carlo',
      'An AI teacher, and handwritten answers read by a vision model',
      'Streaks, badges and a leaderboard',
    ],
    stack: ['Next.js 16', 'GSAP', 'Capacitor', 'OpenRouter', 'Gemini Vision'],
    services: ['SVC_01', 'SVC_05'],
  },
  {
    slug: 'focusift',
    name: 'FocuSift',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Productivity',
    year: '2026',
    summary:
      'A focus app that makes you earn your break: name what you are working on, set a time, and your reward link opens only when the session is done.',
    points: ['Named, timed focus sessions', 'A reward link unlocked on completion', 'Streaks, history and reminders'],
    stack: ['Expo', 'React Native', 'Supabase'],
    services: ['SVC_02'],
  },
  {
    slug: 'k-reels',
    name: 'K’s animations',
    client: 'OMX Lab',
    kind: 'Product',
    sector: 'Generative media',
    year: '2026',
    summary:
      'A recurring animated comedy series made with an approval-gated AI pipeline: a consistent cast, scripted shots, local assembly and drafts a person approves.',
    points: ['A cast of nine characters kept consistent across episodes', '12 episodes made; 10 reels posted in October 2026', 'Comic posts from the same cast'],
    stack: ['Claude Code', 'Kling 3.0', 'FFmpeg', 'Graph API'],
    services: ['SVC_06'],
  },
  {
    slug: 'ecovera',
    name: 'EcoVera',
    client: 'EcoVera Artemisia BioSolution',
    kind: 'Client',
    sector: 'Agribusiness',
    year: '2026',
    summary:
      'Online store for a sustainable agribusiness that turns underused rural land into Artemisia products: herbal handwash, incense and moxa.',
    points: ['Shop, product pages and accounts', 'Ingredient and story pages', 'Shipping, returns and policy pages'],
    stack: ['Next.js', 'TypeScript'],
    services: ['SVC_03'],
    href: 'https://eco-vera.vercel.app',
    linkLabel: 'eco-vera.vercel.app',
  },
];

export type ProofRef = { label: string; href: string };

export type Service = {
  code: ServiceCode;
  title: string;
  body: string;
  /** What a client walks away with. */
  deliverables: string[];
  /** Where the work behind it lives, on /work or /research. */
  proof: ProofRef[];
};

const w = (slug: string, label: string): ProofRef => ({ label, href: `/work#${slug}` });
const r = (slug: string, label: string): ProofRef => ({ label, href: `/research#${slug}` });

export const SERVICES: Service[] = [
  {
    code: 'SVC_01',
    title: 'Web platforms and SaaS',
    body: 'Products that run a business: multi-tenant apps, dashboards, portals and learning platforms.',
    deliverables: ['Product design and build', 'Accounts, roles and admin', 'Hosting, monitoring and handover'],
    proof: [w('kkkhane', 'KKKhane'), w('noteacher', 'NOTEacher'), w('rsgrt', 'RSGRT Institute'), w('scholarspoint', 'ScholarsPoint')],
  },
  {
    code: 'SVC_02',
    title: 'Mobile apps',
    body: 'Android and iOS apps in React Native and Expo that work offline and update without a store release.',
    deliverables: ['Android and iOS from one codebase', 'Offline data, maps, camera, notifications', 'Store release and over-the-air updates'],
    proof: [w('saksi', 'Sākṣī'), w('focusift', 'FocuSift')],
  },
  {
    code: 'SVC_03',
    title: 'E-commerce and catalogues',
    body: 'Stores and product catalogues for Nepali businesses, from first product photo to paid order.',
    deliverables: ['Storefront, cart and checkout', 'Online payments and order admin', 'Search-friendly product pages'],
    proof: [w('madeinnepal', 'Made in Nepal Stores'), w('naarisringaar', 'Naari Sringaar'), w('ecovera', 'EcoVera'), w('gstradelink', 'GSTradeLink'), w('techraj', 'Techraj')],
  },
  {
    code: 'SVC_04',
    title: 'Community and event apps',
    body: 'Installable apps for clubs, hackathons and events, ready before the first participant arrives.',
    deliverables: ['QR check-in and digital ID cards', 'Live leaderboards and quizzes', 'Announcements and organiser admin'],
    proof: [w('mileplus', 'Mile Plus Run Club'), w('codefest', 'Codefest Chitwan')],
  },
  {
    code: 'SVC_05',
    title: 'Applied AI and privacy',
    body: 'AI that cites its sources and respects its users, built on our own research.',
    deliverables: ['Assistants grounded in your documents', 'Recognition models for signs and behaviour', 'Encryption, enclaves and verifiable receipts'],
    proof: [w('unsaid', 'UNSAID'), r('humansign', 'HumanSign'), r('nsl', 'Sign language AI'), w('noteacher', 'NOTEacher')],
  },
  {
    code: 'SVC_06',
    title: '3D, maps and content',
    body: '3D and 360° capture of real places, interactive maps, and print and video made from one brand system.',
    deliverables: ['3D models and 360° tours', 'Interactive maps', 'Posters, print files and video pipelines'],
    proof: [w('saksi', 'Sākṣī'), w('contentkit', 'contentkit'), w('k-reels', 'K’s animations')],
  },
];

export function projectsFor(code: ServiceCode): Project[] {
  return PROJECTS.filter((p) => p.services.includes(code));
}
