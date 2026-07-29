// Data for the services ecosystem diagram on the home page.
// `tone` keys resolve through the palette in EcosystemDiagram.jsx, and `icon`
// keys through components/common/EcosystemIcon.jsx.

// The five delivery teams that sit directly under the hub and get connectors.
export const coreTeams = [
    { id: 'frontend', name: 'FRONTEND', role: 'Experience', agents: 4, tone: 'cyan', icon: 'code' },
    { id: 'backend', name: 'BACKEND', role: 'Platform', agents: 4, tone: 'blue', icon: 'server' },
    { id: 'devops', name: 'DEVOPS', role: 'Delivery', agents: 3, tone: 'lime', icon: 'cicd' },
    { id: 'qa', name: 'QA', role: 'Quality Assurance', agents: 3, tone: 'amber', icon: 'check' },
    { id: 'review', name: 'REVIEW', role: 'Governance', agents: 5, tone: 'pink', icon: 'eye' },
];

// Satellite clusters. `zone` places them: left / right rail, or the bottom row.
export const satelliteTeams = [
    // Left rail
    { id: 'digital-marketing-1', name: 'DIGITAL MARKETING', role: 'Growth', agents: 6, tone: 'teal', icon: 'megaphone', zone: 'left' },
    { id: 'seo', name: 'SEO STRATEGY', role: 'Search', agents: 6, tone: 'orange', icon: 'search', zone: 'left' },
    { id: 'content', name: 'CONTENT CREATION', role: 'Editorial', agents: 7, tone: 'emerald', icon: 'pencil', zone: 'left' },
    { id: 'social', name: 'SOCIAL MEDIA', role: 'Community', agents: 5, tone: 'violet', icon: 'share', zone: 'left' },
    { id: 'mobile-1', name: 'MOBILE APP DEV', role: 'Product', agents: 4, tone: 'sky', icon: 'device', zone: 'left' },
    { id: 'digital-marketing-2', name: 'BRAND STUDIO', role: 'Identity', agents: 3, tone: 'rose', icon: 'megaphone', zone: 'left' },

    // Right rail
    { id: 'aiml-1', name: 'AI/ML SOLUTIONS', role: 'Modelling', agents: 5, tone: 'violet', icon: 'spark', zone: 'right' },
    { id: 'automation', name: 'AUTOMATION', role: 'Workflows', agents: 4, tone: 'blue', icon: 'cog', zone: 'right' },
    { id: 'pentesting', name: 'PEN-TESTING', role: 'Offensive', agents: 3, tone: 'orange', icon: 'shield', zone: 'right' },
    { id: 'threat', name: 'THREAT DETECTION', role: 'Defensive', agents: 3, tone: 'rose', icon: 'radar', zone: 'right' },
    { id: 'aiml-2', name: 'DATA SCIENCE', role: 'Insight', agents: 3, tone: 'indigo', icon: 'chart', zone: 'right' },
    { id: 'ecommerce-1', name: 'E-COMMERCE', role: 'Storefront', agents: 4, tone: 'emerald', icon: 'cart', zone: 'right' },
    { id: 'aiml-3', name: 'MLOPS', role: 'Serving', agents: 2, tone: 'cyan', icon: 'spark', zone: 'right' },

    // Bottom row
    { id: 'uiux', name: 'UI/UX DESIGN', role: 'Design', agents: 6, tone: 'amber', icon: 'pen', zone: 'bottom' },
    { id: 'mobile-2', name: 'MOBILE APP DEV', role: 'Experience', agents: 6, tone: 'orange', icon: 'device', zone: 'bottom' },
    { id: 'api-gateway', name: 'API GATEWAY', role: 'Integration', agents: 6, tone: 'violet', icon: 'plug', zone: 'bottom' },
    { id: 'data-lake', name: 'DATA LAKE', role: 'Storage', agents: 4, tone: 'sky', icon: 'database', zone: 'bottom' },
    { id: 'cloud-1', name: 'CLOUD INFRA', role: 'Delivery', agents: 3, tone: 'blue', icon: 'cloud', zone: 'bottom' },
    { id: 'cloud-2', name: 'CLOUD INFRA', role: 'Networking', agents: 3, tone: 'emerald', icon: 'cloud', zone: 'bottom' },
    { id: 'cicd', name: 'CI/CD PIPELINES', role: 'Release', agents: 3, tone: 'lime', icon: 'cicd', zone: 'bottom' },
    { id: 'observability', name: 'OBSERVABILITY', role: 'Telemetry', agents: 3, tone: 'pink', icon: 'radar', zone: 'bottom' },
    { id: 'aiml-4', name: 'AI/ML SOLUTIONS', role: 'Financial', agents: 3, tone: 'indigo', icon: 'spark', zone: 'bottom' },
    { id: 'ecommerce-2', name: 'E-COMMERCE', role: 'Services', agents: 2, tone: 'teal', icon: 'cart', zone: 'bottom' },
];

export const allTeams = [...coreTeams, ...satelliteTeams];

// Footer counts derive from the data so they can never drift out of sync.
export const teamCount = allTeams.length;
export const agentCount = allTeams.reduce((total, team) => total + team.agents, 0);

export type Team = {
    id: string;
    name: string;
    role: string;
    agents: number;
    tone: string;
    icon: string;
    zone?: string;
};
