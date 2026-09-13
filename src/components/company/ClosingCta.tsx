import Link from 'next/link';
import { ArrowButton } from '@/components/common/ArrowButton';
import { ROLES } from '@/components/company/OpenRoles';

export function ClosingCta() {
  return (
    <section
      data-anim="" className="w-full bg-action py-space-3xl text-on-primary">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin flex flex-col lg:flex-row lg:items-center justify-between gap-space-2xl">
        <div className="max-w-3xl">
          <span className="text-micro-eyebrow text-on-primary/80 uppercase tracking-[0.25em] block mb-space-sm">
            06 / JOIN THE REGISTRY
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-xl text-on-primary">
            {ROLES.length} open roles, on-site and remote.
          </h2>
          <p className="text-body-lead text-on-primary/90 mt-space-md">
            The Kathmandu studio is hiring engineers, researchers, and
            compliance officers now.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
          <ArrowButton href="/company#open-roles" variant="onDark">
            View open roles
          </ArrowButton>
          <Link
            href="/developers"
            className="lab-link px-5 py-[10px] border border-on-primary text-on-primary hover:bg-on-primary/10 rounded-lg text-cta-button flex items-center justify-center transition-all duration-200"
          >
            Contact recruiting <span className="lab-link-glyph">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
