import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hairline-top bg-bg-secondary py-10 sm:py-12 px-5 sm:px-8 text-xs font-mono text-subtext">
      <div className="max-w-[100rem] mx-auto flex flex-col gap-8">
        {/* Top Row: Brand, Descriptor, Studio Location & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 hairline-bottom">
          {/* Brand Identity & Role */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-display font-bold text-base tracking-tight text-paper whitespace-nowrap">
              TALHA ISMAIL
            </span>
            <span className="hidden sm:inline text-mutedText">/</span>
            <span className="text-subtext whitespace-nowrap">
              2D ANIMATOR & MOTION DESIGNER
            </span>
          </div>

          {/* Location Base & Back to Top Action */}
          <div className="flex items-center justify-between w-full md:w-auto gap-6">
            <div className="flex items-center gap-2 text-accent whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-semibold">KARACHI, PAKISTAN</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card hairline-border text-paper hover:text-accent hover:border-accent transition-colors shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Colophon / Unslop Craft & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-mutedText">
          <div>
            <span>Crafted with Space Grotesk, DM Sans & Unslop Design Principles</span>
          </div>
          <div className="whitespace-nowrap">
            <span>© {new Date().getFullYear()} TALHA ISMAIL · ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
