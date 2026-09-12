import type { Metadata } from 'next';
import { DispatchHeader } from '@/components/news/DispatchHeader';
import { FeaturedDispatch } from '@/components/news/FeaturedDispatch';
import { DispatchTable } from '@/components/news/DispatchTable';
import { PressKitBand } from '@/components/news/PressKitBand';
import { SubscribeBand } from '@/components/news/SubscribeBand';

export const metadata: Metadata = {
  title: 'News',
  description:
    'The OMX Lab dispatch registry: system releases, research notes, partnerships, facility entries and compliance bulletins.',
};

export default function NewsPage() {
  return (
    <div className="flex flex-col w-full">
      <DispatchHeader />
      <FeaturedDispatch />
      <DispatchTable />
      <PressKitBand />
      <SubscribeBand />
    </div>
  );
}
