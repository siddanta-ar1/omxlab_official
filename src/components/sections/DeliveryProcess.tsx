'use client';

import React, { useState, useEffect } from 'react';
import { deliveryProcess } from '@/data/services';
import { LuSearch, LuMap, LuCode, LuShield, LuSend } from 'react-icons/lu';

// Map icons to the steps since they don't have them in data
const stepIcons = [LuSearch, LuMap, LuCode, LuShield, LuSend];

export const DeliveryProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const intervalTime = 4000; // 4 seconds per step
        const updateInterval = 50; 
        const stepAmount = (updateInterval / intervalTime) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveStep((current) => (current + 1) % deliveryProcess.length);
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

    const ActiveIcon = stepIcons[activeStep];

    return (
        <section className="relative overflow-hidden bg-[var(--color-body)] py-20 md:py-32 border-t border-[var(--color-border)]">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-[var(--color-accent)]" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/20 blur-[120px]" />
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
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2.5 mb-6 omx-label text-[var(--color-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        How we deliver
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                        From first conversation to handover.
                    </h2>
                    <p className="text-[var(--color-muted)] text-lg md:text-xl">
                        Five stages. You see working software from the third one onward, and you
                        own every artefact we produce along the way.
                    </p>
                </div>

                {/* Interactive Command Center */}
                <div 
                    className="max-w-5xl mx-auto bg-surface/60 backdrop-blur-xl border border-black/10 rounded-[4px] overflow-hidden flex flex-col md:flex-row min-h-[450px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left Sidebar - Step Navigation */}
                    <div className="w-full md:w-1/3 bg-body/80 border-b md:border-b-0 md:border-r border-[var(--color-border)] p-4 md:p-6 relative">
                        <div className="space-y-2 relative z-10">
                            {deliveryProcess.map((step, index: number) => {
                                const isActive = activeStep === index;
                                return (
                                    <button
                                        key={step.number}
                                        onClick={() => handleStepClick(index)}
                                        className={`w-full text-left px-4 py-4 rounded-[3px] transition-all duration-300 relative group flex items-center gap-4 ${
                                            isActive 
                                                ? 'bg-surface shadow-sm border border-[var(--color-primary)]/20' 
                                                : 'hover:bg-black/1'
                                        }`}
                                    >
                                        <div className={`font-mono text-sm font-bold transition-colors ${isActive ? 'text-[var(--color-primary-ink)]' : 'text-muted group-hover:text-muted'}`}>
                                            {step.number}
                                        </div>
                                        <div className={`font-bold transition-colors ${isActive ? 'text-[var(--color-secondary)]' : 'text-[var(--color-muted)] group-hover:text-[var(--color-secondary)]'}`}>
                                            {step.title}
                                        </div>
                                        
                                        {/* Progress Line indicator */}
                                        {isActive && (
                                            <div className="absolute bottom-0 left-0 h-1 bg-[var(--color-primary)]/10 w-full rounded-b-xl overflow-hidden">
                                                <div 
                                                    className="h-full bg-[var(--color-primary)] transition-all ease-linear"
                                                    style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                                                />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Main Content Area */}
                    <div className="w-full md:w-2/3 p-8 md:p-12 relative flex items-center">
                        {/* Huge Background Icon */}
                        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[var(--color-primary-ink)]/[0.03] transition-all duration-700 ease-in-out">
                            <ActiveIcon className="w-[350px] h-[350px]" />
                        </div>
                        
                        <div key={activeStep} className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-[3px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] flex items-center justify-center animate-[bounce_2s_infinite]">
                                    <ActiveIcon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-6xl font-black text-[var(--color-primary-ink)]/10 font-mono tracking-tighter">
                                    {deliveryProcess[activeStep].number}
                                </div>
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-6 animate-[fadeInUp_0.5s_ease-out]">
                                {deliveryProcess[activeStep].title}
                            </h3>
                            
                            <p className="text-lg text-[var(--color-muted)] leading-relaxed animate-[fadeInUp_0.7s_ease-out]">
                                {deliveryProcess[activeStep].description}
                            </p>
                            
                            <div className="mt-8 flex gap-2 animate-[fadeInUp_0.9s_ease-out]">
                                {deliveryProcess.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`h-1.5 rounded-full transition-all duration-500 ${
                                            i === activeStep ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-black/2'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
