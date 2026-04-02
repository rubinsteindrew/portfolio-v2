import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'glass-card border-b border-border-subtle' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo — left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-smooth"
          >
            Drew Rubinstein
          </button>

          {/* Nav links + theme toggle — right */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-text-secondary hover:text-primary transition-smooth hover:scale-105"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-secondary hover:text-primary transition-smooth"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
