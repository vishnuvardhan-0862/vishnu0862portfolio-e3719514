import { Code, Database, Wrench, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'C (Basics)', 'Java (Basics)'],
  },
  {
    icon: Database,
    title: 'Core Concepts',
    skills: ['Object-Oriented Programming', 'Data Science', 'Artificial Intelligence', 'Machine Learning', 'Basic DSA'],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['Jupyter Notebook', 'Anaconda', 'VS Code', 'Python IDLE', 'SQLite', 'Streamlit', 'Git'],
  },
  {
    icon: MessageSquare,
    title: 'Soft Skills',
    skills: ['Quick Learner', 'Team Player', 'Problem Solving', 'Critical Thinking', 'Communication'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Technical Expertise</p>
          <h2 className="section-heading">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit for building intelligent systems and data-driven solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Visual - Skill Progress */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">Proficiency Overview</h3>
          <div className="grid gap-6">
            {[
              { name: 'Python', level: 90 },
              { name: 'Machine Learning', level: 85 },
              { name: 'Data Science', level: 85 },
              { name: 'SQL', level: 80 },
              { name: 'Deep Learning', level: 75 },
            ].map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
