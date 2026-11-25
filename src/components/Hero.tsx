import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Volume2, VolumeX, Eye } from 'lucide-react';

interface HeroProps {
  onOpenShowreel: () => void;
}

export function Hero({ onOpenShowreel }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [fps] = useState(24);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Studio timecode counter emulation: 00:00:01:14
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= 240 ? 1 : prev + 1));
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [fps]);

  const formatTimecode = (frame: number) => {
    const totalSeconds = Math.floor(frame / 24);
    const frames = frame % 24;
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 px-5 sm:px-8 flex flex-col justify-between max-w-7xl mx-auto studio-grid-bg">
      {/* Top Editorial Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-subtext hairline-bottom pb-4">
        <div className="flex items-center gap-3">
          <span className="text-accent tracking-wider font-semibold">TALHA ISMAIL</span>
          <span className="text-mutedText">/</span>
          <span className="tracking-widest uppercase">INDEPENDENT MOTION DESIGNER</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-mutedText whitespace-nowrap">KARACHI, PK · UTC+5</span>
          <span className="tabular-nums text-paper whitespace-nowrap">{formatTimecode(currentFrame)}</span>
          <span className="text-accent flex items-center gap-1.5 font-bold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            24 FPS
          </span>
        </div>
      </div>

      {/* Main Asymmetric Grid: Headline on left, Cinematic Viewfinder on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto py-10 items-center">
        {/* Left Column: Typography & Intentional Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider text-accent bg-accent-dim uppercase border border-accent/20 whitespace-nowrap">
              Commercial Portfolio 2024
            </span>
            <span className="text-xs font-mono text-subtext whitespace-nowrap">· 2D ANIMATION & MOTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tighter text-paper leading-[0.95] mb-6"
          >
            I MAKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper via-paper to-subtext">
              IDEAS
            </span>{' '}
            <span className="text-accent italic font-accent font-bold tracking-tight">
              MOVE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-subtext font-sans max-w-xl leading-relaxed mb-8"
          >
            Bringing stories, characters and brands to life through movement, emotion and visual storytelling.
            Specializing in handcrafted 2D character rigging, precision kinetic typography, and broadcast-ready brand animation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3.5 rounded bg-accent text-accent-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center gap-2 group shadow-sm active:scale-[0.98]"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenShowreel}
              className="px-5 py-3.5 rounded bg-bg-card hairline-border text-paper font-mono text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors flex items-center gap-2.5 group"
              data-cursor="play"
            >
              <div className="w-5 h-5 rounded-full bg-accent-dim flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>WATCH SHOWREEL (01:24)</span>
            </button>
          </motion.div>

          {/* Micro Credentials */}
          <div className="mt-10 pt-6 hairline-top grid grid-cols-3 gap-4 max-w-lg text-left font-mono">
            <div>
              <div className="text-[11px] text-mutedText uppercase">EXPERIENCE</div>
              <div className="text-sm font-bold text-paper mt-0.5">5+ YEARS</div>
            </div>
            <div>
              <div className="text-[11px] text-mutedText uppercase">PRIMARY TOOLS</div>
              <div className="text-sm font-bold text-paper mt-0.5">AE · AI · PR · PS</div>
            </div>
            <div>
              <div className="text-[11px] text-mutedText uppercase">PIPELINE</div>
              <div className="text-sm font-bold text-accent mt-0.5">CONCEPT TO MASTER</div>
            </div>
          </div>
        </div>

        {/* Right Column: Motion Studio Cutting Room Screen / Viewfinder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Outer Viewfinder Frame */}
          <div className="relative rounded-lg bg-bg-card hairline-border overflow-hidden p-2 group shadow-2xl">
            {/* Viewfinder Header */}
            <div className="px-3 py-2 bg-bg-secondary rounded-t flex items-center justify-between text-[11px] font-mono text-subtext hairline-bottom">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-semibold text-paper">[REC] PREVIEW</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-mutedText">SHUTTER 180°</span>
                <span className="text-accent">1920x1080</span>
              </div>
            </div>

            {/* Video Preview Canvas with corner brackets */}
            <div
              className="relative aspect-video bg-black overflow-hidden cursor-pointer"
              onClick={toggleVideoPlayback}
              data-cursor="play"
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent/60 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent/60 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent/60 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent/60 z-20 pointer-events-none" />

              {/* Center Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-30">
                <div className="w-8 h-[1px] bg-accent" />
                <div className="h-8 w-[1px] bg-accent -ml-4" />
              </div>

              {/* Video Element with Fallback Poster */}
              {!videoError ? (
                <video
                  ref={videoRef}
                  src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-graphs-31912-large.mp4"
                  poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loop
                  muted={isMuted}
                  autoPlay
                  playsInline
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                    alt="Kinetic Motion Preview"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle animated studio scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-40 animate-pulse pointer-events-none" />
                </div>
              )}

              {/* Video overlay controls */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVideoPlayback();
                  }}
                  className="px-2.5 py-1 rounded bg-bg-primary/80 backdrop-blur hairline-border text-[11px] font-mono text-paper hover:text-accent flex items-center gap-1.5"
                >
                  <Play className={`w-2.5 h-2.5 ${isPlaying ? 'fill-accent text-accent' : ''}`} />
                  <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="p-1 rounded bg-bg-primary/80 backdrop-blur hairline-border text-subtext hover:text-paper"
                    aria-label="Toggle Mute"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-accent" />}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenShowreel();
                    }}
                    className="px-2 py-1 rounded bg-accent text-accent-text font-mono text-[10px] font-bold flex items-center gap-1 hover:bg-accent-hover shadow-sm"
                  >
                    <Eye className="w-3 h-3" />
                    <span>FULL REEL</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Scrubber / Timeline Meter Bar */}
            <div className="p-3 bg-bg-secondary rounded-b flex flex-col gap-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-subtext">
                <span className="text-paper">PROJECT: REEL_PROD_2024.AEP</span>
                <span className="tabular-nums text-accent">FRAME {currentFrame} / 240</span>
              </div>
              <div className="h-4 scrub-track rounded hairline-border relative overflow-hidden flex items-center">
                {/* Simulated playhead scrubber */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_8px_rgba(200,255,69,0.5)]"
                  style={{ left: `${(currentFrame / 240) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-mutedText">
                <span>00:00:00:00</span>
                <span>00:00:05:00</span>
                <span>00:00:10:00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Ticker & Scroll prompt */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 hairline-top pt-6 text-xs font-mono text-subtext">
        <div className="flex items-center gap-4">
          <span className="text-paper font-semibold">FOCUS AREAS:</span>
          <span className="text-mutedText">2D CHARACTER RIGGING</span>
          <span className="text-mutedText hidden md:inline">·</span>
          <span className="text-mutedText hidden md:inline">KINETIC TYPOGRAPHY</span>
          <span className="text-mutedText hidden md:inline">·</span>
          <span className="text-mutedText hidden md:inline">LOGO MOTION</span>
          <span className="text-mutedText hidden lg:inline">·</span>
          <span className="text-mutedText hidden lg:inline">EXPLAINER STORYTELLING</span>
        </div>

        <a
          href="#work"
          className="flex items-center gap-2 text-subtext hover:text-accent transition-colors py-1 group"
        >
          <span>EXPLORE ARCHIVE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
