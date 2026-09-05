import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiFigma, SiVercel, SiMongodb, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

export const AnimatedAppIcons = () => {
    // Array of apps to create a continuous infinite marquee
    const apps = [
        { icon: <FaReact />, name: 'React', color: 'text-[#61DAFB]' },
        { icon: <FaNodeJs />, name: 'Node.js', color: 'text-[#339933]' },
        { icon: <FaAws />, name: 'AWS', color: 'text-[#FF9900]' },
        { icon: <FaDocker />, name: 'Docker', color: 'text-[#2496ED]' },
        { icon: <FaPython />, name: 'Python', color: 'text-[#3776AB]' },
        { icon: <SiFigma />, name: 'Figma', color: 'text-[#F24E1E]' },
        { icon: <SiVercel />, name: 'Vercel', color: 'text-white' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-[#47A248]' },
        { icon: <SiTypescript />, name: 'TypeScript', color: 'text-[#3178C6]' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-[#06B6D4]' },
        { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-[#4169E1]' },
    ];

    // Double the array to make the infinite scrolling smooth without gaps
    const marqueeItems = [...apps, ...apps];

    return (
        <section className="bg-[var(--color-surface)] py-12 border-b border-[var(--color-border)] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h3 className="text-sm font-bold font-mono tracking-widest text-[var(--color-muted)] uppercase">
                    Powered By Industry Standards
                </h3>
            </div>

            {/* Marquee Container with fade masks on edges */}
            <div className="relative w-full flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-[var(--color-surface)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-[var(--color-surface)] after:to-transparent">
                <div className="animate-marquee flex items-center space-x-12 px-6">
                    {marqueeItems.map((app, index) => (
                        <div 
                            key={`${app.name}-${index}`} 
                            className="flex items-center gap-3 px-6 py-4 bg-surface rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-border hover:-translate-y-2 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] transition-all duration-300 cursor-pointer group whitespace-nowrap min-w-max"
                        >
                            <div className={`text-3xl ${app.color} group-hover:scale-110 transition-transform duration-300`}>
                                {app.icon}
                            </div>
                            <span className="font-semibold text-[var(--color-secondary)] text-sm tracking-tight">
                                {app.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
