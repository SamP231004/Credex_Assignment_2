import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const mobileCheck = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    if (mobileCheck()) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnterLink = () => setIsHoveringLink(true);
    const handleMouseLeaveLink = () => setIsHoveringLink(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mouseenter', () => setHidden(false));

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mouseenter', () => setHidden(false));
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    width: isHoveringLink ? '48px' : isClicked ? '18px' : '24px',
    height: isHoveringLink ? '48px' : isClicked ? '18px' : '24px',
    transform: `translate(-50%, -50%) scale(${isHoveringLink ? 1.5 : isClicked ? 0.8 : 1})`,
    transition: 'width 0.3s, height 0.3s, opacity 0.3s, transform 0.3s',
  };

  return <div className="cursor-custom" style={cursorStyle}></div>;
};

export default CustomCursor;