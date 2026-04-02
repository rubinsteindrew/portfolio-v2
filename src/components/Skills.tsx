import { BarChart3, Brain, Code2, LineChart, Users, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'AI tools, LLMs, agents, and intelligent automation',
      skills: ['AI Agent Development', 'LLM Integration', 'Prompt Engineering', 'RAG Systems', 'Generative AI Tools', 'Model Evaluation']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Programming Languages',
      description: 'Development and scripting languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Data analysis, visualization, and business intelligence',
      skills: ['Data Analysis', 'Data Visualization', 'Tableau', 'Google Looker Studio', 'Forecasting']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Development Tools',
      description: 'Frameworks and development workflow',
      skills: ['React', 'Git', 'Strapi CMS', 'Material UI', 'Agile / Scrum']
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Business Applications',
      description: 'Enterprise software and productivity tools',
      skills: ['Microsoft Office Suite', 'Microsoft Excel', 'Business Analysis', 'Process Improvement', 'Microsoft Azure']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership & Communication',
      description: 'Management, collaboration, and client-facing skills',
      skills: ['Client Communication', 'Executive Presentations', 'Cross-functional Collaboration', 'Project Management', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {category.title}
                </h3>

                <p className="text-text-secondary mb-4 text-sm">
                  {category.description}
                </p>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-text-muted text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
