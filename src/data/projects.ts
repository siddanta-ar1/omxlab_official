// Case studies shown on /projects and /projects/:id.
// Images are Unsplash placeholders, matching the convention already used in
// AboutPage and ViewFromInside. Swap for real project imagery before launch.
export const projectCategories = [
    'Web Platform',
    'Mobile',
    'AI & Data',
    'Cloud',
];

export const projects = [
    {
        id: 'qfc-merchant-portal',
        title: 'Merchant Settlement Portal',
        client: 'QFC',
        category: 'Web Platform',
        year: '2026',
        duration: '5 months',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
        summary:
            'A self-service portal replacing a spreadsheet-and-email settlement process for several hundred merchants, cutting reconciliation from days to minutes.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        featured: true,
        stats: [
            { value: '92%', label: 'Reduction in reconciliation time' },
            { value: '340+', label: 'Merchants onboarded' },
            { value: '99.9%', label: 'Uptime since launch' },
        ],
        challenge: [
            'Settlement ran on a weekly spreadsheet exchanged over email. Every merchant query meant someone manually tracing a transaction across three systems, and disputes routinely took a week to resolve.',
            'The finance team had built genuine expertise into that spreadsheet, so a replacement had to reproduce a decade of accumulated edge cases rather than impose a clean-slate model that would quietly lose them.',
        ],
        approach: [
            'We started by shadowing the finance team for two weeks and documenting every exception they handled by hand. That produced a domain model with the awkward cases built in, not bolted on afterwards.',
            'The portal was delivered in three increments, each running alongside the spreadsheet process so the team could compare outputs and catch discrepancies before cutover. Reconciliation logic was covered by a property-based test suite seeded with two years of historical data.',
            'We kept the existing accounting system as the source of truth and integrated against it, which meant no data migration risk and a rollback path that stayed open through the whole rollout.',
        ],
        outcome: [
            'Reconciliation moved from a multi-day manual process to an automated run completing in under ten minutes. Merchant disputes are now self-served through the portal, which removed the majority of inbound finance queries.',
            'The finance team owns the rules engine directly — they can add settlement rules without an engineering ticket, which was the single change they valued most at handover.',
        ],
        testimonial: {
            quote: 'The first thing they did was learn our process instead of telling us it was wrong. That is why the rollout was boring, which is exactly what we wanted.',
            name: 'Finance Lead',
            role: 'QFC',
        },
    },
    {
        id: 'mistrivai-field-app',
        title: 'Field Technician Mobile App',
        client: 'Mistri Vai',
        category: 'Mobile',
        year: '2025',
        duration: '4 months',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
        summary:
            'An offline-first Android and iOS app for technicians working in areas with unreliable connectivity, with job dispatch, photo capture, and sync-on-reconnect.',
        tags: ['React Native', 'SQLite', 'Expo', 'Firebase'],
        stats: [
            { value: '100%', label: 'Job completion offline' },
            { value: '2,100+', label: 'Jobs logged per month' },
            { value: '4.6★', label: 'Average technician rating' },
        ],
        challenge: [
            'Technicians worked in locations where connectivity ranged from patchy to absent, but the existing tool assumed a live connection. Jobs completed in the field were routinely re-entered from paper notes hours later, and photos were frequently lost.',
            'Any solution had to work fully offline for an entire shift and then reconcile cleanly, including the case where two technicians edited the same job record while both were disconnected.',
        ],
        approach: [
            'We built an offline-first data layer on SQLite with an explicit sync protocol rather than treating offline as an error state. Every write is queued locally and applied optimistically, so the app behaves identically whether or not there is signal.',
            'Conflicts are resolved with last-write-wins on scalar fields and union-merge on append-only collections such as photos and notes, which matched how technicians actually work. Anything genuinely ambiguous surfaces to a dispatcher rather than being silently resolved.',
            'Photos compress on device and upload opportunistically in the background, so a technician never waits on a transfer to close a job.',
        ],
        outcome: [
            'Technicians now complete and close jobs entirely in the field regardless of connectivity, and duplicate data entry has been eliminated. Photo loss, previously a weekly complaint, has not recurred since launch.',
            'The dispatch team gained accurate completion timestamps for the first time, which turned out to be more valuable than expected for scheduling.',
        ],
        testimonial: {
            quote: 'Our technicians stopped carrying notebooks. That is the whole review.',
            name: 'Operations Manager',
            role: 'Mistri Vai',
        },
    },
    {
        id: 'sagea-document-intelligence',
        title: 'Document Intelligence Pipeline',
        client: 'SAGEA',
        category: 'AI & Data',
        year: '2025',
        duration: '3 months',
        image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1600&q=80',
        summary:
            'An extraction pipeline turning fifteen years of unstructured PDF reports into a queryable dataset, with a human review path for low-confidence output.',
        tags: ['Python', 'Claude API', 'pgvector', 'FastAPI'],
        stats: [
            { value: '18k', label: 'Documents processed' },
            { value: '94%', label: 'Extraction accuracy' },
            { value: '11%', label: 'Routed to human review' },
        ],
        challenge: [
            'Fifteen years of reports existed only as PDFs, many scanned, with layouts that changed several times across the archive. Answering a basic historical question meant someone reading documents for a day.',
            'Accuracy mattered more than automation rate — a confidently wrong figure in a published report would be far more costly than a document flagged for a human to check.',
        ],
        approach: [
            'We built the evaluation harness first, with a 400-document ground-truth set labelled by domain experts at SAGEA. Every subsequent change was measured against it, which meant we could tell improvement from noise.',
            'The pipeline recovers document structure before extraction — title, date, section hierarchy, report type — because on this archive metadata recovery moved accuracy far more than any model or chunking change. This mirrors what we published in our research on enterprise retrieval.',
            'Extractions carry a calibrated confidence score, and anything below threshold routes to a review queue rather than entering the dataset. The threshold is a tunable business decision, not a hidden constant.',
        ],
        outcome: [
            'The archive is now queryable, and questions that took a day of reading are answered in seconds. Around 11% of extractions route to human review, which SAGEA considered a good trade against the cost of a wrong figure.',
            'The evaluation harness was handed over with the system, so the team can verify that future model or prompt changes are genuine improvements.',
        ],
        testimonial: {
            quote: 'They were more interested in what the system got wrong than in demoing what it got right. That built the trust we needed to actually use it.',
            name: 'Research Director',
            role: 'SAGEA',
        },
    },
    {
        id: 'cct-platform-migration',
        title: 'Monolith to Managed Platform Migration',
        client: 'CCT',
        category: 'Cloud',
        year: '2025',
        duration: '6 months',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
        summary:
            'Migrating a decade-old monolith onto managed infrastructure with zero planned downtime, cutting deploy lead time from three weeks to under an hour.',
        tags: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
        stats: [
            { value: '0', label: 'Minutes of planned downtime' },
            { value: '3wk → 1hr', label: 'Deploy lead time' },
            { value: '38%', label: 'Reduction in monthly cloud spend' },
        ],
        challenge: [
            'Deployments were manual, took three weeks of coordination, and happened roughly quarterly. Because releases were rare they were also large, which made each one riskier and reinforced the reluctance to deploy.',
            'The application ran on hand-configured servers nobody was willing to rebuild, since the configuration existed only on the machines themselves.',
        ],
        approach: [
            'We captured existing infrastructure as Terraform before changing anything, so the current state became reviewable and reproducible. That alone surfaced several undocumented dependencies.',
            'Migration ran service by service behind a routing layer, with traffic shifted incrementally and a rollback available at every step. No stage of the plan required a maintenance window.',
            'We built the CI/CD pipeline early and used it for the migration itself, so by cutover the team had already deployed through it hundreds of times.',
        ],
        outcome: [
            'Deploy lead time fell from three weeks to under an hour, and release frequency moved from quarterly to several times a week. Smaller releases turned out to be the main driver of the drop in production incidents.',
            'Right-sizing during migration reduced monthly cloud spend by 38%, which covered a meaningful share of the project cost within the first year.',
        ],
        testimonial: {
            quote: 'We deploy on Friday afternoons now. Two years ago that would have been a joke.',
            name: 'Engineering Manager',
            role: 'CCT',
        },
    },
    {
        id: 'dream-booking-platform',
        title: 'Multi-Vendor Booking Platform',
        client: 'Dream',
        category: 'Web Platform',
        year: '2024',
        duration: '7 months',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
        summary:
            'A booking marketplace connecting vendors and customers, with real-time availability, split payments, and a vendor dashboard built for non-technical operators.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
        stats: [
            { value: '120+', label: 'Active vendors' },
            { value: '<200ms', label: 'p95 search response' },
            { value: '2.3x', label: 'Increase in completed bookings' },
        ],
        challenge: [
            'Availability was managed by each vendor separately, so double-bookings were common and customers frequently discovered a slot was gone only after paying. Trust in the platform was the actual problem, and it presented as a technical one.',
            'Vendors were largely non-technical and had abandoned a previous dashboard as too complicated, so adoption depended on the interface being genuinely simple.',
        ],
        approach: [
            'We modelled availability as the single source of truth with transactional holds during checkout, which structurally removed the double-booking race rather than mitigating it.',
            'Split payments run through Stripe Connect so vendors are paid directly and the platform fee is deducted automatically, removing a manual monthly reconciliation entirely.',
            'The vendor dashboard was designed with five vendors in the room across three rounds of testing. We cut roughly a third of the planned features because they did not survive that process.',
        ],
        outcome: [
            'Double-bookings dropped to zero. Completed bookings rose 2.3x within four months, which the client attributes primarily to customers trusting that a shown slot is real.',
            'Vendor onboarding now takes about fifteen minutes without support, against roughly a week of hand-holding on the previous system.',
        ],
        testimonial: {
            quote: 'They removed features we asked for once we watched real vendors struggle with them. That took some convincing, and they were right.',
            name: 'Product Owner',
            role: 'Dream',
        },
    },
    {
        id: 'krixnova-analytics',
        title: 'Operational Analytics Warehouse',
        client: 'Krixnova',
        category: 'AI & Data',
        year: '2024',
        duration: '4 months',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
        summary:
            'A warehouse and modelling layer consolidating six operational systems into one trusted set of metrics, ending long-running disputes over whose numbers were right.',
        tags: ['dbt', 'Airflow', 'PostgreSQL', 'Grafana'],
        stats: [
            { value: '6', label: 'Source systems consolidated' },
            { value: '1', label: 'Agreed definition per metric' },
            { value: '15min', label: 'Data freshness' },
        ],
        challenge: [
            'Six systems each produced their own version of revenue, and meetings regularly derailed into arguing about which figure was correct. The underlying problem was definitional, not technical — nobody had written down what the metric meant.',
            'Any warehouse that did not resolve the definitions first would simply have produced a seventh competing number.',
        ],
        approach: [
            'We ran definition workshops before building anything, and got written agreement on each core metric including the edge cases people disagreed about. That document was the actual deliverable of the first month.',
            'Transformations are modelled in dbt with tests on every metric, so a definition change is a reviewable pull request rather than an undocumented edit to a dashboard query.',
            'Lineage is exposed in the dashboards themselves — any figure can be traced back to source rows, which is what converted the sceptics.',
        ],
        outcome: [
            'There is now one agreed definition per metric, refreshed every fifteen minutes. The recurring argument about whose numbers were right has stopped.',
            'Analysts build new reports against the modelling layer without engineering involvement, which was the capability the client wanted most.',
        ],
        testimonial: {
            quote: 'The workshops felt slow at the time. They were the reason the dashboards got used instead of ignored.',
            name: 'Head of Operations',
            role: 'Krixnova',
        },
    },
];

export const projectStats = [
    { value: '40+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '96%', label: 'Client Retention' },
    { value: '9yrs', label: 'Average Client Tenure' },
];

export const getProjectById = (id: string) => projects.find((project) => project.id === id);

export const getRelatedProjects = (project: Project | undefined, limit = 3) => {
    if (!project) return [];
    const sameCategory = projects.filter(
        (other) => other.id !== project.id && other.category === project.category
    );
    const others = projects.filter(
        (other) => other.id !== project.id && other.category !== project.category
    );
    return [...sameCategory, ...others].slice(0, limit);
};

export type Project = (typeof projects)[number];
