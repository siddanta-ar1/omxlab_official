import {
    LuCircleCheck,
    LuCompass,
    LuClock,
    LuBookOpen,
    LuFlaskConical,
    LuHeart,
} from 'react-icons/lu';

const icons = {
    review: { Icon: LuCircleCheck, color: 'text-[#52738F]' },
    compass: { Icon: LuCompass, color: 'text-[#2A3340]' },
    clock: { Icon: LuClock, color: 'text-[#C2A97A]' },
    book: { Icon: LuBookOpen, color: 'text-[#8A6D34]' },
    flask: { Icon: LuFlaskConical, color: 'text-[#5B7C99]' },
    heart: { Icon: LuHeart, color: 'text-[#A98C55]' },
};

export type BenefitIconName = keyof typeof icons;

export const BenefitIcon = ({ name }: { name: string }) => {
    const { Icon, color } = icons[name as BenefitIconName] || icons.compass;
    return (
        <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
            <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} aria-hidden="true" />
        </div>
    );
};
