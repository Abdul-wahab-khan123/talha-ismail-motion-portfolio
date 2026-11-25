import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-8 h-8 rounded bg-bg-card hairline-border flex items-center justify-center text-subtext hover:text-accent hover:border-accent transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      data-cursor="link"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 absolute transition-all duration-300 ${
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
        <Moon
          className={`w-4 h-4 absolute transition-all duration-300 ${
            isDark
              ? 'opacity-0 rotate-90 scale-50'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
      </div>
    </button>
  );
}
