"use client";

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .hover-trigger');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed pointer-events-none z-[9999] transition-colors duration-200 select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-2px, -12px)',
        color: isHovering ? '#4F46E5' : '#1C1C1E',
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 500
      }}
    >
      |
    </div>
  );
};

export default CustomCursor;