'use client';

import { useEffect, useRef, useState } from 'react';
import {
    coreTeams,
    satelliteTeams,
    teamCount,
    agentCount,
} from '@/data/ecosystem';
import type { Team } from '@/data/ecosystem';
import { EcosystemIcon } from '@/components/common/EcosystemIcon';
import { OmxMark } from '@/components/common/OmxMark';

// Brand ramp per team. The keys are historical; the values walk the OMX
// palette (blue -> cyan) instead of a rainbow, so twelve
// categories stay distinguishable without leaving the brand.
const tones = {
    cyan: { border: 'border-[#B9EBF3]', text: 'text-[#085765]', bg: 'bg-[#EEFAFC]', dot: 'bg-[#06B6D4]', stroke: '#06B6D4' },
    blue: { border: 'border-[#BBE6F4]', text: 'text-[#0B5167]', bg: 'bg-[#EEF9FC]', dot: 'bg-[#0CA7D8]', stroke: '#0CA7D8' },
    lime: { border: 'border-[#BDE0F6]', text: 'text-[#0E4669]', bg: 'bg-[#EFF7FD]', dot: 'bg-[#1490DE]', stroke: '#1490DE' },
    amber: { border: 'border-[#BFDCF7]', text: 'text-[#11406C]', bg: 'bg-[#EFF6FD]', dot: 'bg-[#1A81E3]', stroke: '#1A81E3' },
    pink: { border: 'border-[#C0D8F8]', text: 'text-[#13396D]', bg: 'bg-[#EFF5FD]', dot: 'bg-[#1F72E7]', stroke: '#1F72E7' },
    teal: { border: 'border-[#BCE4F5]', text: 'text-[#0C4D68]', bg: 'bg-[#EEF8FC]', dot: 'bg-[#0E9FDA]', stroke: '#0E9FDA' },
    orange: { border: 'border-[#BEDEF7]', text: 'text-[#10436B]', bg: 'bg-[#EFF7FD]', dot: 'bg-[#1789E1]', stroke: '#1789E1' },
    emerald: { border: 'border-[#BCE2F5]', text: 'text-[#0D4A68]', bg: 'bg-[#EEF8FD]', dot: 'bg-[#1198DC]', stroke: '#1198DC' },
    violet: { border: 'border-[#C2D3F9]', text: 'text-[#16326F]', bg: 'bg-[#F0F4FE]', dot: 'bg-[#2563EB]', stroke: '#2563EB' },
    sky: { border: 'border-[#BAE8F4]', text: 'text-[#0A5466]', bg: 'bg-[#EEF9FC]', dot: 'bg-[#09AED6]', stroke: '#09AED6' },
    rose: { border: 'border-[#C0DAF8]', text: 'text-[#133C6D]', bg: 'bg-[#EFF6FD]', dot: 'bg-[#1D7AE5]', stroke: '#1D7AE5' },
    indigo: { border: 'border-[#C1D6F9]', text: 'text-[#15366E]', bg: 'bg-[#F0F5FD]', dot: 'bg-[#226BE9]', stroke: '#226BE9' },
};

// Entrance order, so the animation radiates outward from the hub.
const entranceIndex = new Map(
    [...coreTeams, ...satelliteTeams].map((team, index) => [team.id, index])
);

// `dense` only bites from lg upward. Below that the panel has the full viewport
// width in both the hero and the section, so cards get readable type either way.
const sizes = (dense: boolean) =>
    dense
        ? {
            pad: 'p-3 gap-1.5 lg:p-2 lg:gap-1',
            icon: 'w-6 h-6 lg:w-4 lg:h-4',
            name: 'text-[11px] lg:text-[10px]',
            role: 'text-[10px] lg:text-[9px]',
            agents: 'text-[10px] lg:text-[9px]',
            dot: 'w-1.5 h-1.5 lg:w-1 lg:h-1',
        }
        : {
            pad: 'p-3 gap-2 sm:p-4',
            icon: 'w-6 h-6 sm:w-7 sm:h-7',
            name: 'text-xs sm:text-[13px]',
            role: 'text-[11px] sm:text-xs',
            agents: 'text-[11px] sm:text-xs',
            dot: 'w-1.5 h-1.5',
        };

const TeamCard = ({
    team,
    visible,
    hovered,
    onHover,
    dense,
}: {
    team: Team;
    visible: boolean;
    hovered: string | null;
    onHover: (id: string | null) => void;
    dense: boolean;
}) => {
    const tone = tones[team.tone as keyof typeof tones] ?? tones.blue;
    const isDimmed = hovered !== null && hovered !== team.id;
    const s = sizes(dense);

    return (
        <div
            onMouseEnter={() => onHover(team.id)}
            onMouseLeave={() => onHover(null)}
            title={`${team.name} — ${team.role} · ${team.agents} agents`}
            style={{ transitionDelay: visible ? `${(entranceIndex.get(team.id) ?? 0) * 30}ms` : '0ms' }}
            className={`eco-card ${visible ? 'is-visible' : ''} ${isDimmed ? 'is-dimmed' : ''}
                border rounded-[3px] ${tone.border} ${tone.bg} ${tone.text} ${s.pad}
                min-w-0 flex flex-col items-center text-center cursor-default
                will-change-transform`}
        >
            <div className={`${s.icon} shrink-0`}>
                <EcosystemIcon name={team.icon} />
            </div>

            <div className="min-w-0 w-full">
                <span className={`block ${s.name} leading-tight omx-label font-bold uppercase tracking-tight break-words leading-[1.15]`}>
                    {team.name}
                </span>
                <span className={`block ${s.role} text-muted leading-tight truncate`}>
                    {team.role}
                </span>
            </div>

            <span className={`${s.agents} font-mono font-bold tracking-tight whitespace-nowrap`}>
                {team.agents} AGENTS
            </span>

            <div className="flex gap-0.5 justify-center flex-wrap">
                {Array.from({ length: team.agents }).map((_, i) => (
                    <span
                        key={i}
                        className={`eco-blink ${s.dot} rounded-[3px] ${tone.dot}`}
                        style={{ animationDelay: `${((entranceIndex.get(team.id) ?? 0) * 120 + i * 180) % 2400}ms` }}
                    />
                ))}
            </div>
        </div>
    );
};

/**
 * The services ecosystem diagram.
 * `dense` shrinks everything for use as the hero visual; the default size is
 * for a full-width section.
 */
export const EcosystemPanel = ({ dense = false }: { dense?: boolean }) => {
    const panelRef = useRef(null);
    // Starts hidden so the server and the client agree on the first render —
    // probing for IntersectionObserver up here would resolve differently in
    // Node than in the browser and break hydration.
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const node = panelRef.current;

        // Without IntersectionObserver support, show everything immediately
        // rather than leaving the cards stuck at opacity 0.
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const left = satelliteTeams.filter((team) => team.zone === 'left');
    const right = satelliteTeams.filter((team) => team.zone === 'right');
    const bottom = satelliteTeams.filter((team) => team.zone === 'bottom');

    // Core cards sit in a 5-column grid, so their centres are at 10/30/50/70/90%.
    const gap = dense ? 'gap-2 lg:gap-1.5' : 'gap-2 sm:gap-3';

    return (
        <div
            ref={panelRef}
            className={`relative rounded-[3px] border border-border bg-surface/95 backdrop-blur-md ring-1 ring-black/[0.03] overflow-hidden ${dense ? 'p-4 lg:p-3' : 'p-5 sm:p-7'}`}
        >
            {/* Ambient wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-[#0891B2]/[0.06] animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Panel header */}
            <div className={`relative z-10 flex flex-wrap items-start justify-between gap-2 ${dense ? 'mb-4 lg:mb-3' : 'mb-6'}`}>
                <div className="bg-border/70 border border-border rounded-[3px] px-2.5 py-1.5">
                    <span className={`block ${dense ? 'text-[10px] lg:text-[8px]' : 'text-[10px] sm:text-xs'} omx-label font-bold uppercase tracking-[0.08em] text-secondary leading-snug`}>
                        Company Services<br />Ecosystem &amp; Interconnect
                    </span>
                </div>

                <div className="flex flex-col gap-1 items-end">
                    <span className={`inline-flex items-center gap-1.5 ${dense ? 'text-[9px] lg:text-[7px]' : 'text-[9px]'} omx-label font-bold uppercase tracking-[0.08em] text-muted`}>
                        <span className="eco-blink w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                        Data_Sync
                        <span className="flex gap-0.5">
                            {[0, 1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className="eco-blink w-1 h-1 rounded-full bg-[#94A3B8]"
                                    style={{ animationDelay: `${i * 300}ms` }}
                                />
                            ))}
                        </span>
                    </span>
                    <span className={`inline-flex items-center gap-1.5 ${dense ? 'text-[9px] lg:text-[7px]' : 'text-[9px]'} omx-label font-bold uppercase tracking-[0.08em] text-muted`}>
                        <span className="eco-blink w-1.5 h-1.5 rounded-full bg-[#2563EB]" style={{ animationDelay: '900ms' }} />
                        Security_Alert
                    </span>
                </div>
            </div>

            {/* DESKTOP VIEW - Complex Radial Grid */}
            <div className="hidden lg:block relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${gap} items-start`}>
                    
                    {/* Background Network Lines to link every feature visually */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-[-1] opacity-40">
                    <g stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-primary-ink/50">
                        {/* Links to Left Rail */}
                        <path d="M 50% 15% C 35% 15%, 25% 20%, 15% 20%" fill="none" />
                        <path d="M 50% 15% C 35% 15%, 25% 50%, 15% 50%" fill="none" />
                        <path d="M 50% 15% C 35% 15%, 25% 80%, 15% 80%" fill="none" />
                        
                        {/* Links to Right Rail */}
                        <path d="M 50% 15% C 65% 15%, 75% 20%, 85% 20%" fill="none" />
                        <path d="M 50% 15% C 65% 15%, 75% 50%, 85% 50%" fill="none" />
                        <path d="M 50% 15% C 65% 15%, 75% 80%, 85% 80%" fill="none" />
                    </g>
                </svg>

                {/* Left rail */}
                <div className={`lg:col-span-3 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-2 ${gap} order-2 lg:order-1`}>
                    {left.map((team) => (
                        <TeamCard key={team.id} team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                    ))}
                </div>

                {/* Centre: hub, connectors, core teams */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">

                    {/* Hub */}
                    <div className="relative flex flex-col items-center">
                        <div className={`relative ${dense ? 'w-24 h-24 lg:w-20 lg:h-20' : 'w-28 h-28 sm:w-36 sm:h-36'} flex items-center justify-center`}>
                            <span className="eco-breathe absolute inset-0 rounded-[3px] border-2 border-primary/30" />
                            <span
                                className="eco-breathe absolute inset-3 rounded-[3px] border border-primary/20"
                                style={{ animationDelay: '1.2s' }}
                            />
                            <span className="absolute inset-6 rounded-full bg-primary/5 blur-xl" />

                            <OmxMark
                                className={`relative z-10 text-secondary ${dense ? 'w-9 h-9 lg:w-7 lg:h-7' : 'w-10 h-10 sm:w-12 sm:h-12'}`}
                            />
                        </div>

                        <span className={`mt-1.5 px-2 py-0.5 rounded-[2px] bg-body border border-border ${dense ? 'text-[8px] lg:text-[6px]' : 'text-[9px]'} omx-label font-bold uppercase tracking-[0.08em] text-muted whitespace-nowrap`}>
                            Integrated Services Engine
                        </span>
                    </div>

                    {/* Connector layer — desktop only, where the core row is a 5-col grid */}
                    <div className={`relative w-full ${dense ? 'h-10' : 'h-12 sm:h-16'} hidden lg:block`}>
                        <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            {coreTeams.map((team, i) => {
                                const x = 10 + i * 20;
                                const d = `M 50 0 C 50 45, ${x} 55, ${x} 100`;
                                const tone = tones[team.tone as keyof typeof tones] ?? tones.blue;
                                const isActive = hovered === team.id;
                                const isDimmed = hovered !== null && !isActive;

                                return (
                                    <g key={team.id} opacity={isDimmed ? 0.15 : 1} style={{ transition: 'opacity .25s ease-out' }}>
                                        {/* Static rail */}
                                        <path
                                            d={d}
                                            fill="none"
                                            stroke={tone.stroke}
                                            strokeOpacity={isActive ? 0.55 : 0.28}
                                            strokeWidth={isActive ? 2 : 1.2}
                                            vectorEffect="non-scaling-stroke"
                                            style={{ transition: 'stroke-width .25s ease-out, stroke-opacity .25s ease-out' }}
                                        />
                                        {/* Travelling pulse */}
                                        <path
                                            className="eco-pulse"
                                            d={d}
                                            fill="none"
                                            stroke={tone.stroke}
                                            strokeWidth={isActive ? 3 : 2}
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                            style={{ animationDelay: `${i * 0.45}s` }}
                                        />
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Core teams */}
                    <div className={`w-full grid grid-cols-3 sm:grid-cols-5 ${gap} mt-3 lg:mt-0`}>
                        {coreTeams.map((team) => (
                            <TeamCard key={team.id} team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                        ))}
                    </div>
                </div>

                {/* Right rail */}
                <div className={`lg:col-span-3 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-2 ${gap} order-3`}>
                    {right.map((team) => (
                        <TeamCard key={team.id} team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom row with network lines */}
            <div className="hidden lg:block relative mt-3 lg:mt-4">
                <svg className="absolute top-[-20px] left-0 w-full h-[40px] pointer-events-none hidden lg:block z-[-1] opacity-40">
                    <g stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-primary-ink/50">
                        <path d="M 50% 0 L 10% 40" fill="none" />
                        <path d="M 50% 0 L 30% 40" fill="none" />
                        <path d="M 50% 0 L 50% 40" fill="none" />
                        <path d="M 50% 0 L 70% 40" fill="none" />
                        <path d="M 50% 0 L 90% 40" fill="none" />
                    </g>
                </svg>
                <div className={`relative z-10 grid grid-cols-3 sm:grid-cols-5 ${dense ? 'lg:grid-cols-5' : 'lg:grid-cols-10'} ${gap}`}>
                    {bottom.map((team) => (
                        <TeamCard key={team.id} team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                    ))}
                </div>
            </div>

            {/* MOBILE VIEW - Clean Stacked Layout with Horizontal Scroll */}
            <div className="block lg:hidden relative z-10 mt-6">
                <div className="flex flex-col items-center gap-8">
                    
                    {/* Hub */}
                    <div className="relative flex flex-col items-center">
                        <div className={`relative ${dense ? 'w-24 h-24' : 'w-28 h-28 sm:w-32 sm:h-32'} flex items-center justify-center`}>
                            <span className="eco-breathe absolute inset-0 rounded-[3px] border-2 border-primary/30" />
                            <span className="eco-breathe absolute inset-3 rounded-[3px] border border-primary/20" style={{ animationDelay: '1.2s' }} />
                            <span className="absolute inset-6 rounded-full bg-primary/5 blur-xl" />
                            <OmxMark className={`relative z-10 text-secondary ${dense ? 'w-10 h-10' : 'w-12 h-12'}`} />
                        </div>
                        <span className={`mt-3 px-3 py-1 rounded-[2px] bg-body border border-border ${dense ? 'text-[10px]' : 'text-xs'} omx-label font-bold uppercase tracking-[0.08em] text-muted whitespace-nowrap`}>
                            Integrated Services Engine
                        </span>
                    </div>

                    {/* Core Teams Grid */}
                    <div className="w-full">
                        <span className="block text-center text-[10px] omx-label font-bold uppercase tracking-[0.08em] text-primary-ink/70 mb-3">Core Teams</span>
                        <div className={`grid grid-cols-2 sm:grid-cols-3 ${gap}`}>
                            {coreTeams.map((team) => (
                                <TeamCard key={team.id} team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                            ))}
                        </div>
                    </div>

                    {/* Satellite Teams Carousel */}
                    <div className="w-full">
                        <span className="block text-center text-[10px] omx-label font-bold uppercase tracking-[0.08em] text-primary-ink/70 mb-3">Satellite Integrated Teams</span>
                        <div className="flex overflow-x-auto gap-3 pb-4 px-1 -mx-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className="flex gap-3 w-max hide-scroll">
                                {satelliteTeams.map((team) => (
                                    <div key={team.id} className="w-[140px] sm:w-[160px]">
                                        <TeamCard team={team} visible={visible} hovered={hovered} onHover={setHovered} dense={dense} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer bar */}
            <div className={`relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 ${dense ? 'mt-4 pt-3 text-[9px] lg:mt-3 lg:pt-2 lg:text-[7px]' : 'mt-6 pt-4 text-[10px]'} border-t border-border omx-label font-bold uppercase tracking-[0.08em] text-muted`}>
                <span>• {teamCount} Service Teams</span>
                <span>• {agentCount} Agents</span>
                <span>• Interconnected Ecosystem</span>
            </div>

            {/* Screen-reader summary — the card detail is decorative */}
            <p className="sr-only">
                OMX Lab operates {teamCount} service teams totalling {agentCount} specialists,
                coordinated through a single integrated delivery engine.
            </p>
        </div>
    );
};
