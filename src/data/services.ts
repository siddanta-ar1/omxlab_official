// `icon` keys resolve through components/common/ServiceIcon.jsx — data stays
// JSX-free so this can remain a .js file (Vite only transforms JSX in .jsx).
export const services = [
    {
        id: 'custom-software',
        title: 'Custom Software Development',
        tagline: 'Systems built around your operations, not the other way round.',
        icon: 'code',
        summary:
            'Line-of-business platforms, internal tooling, and integrations designed for how your team actually works. We take ownership from architecture through to production support.',
        overview: [
            'Off-the-shelf software forces your process to bend around someone else\'s assumptions. When that cost gets high enough — duplicate data entry, spreadsheets bridging two systems, a workflow nobody can automate — a purpose-built system pays for itself.',
            'We design and build those systems end to end. That means sitting with the people who will use the software, mapping the real workflow including its exceptions, and shipping in increments you can evaluate rather than a single delivery at the end.',
        ],
        deliverables: [
            'Discovery workshops and a documented domain model',
            'Architecture decision records you keep and own',
            'Incremental delivery with a working build every sprint',
            'Automated test suite and CI pipeline',
            'Production runbook and handover training',
        ],
        stack: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'React', 'Docker'],
        outcomes: [
            { value: '6–12', label: 'Weeks to first production release' },
            { value: '100%', label: 'Source and IP transferred to you' },
        ],
    },
    {
        id: 'web-applications',
        title: 'Web Application Development',
        tagline: 'Fast, accessible interfaces that hold up under real traffic.',
        icon: 'browser',
        summary:
            'Customer portals, dashboards, and marketing sites built on modern React tooling — measured against Core Web Vitals and WCAG, not just design sign-off.',
        overview: [
            'A web application is judged on how it feels on a mid-range phone over a patchy connection, not how it looks in a design review on a fast laptop. We build to that standard from the first commit.',
            'Our default stack is React with server-side rendering where it earns its place, a typed API boundary, and a component library your team can extend without calling us. Performance budgets and accessibility checks run in CI, so regressions fail the build rather than reaching users.',
        ],
        deliverables: [
            'Responsive implementation across mobile, tablet, and desktop',
            'Reusable component library with documented props',
            'Core Web Vitals budget enforced in CI',
            'WCAG 2.2 AA accessibility audit and fixes',
            'SEO fundamentals: metadata, structured data, sitemap',
        ],
        stack: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Playwright'],
        outcomes: [
            { value: '90+', label: 'Target Lighthouse performance score' },
            { value: 'AA', label: 'WCAG 2.2 conformance target' },
        ],
    },
    {
        id: 'mobile-applications',
        title: 'Mobile App Development',
        tagline: 'One codebase, two stores, native where it counts.',
        icon: 'device',
        summary:
            'Cross-platform iOS and Android applications with offline support, push notifications, and a release pipeline your team can run without us.',
        overview: [
            'Most products do not need two native codebases. React Native covers the shared surface, and we drop to native modules only where the platform genuinely differs — background location, hardware access, or performance-critical rendering.',
            'The part teams underestimate is release engineering. We set up signing, staged rollouts, crash reporting, and over-the-air updates early, because a mobile release you cannot roll back is a liability.',
        ],
        deliverables: [
            'iOS and Android builds from a shared codebase',
            'Offline-first data layer with conflict handling',
            'Push notification infrastructure',
            'App Store and Play Store submission support',
            'Crash reporting and staged rollout pipeline',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Firebase', 'Fastlane'],
        outcomes: [
            { value: '1', label: 'Shared codebase across both platforms' },
            { value: '<1%', label: 'Crash-free session target' },
        ],
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        tagline: 'Infrastructure you can reason about and roll back.',
        icon: 'cloud',
        summary:
            'Cloud architecture, infrastructure as code, and CI/CD pipelines — plus the observability to know what is happening before your customers tell you.',
        overview: [
            'Cloud bills grow quietly and infrastructure drifts from whatever the diagram says. We treat infrastructure as code from day one so that every environment is reproducible and every change is reviewable.',
            'We also instrument properly. Metrics, structured logs, and traces wired to alerts that correspond to user-visible problems — not to CPU thresholds that page someone at 3am for nothing.',
        ],
        deliverables: [
            'Infrastructure as code with reviewed, versioned changes',
            'CI/CD pipelines with automated rollback',
            'Metrics, logging, and tracing wired to actionable alerts',
            'Cost review and right-sizing recommendations',
            'Disaster recovery plan, tested rather than documented',
        ],
        stack: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Grafana'],
        outcomes: [
            { value: '99.9%', label: 'Typical uptime target we design to' },
            { value: '<15m', label: 'Target lead time from merge to production' },
        ],
    },
    {
        id: 'ai-automation',
        title: 'AI & Agentic Automation',
        tagline: 'LLM features that survive contact with production.',
        icon: 'spark',
        summary:
            'Retrieval systems, document processing, and agentic workflows — built with evaluation harnesses first, so you can tell whether a change actually improved anything.',
        overview: [
            'The hard part of an LLM feature is not the first demo, which usually works. It is knowing whether version two is better than version one, keeping cost predictable, and handling the cases where the model is confidently wrong.',
            'We build the evaluation harness before the feature. That gives you a defensible answer to "is this good enough to ship" and a regression signal for every subsequent change. This is the same practice we write about in our research.',
        ],
        deliverables: [
            'Evaluation harness with a domain-specific test set',
            'Retrieval pipeline with metadata recovery',
            'Cost and latency budgets enforced per request',
            'Human review paths for low-confidence outputs',
            'Prompt-injection threat review before launch',
        ],
        stack: ['Claude API', 'Python', 'pgvector', 'LangGraph', 'FastAPI', 'Redis'],
        outcomes: [
            { value: '2–4', label: 'Weeks to an evaluated prototype' },
            { value: '100%', label: 'Features shipped with an eval suite' },
        ],
    },
    {
        id: 'qa-automation',
        title: 'QA & Test Automation',
        tagline: 'A test suite fast enough that people actually run it.',
        icon: 'shield',
        summary:
            'Test strategy, automation coverage, and CI integration — focused on the regressions that reach customers rather than on a coverage percentage.',
        overview: [
            'Coverage percentage is a weak proxy. A suite can cover 90% of lines and still miss every failure mode that matters, and if it takes twenty minutes to run, developers will stop waiting for it.',
            'We work from the failure modes backwards: what has actually broken, what would be expensive if it broke, and what is cheap to assert. Then we make the suite fast, because feedback loop time drives defect escape rate more than coverage does.',
        ],
        deliverables: [
            'Risk-based test strategy tied to real failure modes',
            'End-to-end suite across critical user journeys',
            'Contract tests at service boundaries',
            'Parallelised CI runs with flake quarantine',
            'Regression triage process your team owns',
        ],
        stack: ['Playwright', 'Vitest', 'Pytest', 'k6', 'GitHub Actions', 'Pact'],
        outcomes: [
            { value: '<5m', label: 'Target CI feedback loop' },
            { value: '0', label: 'Tolerated flaky tests in the suite' },
        ],
    },
];

// How clients can structure work with us.
export const engagementModels = [
    {
        number: '01',
        title: 'Project Delivery',
        description:
            'A defined scope, a fixed team, and a delivery date. Best when the outcome is clear and you want a single accountable partner from discovery to handover.',
        points: ['Fixed scope and timeline', 'Weekly demos', 'Full handover on completion'],
    },
    {
        number: '02',
        title: 'Dedicated Team',
        description:
            'An embedded squad working to your roadmap and your ceremonies. Best for continuous product development where priorities shift month to month.',
        points: ['Monthly rolling engagement', 'Your backlog, your priorities', 'Scale up or down with notice'],
    },
    {
        number: '03',
        title: 'Specialist Support',
        description:
            'Targeted senior help on a specific problem — an architecture review, a performance investigation, a security assessment, or an AI evaluation build-out.',
        points: ['Days to weeks, not months', 'Senior engineers only', 'Written findings you keep'],
    },
];

// Delivery process — numbered list styled after HiringProcess.
export const deliveryProcess = [
    {
        number: '01',
        title: 'Discovery',
        description:
            'We map the workflow, the constraints, and the definition of done before estimating anything. If we think the project should be smaller than you asked for, we will say so here.',
    },
    {
        number: '02',
        title: 'Architecture & plan',
        description:
            'A documented technical approach with the trade-offs written down, broken into increments that each produce something you can evaluate. You own these documents from day one.',
    },
    {
        number: '03',
        title: 'Build in increments',
        description:
            'Two-week cycles with a working build and a live demo at the end of each. Every change goes through senior review and lands behind automated tests.',
    },
    {
        number: '04',
        title: 'Harden & instrument',
        description:
            'Load testing, security review, observability, and runbooks. This is scheduled work in the plan, not a phase that gets compressed when the date slips.',
    },
    {
        number: '05',
        title: 'Handover & support',
        description:
            'Training for your team, documented operations, and a support window. The goal is that you can run and extend the system without us — retaining us should be a choice.',
    },
];

// Grouped technology chips.
export const techStack = [
    {
        group: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Vite'],
    },
    {
        group: 'Backend',
        items: ['Node.js', 'Python', 'Go', 'FastAPI', 'PostgreSQL', 'Redis'],
    },
    {
        group: 'Cloud & Infra',
        items: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Grafana'],
    },
    {
        group: 'AI & Data',
        items: ['Claude API', 'pgvector', 'LangGraph', 'dbt', 'Airflow', 'DuckDB'],
    },
];

export const getServiceById = (id: string) => services.find((service) => service.id === id);

export const getRelatedServices = (service: Service | undefined, limit = 3) => {
    if (!service) return [];
    return services.filter((other) => other.id !== service.id).slice(0, limit);
};

export type Service = (typeof services)[number];
