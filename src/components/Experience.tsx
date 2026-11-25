import { useState } from 'react';
import { EXPERIENCES } from '../data/experience';
import { ChevronRight } from 'lucide-react';

export function Experience() {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto hairline-top">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>CAREER TRACK RECORD</span>
            <span className="text-mutedText">· <span className="whitespace-nowrap">2019 — PRESENT</span></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-paper">
            EXPERIENCE IN MOTION
          </h2>
          <p className="text-base sm:text-lg text-subtext font-sans mt-3 max-w-xl">
            A production journey from client-facing explainer delivery to leading full 2D commercial pipelines.
          </p>
        </div>

        <div className="text-xs font-mono text-subtext bg-bg-card px-4 py-2 rounded hairline-border whitespace-nowrap">
          <span className="text-accent font-bold">5+ YEARS</span> PROFESSIONAL ANIMATION
        </div>
      </div>

      {/* Interactive Timeline Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Timeline Company Selector (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {EXPERIENCES.map((exp, idx) => {
            const isActive = exp.id === activeExpId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`w-full p-5 rounded-lg text-left transition-all duration-200 hairline-border flex flex-col justify-between relative group ${
                  isActive
                    ? 'bg-bg-card border-accent text-paper shadow-lg'
                    : 'bg-bg-secondary text-subtext hover:bg-bg-card hover:text-paper hover:border-borderHover'
                }`}
              >
                {isActive && (
                  <div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-accent rounded-r" />
                )}

                <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-2 gap-2">
                  <span className={`whitespace-nowrap ${isActive ? 'text-accent font-bold' : 'text-mutedText'}`}>
                    0{idx + 1} · {exp.period}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-bg-tertiary whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>

                <div className="font-display font-bold text-lg text-paper group-hover:text-accent transition-colors">
                  {exp.company}
                </div>

                <div className="text-xs text-subtext font-sans mt-1">
                  {exp.role}
                </div>

                <div className="mt-3 pt-3 hairline-top flex items-center justify-between text-[11px] font-mono text-mutedText">
                  <span>{exp.featuredPillar}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-accent translate-x-1' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Production Ledger (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-xl bg-bg-card hairline-border shadow-xl">
          {/* Header */}

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-accent uppercase tracking-wider mb-4">
            <span className="whitespace-nowrap">{activeExp.period}</span>
            <span className="text-mutedText">/</span>
            <span className="whitespace-nowrap">{activeExp.location}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 hairline-bottom pb-6 mb-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-paper">
                {activeExp.role}
              </h3>
              <div className="text-sm text-subtext font-sans mt-0.5">
                {activeExp.company} · {activeExp.type}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {activeExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-bg-secondary hairline-border text-paper">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <p className="text-base text-paper font-sans leading-relaxed mb-8">
            {activeExp.summary}
          </p>

          {/* Key Production Responsibilities & Achievements */}
          <div>
            <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
              KEY PRODUCTION CONTRIBUTIONS
            </h4>
            <div className="space-y-4">
              {activeExp.highlights.map((highlight, idx) => {
                const [title, ...rest] = highlight.split(':');
                return (
                  <div key={idx} className="flex items-start gap-3 text-sm text-subtext font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      {rest.length > 0 ? (
                        <>
                          <strong className="text-paper font-medium">{title}:</strong>
                          <span>{rest.join(':')}</span>
                        </>
                      ) : (
                        <span>{highlight}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
