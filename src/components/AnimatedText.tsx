import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
  splitBy?: 'letter' | 'word';
  delay?: number;
  staggerChildren?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  threshold = 0.2,
  splitBy = 'word',
  delay = 0,
  staggerChildren = 0.05,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const splitText = () => {
    if (splitBy === 'letter') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          <span
            className="inline-block reveal-text"
            style={{
              transitionDelay: `${delay + index * staggerChildren}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ));
    } else {
      return text.split(' ').map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-1">
          <span
            className="inline-block reveal-text"
            style={{
              transitionDelay: `${delay + index * staggerChildren}s`,
            }}
          >
            {word}
          </span>
        </span>
      ));
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.reveal-text');
    
    if (inView) {
      elements.forEach((el) => {
        el.classList.add('visible');
      });
    } else {
      elements.forEach((el) => {
        el.classList.remove('visible');
      });
    }
  }, [inView]);

  return (
    <div ref={containerRef} className={cn(className)} style={{ overflow: 'hidden' }}>
      <div ref={ref}>{splitText()}</div>
    </div>
  );
};

export default AnimatedText;