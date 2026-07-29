import {
    LuCode,
    LuServer,
    LuGitBranch,
    LuBadgeCheck,
    LuEye,
    LuMegaphone,
    LuSearch,
    LuPencil,
    LuShare2,
    LuSmartphone,
    LuSparkles,
    LuSettings,
    LuShield,
    LuRadar,
    LuChartColumn,
    LuShoppingCart,
    LuPenTool,
    LuPlug,
    LuDatabase,
    LuCloud,
} from 'react-icons/lu';

const icons = {
    code: LuCode,
    server: LuServer,
    cicd: LuGitBranch,
    check: LuBadgeCheck,
    eye: LuEye,
    megaphone: LuMegaphone,
    search: LuSearch,
    pencil: LuPencil,
    share: LuShare2,
    device: LuSmartphone,
    spark: LuSparkles,
    cog: LuSettings,
    shield: LuShield,
    radar: LuRadar,
    chart: LuChartColumn,
    cart: LuShoppingCart,
    pen: LuPenTool,
    plug: LuPlug,
    database: LuDatabase,
    cloud: LuCloud,
};

export type EcosystemIconName = keyof typeof icons;

export const EcosystemIcon = ({
    name,
    className = 'w-full h-full',
}: {
    name: string;
    className?: string;
}) => {
    const Icon = icons[name as EcosystemIconName] ?? LuCode;
    return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />;
};
