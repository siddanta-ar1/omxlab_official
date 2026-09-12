import type { Metadata } from 'next';
import { PageHeader } from '@/components/company/PageHeader';
import { MissionNarrative } from '@/components/company/MissionNarrative';
import { FacilityRegistry } from '@/components/company/FacilityRegistry';
import { Leadership } from '@/components/company/Leadership';
import { GovernanceStrip } from '@/components/company/GovernanceStrip';
import { OpenRoles } from '@/components/company/OpenRoles';
import { ClosingCta } from '@/components/company/ClosingCta';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'OMX Lab: institutional profile, registry entry, founder, governance and open roles. Established September 2026 in Kathmandu.',
};

export default function CompanyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader />
      <MissionNarrative />
      <FacilityRegistry />
      <Leadership />
      <GovernanceStrip />
      <OpenRoles />
      <ClosingCta />
    </div>
  );
}
