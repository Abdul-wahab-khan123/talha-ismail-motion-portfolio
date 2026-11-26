import { useState, useRef } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Play, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  layoutVariant: 'featured' | 'standard' | 'editorial-split' | 'compact';
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, layoutVariant, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (layoutVariant === 'featured') {
    return (
      <div
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer rounded-xl bg-bg-secondary hairline-border overflow-hidden transition-all duration-300 hover:border-accent/40 col-span-1 lg:col-span-12"
        data-cursor="project"
        data-cursor-text="OPEN"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[370px] xl:h-[390px] overflow-hidden">
          {/* Media Container (7 cols) - Visually dominant cinema aspect */}
          <div className="lg:col-span-7 relative bg-black overflow-hidden flex items-center justify-center h-[260px] sm:h-[300px] lg:h-full">
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
            />
            {project.videoUrl && !videoError && (
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnail}
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}

            {/* Viewfinder indicator overlay */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-2.5 py-1 rounded bg-bg-primary/85 backdrop-blur text-[11px] font-mono text-paper hairline-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{project.number}</span>
              <span className="text-mutedText">/</span>
              <span className="whitespace-nowrap">{project.duration}</span>
            </div>

            <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded bg-accent text-accent-text text-xs font-mono font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
              <span>EXPLORE CASE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Editorial Content Container (5 cols) - Balanced, compact vertical rhythm without empty space */}
          <div className="lg:col-span-5 p-5 sm:p-6 lg:p-6 xl:p-7 flex flex-col justify-between bg-bg-card hairline-left h-auto lg:h-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-subtext mb-2">
                <span className="text-accent uppercase font-semibold whitespace-nowrap">{project.categoryDisplay}</span>
                <span className="whitespace-nowrap">{project.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-paper tracking-tight group-hover:text-accent transition-colors mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-subtext font-sans leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
                {project.shortDesc}
              </p>

              {/* Tools chips */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-bg-secondary hairline-border text-[11px] font-mono text-paper whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 hairline-top flex items-center justify-between text-xs font-mono text-subtext">
              <div className="flex items-center gap-2 max-w-[55%]">
                <Layers className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="truncate">{project.role}</span>
              </div>
              <div className="flex items-center gap-1 text-paper group-hover:text-accent group-hover:translate-x-1 transition-all whitespace-nowrap">
                <span>VIEW BREAKDOWN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Two-Column or Editorial Composition
  return (
    <div
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer rounded-xl bg-bg-secondary hairline-border overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col justify-between"
      data-cursor="project"
      data-cursor-text="VIEW"
    >
      {/* Media Window */}
      <div className="relative aspect-[16/10] bg-black overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        {project.videoUrl && !videoError && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.thumbnail}
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded bg-bg-primary/85 backdrop-blur text-[10px] font-mono text-paper hairline-border">
          <span className="text-accent font-bold">{project.number}</span>
          <span className="text-mutedText">·</span>
          <span className="whitespace-nowrap">{project.fps} FPS</span>
        </div>

        <div className="absolute top-3 right-3 px-2 py-1 rounded bg-bg-primary/85 backdrop-blur text-[10px] font-mono text-subtext hairline-border whitespace-nowrap">
          {project.duration}
        </div>

        {/* Hover Cue */}
        <div className="absolute inset-0 bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-accent text-accent-text font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
            <Play className="w-3 h-3 fill-current" />
            <span className="whitespace-nowrap">PROJECT SPEC</span>
          </div>
        </div>
      </div>

      {/* Card Metadata (Editorial clean, sentence case per Unslop) */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-bg-card hairline-top">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-subtext mb-2.5">
            <span className="text-accent font-semibold whitespace-nowrap">{project.categoryDisplay}</span>
            <span className="whitespace-nowrap">{project.year}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-paper tracking-tight group-hover:text-accent transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-subtext font-sans leading-relaxed line-clamp-2 mb-4">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-4 hairline-top flex items-center justify-between text-xs font-mono text-subtext">
          <span className="line-clamp-1">{project.tools.slice(0, 2).join(' · ')}</span>
          <span className="text-paper flex items-center gap-1 group-hover:text-accent group-hover:translate-x-0.5 transition-all whitespace-nowrap">
            <span>DETAILS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
