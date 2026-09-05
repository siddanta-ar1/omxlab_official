import { OmxMark } from '@/components/common/OmxMark';

/**
 * Shown while a route segment streams in — the Next equivalent of the splash
 * screen the Vite build painted into index.html before React hydrated.
 */
export default function Loading() {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--color-body)]">
            <OmxMark
                className="w-28 h-28 text-secondary animate-splash-pulse"
                title="Loading OMX Lab"
            />
        </div>
    );
}
