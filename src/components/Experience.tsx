import { Calendar } from 'lucide-react';

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

const Experience = () => {
  const experiences = [
    {
      logo: <Logo src="/logos/Soft Snow Primary Logo.svg" alt="SoftSnow" />,
      type: 'Current Role',
      title: 'AI Analyst',
      company: 'SoftSnow · Full-Time · Remote',
      period: 'October 2025 - Present',
      description: 'Building and deploying AI agents for clients and internal stakeholders, leveraging LLMs, generative AI tools, and prompt engineering to automate workflows and deliver measurable business value.',
      achievements: [
        'Design, build, and deploy AI agents for clients and internal stakeholders',
        'Lead client demos and walkthroughs of custom AI agent solutions',
        'Communicate daily with leadership and C-suite on project status and AI strategy',
        'Translate complex AI capabilities into clear business-facing language for clients',
        'Apply prompt engineering and model evaluation to optimize agent performance',
        'Stay current with rapidly evolving AI vendors, tools, and frameworks',
        'Collaborate cross-functionally to identify automation opportunities',
        'Support onboarding of new AI workflows and tooling across the organization'
      ]
    },
    {
      logo: <Logo src="/logos/digital Infuzion.png" alt="Digital Infuzion" />,
      type: 'Internship',
      title: 'Frontend Software Developer',
      company: 'Digital Infuzion · Hybrid · Germantown, MD',
      period: 'June 2024 - August 2024',
      description: 'Designed and implemented the search page and core functionality for FluHub, a live public health platform enabling scientists to search research articles and datasets.',
      achievements: [
        'Reduced average search time by 80% through optimized search implementation',
        'Built scalable search UI using TypeScript, React, and Material-UI (MUI)',
        'Integrated frontend with Strapi headless CMS for dynamic content delivery',
        'Participated in Agile sprints, daily standups, and sprint planning sessions',
        'Utilized Git for version control and contributed to DevOps deployment pipelines',
        'Developed in Ubuntu / WSL for a consistent cross-platform environment'
      ]
    },
    {
      logo: <Logo src="/logos/Onward.svg" alt="Birthright Israel Onward" />,
      type: 'Fellowship',
      title: 'Onward Fellowship',
      company: 'Birthright Israel Onward · Tel Aviv, Israel',
      period: 'May 2023 - June 2023',
      description: "Immersed in Israel's startup ecosystem through an intensive entrepreneurship fellowship focused on innovation, business strategy, and cross-cultural collaboration.",
      achievements: [
        'Attended courses on startup fundamentals, growth strategy, and innovation',
        "Gained firsthand exposure to Israel's \"Startup Nation\" tech ecosystem",
        'Strengthened cross-cultural communication and teamwork skills',
        'Developed a foundation in entrepreneurial thinking and business development'
      ]
    },
    {
      logo: <Logo src="/logos/UF-logo.png" alt="University of Florida" />,
      type: 'Education',
      title: 'Bachelor of Science — Management Information Systems',
      company: 'University of Florida, Warrington College of Business',
      period: '2021 - 2025',
      description: 'B.S. in Management Information Systems, GPA 3.6. Minor in Computer & Information Science. A.I. Fundamentals and Applications Certificate. Active in Alpha Epsilon Pi, TAMID, and Jewish Student Union.',
      achievements: [
        'A.I. Fundamentals and Applications Certificate — Dec 2024',
        'Minor in Computer and Information Science and Engineering',
        'Microsoft Office Specialist: Excel Associate',
        'Relevant coursework: Business Analytics & AI, Discrete Structures, Data Management'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {exp.logo}

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <span className="text-primary text-sm font-medium">{exp.type}</span>
                        <h3 className="text-xl font-semibold text-text-primary">{exp.title}</h3>
                        <p className="text-lg text-text-secondary">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-text-muted text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-text-muted text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
