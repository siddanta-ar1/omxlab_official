'use client';

import React, { useState, useEffect } from 'react';
import { LuSearch, LuPenTool, LuCode, LuBadgeCheck, LuRocket } from 'react-icons/lu';

const steps = [
    {
        id: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into your requirements, defining project goals, target audience, and the technical roadmap.',
        icon: LuSearch,
    },
    {
        id: '02',
        title: 'Design & Prototyping',
        description: 'Creating intuitive wireframes and stunning UI/UX designs to visualize the final product before writing any code.',
        icon: LuPenTool,
    },
    {
        id: '03',
        title: 'Development',
        description: 'Our engineers build robust, scalable architecture using modern tech stacks tailored to your specific needs.',
        icon: LuCode,
    },
    {
        id: '04',
        title: 'Testing & QA',
        description: "Rigorous automated and manual testing ensures exceptional performance, security, and a bug-free experience.",
        icon: LuBadgeCheck,
    },
    {
        id: '05',
        title: 'Deployment & Launch',
        description: 'Smooth rollout to production servers, followed by continuous monitoring and support for long-term success.',
        icon: LuRocket,
    }
];

export const HowWeWork = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        if (isHovered) return;

        const intervalTime = 3000;
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

    // Calculate rotation to keep active step at the top (-90deg position)
    const anglePerStep = 360 / steps.length;
    const wheelRotation = -(activeStep * anglePerStep);

    return (
        <section id="how-we-work" className="relative py-24 md:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)] overflow-hidden">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-x-0 top-0 h-full bg-[var(--color-accent)]" />
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
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2.5 mb-6 omx-label text-[var(--color-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        Our Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                        How we build projects.
                    </h2>
                    <p className="text-[var(--color-muted)] text-lg md:text-xl">
                        From initial concept to final launch, we follow a meticulous process to ensure excellence at every step.
                    </p>
                </div>

                {/* Circular Wheel */}
                <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] aspect-square mx-auto mt-10"
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    {/* The dashed spinning ring */}
                    <div 
                        className="absolute w-[80%] h-[80%] left-[10%] top-[10%] border-[2px] border-dashed border-[var(--color-border)] rounded-[3px] z-10 opacity-70"
                        style={{ animation: 'spin 20s linear infinite' }}
                    ></div>
                    
                    {/* Center Content Bubble */}
                    <div className="absolute w-[60%] h-[60%] left-[20%] top-[20%] bg-surface rounded-[3px] border border-[var(--color-border)] flex flex-col items-center justify-center p-4 md:p-8 text-center z-20 transition-all duration-500">
                        <div className="text-[var(--color-primary-ink)] font-mono font-bold text-xl md:text-3xl mb-1 md:mb-3 opacity-90 transition-all duration-300">
                            {steps[activeStep].id}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-[var(--color-secondary)] mb-2 md:mb-4 transition-all duration-300">
                            {steps[activeStep].title}
                        </h3>
                        <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed hidden sm:block max-w-[90%] md:max-w-[85%] transition-all duration-300">
                            {steps[activeStep].description}
                        </p>
                        
                        {/* Progress Bar inside center circle */}
                        <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[var(--color-accent)] rounded-full mt-4 md:mt-6 overflow-hidden hidden sm:block">
                            <div 
                                className="h-full bg-[var(--color-primary)] transition-all ease-linear"
                                style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                            />
                        </div>
                    </div>

                    {/* Orbiting Nodes Container (Rotates Sequentially) */}
                    <div 
                        className="absolute inset-0 z-30 transition-transform duration-700 ease-in-out"
                        style={{ transform: `rotate(${wheelRotation}deg)` }}
                    >
                        {steps.map((step, index: number) => {
                            const angle = (index * anglePerStep) - 90;
                            const radian = (angle * Math.PI) / 180;
                            const radius = 40; 
                            const x = 50 + radius * Math.cos(radian);
                            const y = 50 + radius * Math.sin(radian);
                            
                            const isActive = activeStep === index;
                            const counterRotation = -wheelRotation;

                            return (
                                <div
                                    key={step.id}
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                >
                                    <button
                                        onClick={() => handleStepClick(index)}
                                        className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                                            isActive 
                                                ? 'bg-[var(--color-primary)] text-white scale-110'
                                                : 'bg-surface border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-ink)] hover:scale-105'
                                        }`}
                                        style={{ transform: `rotate(${counterRotation}deg)`, transition: 'transform 700ms ease-in-out, background-color 500ms, transform 500ms' }}
                                        aria-label={`Step ${step.id}: ${step.title}`}
                                        title={step.title}
                                    >
                                        <step.icon className={`w-5 h-5 md:w-7 md:h-7 ${isActive ? 'animate-pulse' : ''}`} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                {/* Mobile description fallback */}
                <div className="sm:hidden mt-8 max-w-sm mx-auto text-center bg-surface p-6 rounded-[3px] border border-[var(--color-border)] shadow-sm">
                    <h3 className="font-bold text-lg mb-3 text-[var(--color-primary-ink)]">
                        {steps[activeStep].title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                        {steps[activeStep].description}
                    </p>
                    <div className="w-full h-1 bg-[var(--color-accent)] rounded-full mt-6 overflow-hidden">
                        <div 
                            className="h-full bg-[var(--color-primary)] transition-all ease-linear"
                            style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
