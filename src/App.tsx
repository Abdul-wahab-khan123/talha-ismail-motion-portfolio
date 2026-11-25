import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { CreativeProcess } from './components/CreativeProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MotionShowreelModal } from './components/MotionShowreelModal';

import { PROJECTS } from './data/projects';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useReducedMotion } from './hooks/useReducedMotion';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();

  // Initialize Lenis smooth scrolling (disabled if user prefers reduced motion)
  useSmoothScroll(prefersReducedMotion);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-primary text-paper relative selection:bg-accent selection:text-accent-text">
        {/* Studio Preloader on initial load */}
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}

        {/* Custom Motion Cursor on Desktop */}
        <CustomCursor />

        {/* Studio Navigation Bar */}
        <Navbar onOpenShowreel={() => setIsShowreelOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenShowreel={() => setIsShowreelOpen(true)} />
          <SelectedWork projects={PROJECTS} />
          <About />
          <Experience />
          <Services />
          <Skills />
          <CreativeProcess />
          <Contact />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Interactive Motion Showreel Theater Modal */}
        <MotionShowreelModal
          isOpen={isShowreelOpen}
          onClose={() => setIsShowreelOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
