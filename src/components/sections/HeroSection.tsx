import React from 'react';
import Link from 'next/link';
import { FaAws, FaReact, FaNodeJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiFigma, SiNotion, SiVercel, SiMongodb, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

const floatingIcons = [
    { id: 1, Icon: SiVercel, color: 'text-black', pos: 'top-[10%] left-[8%]', size: 'text-3xl', animation: 'animate-float' },
    { id: 2, Icon: FaReact, color: 'text-[#61DAFB]', pos: 'top-[25%] left-[22%]', size: 'text-5xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: FaAws, color: 'text-[#FF9900]', pos: 'bottom-[20%] left-[12%]', size: 'text-4xl', animation: 'animate-float-slow' },
    { id: 4, Icon: SiFigma, color: 'text-[#F24E1E]', pos: 'top-[15%] right-[10%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 5, Icon: SiMongodb, color: 'text-[#47A248]', pos: 'top-[35%] right-[22%]', size: 'text-3xl', animation: 'animate-float-delayed' },
    { id: 6, Icon: SiTypescript, color: 'text-[#3178C6]', pos: 'bottom-[30%] left-[4%]', size: 'text-4xl', animation: 'animate-float-slow' },
    { id: 7, Icon: SiNotion, color: 'text-black', pos: 'bottom-[15%] right-[28%]', size: 'text-3xl', animation: 'animate-float' },
    { id: 8, Icon: FaDocker, color: 'text-[#2496ED]', pos: 'bottom-[25%] right-[8%]', size: 'text-5xl', animation: 'animate-float-delayed' },
    { id: 9, Icon: SiTailwindcss, color: 'text-[#06B6D4]', pos: 'top-[50%] left-[6%]', size: 'text-3xl', animation: 'animate-float-slow' },
    { id: 10, Icon: FaNodeJs, color: 'text-[#339933]', pos: 'top-[8%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 11, Icon: FaGithub, color: 'text-[#181717]', pos: 'bottom-[45%] right-[4%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 12, Icon: SiPostgresql, color: 'text-[#4169E1]', pos: 'top-[60%] right-[15%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: FaReact, color: 'text-[#61DAFB]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: SiMongodb, color: 'text-[#47A248]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: FaDocker, color: 'text-[#2496ED]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: SiFigma, color: 'text-[#F24E1E]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const HeroSection = () => {
    return (
        <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* Background color and glows */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
                
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

                {/* Floating Application Icons Layer (Mobile) - High Motion, Small Amount */}
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-xs sm:text-sm font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    IT Development & Integration
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-secondary tracking-tight leading-[1.1]">
                    Engineering the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
                        Next Generation
                    </span> <br />
                    of Digital Solutions
                </h1>
                
                {/* Paragraph Description */}
                <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
                    At OMX Lab, we design and develop custom <strong className="text-secondary font-semibold">software </strong>
                    solutions that help businesses innovate faster, optimize operations, and deliver seamless digital experiences.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all shadow-lg shadow-primary/25 cursor-pointer hover:-translate-y-1"
                    >
                        Schedule a call <span>→</span>
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto justify-center border border-border bg-white/80 backdrop-blur-sm hover:bg-white text-secondary px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all cursor-pointer hover:-translate-y-1 shadow-sm"
                    >
                        How it works <span className="text-xs">↗</span>
                    </Link>
                </div>
                
                {/* Bottom Feature Checkmarks */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-border/50 text-sm text-muted font-medium w-full max-w-2xl mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Custom Software Solutions
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Scalable & Secure
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> End-to-End Development
                    </div>
                </div>
            </div>
        </section>
    );
};