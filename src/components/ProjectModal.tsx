import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export function ProjectModal({ project, onClose, onNavigate }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-bg-secondary hairline-border rounded-xl overflow-hidden shadow-2xl my-auto text-paper flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Studio Header Bar */}
          <div className="px-6 py-4 bg-bg-card hairline-bottom flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <h2 id="project-modal-title" className="text-paper font-bold uppercase text-xs font-mono">
                {project.title}
              </h2>
              <span className="text-mutedText">·</span>
              <span className="text-accent uppercase">{project.categoryDisplay}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('prev')}
                className="p-1.5 rounded bg-bg-secondary hairline-border text-subtext hover:text-paper hover:border-accent transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('next')}
                className="p-1.5 rounded bg-bg-secondary hairline-border text-subtext hover:text-paper hover:border-accent transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded bg-bg-secondary hairline-border text-subtext hover:text-paper hover:border-accent transition-colors ml-2"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
            {/* Project Hero Media */}
            <div className="relative rounded-lg overflow-hidden bg-black hairline-border aspect-video">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Gracefully fallback to poster image if stream blocked
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              ) : null}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg bg-bg-card hairline-border text-xs font-mono">
              <div>
                <div className="text-mutedText uppercase mb-1">CLIENT / CONTEXT</div>
                <div className="text-paper font-semibold">{project.client}</div>
              </div>
              <div>
                <div className="text-mutedText uppercase mb-1">ROLE IN PRODUCTION</div>
                <div className="text-paper font-semibold">{project.role}</div>
              </div>
              <div>
                <div className="text-mutedText uppercase mb-1">TIMELINE & CADENCE</div>
                <div className="text-paper font-semibold whitespace-nowrap">{project.duration} · {project.fps} FPS</div>
              </div>
              <div>
                <div className="text-mutedText uppercase mb-1">PRODUCTION YEAR</div>
                <div className="text-paper font-semibold whitespace-nowrap">{project.year}</div>
              </div>
            </div>

            {/* Editorial Overview & Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">01 / OVERVIEW</h4>
                <p className="text-sm sm:text-base text-subtext font-sans leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">02 / THE CHALLENGE</h4>
                <p className="text-sm sm:text-base text-subtext font-sans leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Concept & Step-by-Step Production Process */}
            <div className="p-6 rounded-lg bg-bg-card hairline-border space-y-6">
              <div>
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">03 / CREATIVE CONCEPT</h4>
                <p className="text-sm text-subtext font-sans leading-relaxed">
                  {project.concept}
                </p>
              </div>

              <div className="pt-4 hairline-top">
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">04 / PRODUCTION PIPELINE</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded bg-bg-secondary hairline-border text-xs">
                      <span className="text-accent font-mono font-bold">0{idx + 1}</span>
                      <span className="text-subtext font-sans">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 hairline-top">
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">05 / FINAL OUTCOME</h4>
                <div className="flex items-start gap-3 text-sm text-paper font-sans">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p>{project.finalResult}</p>
                </div>
              </div>
            </div>

            {/* Performance Stats if available */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-4">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded bg-bg-card hairline-border text-center">
                    <div className="text-2xl font-display font-bold text-accent tabular-nums">{stat.value}</div>
                    <div className="text-[11px] font-mono text-subtext uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Software Tools & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 hairline-top">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-bg-tertiary hairline-border text-xs font-mono text-paper">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-subtext">
                <button
                  onClick={() => onNavigate('prev')}
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREV PROJECT</span>
                </button>
                <span>/</span>
                <button
                  onClick={() => onNavigate('next')}
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
