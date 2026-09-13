'use client';

import { useSyncExternalStore } from 'react';
import { MdLightMode, MdDarkMode, MdContrast } from 'react-icons/md';

/* ---------------------------------------------------------------------------
   ThemeToggle

   Three states, not two: system, light, dark. "System" is the default and the
   one most sites omit — without it a reader who has set their OS to dark gets
   whatever the site last stored, which is the wrong answer.

   The stored choice lives in localStorage, which is an external store rather
   than React state, so it is read through useSyncExternalStore: that gives a
   server snapshot ("system", matching what the pre-paint script assumes) and
   keeps the button in step if the value changes in another tab. Reading it in
   an effect instead would mean a second render on every mount.
   --------------------------------------------------------------------------- */

type Theme = 'system' | 'light' | 'dark';

const KEY = 'omx-theme';
const EVENT = 'omx-theme-change';
const ORDER: Theme[] = ['system', 'light', 'dark'];

const LABEL: Record<Theme, string> = {
  system: 'Theme: following system. Activate for light.',
  light: 'Theme: light. Activate for dark.',
  dark: 'Theme: dark. Activate to follow system.',
};

const ICON = { system: MdContrast, light: MdLightMode, dark: MdDarkMode };

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function getSnapshot(): Theme {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system'; // private mode, or storage blocked
  }
}

/** The server cannot know the choice; the pre-paint script applies it instead. */
const getServerSnapshot = (): Theme => 'system';

function apply(theme: Theme) {
  const root = document.documentElement;
  try {
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem(KEY);
    } else {
      root.setAttribute('data-theme', theme);
      localStorage.setItem(KEY, theme);
    }
  } catch {
    // Storage can be blocked; the attribute still applies for this page view.
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
  }
  window.dispatchEvent(new Event(EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const Icon = ICON[theme];

  return (
    <button
      type="button"
      onClick={() => apply(ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length])}
      aria-label={LABEL[theme]}
      title={LABEL[theme]}
      className="flex items-center justify-center px-space-md text-on-surface-variant
                 hover:text-on-surface hover:bg-studio-grey transition-colors duration-300"
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
