import { ArrowDown, FileText, Mail, Briefcase, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.png';
const FloatingShape = ({
  className,
  delay = 0
}: {
  className?: string;
  delay?: number;
}) => <motion.div className={className} initial={{
  opacity: 0,
  scale: 0
}} animate={{
  opacity: [0.3, 0.6, 0.3],
  scale: [1, 1.1, 1],
  rotate: [0, 180, 360]
}} transition={{
  duration: 8,
  delay,
  repeat: Infinity,
  ease: "easeInOut"
}} />;
const TypeWriter = ({
  texts,
  className
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);
  return <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>;
};
const Hero = () => {
  const roles = ["AI & Machine Learning Engineer", "Data Science Enthusiast", "Python Developer", "Problem Solver"];
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated gradient orbs */}
      <motion.div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.15, 0.25, 0.15]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      {/* Floating geometric shapes */}
      <FloatingShape className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rounded-lg" delay={0} />
      <FloatingShape className="absolute bottom-32 left-16 w-16 h-16 border border-primary/20 rounded-full" delay={2} />
      <FloatingShape className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/10 rounded-lg" delay={4} />
      <FloatingShape className="absolute bottom-1/4 right-16 w-8 h-8 bg-accent/20 rounded-full" delay={1} />
      <FloatingShape className="absolute top-1/2 left-10 w-6 h-6 border border-primary/40 rotate-45" delay={3} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Profile Image */}
          <motion.div className="relative" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            {/* Outer glow ring */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 rounded-full blur-xl opacity-60 animate-pulse-slow" />
            
            {/* Main image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl">
              <img src={profilePhoto} alt="Vishnuvardhan Komakula" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Animated decorative rings */}
            <motion.div className="absolute -inset-4 border border-primary/30 rounded-full" animate={{
            rotate: 360
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} />
            <motion.div className="absolute -inset-8 border border-primary/20 rounded-full" animate={{
            rotate: -360
          }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }} />
            <motion.div className="absolute -inset-12 border border-primary/10 rounded-full border-dashed" animate={{
            rotate: 360
          }} transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }} />

            {/* Status badge */}
            <motion.div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <span className="text-xs font-medium text-foreground/90">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }}>
              VISHNUVARDHAN{' '}
              <span className="gradient-text">KOMAKULA</span>
            </motion.h1>

            <motion.div className="text-xl md:text-2xl text-muted-foreground mb-2 h-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }}>
              <TypeWriter texts={roles} />
            </motion.div>

            <motion.p className="text-sm text-primary/80 font-medium mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.45,
            duration: 0.6
          }}>B.Tech CSE (AI & ML) • CGPA: 8.83 • Final Year</motion.p>

            <motion.p className="text-muted-foreground mb-8 leading-relaxed" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>Passionate about solving real-world problems using intelligent systems. Strong foundation in Python, Data Science, AI, SQL, Basic DSA with python and Machine Learning with hands-on project experience in building predictive models and AI applications.</motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }}>
              <Button asChild size="lg" className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-medium group">
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 hover:border-primary group">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:bg-muted group">
                <a href="/VISHNU_Resume.pdf" download="Vishnuvardhan_Komakula_Resume.pdf">
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex items-center gap-4 justify-center lg:justify-start" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/vishnuvardhan-komakula" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/vishnuvardhan-0862" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.6
      }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium">Scroll to explore my profile</span>
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <ArrowDown size={20} className="group-hover:scale-110 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Hero;