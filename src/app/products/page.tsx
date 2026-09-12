import type { Metadata } from 'next';
import { ProductsHeader } from '@/components/products/ProductsHeader';
import { ComparisonMatrix } from '@/components/products/ComparisonMatrix';
import { ModuleDetailRows } from '@/components/products/ModuleDetailRows';
import { InstrumentCatalogue } from '@/components/products/InstrumentCatalogue';
import { DeploymentTiers } from '@/components/products/DeploymentTiers';
import { InitiateArchitecture } from '@/components/sections/InitiateArchitecture';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'The OMX Lab product registry: Helios, Foundry, OMX Studio, Rune Agent and Sage Core, with full specification matrices, instrument catalogue and deployment tiers.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <ProductsHeader />
      <ComparisonMatrix />
      <ModuleDetailRows />
      <InstrumentCatalogue />
      <DeploymentTiers />
      <InitiateArchitecture />
    </div>
  );
}
