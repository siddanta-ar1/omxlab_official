// Benefit `icon` keys resolve through components/common/BenefitIcon.jsx so this
// file stays JSX-free (Vite only transforms JSX in .jsx files).
export const benefits = [
    {
        title: 'Senior review on everything',
        icon: 'review',
        description:
            'Every change you ship goes through a senior engineer, and you review theirs. It is the fastest way we know to get good, and it is not optional for anyone.',
    },
    {
        title: 'Real ownership',
        icon: 'compass',
        description:
            'You own a service or a surface, not a ticket queue. That includes the architecture decisions and the on-call consequences of getting them wrong.',
    },
    {
        title: 'Flexible hours',
        icon: 'clock',
        description:
            'We care about overlap for collaboration, not clock-in times. Core hours are four a day; arrange the rest around your life.',
    },
    {
        title: 'Learning budget',
        icon: 'book',
        description:
            'An annual budget for courses, conferences, and books, plus paid time to actually use it. Unused budget is a planning failure on our side, not yours.',
    },
    {
        title: 'Research time',
        icon: 'flask',
        description:
            'Engineers rotate onto our research group for scoped investigations. Published work carries your name, and a negative result still counts as a finished one.',
    },
    {
        title: 'Health & family cover',
        icon: 'heart',
        description:
            'Medical cover for you and your immediate family, paid parental leave for every parent, and no expectation that you check messages while you are out.',
    },
];

export const values = [
    {
        number: '01',
        title: 'Say the uncomfortable thing early',
        description:
            'If an estimate is wrong or a design will not work, the cheapest moment to say so is now. We would rather have an awkward conversation in week one than a slipped date in week nine.',
    },
    {
        number: '02',
        title: 'Write it down',
        description:
            'Decisions live in documents, not in someone\'s memory. If a choice cannot be explained in a paragraph, it usually has not been thought through yet.',
    },
    {
        number: '03',
        title: 'Optimise for the person after you',
        description:
            'Someone will read this code without you in the room. Clarity beats cleverness, and a boring solution that survives a handover beats an elegant one that does not.',
    },
];

export const careerStats = [
    { value: '24', label: 'Engineers & Operators' },
    { value: '4.2yr', label: 'Average Tenure' },
    { value: '2', label: 'Office Locations' },
    { value: '18', label: 'Internal Promotions' },
];
