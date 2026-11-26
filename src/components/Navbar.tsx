import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenShowreel: () => void;
}

export function Navbar({ onOpenShowreel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // When near top of the page (Hero section), reset active state
      if (currentScrollY < 300) {
        setActiveSection('hero');
        return;
      }

      // Section tracking for nav highlighting
      const sections = ['work', 'about', 'services', 'experience', 'process', 'contact'];
      let matchingSection = 'hero';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is currently active in viewport
          if (rect.top <= 240 && rect.bottom >= 120) {
            matchingSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(matchingSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary backdrop-blur-md hairline-bottom py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Talha Ismail Portfolio Home"
        >
          <div className="w-8 h-8 rounded bg-bg-card hairline-border flex items-center justify-center font-display font-bold text-accent text-sm group-hover:border-accent transition-colors shadow-sm">
            TI
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-paper group-hover:text-accent transition-colors">
              TALHA ISMAIL
            </span>
            <span className="text-[10px] font-mono text-subtext uppercase tracking-widest hidden md:inline whitespace-nowrap">
              2D Animator · Motion Designer
            </span>
          </div>
        </a>

        {/* Right: Desktop Navigation & Controls */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-xs font-mono tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-accent font-semibold'
                    : 'text-subtext hover:text-paper'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                )}
              </a>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-borderMuted" />

          <div className="flex items-center gap-3">
            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Reel Button */}
            <button
              onClick={onOpenShowreel}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-bg-card hairline-border text-xs font-mono text-paper hover:text-accent hover:border-accent transition-colors group shadow-sm"
              data-cursor="play"
              aria-label="Open Motion Showreel"
            >
              <span>REEL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile & Tablet controls (Theme switcher + Reel + Menu toggle) */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle />

          <button
            onClick={onOpenShowreel}
            className="px-2.5 py-1.5 rounded bg-bg-card hairline-border text-[11px] font-mono text-accent font-medium shadow-sm"
            aria-label="Open Motion Showreel"
          >
            REEL
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-bg-card hairline-border text-paper hover:text-accent focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-bg-primary backdrop-blur-xl hairline-bottom px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-display font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2 hairline-bottom ${
                  activeSection === link.id ? 'text-accent font-semibold' : 'text-paper hover:text-accent'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-mutedText">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-4 font-mono text-xs">
            {/* Mobile Theme Toggle Row */}
            <div className="flex items-center justify-between p-3 rounded bg-bg-card hairline-border">
              <span className="text-subtext">THEME MODE</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1 rounded bg-bg-secondary hairline-border text-paper hover:text-accent font-mono text-xs"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-accent" />
                    <span>DARK THEME</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-accent" />
                    <span>LIGHT THEME</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="mailto:talhaismail969@gmail.com"
              className="w-full py-3 rounded bg-accent text-accent-text text-center font-bold tracking-wider uppercase transition-transform active:scale-[0.98] shadow-md"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
