import { ArrowDown, FileText, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Vishnuvardhan Komakula"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Ring */}
            <div className="absolute -inset-4 border border-primary/20 rounded-full animate-float" />
            <div className="absolute -inset-8 border border-primary/10 rounded-full animate-float-delayed" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Vishnuvardhan{' '}
              <span className="gradient-text">Komakula</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              B.Tech CSE (AI & ML) | Aspiring AI & Machine Learning Engineer
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Final-year student with a CGPA of 8.8, passionate about solving real-world 
              problems using intelligent systems. Strong foundation in Python, Data Science, 
              SQL, and Machine Learning with hands-on project experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Button asChild size="lg" className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:bg-muted">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
