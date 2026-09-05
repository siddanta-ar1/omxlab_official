'use client';

import React, { useEffect, useRef, useState } from 'react';
import { researchProcess } from '@/data/research';

export const ResearchProcess = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--color-body)] py-20 md:py-32 border-t border-[var(--color-border)]">
            {/* Background color effect */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent" />
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
                <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)] border border-[var(--color-primary)]/20 text-[var(--color-primary-ink)] text-xs font-semibold mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        How we work
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-6">
                        From open question to shipped practice.
                    </h2>
                    <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-2xl mx-auto">
                        Five steps. Most investigations run four to eight weeks, and a negative result is a finished result.
                    </p>
                </div>

                {/* Criss-Cross Timeline */}
                <div className="relative max-w-5xl mx-auto py-8">
                    {/* The central line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent md:-translate-x-1/2" />
                    
                    {researchProcess.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TimelineNode key={step.number} step={step} isEven={isEven} index={index} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const TimelineNode = ({
    step,
    isEven,
    index,
}: {
    step: (typeof researchProcess)[number];
    isEven: boolean;
    index: number;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect after triggering once so it stays visible
                    observer.unobserve(entry.target);
                }
            },
            { 
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );
        
        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }
        
        return () => observer.disconnect();
    }, []);

    // On mobile, everything is left-aligned. On desktop, criss-cross (alternating).
    const flexDirection = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
    const textAlignment = isEven ? 'md:text-right' : 'md:text-left';
    
    // Bouncy starting transforms
    const transformStart = isEven ? 'md:-translate-x-32' : 'md:translate-x-32';
    const transformMobileStart = 'translate-x-12';

    return (
        <div 
            ref={nodeRef}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 last:mb-0 ${flexDirection} group`}
        >
            {/* Timeline central dot (Candy-like bouncy dot) */}
            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-surface border-4 border-[var(--color-border)] group-hover:border-[var(--color-primary)] shadow-sm group-hover:shadow-[0_0_20px_rgba(194,169,122,0.45)] transition-all duration-300 z-10 flex items-center justify-center group-hover:scale-125">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
            </div>

            {/* Left/Right content wrapper */}
            <div className={`w-full md:w-[45%] pl-16 md:pl-0 pt-0 ${textAlignment}`}>
                <div 
                    // Candy/bouncy transition effect using cubic-bezier
                    className={`bg-surface p-6 md:p-8 rounded-3xl border border-[var(--color-border)] shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-1000 ${
                        isVisible 
                            ? 'opacity-100 translate-x-0 scale-100' 
                            : `opacity-0 ${transformStart} max-md:${transformMobileStart} scale-95`
                    }`}
                    style={{ 
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transitionDelay: `${index * 50}ms` 
                    }}
                >
                    <div className="text-[var(--color-primary-ink)] font-mono font-bold text-lg md:text-2xl tracking-wider mb-2 opacity-80 group-hover:opacity-100 group-hover:text-[var(--color-primary-hover)] transition-colors">
                        {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-secondary)] mb-3">
                        {step.title}
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
                        {step.description}
                    </p>
                </div>
            </div>
            
            {/* Empty space for the other half to maintain flex structure */}
            <div className="hidden md:block w-[45%]" />
        </div>
    );
};
