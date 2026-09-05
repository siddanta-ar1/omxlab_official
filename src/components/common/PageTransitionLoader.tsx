'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { OmxMark } from '@/components/common/OmxMark';

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
            <OmxMark className="w-28 h-28 text-secondary animate-splash-pulse" title="Loading" />
        </div>
    );
};
