import {
    LuCircleCheck,
    LuCompass,
    LuClock,
    LuBookOpen,
    LuFlaskConical,
    LuHeart,
} from 'react-icons/lu';

const icons = {
    review: { Icon: LuCircleCheck, color: 'text-[#38BDF8]' },
    compass: { Icon: LuCompass, color: 'text-[#A5B4FC]' },
    clock: { Icon: LuClock, color: 'text-[#6366F1]' },
    book: { Icon: LuBookOpen, color: 'text-[#818CF8]' },
    flask: { Icon: LuFlaskConical, color: 'text-[#22D3EE]' },
    heart: { Icon: LuHeart, color: 'text-[#818CF8]' },
};

export type BenefitIconName = keyof typeof icons;

export const BenefitIcon = ({ name }: { name: string }) => {
    const { Icon, color } = icons[name as BenefitIconName] || icons.compass;
    return (
        <div className="w-14 h-14 rounded-2xl bg-surface border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.5)] group-hover:-translate-y-1">
            <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} aria-hidden="true" />
        </div>
    );
};
