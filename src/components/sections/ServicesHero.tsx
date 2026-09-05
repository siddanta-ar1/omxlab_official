import React from 'react';
import Link from 'next/link';
import { LuCode, LuMonitorSmartphone, LuCloud, LuShieldCheck, LuSparkles, LuServer } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuCode, color: 'text-[#61DAFB]', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuMonitorSmartphone, color: 'text-[#22D3EE]', pos: 'top-[30%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuCloud, color: 'text-[#FF9900]', pos: 'bottom-[25%] left-[15%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuShieldCheck, color: 'text-[#47A248]', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuSparkles, color: 'text-[#818CF8]', pos: 'top-[40%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuServer, color: 'text-[#3178C6]', pos: 'bottom-[30%] right-[12%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuCode, color: 'text-[#61DAFB]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuShieldCheck, color: 'text-[#47A248]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuCloud, color: 'text-[#FF9900]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuSparkles, color: 'text-[#818CF8]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const ServicesHero = () => {
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
                            className={`absolute ${item.pos} ${item.animation} w-16 h-16 bg-surface/70 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl flex items-center justify-center opacity-80 transition-all duration-300 z-10 pointer-events-auto`}
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
                            className={`absolute ${item.pos} ${item.animation} w-12 h-12 bg-surface/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.45)] rounded-xl flex items-center justify-center opacity-85 transition-all duration-300 z-10 pointer-events-auto`}
                        >
                            <item.Icon className={`${item.size} ${item.color}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Content */}
            <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-8">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-primary/20 text-[var(--color-primary-ink)] text-xs sm:text-sm font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    Services
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-secondary)] tracking-tight leading-[1.1]">
                    Software That Ships.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-ink)]">
                        Teams That Stay.
                    </span>
                </h1>
                
                {/* Paragraph Description */}
                <p className="text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl leading-relaxed">
                    We design, build, and operate custom software for businesses that have
                    outgrown off-the-shelf tools. Senior engineers, incremental delivery,
                    and a handover that leaves your team in control.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all shadow-lg shadow-[var(--color-primary)]/25 cursor-pointer hover:-translate-y-1"
                    >
                        Schedule a call <span>→</span>
                    </Link>
                    <a
                        href="#capabilities"
                        className="border border-[var(--color-border)] bg-surface/80 backdrop-blur-sm hover:bg-surface text-[var(--color-secondary)] px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all cursor-pointer hover:-translate-y-1 shadow-sm"
                    >
                        Browse capabilities <span className="text-xs">↓</span>
                    </a>
                </div>
                
                {/* Bottom Feature Checkmarks */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-[var(--color-border)]/50 text-sm text-[var(--color-muted)] font-medium w-full max-w-2xl mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--color-primary-ink)] font-bold">✓</span> Senior engineers only
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--color-primary-ink)] font-bold">✓</span> Working build every sprint
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--color-primary-ink)] font-bold">✓</span> Full IP transfer
                    </div>
                </div>
            </div>
        </section>
    );
};
