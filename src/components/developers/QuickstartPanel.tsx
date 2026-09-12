/**
 * Split quickstart cell. Left carries prose and the three-step path to a
 * verified response; right is the ONE inverted surface permitted on this
 * page -- bg-inverse-surface / text-inverse-on-surface, 0px corners, a
 * hairline header strip with a filename and a language tag. The snippet is
 * held as a plain template-literal constant so no JSX brace-escaping is
 * needed around the Python dict literal.
 */

type QuickstartStep = {
  index: string;
  title: string;
  body: string;
};

const STEPS: QuickstartStep[] = [
  {
    index: '01',
    title: 'Provision a key',
    body: 'Request an API key scoped to a single module or the full registry from the console.',
  },
  {
    index: '02',
    title: 'Install a client',
    body: 'Pull the Python, TypeScript, or Rust client, or call the REST surface directly.',
  },
  {
    index: '03',
    title: 'Run a verified request',
    body: 'Authenticate with a bearer token and receive a signed, deterministic response.',
  },
];

const SNIPPET = `import os
from omxlab import Client

client = Client(api_key=os.environ["OMX_API_KEY"])

result = client.helios.verify(
    subject_id="SUBJ_00931A",
    document={
        "type": "passport",
        "issuing_country": "CH",
    },
    liveness_check=True,
)

print(result.status)        # "VERIFIED"
print(result.confidence)    # 0.9987
print(result.latency_ms)    # 11.4
`;

export function QuickstartPanel() {
  return (
    <section
      data-anim="" className="w-full bg-paper-white border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-2xl lg:py-space-3xl">
        <div className="mb-space-xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            QUICKSTART
          </span>
          <h2 className="text-headline-lg text-text-primary tracking-tight">
            Three calls to a verified response.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-grid-hairline divide-y lg:divide-y-0 lg:divide-x divide-grid-hairline">
          {/* Prose column */}
          <div className="bg-paper-white p-space-lg lg:p-space-xl flex flex-col justify-between">
            <ol className="flex flex-col divide-y divide-grid-hairline">
              {STEPS.map((step) => (
                <li key={step.index} className="flex gap-space-md py-space-md first:pt-0 last:pb-0">
                  <span className="text-label-code text-text-muted shrink-0 pt-1">{step.index}</span>
                  <div>
                    <p className="text-body-default text-text-primary font-medium">{step.title}</p>
                    <p className="text-body-compact text-on-surface-variant mt-1">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-space-lg pt-space-lg border-t border-grid-hairline flex items-center gap-space-sm">
              <span className="text-label-code text-text-muted uppercase tracking-wider">INSTALL</span>
              <code className="font-mono text-body-compact text-text-primary bg-studio-grey border border-grid-hairline px-2 py-1">
                pip install omxlab
              </code>
            </div>
          </div>

          {/* Inverted code panel -- the sole inverted surface on the page */}
          <div className="bg-inverse-surface text-inverse-on-surface flex flex-col">
            <div className="flex items-center justify-between px-space-md py-space-sm border-b border-inverse-on-surface/15">
              <span className="text-label-code text-inverse-on-surface/80 font-mono tracking-wider">
                verify.py
              </span>
              <span className="text-label-code text-inverse-on-surface/60 uppercase tracking-[0.2em]">
                PYTHON
              </span>
            </div>
            <pre
              tabIndex={0}
              className="overflow-x-auto p-space-md text-body-compact leading-relaxed font-mono flex-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-inverse-on-surface/40"
            >
              <code>{SNIPPET}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickstartPanel;
