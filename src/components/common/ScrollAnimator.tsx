'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ---------------------------------------------------------------------------
   ScrollAnimator

   One observer, re-armed per route. This used to run as an inline script at
   the end of <body>, which caused a hydration mismatch: the script stamped
   `js-anim` on <html> and `data-in` on every section before React hydrated, so
   React found attributes it had never rendered and gave up on patching them.

   An effect in the root layout is still too early: React may hydrate streamed
   page segments after that effect has run. Arm the observer only after the
   browser load event instead. At that point the initial document has finished
   loading, so every attribute it writes lands on a tree React has already
   claimed.

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
    let observer: IntersectionObserver | undefined;
    let failsafe: number | undefined;
    let cancelled = false;

    const arm = () => {
      if (cancelled) return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      if (typeof IntersectionObserver === 'undefined') return;

      const nodes = document.querySelectorAll<HTMLElement>('[data-anim]:not([data-in])');
      if (!nodes.length) return;

      const root = document.documentElement;
      const reveal = (el: Element) => el.setAttribute('data-in', '');

      root.classList.add('js-anim');

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer?.unobserve(entry.target);
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

      failsafe = window.setTimeout(() => {
        document
          .querySelectorAll('[data-anim]:not([data-in])')
          .forEach(reveal);
        observer?.disconnect();
      }, 2000);
    };

    // On client-side navigation the document has already loaded, while the
    // initial visit waits for the same post-hydration browser boundary.
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });

    // `js-anim` is a page-level "JS is capable of animating" flag, not a
    // per-route one — it must never be removed while the app is running, or
    // the next section to mount would flash in unhidden and un-animated.
    return () => {
      cancelled = true;
      window.removeEventListener('load', arm);
      observer?.disconnect();
      if (failsafe !== undefined) window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}

export default ScrollAnimator;
