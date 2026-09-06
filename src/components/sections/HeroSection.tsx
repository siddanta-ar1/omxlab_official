import React from 'react';
import Link from 'next/link';
import { OmxMark } from '@/components/common/OmxMark';

/* Spec bullets read as machine output rather than marketing copy, which is
   what the mono micro-label is for. */
const assurances = [
    'Custom software solutions',
    'Scalable and secure',
    'End-to-end development',
];

export const HeroSection = () => {
    return (
        <section id="home" className="relative border-b border-border bg-surface">
            {/* A faint dot field, the only texture on an otherwise flat ground. */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
                style={{
                    backgroundImage:
                        'radial-gradient(var(--color-border) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">

                    {/* Copy */}
                    <div className="lg:col-span-7 flex flex-col gap-7">
                        <div className="flex items-center gap-2.5 text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="omx-label">IT Development &amp; Integration</span>
                        </div>

                        <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold text-secondary tracking-[-0.03em] leading-[1.03]">
                            Engineering the
                            <br />
                            <span className="text-primary">Next Generation</span>
                            <br />
                            of Digital Solutions
                        </h1>

                        <p className="text-muted text-[17px] max-w-xl leading-relaxed">
                            At OMX Lab, we design and develop custom{' '}
                            <strong className="text-secondary font-medium">software</strong>{' '}
                            solutions that help businesses innovate faster, optimize operations,
                            and deliver seamless digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                            <Link
                                href="/contact"
                                className="justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-[3px] font-medium text-[15px] inline-flex items-center gap-2 transition-colors"
                            >
                                Schedule a call <span aria-hidden>→</span>
                            </Link>
                            <Link
                                href="/services"
                                className="justify-center border border-border hover:border-secondary bg-surface text-secondary px-6 py-3 rounded-[3px] font-medium text-[15px] inline-flex items-center gap-2 transition-colors"
                            >
                                How it works <span className="text-xs" aria-hidden>↗</span>
                            </Link>
                        </div>

                        {/* Spec strip — hairline-divided cells, as on the reference. */}
                        <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-border mt-4 pt-5 gap-y-3">
                            {assurances.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                    <span className="text-primary mt-px" aria-hidden>—</span>
                                    <dt className="omx-label omx-label-xs text-muted leading-[1.5]">
                                        {item}
                                    </dt>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* The mark, framed like a technical plate rather than a halo. */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-full max-w-[380px] aspect-square border border-border bg-body">
                            {/* Corner ticks, a small piece of drafting-table language. */}
                            {[
                                'top-0 left-0 border-t border-l',
                                'top-0 right-0 border-t border-r',
                                'bottom-0 left-0 border-b border-l',
                                'bottom-0 right-0 border-b border-r',
                            ].map((pos) => (
                                <span
                                    key={pos}
                                    className={`absolute w-4 h-4 border-secondary ${pos}`}
                                />
                            ))}

                            <span className="omx-label omx-label-xs absolute top-3 left-4 text-muted">
                                OMX / MARK
                            </span>
                            <span className="omx-label omx-label-xs absolute bottom-3 right-4 text-muted">
                                001
                            </span>

                            <div className="absolute inset-[18%]">
                                <OmxMark
                                    className="w-full h-full text-secondary"
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
