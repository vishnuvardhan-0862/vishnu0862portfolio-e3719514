import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Academic Background</p>
          <h2 className="section-heading">My <span className="gradient-text">Education</span></h2>
          <p className="section-subheading mx-auto">
            Building a strong foundation in computer science with specialization in AI & ML.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    B.Tech – Computer Science Engineering
                  </h3>
                  <p className="text-xl gradient-text font-semibold">
                    Specialization: Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <p className="text-lg text-muted-foreground">
                  Malla Reddy Institute of Engineering and Technology, Hyderabad
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">CGPA: 8.8</span>
                  </div>
                </div>

                {/* Coursework */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-medium mb-3">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Machine Learning',
                      'Deep Learning',
                      'Data Structures & Algorithms',
                      'AI',
                      'Database Systems',
                      'Computer Networks',
                      'Python Programming',
                      'Statistics',
                    ].map((course) => (
                      <span key={course} className="skill-tag text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
