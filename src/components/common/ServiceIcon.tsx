import React from 'react';
import { LuCode, LuAppWindow, LuSmartphone, LuCloud, LuSparkles, LuShieldCheck } from 'react-icons/lu';

const icons = {
    code: { Icon: LuCode, color: 'text-[#5B7C99]' },
    browser: { Icon: LuAppWindow, color: 'text-[#52738F]' },
    device: { Icon: LuSmartphone, color: 'text-[#C2A97A]' },
    cloud: { Icon: LuCloud, color: 'text-[#2A3340]' },
    spark: { Icon: LuSparkles, color: 'text-[#8A6D34]' },
    shield: { Icon: LuShieldCheck, color: 'text-[#7B96AE]' },
};

export type ServiceIconName = keyof typeof icons;

export const ServiceIcon = ({ name }: { name: string }) => {
    const { Icon, color } = icons[name as ServiceIconName] || icons.code;
    return (
        <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
            <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} />
        </div>
    );
};
