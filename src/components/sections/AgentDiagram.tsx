import React from 'react';

const teams = [
    { name: 'FRONTEND', role: 'Experience', agents: 4, color: 'border-[#BDCCD9] text-[#4A6377] bg-[#F5F8FA]/40' },
    { name: 'BACKEND', role: 'Platform', agents: 4, color: 'border-[#A9BCCD] text-primary-ink bg-accent/40' },
    { name: 'DEVOPS', role: 'Delivery', agents: 3, color: 'border-[#E0D0AE] text-[#7A5F2C] bg-[#FBF8F1]/40' },
    { name: 'QA', role: 'Quality Assurance', agents: 3, color: 'border-[#D8C49A] text-[#8A6D34] bg-[#FAF6EE]/40' },
    { name: 'REVIEW', role: 'Governance', agents: 5, color: 'border-[#C6B085] text-[#6F5626] bg-[#F8F4EA]/40' },
];

export const AgentDiagram = () => {
    return (
        <div className="bg-surface/90 backdrop-blur-md rounded-3xl border border-border/80 p-6 md:p-8 shadow-xl shadow-slate-200/50 max-w-lg mx-auto w-full">
            {/* Top Engineer Node */}
            <div className="flex flex-col items-center justify-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-md mb-2">
                    <span className="text-primary font-mono font-bold text-xl">X</span>
                </div>
                <span className="text-[11px] tracking-widest font-mono font-bold text-muted uppercase px-3 py-1 bg-body rounded-md border border-border">
                    AGENTIC ENGINEER
                </span>
            </div>

            {/* Agents Column Grid */}
            <div className="grid grid-cols-5 gap-2 mb-6">
                {teams.map((team) => (
                    <div
                        key={team.name}
                        className={`border rounded-xl p-2 flex flex-col items-center justify-between text-center ${team.color} min-h-[150px]`}
                    >
                        <div>
                            <span className="text-[9px] font-mono font-bold block">{team.name}</span>
                            <span className="text-[8px] text-muted font-sans block mt-0.5 leading-tight">{team.role}</span>
                        </div>

                        <div className="my-2">
                            <span className="text-sm font-bold block leading-none">{team.agents}</span>
                            <span className="text-[8px] tracking-tighter uppercase font-mono text-muted">AGENTS</span>
                        </div>

                        {/* Indicator Dots */}
                        <div className="flex gap-1 justify-center">
                            {Array.from({ length: team.agents }).map((_, i) => (
                                <span key={i} className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Info Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-border text-[11px] font-mono text-muted">
                <span>• 5 teams</span>
                <span>• 19 agents</span>
                <span>• Live comms</span>
                <span className="font-bold text-secondary">ORG CHART</span>
            </div>
        </div>
    );
};