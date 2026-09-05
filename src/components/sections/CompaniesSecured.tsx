import React from 'react';

const securedOrganizations = [
    { name: "City of Amsterdam", icon: "🏛️" },
    { name: "Arizona Court of Appeals", icon: "⚖️" },
    { name: "US Dept. of Energy", icon: "⚡" },
    { name: "Univ. of Oslo", icon: "🎓" },
    { name: "Westpac Bank", icon: "🇼" },
    { name: "Hornetsecurity", icon: "🐝" },
    { name: "US Homeland Security", icon: "🛡️" },
    { name: "Univ. of Nebraska", icon: "🇳" },
    { name: "Drexel Univ", icon: "🇩" },
];

export const CompaniesSecured = () => {
    return (
        <section className="bg-surface py-24 overflow-hidden font-sans border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">
                    Top Companies <span className="text-[#A78BFA]">We Secured</span>
                </h2>
                
                <p className="text-muted text-sm md:text-base mb-8 font-mono tracking-tight lowercase">
                    Vulnerabilities responsibly disclosed to organizations across 4 continents
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs font-bold text-muted tracking-wider mb-16 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                    300+ ORGANIZATIONS <span className="text-soft mx-1">•</span> HALL OF FAME
                </div>

            </div>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_10%,_black_90%,_transparent_100%)]">
                <div className="flex gap-4 items-center whitespace-nowrap animate-marquee py-4">
                    {/* Render twice for seamless loop */}
                    {[...securedOrganizations, ...securedOrganizations, ...securedOrganizations].map((org, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-3 px-5 py-3 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                            <span className="text-xl bg-surface w-8 h-8 flex items-center justify-center rounded-md border border-border">{org.icon}</span>
                            <span className="font-bold text-secondary text-sm">{org.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
