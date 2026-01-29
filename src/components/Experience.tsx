import { Briefcase, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    title: 'AI & ML Intern',
    company: 'InternPE',
    duration: 'Jun 2025 – Jul 2025',
    description:
      'Developed machine learning models for real-world prediction tasks including Car Price Prediction and IPL Winner Prediction. Built interactive applications using Streamlit for model deployment and user interaction.',
    highlights: [
      'Car Price Prediction using regression models',
      'IPL Winner Prediction with historical data analysis',
      'ML model development and optimization',
      'Interactive app development using Streamlit',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Machine Learning'],
  },
  {
    title: 'Data Science Intern',
    company: 'CodSoft',
    duration: 'Feb 2025',
    description:
      'Worked on predictive analytics projects involving movie ratings, sales forecasting, and credit card approval predictions. Gained hands-on experience in data preprocessing, visualization, and model building.',
    highlights: [
      'Movie Rating Prediction using ML algorithms',
      'Sales Prediction with Linear Regression',
      'Credit Card Approval Prediction classifier',
      'Data preprocessing and visualization',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Professional Journey</p>
          <h2 className="section-heading">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subheading mx-auto">
            Hands-on internship experience in Data Science and Machine Learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -translate-x-1/2 bg-primary rounded-full ring-4 ring-background" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
