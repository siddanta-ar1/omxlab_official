import type { Metadata } from 'next';
import { SolutionsHeader } from '@/components/solutions/SolutionsHeader';
import { VerticalMatrix } from '@/components/solutions/VerticalMatrix';
import { DeploymentCaseStudies } from '@/components/solutions/DeploymentCaseStudies';
import { ComplianceStrip } from '@/components/solutions/ComplianceStrip';
import { SolutionsCTA } from '@/components/solutions/SolutionsCTA';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Deployment verticals for OMX Lab: infrastructure, healthcare, fintech, defence & sovereign, scientific research, and advanced manufacturing — each calibrated against its compliance boundary and verified at production scale.',
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <SolutionsHeader />
      <VerticalMatrix />
      <DeploymentCaseStudies />
      <ComplianceStrip />
      <SolutionsCTA />
    </div>
  );
}
