'use client';

import React, { useState, useEffect } from 'react';
import { LuFileText, LuPhoneCall, LuCode, LuUsers, LuBadgeCheck, LuChevronRight } from 'react-icons/lu';

const steps = [
    {
        id: '01',
        title: 'Apply',
        description: 'Find an open role on LinkedIn and apply! There are a few questions and an opportunity to upload your resume.',
        icon: LuFileText,
    },
    {
        id: '02',
        title: 'Intro call',
        description: '15 minutes with a recruiter or hiring manager. Two-way conversation — you should be evaluating us too.',
        icon: LuPhoneCall,
    },
    {
        id: '03',
        title: 'Technical work',
        description: 'A focused, time-boxed exercise — typically 45–60 minutes — on a real problem. No puzzle interviews, no weekend projects.',
        icon: LuCode,
    },
    {
        id: '04',
        title: 'Final conversation',
        description: "An in-depth conversation with the leadership team. We'll cover the role in detail, talk through career goals and long-term fit.",
        icon: LuUsers,
    },
    {
        id: '05',
        title: 'Offer & onboarding',
        description: 'Decision typically within a week of the final round. Onboarding pairs you with a senior teammate from day one.',
        icon: LuBadgeCheck,
    }
];

export const HiringProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        if (isHovered) return;

        const intervalTime = 4000;
        const updateInterval = 50;
        const stepAmount = (updateInterval / intervalTime) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveStep((current) => (current + 1) % steps.length);
                    return 0;
                }
                return prev + stepAmount;
            });
        }, updateInterval);

        return () => clearInterval(timer);
    }, [isHovered, activeStep]); 

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        setProgress(0);
    };

    return (
        <section id="hiring-process" className="relative py-24 md:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)] overflow-hidden">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-x-0 top-0 h-full bg-[var(--color-accent)]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2.5 mb-6 omx-label text-[var(--color-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Hiring Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                        What to expect.
                    </h2>
                    <p className="text-[var(--color-muted)] text-lg md:text-xl">
                        Five steps. Roughly two to four weeks end-to-end depending on the role and your availability.
                    </p>
                </div>

                {/* Interactive Timeline Design */}
                <div 
                    className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center max-w-5xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left: Steps List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-[var(--color-border)] z-0" />
                        
                        {steps.map((step, index: number) => {
                            const isActive = activeStep === index;
                            return (
                                <div 
                                    key={step.id} 
                                    onClick={() => handleStepClick(index)}
                                    className={`relative z-10 flex items-center gap-6 p-4 rounded-[3px] cursor-pointer transition-all duration-300 ${
                                        isActive ? 'bg-surface border border-[var(--color-primary)]/20 scale-105' : 'hover:bg-black/1 hover:scale-[1.02]'
                                    }`}
                                >
                                    <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                                        isActive 
                                            ? 'bg-[var(--color-primary)] text-white' 
                                            : 'bg-surface border border-[var(--color-border)] text-[var(--color-muted)]'
                                    }`}>
                                        <step.icon className={`w-6 h-6 ${isActive ? 'animate-bounce' : ''}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className={`font-mono text-sm font-bold ${isActive ? 'text-[var(--color-primary-ink)]' : 'text-[var(--color-muted)]'}`}>
                                                {step.id}
                                            </span>
                                            <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-[var(--color-secondary)]' : 'text-[var(--color-muted)]'}`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <LuChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-[var(--color-primary-ink)] opacity-100 translate-x-0' : 'text-transparent opacity-0 -translate-x-4'}`} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Active Step Details (Glassmorphism Card) */}
                    <div className="w-full lg:w-1/2 h-full min-h-[350px]">
                        <div className="h-full bg-surface/80 backdrop-blur-xl border border-[var(--color-border)] rounded-[4px] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-center relative overflow-hidden group transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                            
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl md:text-6xl font-black text-[var(--color-primary-ink)]/20 font-mono tracking-tighter">
                                    {steps[activeStep].id}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                                    {steps[activeStep].title}
                                </h3>
                            </div>
                            
                            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 min-h-[100px]">
                                {steps[activeStep].description}
                            </p>
                            
                            {/* Progress Bar inside card */}
                            <div className="mt-auto">
                                <div className="flex justify-between text-xs text-[var(--color-muted)] font-semibold mb-2">
                                    <span>Time left</span>
                                    <span>{Math.round(100 - progress)}%</span>
                                </div>
                                <div className="w-full h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)] transition-all ease-linear"
                                        style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};