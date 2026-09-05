import React from "react";

export type MemberCardProps = {
    name: string;
    role: string;
    description?: string;
    image?: string;
    linkedinUrl?: string;
};

export const MemberCard = ({
    name,
    role,
    description,
    image,
    linkedinUrl,
}: MemberCardProps) => {
    return (
        <div className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            {/* Image / Avatar Container */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[var(--color-accent)]">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--color-primary-ink)] opacity-40">
                        <svg
                            className="w-20 h-20"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {/* Member Details */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[var(--color-secondary)] tracking-tight">
                    {name}
                </h3>

                <span className="text-xs text-[var(--color-muted)] font-medium mt-0.5 block">
                    {role}
                </span>

                {description && (
                    <p className="mt-2 text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed flex-grow">
                        {description}
                    </p>
                )}

                {/* Connect on LinkedIn Button / Link Action */}
                <div className="mt-4 pt-2">
                    {linkedinUrl ? (
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-[var(--color-primary-ink)] hover:text-secondary text-xs font-semibold transition-colors duration-200"
                        >
                            <span>Connect on LinkedIn</span>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>
                    ) : (
                        <div className="py-2 text-center text-xs text-[var(--color-muted)] font-medium">
                            OMX Lab Team
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};