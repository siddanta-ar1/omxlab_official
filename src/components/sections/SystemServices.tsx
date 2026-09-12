import type { IconType } from 'react-icons';
import { MdTune, MdAccountTree, MdSpeed, MdSecurity, MdBiotech, MdVerifiedUser } from 'react-icons/md';

type Service = {
  code: string;
  Icon: IconType;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    code: 'SVC_01',
    Icon: MdTune,
    title: 'Autonomous model customization.',
    body: 'Full-parameter LoRA alignment adapted continuously to confidential enterprise telemetry.',
  },
  {
    code: 'SVC_02',
    Icon: MdAccountTree,
    title: 'Deterministic workflow orchestration.',
    body: 'Provable execution DAGs guaranteeing auditability across regulatory compliance boundaries.',
  },
  {
    code: 'SVC_03',
    Icon: MdSpeed,
    title: 'Ultra-low latency edge deployment.',
    body: 'Compiled ONNX and TensorRT runtimes optimized specifically for air-gapped field hardware.',
  },
  {
    code: 'SVC_04',
    Icon: MdSecurity,
    title: 'Sovereign enclave architectures.',
    body: 'Zero-exposure hardware cryptographic boundary designs operating on customer premises.',
  },
  {
    code: 'SVC_05',
    Icon: MdBiotech,
    title: 'Scientific structural modeling.',
    body: 'Cryo-EM and bio-molecular topological mapping pipeline with sub-angstrom resolution limits.',
  },
  {
    code: 'SVC_06',
    Icon: MdVerifiedUser,
    title: 'Adversarial defense certification.',
    body: 'Continuous red-teaming protocols ensuring zero weight perturbation against poisoning attacks.',
  },
];

export function SystemServices() {
  return (
    <section className="w-full bg-studio-grey py-space-3xl border-b border-grid-hairline">
      <div className="max-w-[1600px] mx-auto px-space-md md:px-margin">
        <div className="mb-space-2xl">
          <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">
            SYSTEM SERVICES
          </span>
          <h2 className="text-headline-xl text-text-primary tracking-tight">Engineered capabilities.</h2>
        </div>
        {/* Square cells, breakpoint-aware edge suppression: container carries the
            top/left hairlines, each cell carries its own right/bottom hairline. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-grid-hairline bg-paper-white">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.code}
                data-anim=""
                style={{ transitionDelay: `${index * 60}ms` }}
                className="aspect-square p-space-lg lg:p-space-xl border-r border-b border-grid-hairline flex flex-col justify-between hover:bg-studio-grey transition-colors duration-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">{service.code}</span>
                  <Icon aria-hidden="true" className="text-text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-headline-md text-text-primary mb-space-xs font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-body-compact text-on-surface-variant">{service.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SystemServices;
