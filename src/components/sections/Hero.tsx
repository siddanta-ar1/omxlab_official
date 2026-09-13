'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SpecimenPlate } from '@/components/common/SpecimenPlate';

type Metric = { label: string; value: string };

const METRICS: Metric[] = [
  { label: 'Inference Reliability', value: '99.98%' },
  { label: 'Compute Efficiency', value: '14.2x' },
  { label: 'Deterministic Latency', value: '< 12ms' },
];

const SLIDES = [
  { code: '01', label: 'Foundation' },
  { code: '02', label: 'Training fabric' },
  { code: '03', label: 'Deployment' },
];

const OVERLAY_CELLS = Array.from({ length: 12 });

/**
 * A scroll-driven hero rather than a timed carousel: the outer section creates
 * three viewport lengths of scroll room while its inner panel sticks below the
 * fixed navigation. The track only translates on large screens. On smaller
 * viewports the same panels become a regular, readable vertical sequence.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame: number | undefined;

    const update = () => {
      animationFrame = undefined;
      if (!desktop.matches || reducedMotion.matches) {
        setProgress(0);
        return;
      }

      const start = section.getBoundingClientRect().top + window.scrollY - 49;
      const distance = Math.max(section.offsetHeight - frame.offsetHeight, 1);
      const next = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      setProgress(next);
    };

    const requestUpdate = () => {
      if (animationFrame === undefined) animationFrame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    desktop.addEventListener('change', requestUpdate);
    reducedMotion.addEventListener('change', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      desktop.removeEventListener('change', requestUpdate);
      reducedMotion.removeEventListener('change', requestUpdate);
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const activeSlide = Math.min(SLIDES.length - 1, Math.round(progress * (SLIDES.length - 1)));
  const panelStyle = (index: number) => ({
    '--slide-offset': `${(index - progress * (SLIDES.length - 1)) * 100}%`,
  } as React.CSSProperties);
  const scrollToSlide = (index: number) => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;
    const start = section.getBoundingClientRect().top + window.scrollY - 49;
    const distance = section.offsetHeight - frame.offsetHeight;
    window.scrollTo({ top: start + distance * (index / (SLIDES.length - 1)), behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="scroll-hero-root relative w-full bg-paper-white border-b border-grid-hairline lg:h-[400vh]" aria-label="OMX Lab introduction">
      <div ref={frameRef} className="lg:sticky lg:top-[49px] lg:h-[calc(100svh-49px)] lg:overflow-hidden">
        <div className="scroll-hero-stage flex flex-col lg:h-full">
          <article style={panelStyle(0)} className="scroll-hero-slide w-full shrink-0 border-b border-grid-hairline last:border-b-0 lg:border-b-0">
            <div className="max-w-[1600px] h-full mx-auto border-x border-grid-hairline grid grid-cols-1 lg:grid-cols-10">
              <div className="lg:col-span-7 flex flex-col justify-between p-space-md sm:p-space-lg lg:p-space-xl">
                <div className="pt-space-md lg:pt-space-xl">
                  <div className="flex items-center gap-space-sm mb-space-md">
                    <span className="w-2.5 h-2.5 bg-swatch-sage" aria-hidden="true" />
                    <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-[0.25em]">OMX LAB // SYSTEMS ARCHITECTURE V4.2</span>
                  </div>
                  <h1 className="text-headline-xl-mobile sm:text-headline-xl lg:text-display-hero text-text-primary tracking-[-0.03em] leading-[0.92] max-w-4xl">
                    Frontier AI infrastructure for<br /><span className="accent-mark font-semibold">reality.</span>
                  </h1>
                </div>
                <div className="mt-space-xl lg:mt-space-2xl relative w-full aspect-[16/9] max-h-[46svh] border border-grid-hairline bg-studio-grey overflow-hidden">
                  <div className="absolute top-3 left-3 z-20 hidden sm:flex items-center gap-space-sm bg-paper-white/95 px-2.5 py-1 border border-grid-hairline text-[10px] text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant omx-pulse-slow" /> GEO_LAT: 27.7172° N · NODE_ACTIVE
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 bg-paper-white/95 px-2.5 py-1 border border-grid-hairline text-[10px] text-text-muted">SYS_REF // MATRIX 04.981A</div>
                  <SpecimenPlate seed={41} variant="trace" className="border-0" />
                  <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-3 divide-x divide-y divide-grid-hairline/40">{OVERLAY_CELLS.map((_, i) => <div key={i} />)}</div>
                </div>
              </div>
              <aside className="lg:col-span-3 bg-studio-grey border-t lg:border-t-0 lg:border-l border-grid-hairline p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-xl">
                <div>
                  <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-xs">01 / ARCHITECTURAL MISSION</span>
                  <p className="text-body-lead text-text-primary tracking-[-0.01em]">Building foundational models, high-throughput training platforms, and applied intelligence for the physical world.</p>
                </div>
                <p className="text-label-code text-text-muted uppercase">Scroll to inspect the system →</p>
              </aside>
            </div>
          </article>

          <article style={panelStyle(1)} className="scroll-hero-slide w-full shrink-0 border-b border-grid-hairline last:border-b-0 lg:border-b-0">
            <div className="max-w-[1600px] h-full mx-auto border-x border-grid-hairline grid grid-cols-1 lg:grid-cols-10 bg-studio-grey">
              <div className="lg:col-span-4 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid-hairline">
                <div>
                  <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">02 / TRAINING FABRIC</span>
                  <h2 className="text-headline-xl-mobile sm:text-headline-xl lg:text-display-hero text-text-primary tracking-[-0.03em] leading-[0.92]">Compute that holds its line.</h2>
                </div>
                <p className="mt-space-xl text-body-lead text-on-surface-variant max-w-md">A distributed training fabric where every workload is scheduled, measured, and repeatable at cluster scale.</p>
              </div>
              <div className="lg:col-span-6 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-grid-hairline">
                  {METRICS.map((metric) => <div key={metric.label} className="p-space-md border-r border-b border-grid-hairline"><span className="text-body-compact text-on-surface-variant block mb-space-sm">{metric.label}</span><span className="text-headline-md text-text-primary font-medium">{metric.value}</span></div>)}
                </div>
                <div className="mt-space-xl max-w-3xl"><SpecimenPlate seed={77} code="FABRIC / 02" reading="16,384 ACCELERATORS" variant="matrix" /></div>
              </div>
            </div>
          </article>

          <article style={panelStyle(2)} className="scroll-hero-slide w-full shrink-0">
            <div className="max-w-[1600px] h-full mx-auto border-x border-grid-hairline grid grid-cols-1 lg:grid-cols-10">
              <div className="lg:col-span-6 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between min-h-[460px] lg:min-h-0">
                <div>
                  <span className="text-micro-eyebrow text-text-muted uppercase tracking-[0.25em] block mb-space-md">03 / DEPLOYMENT REGISTER</span>
                  <h2 className="text-headline-xl-mobile sm:text-headline-xl lg:text-display-hero text-text-primary tracking-[-0.03em] leading-[0.92]">From validated signal to deployed intelligence.</h2>
                </div>
                <div className="mt-space-xl max-w-2xl"><SpecimenPlate seed={103} code="HELIOS / ACTIVE" reading="LATENCY < 12MS" variant="trace" /></div>
              </div>
              <aside className="lg:col-span-4 bg-text-primary text-on-primary p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-xl">
                <div><span className="text-micro-eyebrow text-on-primary/60 uppercase tracking-[0.25em] block mb-space-md">SYSTEM RELEASE · 03.14</span><p className="text-headline-md text-on-primary">Introducing Helios: Autonomous Verification Matrix</p></div>
                <Link href="/news" className="inline-flex items-center justify-between border border-on-primary/30 px-space-md py-space-md text-cta-button hover:bg-paper-white hover:text-text-primary transition-colors duration-200">Read the dispatch <span aria-hidden="true">→</span></Link>
              </aside>
            </div>
          </article>
        </div>

        <div className="hidden lg:flex absolute z-20 left-1/2 bottom-space-lg -translate-x-1/2 items-center border border-grid-hairline bg-paper-white/95">
          {SLIDES.map((slide, index) => <button key={slide.code} type="button" onClick={() => scrollToSlide(index)} aria-current={activeSlide === index ? 'step' : undefined} aria-label={`Go to ${slide.label}`} className={`px-space-sm py-2 text-label-code uppercase border-r last:border-r-0 border-grid-hairline transition-colors ${activeSlide === index ? 'bg-text-primary text-on-primary' : 'text-text-muted hover:bg-studio-grey'}`}>{slide.code}</button>)}
        </div>
      </div>
    </section>
  );
}

export default Hero;
