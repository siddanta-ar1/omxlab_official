import React from 'react';

const mockCommunities = [
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
];

const CommunityCard = ({ src }: { src: string }) => (
    <div className="w-[280px] md:w-[360px] flex-shrink-0 bg-navy-soft rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
        <div className="h-6 bg-surface border-b border-white/10 flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
        <img 
            src={src} 
            alt="Community Preview"
            className="w-full h-[160px] object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
        <div className="p-4 bg-surface">
            <div className="h-4 bg-navy-soft rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-navy-soft rounded w-1/2"></div>
        </div>
    </div>
);

export const ViewFromInside = () => {
    const row1 = mockCommunities.slice(0, 6);
    const row2 = mockCommunities.slice(6, 12);
    const row3 = [...mockCommunities.slice(3, 12), ...mockCommunities.slice(0, 3)].slice(0, 6);

    return (
        <section className="bg-surface text-white py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                
                {/* Header Section */}
                <div className="mb-6">
                    <span className="text-muted text-sm font-semibold tracking-wider uppercase">Discourse Discover</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-6">
                    See Discourse in action across the internet's best communities
                </h2>
                
                <p className="text-muted text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                    Don't just take our word for it—explore thousands of thriving communities built on Discourse, from open source projects to game developers, from product communities to AI leaders.
                </p>
                
                <a href="#" className="bg-white text-ink font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg">
                    Explore the communities powered by Discourse
                </a>
            </div>

            {/* Grid of communities as marquees */}
            <div className="mt-20 w-full overflow-hidden flex flex-col gap-6">
                {/* First Row (Right Direction) */}
                <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[...row1, ...row1].map((src, i) => (
                        <CommunityCard key={`row1-${i}`} src={src} />
                    ))}
                </div>

                {/* Second Row (Left Direction) */}
                <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
                    {[...row2, ...row2].map((src, i) => (
                        <CommunityCard key={`row2-${i}`} src={src} />
                    ))}
                </div>

                {/* Third Row (Right Direction) */}
                <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[...row3, ...row3].map((src, i) => (
                        <CommunityCard key={`row3-${i}`} src={src} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-32 mb-10">
                <h3 className="text-4xl md:text-6xl font-extrabold text-white opacity-90 tracking-tight">Inspired?</h3>
            </div>
        </section>
    );
};