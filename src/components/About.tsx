import { EDUCATION_DATA, RECOMMENDATION } from '../data/experience';
import { Quote } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto hairline-top">
      {/* Editorial Section Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>CREATIVE PROFILE</span>
        <span className="text-mutedText">· BACKGROUND & METHODOLOGY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Big Editorial Headings & Story (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tighter text-paper leading-[1.05] mb-8">
              ANIMATOR. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper to-subtext">
                STORYTELLER.
              </span> <br />
              <span className="text-accent italic font-accent">CREATIVE THINKER.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-subtext font-sans leading-relaxed">
              <p>
                I'm a 2D animator focused on creating engaging visual stories. From character animation and storyboards to logo reveals and kinetic typography, I transform ideas into memorable motion experiences.
              </p>
              <p className="text-sm sm:text-base text-paper/90">
                At <span className="text-accent font-semibold">Animagic Post Production</span>, I lead visual development from raw script breakdown to broadcast delivery. My craft is anchored in classical Disney animation principles—squash, stretch, anticipation, and follow-through—blended with modern vector rigging and custom deceleration curves.
              </p>
              <p className="text-sm sm:text-base">
                Whether creating empathetic characters that express genuine emotion or choreographing kinetic typography for high-stakes brand launches, every frame is built with purpose, timing, and structural elegance.
              </p>
            </div>
          </div>

          {/* Peer Recommendation Quote (from verified resume) */}
          <div className="mt-10 p-6 rounded-lg bg-bg-card hairline-border relative overflow-hidden">
            <Quote className="w-8 h-8 text-accent/20 absolute top-2 right-4" />
            <p className="text-sm sm:text-base text-paper font-sans italic leading-relaxed mb-4">
              "{RECOMMENDATION.quote}"
            </p>
            <div className="flex items-center justify-between text-xs font-mono text-subtext pt-3 hairline-top">
              <span className="text-accent font-semibold">{RECOMMENDATION.source}</span>
              <span>{RECOMMENDATION.context}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Matrix & Credentials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Creative Visual Asset with Viewfinder styling */}
          <div className="relative rounded-lg bg-bg-card hairline-border overflow-hidden p-2 group shadow-xl">
            <div className="relative aspect-[4/3] rounded bg-black overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop"
                alt="Talha Ismail Motion Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="text-paper font-bold whitespace-nowrap">TALHA ISMAIL</span>
                <span className="text-accent whitespace-nowrap">KARACHI, PAKISTAN</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Background */}
          <div className="p-6 rounded-lg bg-bg-card hairline-border">
            <div className="flex items-center justify-between text-xs font-mono text-subtext uppercase mb-4">
              <span className="text-accent font-semibold">EDUCATION</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs hairline-bottom pb-3 last:border-b-0 last:pb-0">
                  <div>
                    <div className="font-display font-bold text-paper text-sm">{edu.degree}</div>
                    <div className="text-subtext font-sans mt-0.5">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-mutedText text-[11px] whitespace-nowrap ml-2">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Working Modalities */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-bg-card hairline-border text-xs font-mono">
              <div className="text-mutedText uppercase mb-1">LANGUAGES</div>
              <div className="text-paper font-semibold text-sm">English · Urdu</div>
              <div className="text-[11px] text-accent mt-1">Fluent Professional</div>
            </div>

            <div className="p-4 rounded-lg bg-bg-card hairline-border text-xs font-mono">
              <div className="text-mutedText uppercase mb-1">AVAILABILITY</div>
              <div className="text-paper font-semibold text-sm">Remote & Studio</div>
              <div className="text-[11px] text-accent mt-1">Global Client Handoff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
