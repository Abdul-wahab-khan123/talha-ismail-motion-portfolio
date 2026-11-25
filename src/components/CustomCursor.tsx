import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorState('project');
          setCursorText(cursorTarget.getAttribute('data-cursor-text') || 'VIEW');
        } else if (type === 'play') {
          setCursorState('project');
          setCursorText('PLAY');
        } else if (type === 'link') {
          setCursorState('hover');
          setCursorText('');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, textarea, select')) {
        setCursorState('hover');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorState === 'project' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing follower ring / badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] tracking-wider uppercase"
        animate={{
          x: mousePosition.x - (cursorState === 'project' ? 40 : cursorState === 'hover' ? 22 : 16),
          y: mousePosition.y - (cursorState === 'project' ? 40 : cursorState === 'hover' ? 22 : 16),
          width: cursorState === 'project' ? 80 : cursorState === 'hover' ? 44 : 32,
          height: cursorState === 'project' ? 80 : cursorState === 'hover' ? 44 : 32,
          backgroundColor: cursorState === 'project' ? 'var(--accent)' : 'transparent',
          borderColor: cursorState === 'hover' ? 'var(--accent)' : 'var(--border-hover)',
          borderWidth: cursorState === 'project' ? 0 : 1,
          color: cursorState === 'project' ? 'var(--accent-text)' : 'var(--accent)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorState === 'project' && (
          <span className="font-semibold font-mono tracking-widest">{cursorText}</span>
        )}
      </motion.div>
    </>
  );
}
