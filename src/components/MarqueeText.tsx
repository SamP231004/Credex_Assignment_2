import React, { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

interface MarqueeTextProps {
  text: string;
  repeat?: number;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  repeat = 10,
  className,
  speed = 50,
  reverse = false,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;

    const marquee = marqueeRef.current;
    const content = contentRef.current;
    const contentWidth = content.offsetWidth;
    let startX = 0;
    let progress = 0;
    let animationId: number;

    const animate = () => {
      progress += speed * 0.01;
      
      if (progress >= contentWidth) {
        progress = 0;
      }
      
      marquee.style.transform = `translateX(${reverse ? progress : -progress}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Ensure content is wide enough
    const repeatElements = () => {
      const viewportWidth = window.innerWidth;
      while (content.offsetWidth < viewportWidth * 2) {
        const clone = document.createElement('span');
        clone.textContent = ` ${text} `;
        clone.classList.add('inline-block');
        content.appendChild(clone);
      }
    };

    repeatElements();
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [text, speed, reverse]);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div ref={marqueeRef} className="inline-block">
        <div ref={contentRef} className="inline-block">
          {Array(repeat).fill(text).map((t, i) => (
            <span key={i} className="inline-block">{t} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;