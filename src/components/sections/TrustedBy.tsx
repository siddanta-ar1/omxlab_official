import React from 'react';

// Static placeholder client logos
const logos = [
    { name: 'BOSC', url: '/assets/partners/partner-bosc.png' },
    { name: 'CCT', url: '/assets/partners/partner-cct.webp' },
    { name: 'CFC', url: '/assets/partners/partner-cfc.png' },
    { name: 'Dream', url: '/assets/partners/partner-dream.webp' },
    { name: 'Krixnova', url: '/assets/partners/partner-krixnova.webp' },
    { name: 'Mistri Vai', url: '/assets/partners/partner-mistrivai.webp' },
    { name: 'QFC', url: '/assets/partners/partner-qfc.webp' },
    { name: 'SAGEA', url: '/assets/partners/partner-sagea.webp' },
];

export const TrustedBy = () => {
    return (
        <section className="w-full bg-body/80 border-y border-border py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6">

                {/* Left Fixed Label */}
                <div className="md:border-r border-border md:pr-8 flex-shrink-0">
                    <h3 className="text-base font-bold text-secondary tracking-tight whitespace-nowrap">
                        Trusted by
                    </h3>
                </div>

                {/* Right Infinite Scroll Carousel (Right to Left) */}
                <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0,_black_10%,_black_90%,_transparent_100%)]">

                    <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
                        {/* First render of logos */}
                        {logos.map((logo, index) => (
                            <img
                                key={`logo-1-${index}`}
                                src={logo.url}
                                alt={logo.name}
                                className="h-7 md:h-8 w-auto transition-transform hover:scale-105 cursor-pointer object-contain"
                            />
                        ))}

                        {/* Duplicate render for seamless loop */}
                        {logos.map((logo, index) => (
                            <img
                                key={`logo-2-${index}`}
                                src={logo.url}
                                alt={logo.name}
                                className="h-7 md:h-8 w-auto transition-transform hover:scale-105 cursor-pointer object-contain"
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};