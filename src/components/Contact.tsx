import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'drewbinstein1703@gmail.com',
      href: 'mailto:drewbinstein1703@gmail.com'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/drew-rubinstein',
      href: 'https://linkedin.com/in/drew-rubinstein'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/rubinsteindrew',
      href: 'https://github.com/rubinsteindrew'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'North Potomac, MD',
      href: null
    }
  ];

  const lookingFor = [
    'Freelance Website & Web App Development',
    'AI Agent Development & Consulting',
    'Mid-Level / Manager Positions in AI',
    'AI Product & Strategy Roles',
    'Data Analytics & Business Intelligence',
    'Open to Remote or Ft. Lauderdale, Tampa, Austin TX',
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            <span className="text-gradient">Let's Connect</span>
          </h2>

          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            Open to freelance projects, AI consulting, and mid-level or management roles.
            Let's talk about what we can build together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 text-left animate-slide-up delay-300">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">{method.icon}</div>
                    <div className="flex-grow">
                      <p className="text-text-muted text-sm">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-text-secondary hover:text-primary transition-smooth"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-text-secondary">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 text-left animate-slide-up delay-500">
              <h3 className="text-xl font-semibold text-text-primary mb-6">What I'm Looking For</h3>
              <ul className="space-y-3">
                {lookingFor.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-slide-up delay-700">
            <Button
              variant="hero"
              size="hero"
              onClick={() => window.open('mailto:drewbinstein1703@gmail.com', '_blank')}
              className="group"
            >
              Send Me an Email
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
