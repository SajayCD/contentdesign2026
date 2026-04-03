"use client";

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      const hoveredElement = document.querySelectorAll('a, button, .hover-trigger');
      hoveredElement.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    updateHoverState();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed pointer-events-none z-[9999] transition-colors duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-2px, -12px)',
        color: isHovering ? 'var(--color-accent)' : 'var(--color-text)',
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