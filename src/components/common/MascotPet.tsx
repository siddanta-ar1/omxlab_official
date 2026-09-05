'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { LuX } from 'react-icons/lu';

// Mascot Data
const MASCOTS = {
    BOY: {
        id: 'boy',
        image: '/mascot.jpg',
        messages: ["Hello there! 👋", "Welcome to OMX Lab!", "Building something cool? 🚀", "I love tech! 💻"],
        clickMessage: "Awesome! ✨",
    },
    GIRL: {
        id: 'girl',
        image: '/mascot-girl.jpg',
        messages: ["Need some help? 💡", "Check out our services!", "Did you know we build apps? 📱", "Let's innovate! 🌟"],
        clickMessage: "Yay! 🎉",
    },
    DOG: {
        id: 'dog',
        image: '/mascot-dog.jpg',
        messages: ["Woof! 🐾", "Let's play!", "*happy tail wags*", "Need a break? 🦴"],
        clickMessage: "Bark! 🐶",
    }
};

type Mascot = (typeof MASCOTS)[keyof typeof MASCOTS];
type Particle = { id: number; angle: number; color: string };
type MascotPosition = 'hidden' | 'nav' | 'footer' | 'button' | 'welcome';

export const MascotPet = () => {
    // States
    const [isDismissed, setIsDismissed] = useState(true); // Default true until mounted
    const [activeMascot, setActiveMascot] = useState<Mascot | null>(null);
    const [position, setPosition] = useState<MascotPosition>('hidden'); // nav, footer, button, welcome
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        // Check local storage
        if (localStorage.getItem('mascotDismissed') !== 'true') {
            setIsDismissed(false);
        }
    }, []);

    // Trigger a specific mascot
    const showMascot = useCallback((mascot: Mascot, pos: MascotPosition, duration = 5000) => {
        if (isVisible) return; 
        
        setActiveMascot(mascot);
        setPosition(pos);
        
        const randomMsg = mascot.messages[Math.floor(Math.random() * mascot.messages.length)];
        setMessage(pos === 'welcome' ? "Welcome to OMX Lab! 👋" : randomMsg);
        
        setIsVisible(true);
        setIsClicked(false);

        // Auto-hide
        setTimeout(() => {
            setIsVisible(false);
        }, duration);
    }, [isVisible]);

    useEffect(() => {
        if (isDismissed) return;

        // 1. Initial Load "Welcome" Mascot (Cute Boy)
        const welcomeTimer = setTimeout(() => {
            showMascot(MASCOTS.BOY, 'welcome', 7000);
        }, 1500);

        // 2. Random Guiding Mascots (Dog and Girl)
        const scheduleNextMascot = () => {
            // Random delay between 10 to 18 seconds
            const delay = Math.random() * 8000 + 10000;
            timeoutRef.current = setTimeout(() => {
                if (!isVisible) {
                    const randomMascot = Math.random() > 0.5 ? MASCOTS.GIRL : MASCOTS.DOG;
                    const positions: MascotPosition[] = ['nav', 'footer', 'button'];
                    const randomPos = positions[Math.floor(Math.random() * positions.length)];
                    showMascot(randomMascot, randomPos, 6000);
                }
                scheduleNextMascot(); // loop recursively with new random delay
            }, delay);
        };

        // Start scheduling after welcome message gives way
        setTimeout(scheduleNextMascot, 9000);

        return () => {
            clearTimeout(welcomeTimer);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isDismissed, isVisible, showMascot]);

    const handleMascotClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent bubbling to the close button
        if (!activeMascot || isClicked) return;
        
        setIsClicked(true);
        setMessage(activeMascot.clickMessage);
        
        const newParticles = Array.from({ length: 8 }).map((_, i) => ({
            id: Date.now() + i,
            angle: (i * 45) * (Math.PI / 180),
            color: ['#818CF8', '#EEF4FF', '#f43f5e', '#f59e0b', '#10b981'][Math.floor(Math.random() * 5)]
        }));
        
        setParticles(newParticles);
        
        setTimeout(() => {
            setParticles([]);
        }, 1000);
    };

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('mascotDismissed', 'true');
    };

    if (isDismissed || !activeMascot) return null;

    const positionClasses: Record<MascotPosition, string> = {
        hidden: '',
        nav: "top-[70px] right-[5%] origin-top",
        footer: "bottom-[20px] left-[10%] origin-bottom",
        button: "top-1/2 right-[2%] -translate-y-1/2 origin-right",
        welcome: "bottom-[30px] right-[30px] origin-bottom-right"
    };

    const animationClasses: Record<MascotPosition, string> = {
        hidden: '',
        nav: "translate-y-0 opacity-100",
        footer: "translate-y-0 opacity-100",
        button: "translate-x-0 opacity-100",
        welcome: "translate-y-0 opacity-100 scale-100"
    };

    const hiddenClasses: Record<MascotPosition, string> = {
        hidden: '',
        nav: "-translate-y-full opacity-0",
        footer: "translate-y-[150%] opacity-0",
        button: "translate-x-full opacity-0",
        welcome: "translate-y-[150%] opacity-0 scale-50"
    };

    return (
        <div 
            className={`fixed z-[100] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${positionClasses[position]} ${
                isVisible ? animationClasses[position] : hiddenClasses[position]
            }`}
        >
            <div 
                className="relative group pointer-events-auto cursor-pointer"
                onClick={handleMascotClick}
            >
                {/* Close/Dismiss Button */}
                <button 
                    onClick={handleDismiss}
                    className="absolute -top-4 -right-4 w-7 h-7 bg-surface rounded-full border border-[var(--color-border)] shadow-md text-muted hover:text-[#818CF8] hover:bg-rose-50 flex items-center justify-center z-10 transition-colors opacity-0 group-hover:opacity-100"
                    title="Dismiss permanently"
                >
                    <LuX className="w-4 h-4" />
                </button>

                {/* Speech Bubble */}
                <div className={`absolute -top-12 -left-16 whitespace-nowrap bg-surface border border-[var(--color-border)] shadow-[0_10px_25px_rgba(0,0,0,0.5)] rounded-2xl p-2 px-4 text-xs md:text-sm font-bold text-[var(--color-primary-ink)] transition-all duration-300 transform scale-0 group-hover:scale-100 origin-bottom-right ${isVisible && !isClicked ? 'animate-[bounce_2s_infinite] delay-300 scale-100' : ''} ${isClicked ? 'scale-110 !text-[#818CF8]' : ''}`}>
                    {message}
                    {/* Bubble tail */}
                    <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-surface border-b border-r border-[var(--color-border)] transform rotate-45"></div>
                </div>

                {/* Particle Container (Explosion Effect) */}
                {particles.map(p => (
                    <div 
                        key={p.id}
                        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none animate-[particle_0.8s_ease-out_forwards]"
                        style={{
                            backgroundColor: p.color,
                            '--tx': `${Math.cos(p.angle) * 80}px`,
                            '--ty': `${Math.sin(p.angle) * 80}px`,
                        } as React.CSSProperties}
                    />
                ))}

                {/* Ring Ripple Effect on Click */}
                {isClicked && (
                    <div className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)] opacity-0 animate-[ripple_0.8s_ease-out_forwards]" />
                )}

                {/* The Mascot Image */}
                <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)] overflow-hidden bg-[var(--color-accent)] animate-float transition-all duration-500 ${isClicked ? 'rotate-[360deg] scale-110' : 'group-hover:scale-105'}`}>
                    <img 
                        src={activeMascot.image} 
                        alt="OMX Lab Mascot" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
