
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    // Check if system prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Use saved theme if available, otherwise use system preference
    if (savedTheme) {
      return savedTheme;
    } else {
      return prefersDark ? 'dark' : 'light';
    }
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme);
    
    // Update document class for theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Also set a data attribute for additional CSS targeting
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
