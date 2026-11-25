import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [frame, setFrame] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => {
        if (prev >= 24) {
          clearInterval(timer);
          return 24;
        }
        return prev + 1;
      });
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return Math.min(100, prev + 4.5);
      });
    }, 45);

    const finishTimeout = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 400);
    }, 1350);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-bg-primary text-paper select-none"
        >
          {/* Top studio meta */}
          <div className="flex items-center justify-between text-xs font-mono text-subtext tracking-wider uppercase">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>STUDIO LOAD SEQUENCE</span>
            </div>
            <div>[REC] 24 FPS · 1080P</div>
          </div>

          {/* Central title and frame counter */}
          <div className="max-w-4xl mx-auto w-full text-center py-12">
            <div className="text-xs font-mono text-accent tracking-widest uppercase mb-4 whitespace-nowrap">
              PORTFOLIO ARCHIVE · 2024
            </div>
            <div className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter text-paper mb-6">
              TALHA ISMAIL
            </div>
            <p className="text-sm sm:text-base text-subtext font-sans max-w-md mx-auto">
              2D Animator · Motion Designer · Visual Storyteller
            </p>

            {/* Frame readout */}
            <div className="mt-12 flex items-baseline justify-center gap-2 font-mono">
              <span className="text-xs text-subtext">FRAME</span>
              <span className="text-3xl sm:text-4xl font-bold text-accent tabular-nums">
                {frame.toString().padStart(2, '0')}
              </span>
              <span className="text-sm text-subtext">/ 24</span>
            </div>
          </div>

          {/* Bottom progress track */}
          <div className="w-full">
            <div className="flex justify-between items-center text-[11px] font-mono text-subtext mb-2">
              <span>LOADING MOTION BUFFER</span>
              <span className="text-paper tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-[2px] bg-bg-tertiary overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
