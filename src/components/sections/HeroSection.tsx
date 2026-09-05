import React from 'react';
import Link from 'next/link';
import { OmxMark } from '@/components/common/OmxMark';

const assurances = [
    'Custom Software Solutions',
    'Scalable & Secure',
    'End-to-End Development',
];

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[90vh] flex items-center bg-surface"
        >
            {/* Ambient wash — kept low-contrast so the mark stays the focal point */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent via-body to-surface" />
                <div className="absolute -top-32 right-0 w-[620px] h-[620px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="absolute top-1/3 -left-24 w-[420px] h-[420px] rounded-full bg-muted/10 blur-[110px]" />
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                        backgroundSize: '26px 26px',
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

                    {/* Copy */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-7">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-primary/30 text-primary-ink text-xs sm:text-sm font-semibold shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            IT Development &amp; Integration
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-extrabold text-secondary tracking-tight leading-[1.05]">
                            Engineering the
                            <br />
                            <span className="text-primary-ink">Next Generation</span>
                            <br />
                            of Digital Solutions
                        </h1>

                        <p className="text-muted text-lg sm:text-xl max-w-xl leading-relaxed">
                            At OMX Lab, we design and develop custom{' '}
                            <strong className="text-secondary font-semibold">software</strong>{' '}
                            solutions that help businesses innovate faster, optimize operations,
                            and deliver seamless digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-hover text-secondary px-8 py-4 rounded-xl font-semibold text-base flex items-center gap-2 transition-all shadow-lg shadow-primary/25 cursor-pointer hover:-translate-y-0.5"
                            >
                                Schedule a call <span>→</span>
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto justify-center border border-border bg-surface hover:border-primary/50 text-secondary px-8 py-4 rounded-xl font-medium text-base flex items-center gap-2 transition-all cursor-pointer hover:-translate-y-0.5 shadow-sm"
                            >
                                How it works <span className="text-xs">↗</span>
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-7 mt-2 border-t border-border w-full max-w-xl text-sm text-muted font-medium">
                            {assurances.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="text-primary-ink font-bold">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The mark */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]">
                            {/* Halo behind the mark */}
                            <div className="absolute inset-0 rounded-full bg-primary/15 blur-[70px]" />

                            {/* Slow rotating rings, so the mark reads as alive without
                                spinning the logo itself */}
                            <div className="absolute inset-[-6%] rounded-full border border-border animate-[spin_38s_linear_infinite]">
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <div className="absolute inset-[6%] rounded-full border border-dashed border-muted/25 animate-[spin_52s_linear_infinite_reverse]" />

                            <div className="absolute inset-[11%]">
                                <OmxMark
                                    className="w-full h-full text-secondary drop-shadow-[0_18px_45px_rgba(15,17,21,0.18)]"
                                    animated
                                    title="OMX Lab"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
