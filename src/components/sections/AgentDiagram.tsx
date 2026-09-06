import React from 'react';

const teams = [
    { name: 'FRONTEND', role: 'Experience', agents: 4, color: 'border-[#B9EBF3] text-[#085765] bg-[#EEFAFC]' },
    { name: 'BACKEND', role: 'Platform', agents: 4, color: 'border-[#BBE6F4] text-[#0B5167] bg-[#EEF9FC]' },
    { name: 'DEVOPS', role: 'Delivery', agents: 3, color: 'border-[#BCE4F5] text-[#0C4D68] bg-[#EEF8FC]' },
    { name: 'QA', role: 'Quality Assurance', agents: 3, color: 'border-[#C1D6F9] text-[#15366E] bg-[#F0F5FD]' },
    { name: 'REVIEW', role: 'Governance', agents: 5, color: 'border-[#C2D3F9] text-[#16326F] bg-[#F0F4FE]' },
];

export const AgentDiagram = () => {
    return (
        <div className="bg-surface/90 backdrop-blur-md rounded-[4px] border border-border/80 p-6 md:p-8 max-w-lg mx-auto w-full">
            {/* Top Engineer Node */}
            <div className="flex flex-col items-center justify-center mb-8">
                <div className="w-12 h-12 rounded-[3px] bg-surface flex items-center justify-center shadow-sm mb-2">
                    <span className="text-primary-ink font-mono font-bold text-xl">X</span>
                </div>
                <span className="text-[11px] tracking-[0.08em] omx-label font-bold text-muted uppercase px-3 py-1 bg-body rounded-[2px] border border-border">
                    AGENTIC ENGINEER
                </span>
            </div>

            {/* Agents Column Grid */}
            <div className="grid grid-cols-5 gap-2 mb-6">
                {teams.map((team) => (
                    <div
                        key={team.name}
                        className={`border rounded-[3px] p-2 flex flex-col items-center justify-between text-center ${team.color} min-h-[150px]`}
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