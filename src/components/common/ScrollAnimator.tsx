'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ---------------------------------------------------------------------------
   ScrollAnimator

   One observer, re-armed per route. This used to run as an inline script at
   the end of <body>, which caused a hydration mismatch: the script stamped
   `js-anim` on <html> and `data-in` on every section before React hydrated, so
   React found attributes it had never rendered and gave up on patching them.

   Running the same logic from an effect fixes that by construction — an effect
   cannot run until after hydration, so every attribute it writes is applied to
   a tree React has already claimed.

   This component lives in the root layout, which mounts once for the whole
   session — only `children` (the page) is swapped on navigation. An effect
   with an empty dependency array would therefore only ever observe the very
   first page's `[data-anim]` nodes: every section on every page you navigate
   to afterwards would sit at its hidden opacity-0 state forever, since nothing
   would be watching it and the one-shot failsafe would already have fired.
   Keying the effect on the pathname re-queries and re-observes on every
   client-side navigation, so each page's sections get their own reveal pass.

   The safety property from the inline version is kept: the hidden state in CSS
   is scoped to `.js-anim`, which is only added once the observer is actually
   armed. No JS, a thrown error, or a reduced-motion preference all leave the
   page fully visible, and a 2s failsafe reveals anything the observer misses.
   --------------------------------------------------------------------------- */

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const nodes = document.querySelectorAll<HTMLElement>('[data-anim]:not([data-in])');
    if (!nodes.length) return;

    const root = document.documentElement;
    const reveal = (el: Element) => el.setAttribute('data-in', '');

    root.classList.add('js-anim');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );

    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal(node);
      else observer.observe(node);
    }

    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll('[data-anim]:not([data-in])')
        .forEach(reveal);
      observer.disconnect();
    }, 2000);

    // `js-anim` is a page-level "JS is capable of animating" flag, not a
    // per-route one — it must never be removed while the app is running, or
    // the next section to mount would flash in unhidden and un-animated.
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}

export default ScrollAnimator;
