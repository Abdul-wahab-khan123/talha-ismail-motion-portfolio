import { useState } from 'react';
import { PROCESS_STEPS } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-5 sm:px-8 max-w-[100rem] mx-auto hairline-top">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>HOW WE WORK</span>
            <span className="text-mutedText">· END-TO-END PIPELINE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-paper">
            FROM IDEA TO MOTION
          </h2>
          <p className="text-base sm:text-lg text-subtext font-sans mt-3 max-w-xl">
            A battle-tested 6-stage creative pipeline ensuring absolute alignment, pacing control, and broadcast polish.
          </p>
        </div>

        <div className="text-xs font-mono text-subtext">
          <span>ACTIVE STAGE:</span>{' '}
          <span className="text-accent font-bold uppercase">{PROCESS_STEPS[activeStep].name}</span>
        </div>
      </div>

      {/* Process Step Selector Track */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-lg text-left transition-all duration-200 hairline-border flex flex-col justify-between ${
                isActive
                  ? 'bg-bg-card border-accent text-paper shadow-md'
                  : isPassed
                  ? 'bg-bg-card/60 border-accent/30 text-paper'
                  : 'bg-bg-secondary text-subtext hover:bg-bg-card hover:text-paper'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className={isActive ? 'text-accent font-bold' : isPassed ? 'text-accent/70' : 'text-mutedText'}>
                  {step.number}
                </span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-accent" />}
              </div>
              <div className="font-display font-bold text-sm tracking-tight">
                {step.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Display */}
      <div className="p-8 sm:p-10 rounded-xl bg-bg-card hairline-border shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-subtext">
              <span className="px-2.5 py-0.5 rounded bg-accent text-accent-text font-bold shadow-sm">
                STAGE {PROCESS_STEPS[activeStep].number}
              </span>
              <span className="text-accent uppercase tracking-wider font-semibold">
                {PROCESS_STEPS[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-bold text-paper">
              {PROCESS_STEPS[activeStep].name}
            </h3>

            <p className="text-base text-subtext font-sans leading-relaxed">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 rounded bg-bg-secondary hairline-border flex flex-col gap-1">
                <span className="text-mutedText uppercase text-[10px]">CORE DELIVERABLE</span>
                <span className="text-paper font-semibold">{PROCESS_STEPS[activeStep].deliverable}</span>
              </div>
              <div className="p-3 rounded bg-bg-secondary hairline-border flex flex-col gap-1">
                <span className="text-mutedText uppercase text-[10px]">STUDIO FOCUS</span>
                <span className="text-accent font-semibold">{PROCESS_STEPS[activeStep].studioAction}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-lg bg-bg-secondary hairline-border flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-xs font-mono text-subtext">
              <span>PIPELINE INTEGRATION</span>
              <span className="text-accent">24 FPS STANDARD</span>
            </div>

            <div className="space-y-3 my-4">
              <div className="flex items-center justify-between text-xs font-mono text-paper">
                <span>REVISION VELOCITY</span>
                <span className="text-accent font-bold">MINIMAL FRICTION</span>
              </div>
              <div className="w-full h-1.5 bg-bg-primary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-subtext pt-3 hairline-top">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="hover:text-paper disabled:opacity-30 disabled:hover:text-subtext"
              >
                ← PREV STAGE
              </button>
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="text-accent font-semibold hover:text-accent-hover disabled:opacity-30"
              >
                NEXT STAGE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
