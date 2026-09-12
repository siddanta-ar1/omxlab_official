import type { Metadata } from 'next';
import { DeveloperHeader } from '@/components/developers/DeveloperHeader';
import { QuickstartPanel } from '@/components/developers/QuickstartPanel';
import { SdkMatrix } from '@/components/developers/SdkMatrix';
import { ApiReferenceTable } from '@/components/developers/ApiReferenceTable';
import { StatusRegister } from '@/components/developers/StatusRegister';
import { ApiKeyCta } from '@/components/developers/ApiKeyCta';

export const metadata: Metadata = {
  title: 'Developers',
  description:
    'Direct, versioned API access to Helios, Foundry, Studio, Rune, and Sage Core -- Python, Rust, and TypeScript clients, a CLI, webhooks, and a live status register.',
};

export default function DevelopersPage() {
  return (
    <div className="flex flex-col w-full">
      <DeveloperHeader />
      <QuickstartPanel />
      <SdkMatrix />
      <ApiReferenceTable />
      <StatusRegister />
      <ApiKeyCta />
    </div>
  );
}
