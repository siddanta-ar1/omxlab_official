'use client';

import React, { useState } from "react";
import { teamData } from "@/data/member";
import { MemberCard } from "@/components/common/MemberCard";
import { LuUsers, LuBriefcase, LuGraduationCap, LuAward, LuCompass, LuHandshake } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuUsers, color: 'text-[#5B7C99]', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuBriefcase, color: 'text-[#52738F]', pos: 'top-[35%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuGraduationCap, color: 'text-[#2A3340]', pos: 'bottom-[30%] left-[12%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuAward, color: 'text-[#C2A97A]', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuCompass, color: 'text-[#8A6D34]', pos: 'top-[45%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuHandshake, color: 'text-[#A98C55]', pos: 'bottom-[25%] right-[10%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuUsers, color: 'text-[#5B7C99]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuAward, color: 'text-[#C2A97A]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuGraduationCap, color: 'text-[#2A3340]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuCompass, color: 'text-[#8A6D34]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

export const TeamPage = () => {
    const tabs = ["Leadership", "Executive", "Engineer", "Support"];
    const [activeTab, setActiveTab] = useState("Leadership");

    const currentMembers = teamData[activeTab.toLowerCase()] || [];

    return (
        <div className="bg-[var(--color-body)] text-[var(--color-secondary)] min-h-screen">

            {/* HERO / HEADER SECTION */}
            <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">

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
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                        The Team
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-tight max-w-4xl mx-auto">
                        Qualified Engineers.
                        <br />
                        <span className="text-[var(--color-primary)]">
                            Shared Purpose.
                        </span>
                    </h1>

                    <p className="mt-6 text-[var(--color-muted)] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                        Meet the minds behind OMX Lab. Our diverse team of
                        engineers, designers, and innovators collaborates to
                        build secure, scalable, and impactful digital solutions
                        for businesses.
                    </p>
                </div>
            </section>

            {/* FILTER TABS */}
            <div className="pt-8 pb-8 px-4 md:px-8 bg-[var(--color-body)]">
                <div className="mx-auto flex flex-wrap justify-center items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-sm max-w-full md:w-fit">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab;

                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`font-semibold text-sm sm:text-base transition-all duration-200 rounded-lg py-2 px-5 cursor-pointer ${isActive
                                        ? "bg-[var(--color-primary)] text-secondary shadow-sm"
                                        : "text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]"
                                    }`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* MEMBERS GRID */}
            <section className="bg-[var(--color-body)] pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {currentMembers.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentMembers.map((member, index) => (
                                <MemberCard
                                    key={index}
                                    name={member.name}
                                    role={member.role}
                                    description={member.description}
                                    image={member.image}
                                    linkedinUrl={member.linkedinUrl}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-[var(--color-muted)]">
                            No team members currently listed under this category.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TeamPage;