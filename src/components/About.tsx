import { Button } from "@/components/ui/button";
import { MapPin, FileText, Briefcase } from 'lucide-react';

const About = () => {
  const viewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6 animate-slide-up delay-200">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a University of Florida graduate focused on the intersection of AI, software
                development, and data analytics. I combine a strong technical foundation with a
                business-oriented mindset — and a genuine enthusiasm for LLMs, AI agents, and
                automation that I bring to every project.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                I pick up new AI technologies and vendors quickly, and I'm always experimenting
                with what's emerging in the space. Whether it's building and deploying AI agents,
                developing web applications, or extracting insights from complex datasets, I
                thrive where technology and strategy intersect.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                Want to learn more? Click <span className="text-primary font-medium">View Resume</span> below for a full look at my background and experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="glass-card px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-text-secondary text-sm">North Potomac, MD</span>
                  </div>
                </div>
              </div>

              <Button variant="hero" onClick={viewResume} className="group">
                <FileText className="w-5 h-5" />
                View Resume
              </Button>
            </div>

            {/* Right column — two stacked boxes */}
            <div className="space-y-6 animate-slide-up delay-300">
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <Briefcase className="w-4 h-4 text-primary" />, text: 'AI Analyst @ SoftSnow — Current' },
                    { icon: <Briefcase className="w-4 h-4 text-primary" />, text: 'Frontend Dev Intern — Digital Infuzion' },
                    { icon: <MapPin className="w-4 h-4 text-primary" />, text: 'UF Class of 2025 — GPA 3.6' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      {item.icon}
                      <span className="text-text-secondary">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Hobbies & Interests</h3>
                <ul className="space-y-3">
                  {[
                    'Building Computers',
                    'New Technology',
                    'Fitness',
                    'Golf',
                    'Pickleball',
                    'Stocks & Investing',
                    'Traveling',
                    'TV Shows',
                    'Video Games',
                  ].map((hobby, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{hobby}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
