import { Award, BookOpen, Cpu, Globe, Shield, Users, Bot } from 'lucide-react';

const certifications = [
  {
    icon: BookOpen,
    title: 'Data Science Training',
    issuer: 'SETWIN',
    type: 'Training',
  },
  {
    icon: Shield,
    title: 'Introduction to Cybersecurity',
    issuer: 'Simplilearn',
    type: 'Course',
  },
  {
    icon: Cpu,
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    type: 'Course',
  },
  {
    icon: Globe,
    title: 'Cambridge English Empower B2 Level',
    issuer: 'Cambridge',
    type: 'Certification',
  },
  {
    icon: Users,
    title: 'AWS Hackathon Participant',
    issuer: 'AWS',
    type: 'Event',
  },
  {
    icon: Bot,
    title: 'Generative AI & AI Agents Workshop',
    issuer: 'Various',
    type: 'Workshop',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Continuous Learning</p>
          <h2 className="section-heading">Certifications & <span className="gradient-text">Workshops</span></h2>
          <p className="section-subheading mx-auto">
            Credentials and learning experiences that demonstrate commitment to growth.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {cert.type}
                </span>
                <h3 className="font-semibold mt-2 mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
