import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {type ReactNode, useRef} from 'react';

const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  scaleFrom?: number;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  scaleFrom = 0.985,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: yOffset, scale: scaleFrom}}
      whileInView={{opacity: 1, y: 0, scale: 1}}
      viewport={{once: false, amount: 0.14}}
      transition={{
        duration: 0.6,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface EditorialHairlineProps {
  className?: string;
  delay?: number;
}

export function EditorialHairline({
  className = 'bg-[#B77A7D]/60',
  delay = 0.08,
}: EditorialHairlineProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{scaleX: 0, opacity: 0}}
      whileInView={{scaleX: 1, opacity: 1}}
      viewport={{once: false, amount: 0.3}}
      transition={{duration: 0.65, delay, ease: LUXURY_EASE}}
      style={{transformOrigin: '0% 50%'}}
      className={`h-[1px] w-14 ${className}`}
    />
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
  range = 16,
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{opacity: 0.65, scale: 1.12}}
        whileInView={{opacity: 1, scale: 1.06}}
        viewport={{once: false, amount: 0.12}}
        transition={{duration: 0.8, ease: LUXURY_EASE}}
        style={{y}}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollProgressBar() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
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
