import { SERVICES } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto hairline-top">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>COMMERCIAL CAPABILITIES</span>
            <span className="text-mutedText">· FULL PIPELINE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-paper">
            SERVICES IN MOTION
          </h2>
          <p className="text-base sm:text-lg text-subtext font-sans mt-3 max-w-xl">
            From initial thumbnail boards to 60fps broadcast deliveries, built with precision and care.
          </p>
        </div>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded bg-bg-card hairline-border text-xs font-mono text-paper hover:text-accent hover:border-accent transition-colors self-start md:self-auto flex items-center gap-2"
        >
          <span>BOOK A PIPELINE</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
        </a>
      </div>

      {/* Typography-Driven Service Architecture (Unslop: Avoid 6 identical cards!) */}
      <div className="divide-y divide-borderMuted hairline-border rounded-xl bg-bg-card overflow-hidden">
        {SERVICES.map((service) => {
          return (
            <div
              key={service.id}
              className="p-6 sm:p-8 transition-colors duration-300 hover:bg-bg-secondary group cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Index Number & Title (5 cols) */}
                <div className="lg:col-span-5 flex items-start gap-5">
                  <span className="text-sm font-mono text-accent font-bold pt-1">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-paper group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-mutedText mt-1 uppercase tracking-wider">
                      {service.metric}
                    </p>
                  </div>
                </div>

                {/* Description & Deliverables (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <p className="text-sm text-subtext font-sans leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-bg-tertiary text-[11px] font-mono text-paper/80"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technique & Action Indicator (2 cols) */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-3 text-xs font-mono text-subtext flex-shrink-0">
                  <div className="hidden lg:block text-right">
                    <div className="text-[10px] text-mutedText uppercase">TECHNIQUE</div>
                    <div className="text-paper line-clamp-1 whitespace-nowrap">{service.technique.split('+')[0]}</div>
                  </div>
                  <div className="w-8 h-8 min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] aspect-square flex-shrink-0 rounded-full bg-bg-secondary hairline-border flex items-center justify-center text-subtext group-hover:bg-accent group-hover:text-accent-text group-hover:scale-110 transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
