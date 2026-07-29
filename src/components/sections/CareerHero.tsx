import { careerStats } from '@/data/career';
import { LuBriefcase, LuGraduationCap, LuCode, LuSparkles, LuAward, LuActivity } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuBriefcase, color: 'text-emerald-500', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuCode, color: 'text-blue-500', pos: 'top-[35%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuSparkles, color: 'text-violet-500', pos: 'bottom-[30%] left-[12%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuGraduationCap, color: 'text-indigo-500', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuAward, color: 'text-amber-500', pos: 'top-[45%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuActivity, color: 'text-rose-500', pos: 'bottom-[25%] right-[10%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuBriefcase, color: 'text-emerald-500', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuAward, color: 'text-amber-500', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuSparkles, color: 'text-violet-500', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuGraduationCap, color: 'text-indigo-500', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const CareerHero = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--color-surface)] pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[var(--color-border)]">

            {/* Full-width Background Effects */}
            <div className="pointer-events-none absolute top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-full overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent" />
                <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            {/* Floating Application Icons Layer (Desktop) */}
            <div className="absolute inset-0 max-w-[1400px] mx-auto hidden md:block">
                {floatingIcons.map((item) => (
                    <div 
                        key={item.id} 
                        className={`absolute ${item.pos} ${item.animation} w-16 h-16 bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl flex items-center justify-center opacity-80 transition-all duration-300 z-10 pointer-events-auto`}
                    >
                        <item.Icon className={`${item.size} ${item.color}`} />
                    </div>
                ))}
            </div>

            {/* Floating Application Icons Layer (Mobile) */}
            <div className="absolute inset-0 max-w-full mx-auto block md:hidden overflow-hidden">
                {mobileFloatingIcons.map((item) => (
                    <div 
                        key={`mobile-${item.id}`} 
                        className={`absolute ${item.pos} ${item.animation} w-12 h-12 bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl flex items-center justify-center opacity-85 transition-all duration-300 z-10 pointer-events-auto`}
                    >
                        <item.Icon className={`${item.size} ${item.color}`} />
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-mono font-semibold tracking-widest uppercase mb-6 border border-[var(--color-border)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    Career
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-tight max-w-4xl mx-auto">
                    Good Engineers.
                    <br />
                    <span className="text-[var(--color-primary)]">
                        Room To Get Better.
                    </span>
                </h1>

                <p className="mt-6 text-[var(--color-muted)] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                    We are a small team that ships production software for clients who
                    depend on it. That means real ownership, senior review on everything,
                    and no busywork — but also no hiding from the consequences of your
                    own design decisions.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                    <a
                        href="#open-roles"
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-[var(--color-primary)]/20 cursor-pointer"
                    >
                        See open roles <span>↓</span>
                    </a>
                    <a
                        href="#hiring-process"
                        className="border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-body)] text-[var(--color-secondary)] px-6 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all cursor-pointer"
                    >
                        How hiring works <span className="text-xs">↓</span>
                    </a>
                </div>

                {/* Stats Strip */}
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-[var(--color-border)] max-w-3xl mx-auto w-full">
                    {careerStats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--color-primary)] tracking-tight leading-none">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-muted)]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
