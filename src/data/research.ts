// Headline numbers rendered in the hero strip.
export const researchStats = [
    { value: '24', label: 'Papers & Reports' },
    { value: '06', label: 'Focus Areas' },
    { value: '11', label: 'Open-Source Releases' },
    { value: '08', label: 'Academic Partners' },
];

// Publication filter tabs. "All" is prepended by the section itself.
// Focus-area cards link here via ?topic=<category>, so these strings must
// stay in sync with the `category` field on each area in ResearchAreas.
export const publicationCategories = [
    'Agents',
    'Machine Learning',
    'Systems',
    'Security',
    'Developer Experience',
    'Human-AI',
];

export const publications = [
    {
        id: 'agentic-review-loops',
        title: 'Review Loops in Multi-Agent Code Generation',
        category: 'Agents',
        type: 'Paper',
        year: '2026',
        readTime: '14 min',
        authors: ['A. Devkota', 'S. Sodari'],
        abstract:
            'We compare single-pass generation against a supervised review loop across 1,200 pull requests. Adding a dedicated reviewer agent cut defect escape rate by 38% at a 1.6x token cost — and most of the gain came from the first review pass, not subsequent ones.',
        href: '#',
        featured: true,
        tags: ['Code Generation', 'Evaluation', 'Cost Modelling'],
        findings: [
            'A single reviewer pass caught 38% of defects that reached main under single-pass generation.',
            'A second and third review pass added 4% and 1% respectively — well below their token cost.',
            'Reviewer agents given the diff alone outperformed those given the full repository context.',
            'Disagreement between generator and reviewer was a stronger defect signal than either confidence score.',
        ],
        sections: [
            {
                heading: 'Background',
                paragraphs: [
                    'Multi-agent code generation is usually presented as a pipeline: a planner decomposes the task, a generator writes the code, and a reviewer checks it. The structure is intuitive, but the marginal value of each stage is rarely measured. Teams add agents because the topology looks right, not because a stage has been shown to pay for itself.',
                    'We ran this study against our own delivery pipeline over eleven months. Every pull request in the sample was authored by an agent and merged into a repository that real clients depend on, which means defects carried an actual cost rather than a benchmark score.',
                ],
            },
            {
                heading: 'Method',
                paragraphs: [
                    'We sampled 1,200 pull requests across nine repositories and four languages. Each was routed to one of two arms: single-pass generation, or generation followed by one to three review passes from an agent with no memory of the generation step.',
                    'Our primary metric was defect escape rate — the share of merged pull requests that later required a corrective commit within thirty days. We tracked token spend and wall-clock latency alongside it, because an intervention that doubles cost to remove a trivial defect is not an improvement.',
                    'Assignment was randomised per pull request rather than per repository, so codebase difficulty is balanced across arms. Reviewers were blind to which arm produced the diff.',
                ],
            },
            {
                heading: 'Results',
                paragraphs: [
                    'The first review pass reduced defect escape rate from 21.4% to 13.3%, a 38% relative reduction, at 1.6x the token cost of single-pass generation. Subsequent passes showed sharply diminishing returns: the second pass recovered a further 4% relative, the third 1%.',
                    'The most useful signal was not any individual reviewer verdict but the disagreement between generator and reviewer. Pull requests where the two diverged were 3.2x more likely to contain a defect than pull requests where the reviewer simply approved, which suggests routing disputed diffs to a human is a cheaper intervention than adding review depth.',
                    'Counter-intuitively, reviewers restricted to the diff outperformed reviewers given full repository context. We attribute this to attention dilution — broader context measurably increased the rate of confidently wrong approvals.',
                ],
            },
            {
                heading: 'Limitations',
                paragraphs: [
                    'All nine repositories follow our internal conventions and carry above-average test coverage. Results on a codebase with weak tests would likely differ, since our escape metric depends on defects eventually surfacing.',
                    'We did not vary the underlying model mid-study, so we cannot separate model-specific behaviour from the effect of the review structure itself. Replicating across model families is the obvious next step.',
                ],
            },
        ],
    },
    {
        id: 'retrieval-messy-data',
        title: 'Retrieval Quality on Undocumented Enterprise Corpora',
        category: 'Machine Learning',
        type: 'Report',
        year: '2026',
        readTime: '9 min',
        authors: ['OMX Lab ML Group'],
        abstract:
            'Chunking strategy matters less than metadata recovery. On four client corpora, inferring structure before indexing beat every embedding-model swap we tried.',
        href: '#',
        tags: ['Retrieval', 'RAG', 'Enterprise Data'],
        findings: [
            'Recovering document structure before indexing lifted answer accuracy 22 points.',
            'Swapping embedding models moved accuracy by at most 4 points on the same corpora.',
            'Roughly 60% of retrieval failures traced to documents with no usable title or date.',
            'Chunk size mattered far less than whether the chunk carried its section heading.',
        ],
        sections: [
            {
                heading: 'The problem',
                paragraphs: [
                    'Enterprise corpora do not look like benchmark corpora. The documents we were handed on four engagements were undated, inconsistently titled, frequently duplicated across three storage systems, and often exported from formats that destroyed their heading hierarchy.',
                    'Standard retrieval advice — tune the chunk size, upgrade the embedding model — assumes documents arrive with intact structure. On this data that assumption fails, and the usual tuning knobs turned out to be nearly inert.',
                ],
            },
            {
                heading: 'What we tried',
                paragraphs: [
                    'We evaluated four embedding models, six chunking strategies, and a metadata-recovery preprocessing step that infers title, date, section hierarchy, and document type before anything is indexed. Each configuration was scored against a 400-question set written by domain experts at the client.',
                    'Metadata recovery dominated. It lifted answer accuracy by 22 points, while the best embedding-model swap moved the same metric by 4 points and the best chunking change by 3.',
                ],
            },
            {
                heading: 'Why it works',
                paragraphs: [
                    'Tracing the failures explained the gap. Around 60% of retrieval misses involved documents that carried no usable title or date, so the retriever had nothing to disambiguate near-identical revisions of the same policy.',
                    'Once a chunk carries its section heading and a recovered date, the retriever can distinguish the 2023 and 2026 versions of a document that are otherwise 94% identical in text. No embedding model solves that, because the distinguishing information is simply absent from the text being embedded.',
                ],
            },
        ],
    },
    {
        id: 'prompt-injection-toolchains',
        title: 'Prompt Injection Across Agent Toolchains',
        category: 'Security',
        type: 'Paper',
        year: '2026',
        readTime: '18 min',
        authors: ['OMX Lab Security Group'],
        abstract:
            'A taxonomy of injection paths when an agent holds shell, browser, and repository access simultaneously, plus the containment boundaries that held up under testing.',
        href: '#',
        tags: ['Prompt Injection', 'Threat Modelling', 'Sandboxing'],
        findings: [
            'Capability composition, not any single tool, produced the severe findings.',
            'Shell plus network access was sufficient for exfiltration in every configuration we tested.',
            'Output filtering failed as a control; egress restriction held in all trials.',
            'Injected instructions surviving into a summary were the most common escalation path.',
        ],
        sections: [
            {
                heading: 'Threat model',
                paragraphs: [
                    'We consider an agent with three capabilities held at once: shell execution, outbound network access, and write access to a source repository. Each is individually defensible. The combination is where the interesting failures live.',
                    'The adversary controls only content the agent reads — a web page, a dependency README, an issue comment, a log line. They cannot modify the system prompt or the agent harness.',
                ],
            },
            {
                heading: 'Injection paths',
                paragraphs: [
                    'We catalogued fourteen distinct paths and grouped them into four families: direct instruction injection in fetched content, indirect injection via tool output, persistence through files the agent itself writes, and cross-session contamination through shared state such as a checked-in configuration file.',
                    'The persistence family was the most consequential. An instruction written into a project file during one session is read back as trusted context in the next, which converts a transient injection into a durable one.',
                ],
            },
            {
                heading: 'Controls that held',
                paragraphs: [
                    'Output filtering — scanning agent responses for suspicious strings — failed in every serious trial. Paraphrase defeats it, and the filter has no way to distinguish a legitimate instruction to write a file from an injected one.',
                    'Egress restriction held. When the agent could only reach an explicit allowlist of hosts, exfiltration attempts failed regardless of whether the injection succeeded at the instruction level. Treating the network boundary rather than the text as the control surface is the practical recommendation from this work.',
                    'Provenance tracking — tagging every span of context with its source and refusing to treat tool output as instruction-bearing — was effective but expensive to retrofit onto an existing harness.',
                ],
            },
        ],
    },
    {
        id: 'backpressure-event-pipelines',
        title: 'Back-Pressure Strategies for Bursty Event Pipelines',
        category: 'Systems',
        type: 'Case Study',
        year: '2025',
        readTime: '12 min',
        authors: ['OMX Lab Platform Group'],
        abstract:
            'Load-shedding versus queue growth in a payments ingest path handling 40x traffic spikes. We document the failure modes we hit in production and the SLO that finally held.',
        href: '#',
        tags: ['Back-Pressure', 'SLO', 'Payments'],
        findings: [
            'Unbounded queueing converted a two-minute spike into a fifty-minute outage.',
            'Shedding at the edge preserved p99 latency for accepted requests through a 40x burst.',
            'Queue depth was a lagging signal; enqueue-rate derivative gave 90 seconds more warning.',
            'A latency-based SLO outperformed a throughput-based one at driving the right operator response.',
        ],
        sections: [
            {
                heading: 'Context',
                paragraphs: [
                    'The system ingests payment events for a merchant platform. Baseline is roughly 900 events per second; promotional windows drive bursts up to 40x that for two to five minutes. The original design absorbed bursts by queueing, on the assumption that a short spike would drain quickly.',
                    'It did not. A two-minute burst in early 2025 produced a fifty-minute recovery, because the queue grew past the point where downstream consumers could drain it faster than new work arrived.',
                ],
            },
            {
                heading: 'What went wrong',
                paragraphs: [
                    'Three failure modes compounded. Queue growth pushed working sets out of memory, which slowed consumers, which grew the queue further. Retry storms from upstream clients that had already timed out added load that could never be usefully completed. And our alerting keyed on queue depth, which is a lagging indicator — by the time it fired, the recovery cost was already committed.',
                ],
            },
            {
                heading: 'The redesign',
                paragraphs: [
                    'We moved to shedding at the edge with a bounded queue. Requests beyond the bound are rejected immediately with a retry-after hint rather than being accepted and queued indefinitely.',
                    'Through the next 40x burst, p99 latency for accepted requests stayed within the SLO, and the shed fraction peaked at 31% for ninety seconds. Merchants received fast, honest rejections instead of slow, uncertain acceptances.',
                    'We also switched the alert to the derivative of enqueue rate, which gave operators roughly ninety seconds more warning than queue depth did.',
                ],
            },
        ],
    },
    {
        id: 'evaluating-coding-agents',
        title: 'Beyond Pass@k: Evaluating Coding Agents on Real Repositories',
        category: 'Agents',
        type: 'Paper',
        year: '2025',
        readTime: '16 min',
        authors: ['A. Devkota', 'OMX Lab ML Group'],
        abstract:
            'Synthetic benchmarks over-predict real-world performance. We propose a repository-grounded evaluation harness and report where current models degrade sharpest.',
        href: '#',
        tags: ['Evaluation', 'Benchmarks', 'Code Generation'],
        findings: [
            'Benchmark rank order did not survive transfer to real repositories.',
            'Performance degraded most sharply on tasks requiring cross-file reasoning.',
            'Task length correlated with failure far more strongly than task difficulty ratings.',
            'Existing tests in the repository were the single best predictor of agent success.',
        ],
        sections: [
            {
                heading: 'Why benchmarks mislead',
                paragraphs: [
                    'Synthetic coding benchmarks present self-contained problems with clear specifications and immediate verification. Real repository work offers none of those: the specification is a terse issue, the relevant code spans files the agent has to find, and verification depends on a test suite of unknown quality.',
                    'We found that rank order on public benchmarks did not survive transfer to our repository-grounded harness. Models separated by wide benchmark margins performed within noise of each other on real tasks, and one model that led on benchmarks placed third of four on real work.',
                ],
            },
            {
                heading: 'The harness',
                paragraphs: [
                    'Our harness draws tasks from real merged pull requests, reverts them, and asks the agent to reproduce the change given only the original issue text. Success requires passing the repository test suite plus review by an engineer who did not author the original change.',
                    'This design has an obvious bias — it only samples work that was completed and merged — but it grounds every task in a change someone actually needed.',
                ],
            },
            {
                heading: 'Where models degrade',
                paragraphs: [
                    'Cross-file reasoning was the sharpest failure mode. Tasks touching a single file completed at 71%; tasks touching four or more dropped to 24%.',
                    'Task length predicted failure better than any difficulty rating we collected from engineers. Human difficulty judgements correlated only weakly with agent success, which suggests the two are limited by different things.',
                    'The strongest positive predictor was pre-existing test coverage of the touched code — agents given a fast, reliable signal about whether they had broken something recovered from their own mistakes far more often.',
                ],
            },
        ],
    },
    {
        id: 'fine-tuning-economics',
        title: 'The Economics of Fine-Tuning vs. Prompting',
        category: 'Machine Learning',
        type: 'Report',
        year: '2025',
        readTime: '11 min',
        authors: ['OMX Lab ML Group'],
        abstract:
            'A cost model covering data preparation, training, drift, and re-training. For most classification workloads under 50k monthly calls, prompting still wins on total cost.',
        href: '#',
        tags: ['Fine-Tuning', 'Cost Modelling', 'Classification'],
        findings: [
            'Break-even for classification sat near 50k monthly calls in our cost model.',
            'Data preparation, not GPU time, was the dominant fine-tuning cost in every case.',
            'Drift-driven re-training pushed break-even higher than one-off analyses suggest.',
            'Prompt iteration speed had real option value that cost models routinely ignore.',
        ],
        sections: [
            {
                heading: 'The model',
                paragraphs: [
                    'We built a total-cost-of-ownership model spanning five components: data preparation, training compute, inference, evaluation, and re-training driven by drift. Most published comparisons include only the middle three, which systematically favours fine-tuning.',
                    'Data preparation dominated. Across six engagements, labelling and cleaning consumed between 4x and 11x the GPU spend. Treating training compute as the cost of fine-tuning is the single most common error we see in these decisions.',
                ],
            },
            {
                heading: 'Break-even',
                paragraphs: [
                    'For classification workloads, break-even sat near 50,000 monthly calls. Below that, prompting a strong general model cost less in total even though its per-call price was higher.',
                    'Including drift moved the line further out. Two of the six workloads needed re-training within eight months as the input distribution shifted, and a re-training cycle costs a substantial fraction of the original build.',
                ],
            },
            {
                heading: 'The unpriced factor',
                paragraphs: [
                    'Prompt iteration is fast. Changing behaviour means editing text and re-running an evaluation set, typically within a day. Changing a fine-tuned model means relabelling, retraining, and revalidating.',
                    'That speed has genuine option value on products whose requirements are still moving, and no cost model we have seen accounts for it. Our practical rule: fine-tune once the task has stopped changing, not before.',
                ],
            },
        ],
    },
    {
        id: 'measuring-developer-experience',
        title: 'Measuring Developer Experience Without Vanity Metrics',
        category: 'Developer Experience',
        type: 'Report',
        year: '2025',
        readTime: '10 min',
        authors: ['OMX Lab Platform Group'],
        abstract:
            'Commit counts and story points tell you almost nothing. We instrumented our own pipeline for eighteen months and report the four signals that actually predicted delivery pain.',
        href: '#',
        tags: ['DX', 'Delivery Metrics', 'Instrumentation'],
        findings: [
            'Review latency predicted delivery pain better than any throughput metric.',
            'Local feedback loop time correlated tightly with defect escape rate.',
            'Commit counts and story points showed no useful relationship to outcomes.',
            'Self-reported friction surfaced problems roughly three weeks before metrics did.',
        ],
        sections: [
            {
                heading: 'What we measured',
                paragraphs: [
                    'We instrumented four signals across every repository we operate: time from pull request open to first review, time to run the full test suite locally, defect escape rate, and a fortnightly self-reported friction score from engineers.',
                    'We deliberately excluded commit counts, lines changed, and story points. We collected them anyway as controls, and across eighteen months none showed a useful relationship with any outcome we cared about.',
                ],
            },
            {
                heading: 'What predicted pain',
                paragraphs: [
                    'Review latency was the strongest signal. Once median time-to-first-review passed roughly four hours, engineers began context-switching away from the change, and rework on those pull requests rose sharply.',
                    'Local feedback loop time was the second. Repositories where the test suite ran in under two minutes had materially lower defect escape rates than those where it took more than ten, independent of coverage.',
                    'The self-reported friction score was noisy month to month but valuable as an early warning — it moved roughly three weeks before the quantitative signals did, which made it useful for deciding where to look rather than what to conclude.',
                ],
            },
        ],
    },
    {
        id: 'supervising-nondeterministic-tools',
        title: 'Interfaces for Supervising Non-Deterministic Tools',
        category: 'Human-AI',
        type: 'Paper',
        year: '2025',
        readTime: '13 min',
        authors: ['S. Sodari', 'OMX Lab Design Group'],
        abstract:
            'When should an agent ask and when should it act? A study of confirmation design across 40 operators, and why over-asking degrades oversight as badly as under-asking.',
        href: '#',
        tags: ['HCI', 'Oversight', 'Confirmation Design'],
        findings: [
            'Operators approved 94% of confirmations without reading once prompts exceeded twelve per session.',
            'Reversibility, not risk severity, best predicted whether a confirmation was read.',
            'Grouped confirmations preserved attention better than per-action prompts.',
            'Showing the diff rather than describing the action tripled rejection of wrong operations.',
        ],
        sections: [
            {
                heading: 'The over-asking failure',
                paragraphs: [
                    'Safety guidance for agentic tools tends toward asking more. Our study suggests this has a hard ceiling. Across 40 operators, once a session exceeded twelve confirmation prompts, approval-without-reading reached 94% — the prompts were still displayed, but they had stopped functioning as oversight.',
                    'An interface that asks about everything is not safer than one that asks about the right things. It simply relocates the failure from the tool to the operator, while preserving the appearance of human control.',
                ],
            },
            {
                heading: 'What operators actually read',
                paragraphs: [
                    'Reversibility predicted attention better than severity did. Operators read confirmations for actions they could not undo and skimmed those they could, largely irrespective of how the prompt characterised the risk.',
                    'Presentation mattered as much as frequency. Showing the concrete diff or the exact command tripled the rate at which operators rejected a wrong operation compared with a natural-language description of the same action.',
                ],
            },
            {
                heading: 'Design recommendations',
                paragraphs: [
                    'Group related actions into a single confirmation rather than prompting per action. Reserve individual prompts for irreversible operations. Always show the concrete artefact — the diff, the command, the recipient — rather than a description of it.',
                    'Most importantly, budget confirmations. Treat operator attention as a finite resource that a session can exhaust, and design the interaction so the prompts that matter arrive while that budget is still intact.',
                ],
            },
        ],
    },
];

// Methodology steps — numbered list styled after HiringProcess.
export const researchProcess = [
    {
        number: '01',
        title: 'Question from the field',
        description:
            'Every project starts with a problem we hit on real client work — never a topic chosen because it publishes well. If it has not cost us time or money, it does not make the roadmap.',
    },
    {
        number: '02',
        title: 'Scoped experiment',
        description:
            'We define the hypothesis, the metric, and the kill criteria before writing code. Most investigations are time-boxed to four weeks so a negative result is cheap.',
    },
    {
        number: '03',
        title: 'Build and instrument',
        description:
            'Prototypes run against production-shaped data with full telemetry. We measure cost and latency alongside accuracy, because a result you cannot afford to ship is not a result.',
    },
    {
        number: '04',
        title: 'Internal review',
        description:
            'Findings go through adversarial review by engineers outside the project. Reviewers try to break the methodology first and the conclusion second.',
    },
    {
        number: '05',
        title: 'Publish and productize',
        description:
            'We write it up — including what failed — and fold anything that held up into our delivery playbook. Research that never reaches client work has not finished.',
    },
];

export const getPublicationById = (id: string) =>
    publications.find((paper) => paper.id === id);

export const getRelatedPublications = (paper: Publication | undefined, limit = 3) => {
    if (!paper) return [];
    const sameCategory = publications.filter(
        (other) => other.id !== paper.id && other.category === paper.category
    );
    const others = publications.filter(
        (other) => other.id !== paper.id && other.category !== paper.category
    );
    return [...sameCategory, ...others].slice(0, limit);
};

export type Publication = (typeof publications)[number];
