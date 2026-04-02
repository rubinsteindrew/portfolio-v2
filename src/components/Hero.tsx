import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const TYPING_PHRASES = [
  'Prompt Engineering',
  'Data Analytics',
  'AI & Automation',
  'Software Development',
  'Business Intelligence',
];

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
const TARGET = 'Drew';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchName, setGlitchName] = useState(TARGET);

  // Typing animation
  useEffect(() => {
    const current = TYPING_PHRASES[phraseIndex];
    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect on mount — scrambles then resolves to "Drew"
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setGlitchName(
        TARGET.split('').map((_, i) => {
          if (i < iteration) return TARGET[i];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }).join('')
      );
      iteration += 0.15;
      if (iteration >= TARGET.length) {
        setGlitchName(TARGET);
        clearInterval(interval);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-animated-bg" />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { size: 6,  top: '20%', left: '8%',  delay: '0s',   duration: '7s'  },
          { size: 4,  top: '65%', left: '5%',  delay: '1.5s', duration: '9s'  },
          { size: 8,  top: '40%', left: '88%', delay: '0.8s', duration: '6s'  },
          { size: 5,  top: '75%', left: '82%', delay: '2.2s', duration: '8s'  },
          { size: 4,  top: '15%', left: '72%', delay: '0.3s', duration: '10s' },
          { size: 6,  top: '55%', left: '92%', delay: '1.8s', duration: '7s'  },
          { size: 3,  top: '85%', left: '45%', delay: '1s',   duration: '11s' },
          { size: 5,  top: '30%', left: '20%', delay: '2.5s', duration: '8s'  },
          { size: 4,  top: '10%', left: '50%', delay: '0.5s', duration: '9s'  },
          { size: 7,  top: '70%', left: '30%', delay: '3s',   duration: '6s'  },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary opacity-30"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              animation: `float ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="animate-fade-in">
            <p className="text-primary text-lg font-medium mb-4 animate-slide-up delay-100">
              Hello, I'm
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up delay-200">
            <span className="text-primary">{glitchName}</span>
            <br />
            <span className="text-text-primary">Rubinstein</span>
          </h1>

          <p className="text-xl md:text-2xl mb-3 animate-slide-up delay-300">
            <span className="text-primary font-semibold">AI Analyst</span>
            <span className="text-text-secondary"> & </span>
            <span className="text-primary font-semibold">UF Graduate</span>
          </p>

          <p className="text-lg md:text-xl text-text-secondary mb-10 h-8 animate-slide-up delay-300">
            Specializing in{' '}
            <span className="text-primary font-semibold">
              {displayText}
              <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-500">
            <Button
              variant="hero"
              size="hero"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-smooth" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary"
                onClick={() => window.open('https://github.com/rubinsteindrew', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary"
                onClick={() => window.open('https://linkedin.com/in/drew-rubinstein', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-primary hover:border-primary"
                onClick={() => window.open('mailto:drewbinstein1703@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
