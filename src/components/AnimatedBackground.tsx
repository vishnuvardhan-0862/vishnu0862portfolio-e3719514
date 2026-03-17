import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particle = ({ index }: { index: number }) => {
  const size = Math.random() * 4 + 2;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const duration = Math.random() * 20 + 15;
  const delay = Math.random() * 10;

  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
      }}
      animate={{
        y: [0, -80, 0],
        x: [0, Math.random() * 60 - 30, 0],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

const GradientOrb = ({
  className,
  animateProps,
  transition,
}: {
  className: string;
  animateProps: any;
  transition: any;
}) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    animate={animateProps}
    transition={transition}
  />
);

const AnimatedBackground = () => {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => i)
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <GradientOrb
        className="w-[500px] h-[500px] bg-primary/8 top-[10%] left-[5%]"
        animateProps={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <GradientOrb
        className="w-[400px] h-[400px] bg-accent/6 bottom-[20%] right-[10%]"
        animateProps={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <GradientOrb
        className="w-[300px] h-[300px] bg-primary/5 top-[50%] left-[50%]"
        animateProps={{
          x: [0, 60, -40, 0],
          y: [0, -40, 60, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
      />

      {/* Floating particles */}
      {particles.map((i) => (
        <Particle key={i} index={i} />
      ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
    </div>
  );
};

export default AnimatedBackground;
