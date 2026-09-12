'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdSearch, MdClose } from 'react-icons/md';
import { searchEntries, type ScoredEntry } from '@/lib/search-index';

/* ---------------------------------------------------------------------------
   SearchDialog

   A registry lookup, not a search engine: the index is static and local, so
   results appear on the keystroke with no request and no spinner.

   Keyboard contract, which is the whole point of a control like this:
   ⌘K / Ctrl-K opens it from anywhere, ↑ ↓ move the selection, Enter navigates,
   Escape closes and returns focus to whatever opened it. Focus is trapped
   inside while open and the rest of the page is inert to assistive tech.

   Styled as the system styles an elevated panel — square top, skirted bottom,
   hairline rules, and the one permitted shadow.
   --------------------------------------------------------------------------- */

type SearchDialogProps = {
  onClose: () => void;
};

/** Mounted only while open, so every opening starts from a clean state. */
export function SearchDialog({ onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchEntries(query), [query]);

  useEffect(() => {
    const t = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(t);
  }, []);

  // Lock the page behind the dialog so it does not scroll under it.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const go = (entry: ScoredEntry) => {
    onClose();
    router.push(entry.href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
      return;
    }
    if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      go(results[active]);
      return;
    }
    // Keep focus inside the panel.
    if (event.key === 'Tab' && panelRef.current) {
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'input, button, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  // Keep the highlighted row in view when arrowing through a long list.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center
                 px-margin-mobile pt-[10vh] sm:pt-[14vh]
                 bg-text-primary/30"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search the registry"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        className="w-full max-w-xl bg-paper-white border border-nav-hairline
                   rounded-b-lg mega-menu-veil overflow-hidden"
      >
        {/* Query row */}
        <div className="flex items-center gap-space-sm px-space-md border-b border-grid-hairline">
          <MdSearch size={18} aria-hidden="true" className="text-text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="search-results"
            aria-activedescendant={results[active] ? `search-opt-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            placeholder="Search modules, research, endpoints…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            className="flex-1 bg-transparent py-space-md text-body-lead text-text-primary
                       placeholder:text-text-muted outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 p-1 text-text-muted hover:text-text-primary transition-colors duration-300"
          >
            <MdClose size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        {query.trim() === '' ? (
          <p className="px-space-md py-space-lg text-body-compact text-text-muted">
            Type to search the registry — modules, instruments, publications,
            endpoints, roles and dispatches.
          </p>
        ) : results.length === 0 ? (
          <p className="px-space-md py-space-lg text-body-compact text-text-muted">
            No registry entry matches{' '}
            <span className="text-text-primary">“{query}”</span>.
          </p>
        ) : (
          <ul
            id="search-results"
            ref={listRef}
            role="listbox"
            aria-label="Search results"
            className="max-h-[52vh] overflow-y-auto divide-y divide-grid-hairline"
          >
            {results.map((entry, i) => (
              <li key={`${entry.kind}-${entry.title}`} role="none">
                <button
                  type="button"
                  id={`search-opt-${i}`}
                  data-index={i}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(entry)}
                  className={`w-full text-left flex items-start gap-space-sm px-space-md py-space-sm
                              transition-colors duration-100
                              ${i === active ? 'bg-studio-grey' : 'bg-paper-white'}`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-[6px] w-2.5 h-2.5 shrink-0 ${entry.swatch ?? 'bg-brand-pale-sage'}`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-space-sm">
                      <span className="text-body-default text-text-primary font-medium truncate">
                        {entry.title}
                      </span>
                      <span className="text-label-code uppercase text-text-muted shrink-0">
                        {entry.kind}
                      </span>
                    </span>
                    {entry.detail && (
                      <span className="block text-body-compact text-on-surface-variant truncate">
                        {entry.detail}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Key legend — hidden on phones, where there is no keyboard to hint at. */}
        <div className="hidden sm:flex items-center gap-space-md px-space-md py-2 border-t border-grid-hairline bg-studio-grey">
          {[
            ['↑ ↓', 'navigate'],
            ['↵', 'open'],
            ['esc', 'close'],
          ].map(([key, label]) => (
            <span key={label} className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 border border-grid-hairline bg-paper-white text-[10px] text-text-primary rounded">
                {key}
              </kbd>
              <span className="text-label-code uppercase text-text-muted">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchDialog;
