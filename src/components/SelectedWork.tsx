import { useState } from 'react';
import { Project, Category } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Film } from 'lucide-react';

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = [
    'ALL',
    '2D ANIMATION',
    'LOGO ANIMATION',
    'EXPLAINER',
    'TYPOGRAPHY'
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    return project.category === activeCategory;
  });

  const handleNavigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    }
  };

  return (
    <section id="work" className="py-24 px-5 sm:px-8 max-w-[100rem] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 hairline-bottom pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>PORTFOLIO SHOWCASE</span>
            <span className="text-mutedText">· <span className="whitespace-nowrap">2021 — 2024</span></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-paper">
            SELECTED WORK
          </h2>
          <p className="text-base sm:text-lg text-subtext font-sans mt-3 max-w-xl">
            A collection of stories, identities and ideas brought to life through motion.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'ALL' ? projects.length : projects.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-accent text-accent-text font-bold shadow-sm'
                    : 'bg-bg-card hairline-border text-subtext hover:text-paper hover:border-borderHover'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${isActive ? 'text-accent-text/80 font-bold' : 'text-mutedText'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Grid: Varied Proportions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          // Editorial rhythm:
          // In 'ALL' view:
          // Item 0 -> 'featured' (full width 12 cols)
          // Item 1 -> standard (6 cols)
          // Item 2 -> standard (6 cols)
          // Item 3 -> 'featured' (full width 12 cols)
          // Item 4 -> standard (6 cols)
          // Item 5 -> standard (6 cols)
          let variant: 'featured' | 'standard' = 'standard';
          if (activeCategory === 'ALL') {
            if (idx === 0 || idx === 3) {
              variant = 'featured';
            }
          }

          const colSpanClass = variant === 'featured' ? 'col-span-1 md:col-span-2 lg:col-span-12' : 'col-span-1 md:col-span-1 lg:col-span-6';

          return (
            <div key={project.id} className={colSpanClass}>
              <ProjectCard
                project={project}
                layoutVariant={variant}
                onSelect={(p) => setSelectedProject(p)}
              />
            </div>
          );
        })}
      </div>

      {/* Studio disclaimer footer for work */}
      <div className="mt-12 p-4 rounded bg-bg-secondary hairline-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-mutedText gap-3">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-accent" />
          <span>PORTFOLIO NOTE: Projects demonstrate 2D character rigging, kinetic type and explainer pipelines.</span>
        </div>
        <div className="text-subtext">
          Replaceable thumbnails, client credits & raw project files.
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
      />
    </section>
  );
}
