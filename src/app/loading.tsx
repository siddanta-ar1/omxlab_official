/**
 * Shown while a route segment streams in — the Next equivalent of the splash
 * screen the Vite build painted into index.html before React hydrated.
 */
export default function Loading() {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--color-body)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/logo-small.png"
                alt="Loading OMX Lab..."
                className="w-36 h-auto animate-splash-pulse"
            />
        </div>
    );
}
