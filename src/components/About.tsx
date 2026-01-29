import { Brain, Target, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Specialist',
    description: 'Deep expertise in machine learning algorithms, neural networks, and intelligent system design.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex challenges and delivering data-driven solutions.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Strong collaboration skills with experience in cross-functional project teams.',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Rapidly adapts to new technologies and continuously expands skill set.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get to Know Me</p>
          <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
          <p className="section-subheading mx-auto">
            A dedicated AI & ML enthusiast with a passion for innovation and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a final-year B.Tech Computer Science student specializing in Artificial Intelligence 
              and Machine Learning at Malla Reddy Institute of Engineering and Technology, Hyderabad. 
              With a CGPA of 8.8, I have built a strong foundation in Python, Object-Oriented Programming, 
              Data Science, SQL, and core AI/ML concepts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My internship experiences at CodSoft and InternPE have given me practical exposure to 
              real-world data science and machine learning projects. I've worked on predictive modeling, 
              data preprocessing, and building interactive applications using modern frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in disciplined execution, continuous learning, and the power of teamwork. 
              I'm eager to contribute to impactful AI-driven projects and grow alongside industry 
              professionals while solving challenging real-world problems.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
