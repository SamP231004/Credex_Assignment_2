import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../utils/cn';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
  direction = 'up',
  distance = 20,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'none';
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    
    if (inView) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'none';
    } else {
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = getTransform();
    }
  }, [inView, direction, distance]);

  return (
    <div
      ref={ref}
      className={cn(className)}
    >
      <div
        ref={sectionRef}
        style={{
          opacity: 0,
          transform: getTransform(),
          transition: `opacity 0.8s ease, transform 0.8s ease`,
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeInSection;