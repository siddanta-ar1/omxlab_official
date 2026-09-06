import React from 'react';

export const OpenRoles = () => {
    return (
        <section id="open-roles" className="bg-[var(--color-surface)] py-16 md:py-24 border-t border-[var(--color-border)] scroll-mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Dark Floating Card with Subtle Gradient */}
                <div className="relative overflow-hidden rounded-[4px] bg-[var(--color-primary)] text-white p-8 sm:p-12 md:p-16">

                    {/* Subtle Ambient Background Light */}

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                        {/* Left Content Column */}
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <span className="text-xs omx-label font-bold uppercase tracking-[0.08em] text-white mb-3 opacity-90">
                                Open Roles
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                                See what we're <br className="hidden sm:inline" />
                                hiring for right now.
                            </h2>

                            <p className="text-white/95 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                                Our active job postings live on LinkedIn — engineering, QA, design, and operations roles in Kathmandu and the US. The list there is always current.
                            </p>

                            <a
                                href="/career"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[3px] text-sm font-medium text-primary bg-white hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
                            >
                                <span>View Open Roles</span>
                                <span className="text-base">↗</span>
                            </a>
                        </div>

                        {/* Right Card Column (Talent Pool Box) */}
                        <div className="lg:col-span-5">
                            <div className="rounded-[3px] border border-white/30 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-xs omx-label font-bold uppercase tracking-wider text-white block mb-4 opacity-90">
                                        We're Always Building.
                                    </span>
                                    <p className="text-white/95 text-sm sm:text-base leading-relaxed mb-6">
                                        If you don't see a role that fits, send us your story anyway. We meet talented people constantly—engineers, EMs, operators—and we add the ones we want to work with to our Talent Pool. When the right fit opens, we reach out first.
                                    </p>
                                </div>

                                <a
                                    href="mailto:contact@omxlab.tech?subject=Talent%20Pool"
                                    className="inline-flex items-center gap-2 text-xs omx-label font-bold tracking-[0.08em] text-white uppercase group hover:text-white transition-colors duration-200 mt-2"
                                >
                                    <span className="border-b border-white/40 group-hover:border-white pb-0.5">
                                        Drop your resume
                                    </span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};