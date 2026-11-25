import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MotionShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MotionShowreelModal({ isOpen, onClose }: MotionShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);

  const reelSegments = [
    { title: 'Character Locomotion & Acting', category: '2D Animation', timestamp: '00:00 - 00:22' },
    { title: 'High-Impact Brand Reveal Kit', category: 'Logo Motion', timestamp: '00:22 - 00:44' },
    { title: 'Variable Typography Choreography', category: 'Kinetic Type', timestamp: '00:44 - 01:05' },
    { title: 'Isometric Data & Explainer Flow', category: 'Explainer 2.5D', timestamp: '01:05 - 01:24' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="showreel-modal-title"
        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-bg-secondary hairline-border rounded-xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Studio Modal Header */}
          <div className="px-6 py-4 bg-bg-card hairline-bottom flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <h2 id="showreel-modal-title" className="font-bold text-paper text-xs font-mono">
                TALHA ISMAIL · OFFICIAL MOTION REEL
              </h2>
              <span className="text-mutedText">| 24 FPS · 1080P PRORES</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-bg-tertiary text-subtext hover:text-paper transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Video Viewport */}
          <div className="relative aspect-video bg-black overflow-hidden">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
              poster="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Video overlay controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-bg-primary/90 backdrop-blur-md px-4 py-2.5 rounded-lg hairline-border text-xs font-mono">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 text-accent hover:text-paper transition-colors"
                  aria-label="Play or Pause"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 text-subtext hover:text-paper transition-colors"
                  aria-label="Mute or Unmute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-accent" />}
                </button>
                <span className="text-paper tabular-nums">00:48 / 01:24</span>
              </div>

              <div className="text-[11px] text-subtext hidden sm:flex items-center gap-2">
                <span>SEGMENT:</span>
                <span className="text-accent font-semibold">{reelSegments[activeSegment].title}</span>
              </div>

              <div className="flex items-center gap-2 text-mutedText text-[10px]">
                <span>PRESS [SPACE] TO {isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </div>
            </div>
          </div>

          {/* Reel Breakdown Segment Index */}
          <div className="p-6 bg-bg-card hairline-top">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-subtext">
              <span>REEL CHAPTERS & PRODUCTION NOTES</span>
              <span className="text-accent">4 SEQUENCES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {reelSegments.map((segment, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSegment(idx)}
                  className={`p-3 rounded text-left transition-all hairline-border flex flex-col justify-between ${
                    activeSegment === idx
                      ? 'bg-bg-tertiary border-accent text-paper'
                      : 'bg-bg-secondary text-subtext hover:text-paper hover:border-borderHover'
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                    <span className={activeSegment === idx ? 'text-accent font-bold' : 'text-mutedText'}>
                      0{idx + 1}
                    </span>
                    <span className="tabular-nums">{segment.timestamp}</span>
                  </div>
                  <div className="text-xs font-display font-medium text-paper line-clamp-1">
                    {segment.title}
                  </div>
                  <div className="text-[10px] font-mono text-mutedText mt-1">
                    {segment.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
