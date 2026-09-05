import React from 'react';
import Link from 'next/link';
import { projectStats } from '@/data/projects';
import { LuLayoutDashboard, LuLayers, LuAppWindow, LuBoxes, LuBriefcase, LuFolderKanban } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuLayoutDashboard, color: 'text-[#6366f1]', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuLayers, color: 'text-[#14b8a6]', pos: 'top-[35%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuAppWindow, color: 'text-[#f43f5e]', pos: 'bottom-[30%] left-[12%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuBoxes, color: 'text-[#8b5cf6]', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuBriefcase, color: 'text-[#f59e0b]', pos: 'top-[45%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuFolderKanban, color: 'text-[#06b6d4]', pos: 'bottom-[25%] right-[10%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuLayoutDashboard, color: 'text-[#6366f1]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuBriefcase, color: 'text-[#f59e0b]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuAppWindow, color: 'text-[#f43f5e]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuBoxes, color: 'text-[#8b5cf6]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const ProjectsHero = () => {
    return (
        <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center bg-[var(--color-surface)] border-b border-[var(--color-border)]">

            {/* Background color and glows */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent" />
                <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />
                <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />

                {/* Floating Application Icons Layer (Desktop) */}
                <div className="absolute inset-0 max-w-[1400px] mx-auto hidden md:block">
                    {floatingIcons.map((item) => (
                        <div 
                            key={item.id} 
                            className={`absolute ${item.pos} ${item.animation} w-16 h-16 bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl flex items-center justify-center opacity-80 transition-all duration-300 z-10 pointer-events-auto`}
                        >
                            <item.Icon className={`${item.size} ${item.color}`} />
                        </div>
                    ))}
                </div>

                {/* Floating Application Icons Layer (Mobile) */}
                <div className="absolute inset-0 max-w-full mx-auto block md:hidden overflow-hidden">
                    {mobileFloatingIcons.map((item) => (
                        <div 
                            key={`mobile-${item.id}`} 
                            className={`absolute ${item.pos} ${item.animation} w-12 h-12 bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl flex items-center justify-center opacity-85 transition-all duration-300 z-10 pointer-events-auto`}
                        >
                            <item.Icon className={`${item.size} ${item.color}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Content */}
            <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-8">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-[var(--color-primary)] text-xs sm:text-sm font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    Projects
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-secondary)] tracking-tight leading-[1.1]">
                    Work We Can
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-ink)]">
                        Point To.
                    </span>
                </h1>
                
                {/* Paragraph Description */}
                <p className="text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl leading-relaxed">
                    Selected case studies from platforms, mobile apps, and data systems we
                    have built and continue to operate. Each one covers what the problem
                    actually was, what we did, and what changed as a result.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                        href="#case-studies"
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all shadow-lg shadow-[var(--color-primary)]/25 cursor-pointer hover:-translate-y-1"
                    >
                        Browse case studies <span>↓</span>
                    </a>
                    <Link
                        href="/contact"
                        className="border border-[var(--color-border)] bg-white/80 backdrop-blur-sm hover:bg-white text-[var(--color-secondary)] px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all cursor-pointer hover:-translate-y-1 shadow-sm"
                    >
                        Start a project <span className="text-xs">↗</span>
                    </Link>
                </div>
                
                {/* Stats Strip Centered */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-10 pt-10 border-t border-[var(--color-border)]/50 w-full max-w-3xl">
                    {projectStats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--color-primary)] tracking-tight leading-none">
                                {stat.value}
                            </span>
                            <span className="mt-3 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
