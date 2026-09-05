import React from 'react';
import { OurMission } from '@/components/sections/OurMisson';
import { LuBuilding2, LuCompass, LuTarget, LuUsers, LuAward, LuHandshake } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuBuilding2, color: 'text-[#818CF8]', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuCompass, color: 'text-[#22D3EE]', pos: 'top-[35%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuTarget, color: 'text-[#A5B4FC]', pos: 'bottom-[30%] left-[12%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuUsers, color: 'text-[#818CF8]', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuAward, color: 'text-[#38BDF8]', pos: 'top-[45%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuHandshake, color: 'text-[#22D3EE]', pos: 'bottom-[25%] right-[10%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuBuilding2, color: 'text-[#818CF8]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuUsers, color: 'text-[#818CF8]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuTarget, color: 'text-[#A5B4FC]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuAward, color: 'text-[#38BDF8]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const AboutPage = () => {
    return (
        <>
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
                        About OMX Lab
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-secondary)] tracking-tight leading-[1.1]">
                        Building Digital Solutions.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-ink)]">
                            Empowering Businesses.
                        </span>
                    </h1>
                    
                    {/* Paragraph Description */}
                    <p className="text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl leading-relaxed">
                        We help businesses embrace digital transformation through
                        custom software development, modern web applications,
                        and scalable cloud solutions. We combine technical expertise
                        with a client-first approach.
                    </p>
                    
                    {/* Image below text instead of side-by-side */}
                    <div className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)] group w-full max-w-3xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                            alt="OMX Lab Team"
                            className="w-full h-[300px] sm:h-[400px] object-cover object-center relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/40 via-transparent to-transparent z-20 pointer-events-none" />
                    </div>
                </div>
            </section>

            <OurMission />
        </>
    );
};