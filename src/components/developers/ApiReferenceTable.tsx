type HttpMethod = 'GET' | 'POST';

type Endpoint = {
  method: HttpMethod;
  path: string;
  description: string;
  rateLimit: string;
};

const ENDPOINTS: Endpoint[] = [
  {
    method: 'POST',
    path: '/v1/helios/verify',
    description: 'Run identity verification against a subject document and liveness probe.',
    rateLimit: '120 req/min',
  },
  {
    method: 'GET',
    path: '/v1/helios/verify/{id}',
    description: 'Retrieve a verification result by its registry ID.',
    rateLimit: '600 req/min',
  },
  {
    method: 'POST',
    path: '/v1/foundry/jobs',
    description: 'Submit a distributed training job to the Foundry cluster fabric.',
    rateLimit: '30 req/min',
  },
  {
    method: 'GET',
    path: '/v1/foundry/jobs/{id}',
    description: 'Poll training job status, throughput, and checkpoint metrics.',
    rateLimit: '300 req/min',
  },
  {
    method: 'POST',
    path: '/v1/studio/runs',
    description: 'Launch an evaluation run against a benchmark or adversarial suite.',
    rateLimit: '60 req/min',
  },
  {
    method: 'GET',
    path: '/v1/studio/runs/{id}',
    description: 'Fetch evaluation run results, drift coefficients, and traces.',
    rateLimit: '300 req/min',
  },
  {
    method: 'POST',
    path: '/v1/rune/synthesize',
    description: 'Generate and formally verify a code synthesis patch.',
    rateLimit: '45 req/min',
  },
  {
    method: 'POST',
    path: '/v1/sage/infer',
    description: 'Run multimodal inference against the Sage Core foundation model.',
    rateLimit: '200 req/min',
  },
  {
    method: 'GET',
    path: '/v1/sage/infer/{id}',
    description: 'Retrieve a completed inference result and confidence tensor.',
    rateLimit: '600 req/min',
  },
  {
    method: 'POST',
    path: '/v1/webhooks/register',
    description: 'Register a signed endpoint for module lifecycle event delivery.',
    rateLimit: '10 req/min',
  },
];

const METHOD_STYLES: Record<HttpMethod, string> = {
  GET: 'border border-grid-hairline text-text-primary bg-paper-white',
  POST: 'bg-text-primary text-paper-white',
};

export function ApiReferenceTable() {
  return (
    <section
      data-anim=""
      id="api-reference"
      className="w-full bg-paper-white py-space-2xl lg:py-space-3xl border-b border-grid-hairline"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-space-xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            API REFERENCE
          </span>
          <h2 className="text-headline-lg text-text-primary tracking-tight">
            Ten endpoints, five modules.
          </h2>
        </div>

        <div className="overflow-x-auto border border-grid-hairline">
          <table className="w-full min-w-[720px] border-collapse">
            <caption className="sr-only">OMX Lab API reference: HTTP method, endpoint path, description and rate limit.</caption>
            <thead>
              <tr className="border-b border-grid-hairline bg-studio-grey">
                <th
                  scope="col"
                  className="text-left text-label-code text-text-muted uppercase tracking-wider px-space-md py-space-sm w-[92px]"
                >
                  Method
                </th>
                <th
                  scope="col"
                  className="text-left text-label-code text-text-muted uppercase tracking-wider px-space-md py-space-sm"
                >
                  Path
                </th>
                <th
                  scope="col"
                  className="text-left text-label-code text-text-muted uppercase tracking-wider px-space-md py-space-sm"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="text-left text-label-code text-text-muted uppercase tracking-wider px-space-md py-space-sm w-[140px]"
                >
                  Rate limit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grid-hairline">
              {ENDPOINTS.map((endpoint) => (
                <tr key={`${endpoint.method}-${endpoint.path}`} className="hover:bg-studio-grey transition-colors">
                  <td className="px-space-md py-space-sm align-middle">
                    <span
                      className={`inline-flex items-center justify-center w-14 text-[11px] font-semibold tracking-wider py-1 ${METHOD_STYLES[endpoint.method]}`}
                    >
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="px-space-md py-space-sm align-middle">
                    <code className="font-mono text-body-compact text-text-primary">{endpoint.path}</code>
                  </td>
                  <td className="px-space-md py-space-sm align-middle text-body-compact text-on-surface-variant">
                    {endpoint.description}
                  </td>
                  <td className="px-space-md py-space-sm align-middle text-body-compact text-text-primary font-mono whitespace-nowrap">
                    {endpoint.rateLimit}
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

export default ApiReferenceTable;
