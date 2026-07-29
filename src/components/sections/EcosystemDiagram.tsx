import { EcosystemPanel } from './EcosystemPanel';

/**
 * Full-width section wrapper around the ecosystem panel.
 * The hero renders the same panel directly in its `dense` form.
 */
export const EcosystemDiagram = () => {
    return (
        <section className="bg-[var(--color-body)] py-16 md:py-20 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-bold font-mono tracking-widest text-muted uppercase block mb-3">
                    How We Deliver
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight mb-6">
                    One engine. <span className="text-primary">Every discipline.</span>
                </h2>
                <p className="text-muted text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
                    Delivery runs through a single integrated engine, with specialist teams
                    connected to it rather than siloed beside it. That is why work does not
                    stall in handoffs between design, engineering, and operations.
                </p>

                <EcosystemPanel />
            </div>
        </section>
    );
};
