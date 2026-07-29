export type Member = {
    name: string;
    role: string;
    description?: string;
    image?: string;
    linkedinUrl?: string;
};

export const teamData: Record<string, Member[]> = {
    leadership: [
        {
            name: "Aashutosh Devkota",
            role: "CEO & Foundeer",
            description: "Champ",
            image: "/team/leader1.jpg",
            linkedinUrl: "https://linkedin.com",
        },
    ],
    executive: [],
    engineer: [],
    support: [],
};