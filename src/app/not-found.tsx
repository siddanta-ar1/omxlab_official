import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="bg-[var(--color-surface)] py-24 md:py-32 border-b border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-xs font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase block mb-3">
                    404 — Not Found
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-secondary)] tracking-tight mb-4">
                    This page doesn&apos;t exist.
                </h1>
                <p className="text-[var(--color-muted)] text-base md:text-lg mb-8 max-w-xl mx-auto">
                    The page you&apos;re looking for may have been renamed or moved. Everything
                    else is still where you left it.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-[var(--color-primary)]/20"
                >
                    <span>←</span> Back to Home
                </Link>
            </div>
        </section>
    );
}
