'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const PageTransitionLoader = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Start loading sequence
        setIsLoading(true);
        setIsVisible(true);

        let fadeTimer: ReturnType<typeof setTimeout>;

        // Hide after a brief moment
        const timer = setTimeout(() => {
            setIsVisible(false); // Start fade out

            // Wait for fade out animation before unmounting
            fadeTimer = setTimeout(() => {
                setIsLoading(false);
            }, 300);
        }, 500);

        return () => {
            clearTimeout(timer);
            clearTimeout(fadeTimer);
        };
    }, [pathname]);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] bg-[var(--color-body)] flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/logo-small.png"
                alt="Loading..."
                className="w-36 h-auto"
                style={{ animation: 'pulseLogo 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
            <style>{`
                @keyframes pulseLogo {
                    0%, 100% { transform: scale(0.95); opacity: 0.7; }
                    50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 15px rgba(16, 80, 224, 0.25)); }
                }
            `}</style>
        </div>
    );
};
