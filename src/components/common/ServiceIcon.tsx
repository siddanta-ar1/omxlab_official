import React from 'react';
import { LuCode, LuAppWindow, LuSmartphone, LuCloud, LuSparkles, LuShieldCheck } from 'react-icons/lu';

const icons = {
    code: { Icon: LuCode, color: 'text-[#22D3EE]' },
    browser: { Icon: LuAppWindow, color: 'text-[#38BDF8]' },
    device: { Icon: LuSmartphone, color: 'text-[#6366F1]' },
    cloud: { Icon: LuCloud, color: 'text-[#A5B4FC]' },
    spark: { Icon: LuSparkles, color: 'text-[#818CF8]' },
    shield: { Icon: LuShieldCheck, color: 'text-[#94A3B8]' },
};

export type ServiceIconName = keyof typeof icons;

export const ServiceIcon = ({ name }: { name: string }) => {
    const { Icon, color } = icons[name as ServiceIconName] || icons.code;
    return (
        <div className="w-14 h-14 rounded-2xl bg-surface border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.5)] group-hover:-translate-y-1">
            <Icon className={`w-7 h-7 ${color}`} strokeWidth={2} />
        </div>
    );
};
