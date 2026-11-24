import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {type ReactNode, useRef} from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  yOffset = 22,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: yOffset}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false, amount: 0.14}}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxMediaProps {
  children: ReactNode;
  className?: string;
  range?: number;
}

export function ParallaxMedia({
  children,
  className = '',
  range = 18,
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{y, scale: 1.07}} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollProgressBar() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{scaleX, transformOrigin: '0% 50%'}}
      className="h-[2px] w-full bg-gradient-to-r from-[#E8C5C0] via-[#B77A7D] to-[#2B1F1E]"
    />
  );
}
