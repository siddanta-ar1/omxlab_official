import type { IconType } from 'react-icons';
import {
  MdCode,
  MdMemory,
  MdIntegrationInstructions,
  MdTerminal,
  MdWebhook,
  MdMonitorHeart,
} from 'react-icons/md';

type SdkEntry = {
  code: string;
  Icon: IconType;
  name: string;
  version: string;
  install: string;
  body: string;
};

const SDKS: SdkEntry[] = [
  {
    code: 'SDK_01',
    Icon: MdCode,
    name: 'Python SDK',
    version: 'v2.4.1',
    install: 'pip install omxlab',
    body: 'Full client bindings for Helios, Foundry, Studio, Rune, and Sage Core.',
  },
  {
    code: 'SDK_02',
    Icon: MdMemory,
    name: 'Rust Bindings',
    version: 'v1.9.0',
    install: 'cargo add omxlab-rs',
    body: 'Zero-copy FFI bindings tuned for deterministic low-latency inference loops.',
  },
  {
    code: 'SDK_03',
    Icon: MdIntegrationInstructions,
    name: 'TypeScript SDK',
    version: 'v3.1.0',
    install: 'npm install @omxlab/sdk',
    body: 'Typed client for edge, serverless, and browser-side verification workloads.',
  },
  {
    code: 'SDK_04',
    Icon: MdTerminal,
    name: 'CLI',
    version: 'v1.6.2',
    install: 'curl -fsSL cli.omxlab.ai | sh',
    body: 'Command-line interface for key management, job submission, and log tailing.',
  },
  {
    code: 'SDK_05',
    Icon: MdWebhook,
    name: 'Webhooks & Events',
    version: 'v1.2.0',
    install: 'POST /v1/webhooks/register',
    body: 'Signed event delivery for verification, training, and inference lifecycle changes.',
  },
  {
    code: 'SDK_06',
    Icon: MdMonitorHeart,
    name: 'Status Register',
    version: 'LIVE',
    install: 'GET /v1/status',
    body: 'Real-time uptime and incident telemetry across all five modules.',
  },
];

export function SdkMatrix() {
  return (
    <section
      data-anim="" className="w-full bg-studio-grey py-space-2xl lg:py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-space-xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            SDK &amp; TOOLING MATRIX
          </span>
          <h2 className="text-headline-lg text-text-primary tracking-tight">
            Six clients, one contract.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {SDKS.map((sdk) => {
            const Icon = sdk.Icon;
            return (
              <div
                key={sdk.code}
                className="p-space-lg border-r border-b border-grid-hairline flex flex-col justify-between gap-space-md hover:bg-studio-grey transition-colors duration-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <Icon aria-hidden="true" className="text-text-primary" size={18} />
                    <span className="text-label-code text-text-muted uppercase tracking-wider">
                      {sdk.code}
                    </span>
                  </div>
                  <span className="text-label-code text-text-muted">{sdk.version}</span>
                </div>
                <div>
                  <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">
                    {sdk.name}
                  </h3>
                  <p className="text-body-compact text-on-surface-variant">{sdk.body}</p>
                </div>
                <code className="font-mono text-[12px] text-text-primary bg-studio-grey border border-grid-hairline px-2 py-1 self-start break-all">
                  {sdk.install}
                </code>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SdkMatrix;
