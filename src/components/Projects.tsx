import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'FluHub Search Implementation',
      description: 'Designed and implemented search functionality for FluHub, a live public health platform, enabling scientists to efficiently search research articles and datasets. Reduced average search time by 80%.',
      technologies: ['TypeScript', 'React', 'MUI', 'Strapi CMS', 'Git'],
      category: 'Web Development',
      status: 'Completed at Digital Infuzion',
      link: 'https://www.fluhub.org/search?keyword='
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Dental Practice Website',
      description: 'Developed a responsive website for a dental practice with modern design, user-friendly navigation, and brand-aligned aesthetics. Includes appointment booking and service information.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Freelance Web Development',
      status: 'Live Project',
      link: null
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'MR.SPRTS — March Madness Survivor Pool',
      description: 'Built a full-featured sports prediction web app for March Madness. Users join pools via access codes, submit bracket picks, track standings on a live leaderboard, and compete in an elimination-style format. Includes user authentication and responsive mobile navigation.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'User Auth'],
      category: 'Full-Stack Web App',
      status: 'Live Project',
      link: 'https://mrsprts.com'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto animate-slide-up delay-200">
            A selection of projects spanning web development, data analytics, and software engineering.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                  <span className="text-xs text-text-muted bg-surface-elevated px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-auto">
                  <span className="text-xs text-text-muted">
                    {project.status}
                  </span>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.link!, '_blank')}
                      className="hover:text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up delay-500">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/rubinsteindrew', '_blank')}
            >
              View GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
