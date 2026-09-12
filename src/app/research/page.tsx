import type { Metadata } from 'next';
import { ResearchHeader } from '@/components/research/ResearchHeader';
import { PublicationsTable } from '@/components/research/PublicationsTable';
import { ResearchAreas } from '@/components/research/ResearchAreas';
import { BenchmarkDatasets } from '@/components/research/BenchmarkDatasets';
import { OpenScienceGrantBand } from '@/components/research/OpenScienceGrantBand';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'The OMX Lab research registry: peer publications, pre-prints, benchmark datasets and the open science grant programme.',
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col w-full">
      <ResearchHeader />
      <PublicationsTable />
      <ResearchAreas />
      <BenchmarkDatasets />
      <OpenScienceGrantBand />
    </div>
  );
}
