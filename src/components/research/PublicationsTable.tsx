import { toIsoDate } from '@/lib/registry-date';
type Publication = {
  code: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  href: string;
};

const PUBLICATIONS: Publication[] = [
  {
    code: 'PUB_002',
    title:
      'Deterministic Inference at Scale: Bounding Latency Variance in Production Transformer Serving',
    authors: 'K. Fahrni, R. Steinmann',
    venue: 'NeurIPS',
    date: 'DEC-2024',
    href: 'https://doi.org/10.61830/omx.002',
  },
  {
    code: 'PUB_004',
    title:
      'Tensor Parallelism Without Communication Stalls: A Topology-Aware Sharding Scheme',
    authors: 'L. Voss, D. Okafor, M. Brandt',
    venue: 'ICML',
    date: 'JUL-2025',
    href: 'https://doi.org/10.61830/omx.004',
  },
  {
    code: 'PUB_006',
    title:
      'Passive Biometric Liveness Detection Under Adversarial Presentation Attacks',
    authors: 'S. Herzog, A. Kimura',
    venue: 'IEEE S&P',
    date: 'MAY-2025',
    href: 'https://doi.org/10.61830/omx.006',
  },
  {
    code: 'PUB_008',
    title: 'Protein Folding Refinement via Constrained Diffusion Priors',
    authors: 'N. Adeyemi, T. Baumgartner, Y. Chen',
    venue: 'Nature Methods',
    date: 'FEB-2025',
    href: 'https://doi.org/10.61830/omx.008',
  },
  {
    code: 'PUB_011',
    title:
      'Cryo-EM Reconstruction from Sparse Tilt Series Using Learned Regularizers',
    authors: 'F. Lindqvist, P. Moretti',
    venue: 'Nature Methods',
    date: 'SEP-2025',
    href: 'https://doi.org/10.61830/omx.011',
  },
  {
    code: 'PUB_014',
    title: 'Certifying Adversarial Robustness at Foundation-Model Scale',
    authors: 'R. Steinmann, J. Okonkwo',
    venue: 'ICLR',
    date: 'JAN-2026',
    href: 'https://doi.org/10.61830/omx.014',
  },
  {
    code: 'PUB_017',
    title:
      'Multimodal Grounding Between Spatial Audio and Dense Visual Fields',
    authors: 'E. Vasquez, K. Fahrni',
    venue: 'NeurIPS',
    date: 'DEC-2025',
    href: 'https://doi.org/10.61830/omx.017',
  },
  {
    code: 'PUB_019',
    title:
      'Variant Calling at Population Scale: A Deterministic Pipeline for Clinical Cohorts',
    authors: 'H. Zimmermann, A. Kimura, L. Voss',
    venue: 'Bioinformatics',
    date: 'MAR-2025',
    href: 'https://doi.org/10.61830/omx.019',
  },
  {
    code: 'PUB_021',
    title:
      'Sequence Alignment Under Structural Variation: A Graph-Based Reformulation',
    authors: 'D. Okafor, N. Adeyemi',
    venue: 'Bioinformatics',
    date: 'JUN-2025',
    href: 'https://doi.org/10.61830/omx.021',
  },
  {
    code: 'PUB_023',
    title:
      'Low-Latency Edge Compilation for Sub-10ms Inference on Constrained Silicon',
    authors: 'M. Brandt, S. Herzog',
    venue: 'ICML',
    date: 'AUG-2025',
    href: 'https://doi.org/10.61830/omx.023',
  },
  {
    code: 'PUB_026',
    title:
      'Scaling Tensor-Parallel Training Past 16K Accelerators Without Loss Spikes',
    authors: 'T. Baumgartner, F. Lindqvist, R. Steinmann',
    venue: 'NeurIPS',
    date: 'NOV-2025',
    href: 'https://doi.org/10.61830/omx.026',
  },
  {
    code: 'PUB_029',
    title:
      'Structural Validation of Folded Complexes via Cross-Referenced Cryo-EM Density Maps',
    authors: 'Y. Chen, P. Moretti',
    venue: 'PLOS Comp. Biology',
    date: 'JAN-2026',
    href: 'https://doi.org/10.61830/omx.029',
  },
];

export function PublicationsTable() {
  return (
    <section className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="mb-space-lg">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            02 / PEER PUBLICATIONS
          </span>
          <h2 className="text-headline-md text-text-primary">
            Full publication index
          </h2>
        </div>

        <div className="w-full overflow-x-auto border border-grid-hairline">
          <table className="w-full min-w-[960px] border-collapse tabular-nums">
            <caption className="sr-only">OMX Lab research registry: publication index, title, authors, venue, date and source link.</caption>
            <thead>
              <tr className="border-b-2 border-text-primary">
                <th
                  scope="col"
                  className="text-left py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold whitespace-nowrap"
                >
                  Index
                </th>
                <th
                  scope="col"
                  className="text-left py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="text-left py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold whitespace-nowrap"
                >
                  Authors
                </th>
                <th
                  scope="col"
                  className="text-left py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold whitespace-nowrap"
                >
                  Venue
                </th>
                <th
                  scope="col"
                  className="text-left py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold whitespace-nowrap"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="text-right py-space-sm px-space-md text-label-code text-text-muted uppercase tracking-[0.15em] font-semibold whitespace-nowrap"
                >
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {PUBLICATIONS.map((pub) => (
                <tr
                  key={pub.code}
                  className="border-b border-grid-hairline last:border-b-0 hover:bg-studio-grey transition-colors duration-100"
                >
                  <td className="py-space-sm px-space-md text-label-code text-text-muted whitespace-nowrap align-top">
                    {pub.code}
                  </td>
                  <td className="py-space-sm px-space-md text-body-compact text-text-primary font-medium leading-tight max-w-md align-top">
                    {pub.title}
                  </td>
                  <td className="py-space-sm px-space-md text-body-compact text-on-surface-variant whitespace-nowrap align-top">
                    {pub.authors}
                  </td>
                  <td className="py-space-sm px-space-md text-body-compact text-text-primary uppercase tracking-wide whitespace-nowrap align-top">
                    {pub.venue}
                  </td>
                  <td className="py-space-sm px-space-md text-body-compact text-text-muted whitespace-nowrap align-top">
                    <time dateTime={toIsoDate(pub.date)}>{pub.date}</time>
                  </td>
                  <td className="py-space-sm px-space-md text-right whitespace-nowrap align-top">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lab-link text-cta-button justify-end"
                    >
                      View <span className="lab-link-glyph">→</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PublicationsTable;
