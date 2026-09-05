import Link from 'next/link';
import { LuCpu, LuBrainCircuit, LuNetwork, LuShieldAlert, LuActivity, LuUsers } from 'react-icons/lu';

// `category` must match a value in publicationCategories — each card deep-links
// into the publications filter below.
const areas = [
    {
        title: 'Agentic Engineering',
        category: 'Agents',
        description:
            'How autonomous coding agents plan, review, and ship. We study orchestration topologies, hand-off protocols, and where human oversight pays for itself.',
        icon: <LuCpu className="w-7 h-7 text-[#5B7C99]" strokeWidth={2} />,
    },
    {
        title: 'Applied Machine Learning',
        category: 'Machine Learning',
        description:
            'Retrieval, evaluation, and fine-tuning for domain-specific workloads. We publish what actually moves accuracy on messy enterprise data, not benchmark scores.',
        icon: <LuBrainCircuit className="w-7 h-7 text-[#52738F]" strokeWidth={2} />,
    },
    {
        title: 'Distributed Systems',
        category: 'Systems',
        description:
            'Consistency, back-pressure, and failure semantics under real production load. Our findings feed straight back into the platforms we operate for clients.',
        icon: <LuNetwork className="w-7 h-7 text-[#2A3340]" strokeWidth={2} />,
    },
    {
        title: 'Security & Privacy',
        category: 'Security',
        description:
            'Threat models for LLM-backed products: prompt injection, data exfiltration, and supply-chain integrity across an agent toolchain.',
        icon: <LuShieldAlert className="w-7 h-7 text-[#A98C55]" strokeWidth={2} />,
    },
    {
        title: 'Developer Experience',
        category: 'Developer Experience',
        description:
            'We instrument our own delivery pipeline — cycle time, review latency, defect escape rate — and treat DX as a measurable engineering discipline.',
        icon: <LuActivity className="w-7 h-7 text-[#C2A97A]" strokeWidth={2} />,
    },
    {
        title: 'Human-AI Interaction',
        category: 'Human-AI',
        description:
            'Interfaces for supervising non-deterministic systems. When should a tool ask, when should it act, and how do you keep an operator genuinely in the loop?',
        icon: <LuUsers className="w-7 h-7 text-[#8A6D34]" strokeWidth={2} />,
    },
];

export const ResearchAreas = () => {
    return (
        <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                    Focus Areas
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-6">
                    Six threads we <span className="text-[var(--color-primary)]">keep pulling on.</span>
                </h2>

                <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                    Our agenda is set by delivery, not by fashion. These are the areas where
                    unanswered questions were costing our teams real time — so we made them
                    someone's job.
                </p>

                {/* 6-Card Grid Layout — each card filters the publications below */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area) => (
                        <Link
                            key={area.title}
                            href={`/research?topic=${encodeURIComponent(area.category)}#publications`}
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/50 flex flex-col items-start gap-4"
                        >
                            {/* Icon Container with subtle background tint */}
                            <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
                                {area.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight mt-1 group-hover:text-[var(--color-primary)] transition-colors">
                                {area.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed grow">
                                {area.description}
                            </p>

                            {/* Affordance */}
                            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                View papers
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
