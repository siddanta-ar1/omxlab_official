'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * The browser preserves scroll position across client-side navigations, so
 * clicking a card halfway down a page lands you halfway down the next one.
 * This resets to the top on route change, and honours #hash targets when present.
 */
export const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // usePathname drops the fragment, so read it off the location directly.
        const hash = window.location.hash;

        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
