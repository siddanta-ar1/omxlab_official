// Community programmes shown on /initiatives and /initiatives/:id.
// Images are Unsplash placeholders, matching the convention used elsewhere.
export const initiativeCategories = ['Education', 'Open Source', 'Community'];

export const initiatives = [
    {
        id: 'engineering-fellowship',
        title: 'OMX Lab Engineering Fellowship',
        category: 'Education',
        status: 'Applications open',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
        summary:
            'A paid twelve-week fellowship for recent graduates, pairing each fellow with a senior engineer and real client work rather than a training sandbox.',
        featured: true,
        stats: [
            { value: '12wk', label: 'Programme length' },
            { value: '8', label: 'Fellows per cohort' },
            { value: '73%', label: 'Offered a full role' },
        ],
        about: [
            'Graduates in Nepal routinely finish a computer science degree without ever having worked in a shared codebase, reviewed someone else\'s change, or shipped anything a stranger depends on. That gap is not a talent problem — it is an access problem, and it is the one we are trying to close.',
            'The fellowship is paid, full-time, and twelve weeks long. Fellows are not observers: they are assigned to a real client team from week two, with commits that go through the same review process as everyone else\'s.',
        ],
        activities: [
            'Paired with a senior engineer for the full twelve weeks',
            'Real client work from week two, under normal review',
            'Weekly architecture and code review sessions',
            'A written reference at the end, regardless of outcome',
            'Paid at a full junior engineer rate throughout',
        ],
        howToJoin: [
            'Applications open twice a year, in February and August.',
            'We ask for a short written answer about something technical you have built or debugged. No degree classification filter, and no take-home longer than two hours.',
        ],
    },
    {
        id: 'open-source-program',
        title: 'Open Source Programme',
        category: 'Open Source',
        status: 'Ongoing',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=1600&q=80',
        summary:
            'Paid time for our engineers to maintain and contribute to the libraries we depend on, plus small grants to maintainers of tools we use commercially.',
        stats: [
            { value: '11', label: 'Projects released' },
            { value: '4hrs', label: 'Paid time per fortnight' },
            { value: '6', label: 'Maintainers sponsored' },
        ],
        about: [
            'Our entire stack rests on software maintained largely by volunteers. Treating that as free infrastructure is both unfair and, commercially, a risk we would rather not carry.',
            'Every engineer gets four paid hours a fortnight for open source work — contributions upstream, maintenance of our own releases, or triage on projects we depend on. We also sponsor a small number of maintainers directly.',
        ],
        activities: [
            'Four paid hours per engineer per fortnight',
            'Direct financial sponsorship of six maintainers',
            'Internal tools released publicly where there is no commercial reason not to',
            'Security triage on dependencies we ship to clients',
        ],
        howToJoin: [
            'Our repositories are public and issues tagged for first-time contributors are genuinely reviewed, usually within a week.',
            'If you maintain something we depend on and sponsorship would help, get in touch — the process is a short email, not an application form.',
        ],
    },
    {
        id: 'campus-connect',
        title: 'Campus Connect',
        category: 'Education',
        status: 'Ongoing',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
        summary:
            'Guest lectures, curriculum feedback, and final-year project mentoring with universities across Nepal — free, and with no recruitment strings attached.',
        stats: [
            { value: '7', label: 'Partner universities' },
            { value: '40+', label: 'Sessions delivered' },
            { value: '0', label: 'Cost to institutions' },
        ],
        about: [
            'Curricula move slower than the industry, which is normal and not anyone\'s fault. What we can usefully offer is a channel between the two: engineers who will come and teach what current practice actually looks like.',
            'Sessions cover version control, code review, testing, and deployment — the things graduates are expected to already know and are rarely taught. We do not gate any of it behind a recruitment pitch.',
        ],
        activities: [
            'Guest lectures on modern engineering practice',
            'Final-year project mentoring',
            'Curriculum feedback to departments that want it',
            'Lab sessions on version control, testing, and CI',
        ],
        howToJoin: [
            'Any department can request a session. We aim to run two per month across all partners and prioritise institutions outside Kathmandu.',
            'Email us with a rough topic and timeframe and we will find an engineer.',
        ],
    },
    {
        id: 'women-in-tech',
        title: 'Women in Tech Nepal',
        category: 'Community',
        status: 'Applications open',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80',
        summary:
            'Scholarships and long-term mentorship for women entering software engineering, structured around the point most drop-off happens: the first two years.',
        stats: [
            { value: '14', label: 'Scholarships awarded' },
            { value: '2yr', label: 'Mentorship duration' },
            { value: '11', label: 'Still in the industry' },
        ],
        about: [
            'Women are reasonably well represented in Nepali computer science intakes and much less so two years into industry. The attrition point is well documented, and one-off scholarships do not address it.',
            'So this programme is deliberately long. A scholarship covers tuition, but the mentorship runs for two years past graduation — through the first job, the first difficult team, and the first time someone assumes you are not the engineer in the room.',
        ],
        activities: [
            'Tuition scholarships for undergraduate study',
            'Two years of mentorship extending past graduation',
            'Introductions into our own hiring pipeline and others',
            'A private peer group across cohorts',
        ],
        howToJoin: [
            'Applications open annually in March. Financial need is assessed, but academic ranking is not a filter.',
            'We also need mentors — if you are a woman working in the industry with a few hours a month, that is the constraint on how many people we can take.',
        ],
    },
    {
        id: 'developer-meetups',
        title: 'Chitwan Developer Meetups',
        category: 'Community',
        status: 'Monthly',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
        summary:
            'A free monthly meetup outside the Kathmandu tech bubble, with talks from working engineers and no vendor pitches.',
        stats: [
            { value: '11', label: 'Meetups hosted' },
            { value: '60+', label: 'Typical attendance' },
            { value: 'Free', label: 'Always' },
        ],
        about: [
            'Nearly every tech event in Nepal happens in Kathmandu. Engineers elsewhere either travel or miss out, and the ones who miss out are disproportionately the ones early in their careers.',
            'We host a monthly meetup in Chitwan. Two talks, food, and time to actually talk to people. Speakers are working engineers describing something they built or broke.',
        ],
        activities: [
            'Two talks a month from working engineers',
            'First-time speaker slots with rehearsal support',
            'No vendor pitches and no recruitment presentations',
            'Free entry and food, funded by us',
        ],
        howToJoin: [
            'Turn up. Dates are announced on our Instagram and the mailing list, and there is no registration.',
            'If you want to speak, particularly if you have never spoken before, we will help you prepare the talk.',
        ],
    },
    {
        id: 'digital-literacy',
        title: 'Small Business Digital Support',
        category: 'Community',
        status: 'Ongoing',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
        summary:
            'Pro bono technical help for local small businesses — a working website, online payments, and enough training to run it themselves.',
        stats: [
            { value: '23', label: 'Businesses supported' },
            { value: '100%', label: 'Pro bono' },
            { value: '3mo', label: 'Support window' },
        ],
        about: [
            'A local business that cannot take an online order is losing revenue to competitors who can, and the gap is usually a few days of technical work rather than anything structural.',
            'We take on a small number of local businesses each quarter and build what they need. The deliverable includes training, because a site nobody on staff can update becomes dead weight within a year.',
        ],
        activities: [
            'A simple, fast website the owner can update',
            'Online payment and ordering setup',
            'Hands-on training for staff, not just documentation',
            'Three months of support after handover',
        ],
        howToJoin: [
            'We take on three to four businesses a quarter, prioritising those with no in-house technical staff.',
            'Get in touch through the contact form describing the business and what is currently getting in the way.',
        ],
    },
];

export const initiativeStats = [
    { value: '6', label: 'Active Programmes' },
    { value: '400+', label: 'People Reached' },
    { value: '7', label: 'Partner Institutions' },
    { value: '4yrs', label: 'Running Since 2022' },
];

export const getInitiativeById = (id: string) =>
    initiatives.find((initiative) => initiative.id === id);

export const getRelatedInitiatives = (initiative: Initiative | undefined, limit = 3) => {
    if (!initiative) return [];
    const sameCategory = initiatives.filter(
        (other) => other.id !== initiative.id && other.category === initiative.category
    );
    const others = initiatives.filter(
        (other) => other.id !== initiative.id && other.category !== initiative.category
    );
    return [...sameCategory, ...others].slice(0, limit);
};

export type Initiative = (typeof initiatives)[number];
