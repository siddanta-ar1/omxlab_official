/* ---------------------------------------------------------------------------
   Research register: OMX Lab's real research and R&D.

   Each entry is drawn from the project's own paper, proposal or repository.
   Status is stated plainly: a proposal is a proposal, a prototype is a
   prototype. No invented results, venues or DOIs.
   --------------------------------------------------------------------------- */

export type ResearchStatus = 'Paper' | 'Proposal' | 'Prototype' | 'In use' | 'Open source';

export type ResearchProject = {
  slug: string;
  title: string;
  /** Short name used in lists and chips. */
  short: string;
  area: string;
  status: ResearchStatus;
  year: string;
  /** Where it was written for or shown, if anywhere. */
  context?: string;
  question: string;
  approach: string[];
  outcome: string;
  methods: string[];
  href?: string;
  linkLabel?: string;
};

export const RESEARCH: ResearchProject[] = [
  {
    slug: 'humansign',
    short: 'HumanSign',
    title: 'HumanSign: a privacy-preserving cryptographic notary for process verification via keystroke dynamics',
    area: 'Behavioural biometrics',
    status: 'Paper',
    year: '2025–26',
    context: 'Siddanta Sodari, Birendra Multiple Campus, Bharatpur',
    question:
      'Text written by a language model now reads like a person’s. Can we prove that a human wrote something by verifying how it was typed, without recording what was typed?',
    approach: [
      'Measure hold time and flight time for every key, plus burst variance and cognitive pauses, entirely in the browser',
      'Track key-event timing only, never characters, so the system cannot act as a keylogger',
      'Bind the timing data to the writing session cryptographically, so scripts cannot forge the rhythm afterwards',
      'Collect paired data in two modes: copy-typing a given text and composing original text',
    ],
    outcome:
      'A working notary and data-collection pipeline that separates the steady cadence of copied text from the bursty rhythm of original writing.',
    methods: ['Keystroke dynamics', 'Client-side telemetry', 'Session-bound signatures', 'Next.js', 'Supabase', 'Python ML'],
    href: 'https://github.com/siddanta-ar1/human-sign-notary',
    linkLabel: 'Code on GitHub',
  },
  {
    slug: 'nsl',
    short: 'Nepali Sign Language',
    title: 'Signer-independent Nepali Sign Language recognition from keypoints',
    area: 'Accessibility AI',
    status: 'Proposal',
    year: '2026',
    context: 'AIDA 2026 Research Challenge · Sign Recognition & Word Understanding',
    question:
      'Nepali Sign Language has little annotated video. How do we build a recogniser that keeps working for signers, cameras and rooms it never saw in training, on an ordinary phone?',
    approach: [
      'Recognise signs from hand, body and face keypoints rather than pixels, removing background and clothing shortcuts',
      'A small multi-stream graph network or transformer over joints, bones and motion, light enough for real time on a mid-range phone',
      'Evaluate on signers held out from training, reporting worst-signer F1 as well as the average',
      'When the model is unsure, ask the signer to repeat instead of guessing',
    ],
    outcome:
      'A full method and evaluation plan, with ablations, that treats robustness for new signers as the main goal rather than a single headline score.',
    methods: ['MediaPipe Holistic', 'ST-GCN', 'Transformers', 'Signer-independent evaluation', 'Macro-F1'],
  },
  {
    slug: 'saksi-evidence',
    short: 'Sākṣī',
    title: 'Heritage sites as conservation evidence: repeat photography and 3D from a 360° survey',
    area: 'Heritage documentation',
    status: 'In use',
    year: '2026',
    context: 'Rising Star Innovation semi-finalist, ICT Award 2026',
    question:
      'Can visitors standing at fixed viewpoints build a record of how a heritage site changes, one that a site’s custodians can act on?',
    approach: [
      'Fixed viewpoints where visitors line up the phone and photograph the same view again, months or years apart',
      'A 360° photographic survey of each site, used to model its monuments in 3D and check every model against the photographs',
      'Explanations that quote only the sources they cite',
    ],
    outcome:
      'Live in the Sākṣī app: Swayambhu, Pashupatinath, Lumbini and Basantapur modelled in 3D and shown on a live map, with 360° views.',
    methods: ['Repeat photography', '360° survey', 'Blender', 'MapLibre', 'Retrieval with citations'],
    href: 'https://saksi.omxlab.site',
    linkLabel: 'saksi.omxlab.site',
  },
  {
    slug: 'unsaid',
    short: 'UNSAID',
    title: 'Verifiable privacy for personal AI: attested enclaves and on-chain consent receipts',
    area: 'Privacy engineering',
    status: 'In use',
    year: '2026',
    question:
      'People confide in AI apps, and those apps store what they hear. Can a user check, rather than trust, that nobody read their entries?',
    approach: [
      'Encrypt entries on the device, so the server only ever stores ciphertext',
      'Run the AI inside an Intel TDX enclave whose attestation the client verifies',
      'Write a content-free consent receipt to Solana each time an entry is accessed',
    ],
    outcome: 'A live journal at myunsaid.tech, where any receipt can be checked publicly.',
    methods: ['Web Crypto', 'Intel TDX attestation', 'Solana', 'Next.js'],
    href: 'https://myunsaid.tech',
    linkLabel: 'myunsaid.tech',
  },
  {
    slug: 'k-reels',
    short: 'K’s reels',
    title: 'An approval-gated pipeline for AI-animated short series',
    area: 'Generative media',
    status: 'In use',
    year: '2026',
    question:
      'Can a small team make a recurring animated series with consistent characters, keeping a human in charge of every step that costs money or goes public?',
    approach: [
      'A cast of nine characters designed once and registered for consistent generation across episodes',
      'Scripts with a shot list, sound effects and overlays, checked before any video is generated',
      'Generated shots assembled locally into 1080×1920 reels with loudness at −14 LUFS',
      'Publishing lands as a draft on the Facebook Page, so a person approves every post',
    ],
    outcome: '12 episodes made and 10 reels posted to the “K’s animations” Facebook Page in October 2026, alongside comic posts.',
    methods: ['Claude Code', 'Kling 3.0', 'FFmpeg', 'Graph API', 'Python'],
  },
  {
    slug: 'contentkit',
    short: 'contentkit',
    title: 'contentkit: an offline, open-source content studio',
    area: 'Generative media',
    status: 'Open source',
    year: '2026',
    question: 'Can posters, print files and branded video for clients be made from one brand kit, offline, with no subscriptions and no uploads?',
    approach: [
      'Seven grid layouts that adapt to every social size and to A-series and US print',
      'A typesetting engine with kerning-aware tracking and balanced line breaks',
      'Print-ready CMYK PDFs with bleed and crop marks',
      'Branded video with captions inside platform safe zones, colour looks and −14 LUFS masters',
    ],
    outcome: 'Published on GitHub and used to produce OMX Lab’s own client content.',
    methods: ['Python', 'FFmpeg', 'YAML recipes', 'CMYK print'],
    href: 'https://github.com/siddanta-ar1/contentkit',
    linkLabel: 'Code on GitHub',
  },
  {
    slug: 'raksha-net',
    short: 'Raksha-Net',
    title: 'Raksha-Net: resilient emergency communication without infrastructure',
    area: 'Resilient networks',
    status: 'Prototype',
    year: '2026',
    question: 'When towers fail after a disaster, how can an SOS still reach rescuers?',
    approach: [
      'A self-healing mesh that sends relay nodes, such as drones, to bridge broken links',
      '“Data mules”: moving volunteers who carry messages between disconnected groups',
      'A dead man’s switch that sends an SOS when a person stops responding',
    ],
    outcome: 'An interactive simulator showing Bluetooth and Wi-Fi ranges, packet relays and rescue deployment.',
    methods: ['Mesh networking', 'Delay-tolerant networking', 'Simulation', 'JavaScript'],
    href: 'https://github.com/siddanta-ar1/Raksha-Net-Simulation',
    linkLabel: 'Code on GitHub',
  },
];

export type ResearchArea = { name: string; body: string; slugs: string[] };

export const RESEARCH_AREAS: ResearchArea[] = [
  { name: 'Behavioural biometrics', body: 'Proving human authorship from how people type, without recording what they type.', slugs: ['humansign'] },
  { name: 'Accessibility AI', body: 'Sign language recognition that holds up for new signers on ordinary phones.', slugs: ['nsl'] },
  { name: 'Heritage documentation', body: 'Repeat photography, 360° survey and 3D models as evidence for conservation.', slugs: ['saksi-evidence'] },
  { name: 'Privacy engineering', body: 'Systems users can verify: on-device encryption, attested enclaves, public receipts.', slugs: ['unsaid', 'humansign'] },
  { name: 'Generative media', body: 'Pipelines that make series, posters and video at scale with a person approving each step.', slugs: ['k-reels', 'contentkit'] },
  { name: 'Resilient networks', body: 'Getting a message through when the infrastructure is gone.', slugs: ['raksha-net'] },
];
