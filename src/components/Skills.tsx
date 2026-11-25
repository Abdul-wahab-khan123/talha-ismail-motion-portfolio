import { useState } from 'react';
import { SOFTWARE_TOOLS, CORE_SKILLS } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export function Skills() {
  const [activeTool, setActiveTool] = useState(SOFTWARE_TOOLS[0]);

  return (
    <section id="skills" className="py-24 px-5 sm:px-8 max-w-[100rem] mx-auto hairline-top">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>STUDIO ARSENAL</span>
            <span className="text-mutedText">· SOFTWARE & CRAFT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-paper">
            SKILLS & SOFTWARE
          </h2>
          <p className="text-base sm:text-lg text-subtext font-sans mt-3 max-w-xl">
            A production-tested toolchain honed across broadcast rigs, kinetic idents, and frame-by-frame animation.
          </p>
        </div>

        <div className="text-xs font-mono text-subtext whitespace-nowrap">
          <span className="text-accent font-bold">100% DISCIPLINE</span> · ZERO FILLER PROGRESS BARS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Core Animation Competencies (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-bg-card hairline-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-subtext uppercase mb-6">
              <span className="text-accent font-semibold">CORE CRAFT DISCIPLINES</span>
              <span>2D MOTION PROFICIENCY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CORE_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-bg-secondary hairline-border flex items-center justify-between hover:border-accent/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-accent font-semibold">0{idx + 1}</span>
                    <span className="text-sm font-sans font-medium text-paper group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-mutedText group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 hairline-top flex items-center justify-between text-xs font-mono text-mutedText">
            <span>METHODOLOGY: CLASSICAL 12 PRINCIPLES</span>
            <span className="text-paper">WEIGHT · TIMING · SPACING</span>
          </div>
        </div>

        {/* Software Suite Interactive Terminal (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-bg-card hairline-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-subtext uppercase mb-4">
              <span className="text-accent font-semibold">INDUSTRY SOFTWARE</span>
              <span>DAILY WEAPONS</span>
            </div>

            {/* Software buttons */}
            <div className="space-y-2.5 mb-6">
              {SOFTWARE_TOOLS.map((tool) => {
                const isActive = activeTool.name === tool.name;
                return (
                  <button
                    key={tool.name}
                    onClick={() => setActiveTool(tool)}
                    className={`w-full p-3.5 rounded text-left transition-all hairline-border flex items-center justify-between ${
                      isActive
                        ? 'bg-bg-secondary border-accent text-paper'
                        : 'bg-bg-secondary/40 text-subtext hover:text-paper hover:bg-bg-secondary'
                    }`}
                  >
                    <div>
                      <div className="font-display font-bold text-sm text-paper">{tool.name}</div>
                      <div className="text-[11px] font-mono text-mutedText">{tool.category}</div>
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                      isActive ? 'bg-accent text-accent-text font-bold shadow-sm' : 'bg-bg-tertiary text-subtext'
                    }`}>
                      {tool.level.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active tool breakdown */}
            <div className="p-4 rounded bg-bg-secondary hairline-border text-xs font-mono">
              <div className="flex items-center justify-between text-accent font-bold mb-1">
                <span>{activeTool.name}</span>
                <span>{activeTool.level}</span>
              </div>
              <p className="text-subtext font-sans text-xs leading-relaxed mt-2">
                {activeTool.description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 hairline-top text-[11px] font-mono text-mutedText flex items-center justify-between">
            <span>VERSION CONTROL & ASSET INTEGRITY</span>
            <span className="text-accent">100% PREPARED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
