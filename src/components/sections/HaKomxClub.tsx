'use client';

import React, { useState } from 'react';
import { LuRocket, LuSparkles, LuUsers, LuX, LuBadgeCheck } from 'react-icons/lu';

export const HaKomxClub = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <>
            <section className="relative overflow-hidden py-24 md:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
                
                {/* Ambient Background Glows */}
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl rounded-full bg-gradient-to-r from-[var(--color-primary)]/10 via-[#0891B2]/10 to-[var(--color-highlight)]/20 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                            backgroundSize: '32px 32px',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-surface/60 backdrop-blur-xl border border-black/10 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden relative">
                        
                        {/* Inner Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-bl-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[var(--color-highlight)]/20 to-transparent rounded-tr-[80px] pointer-events-none" />
                        
                        {/* Floating Icons */}
                        <div className="absolute top-12 left-12 md:top-20 md:left-24 text-[var(--color-primary-ink)]/40 animate-float-slow hidden md:block">
                            <LuSparkles className="w-8 h-8" />
                        </div>
                        <div className="absolute bottom-16 right-12 md:bottom-20 md:right-24 text-[var(--color-primary-ink)]/40 animate-float-fast hidden md:block">
                            <LuRocket className="w-10 h-10" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Premium Glassmorphism Icon instead of gradient block */}
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-surface/80 backdrop-blur-md border border-[var(--color-border)] rounded-[3px] flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-300">
                                <LuUsers className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-primary-ink)]" />
                            </div>
                            
                            <div className="inline-flex items-center gap-2.5 mb-6 omx-label text-[var(--color-muted)]">
                                Join Our Community
                            </div>
                            
                            {/* Removed gradient color from text */}
                            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-secondary)] tracking-tight mb-6">
                                Welcome to the <br />
                                HaKomx Club
                            </h2>
                            
                            <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                Connect with elite developers, get early access to our newest open-source releases, and help shape the future of our ecosystem. The club is exclusive, but the knowledge is open.
                            </p>
                            
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="group relative inline-flex flex-col items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[var(--color-primary)] rounded-[3px] hover:bg-[var(--color-primary-hover)] hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-lg">
                                    Apply to Join <LuRocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative bg-surface rounded-[4px] w-full max-w-md overflow-hidden transform transition-all">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-muted hover:text-muted hover:bg-black/1 rounded-[3px] transition-colors"
                        >
                            <LuX className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <LuBadgeCheck className="w-16 h-16 text-green-500 mx-auto mb-4 animate-[ping_0.5s_cubic-bezier(0,0,0.2,1)_1]" />
                                    <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-2">Application Received!</h3>
                                    <p className="text-[var(--color-muted)]">We will review your application and get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-2">Join HaKomx</h3>
                                    <p className="text-[var(--color-muted)] text-sm mb-6">Fill out the form below to apply for the exclusive developers club.</p>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-secondary)] mb-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                required
                                                className="w-full px-4 py-3 rounded-[3px] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-secondary)] mb-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                required
                                                className="w-full px-4 py-3 rounded-[3px] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="github" className="block text-sm font-medium text-[var(--color-secondary)] mb-1">GitHub / LinkedIn URL</label>
                                            <input 
                                                type="url" 
                                                id="github" 
                                                className="w-full px-4 py-3 rounded-[3px] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all"
                                                placeholder="https://github.com/..."
                                            />
                                        </div>
                                        <button 
                                            type="submit"
                                            className="w-full py-3.5 mt-2 bg-[var(--color-primary)] text-white font-bold rounded-[3px] hover:bg-[var(--color-primary-hover)] transition-colors"
                                        >
                                            Submit Application
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
