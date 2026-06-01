"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DictionaryTooltipProps {
  children: React.ReactNode;
}

const DictionaryTooltip = ({ children }: DictionaryTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleTooltip = (e: React.MouseEvent) => {
    // Only toggle on mobile/touch devices or if explicitly clicked
    if (window.matchMedia('(max-width: 768px)').matches) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => !window.matchMedia('(max-width: 768px)').matches && setIsOpen(true)}
      onMouseLeave={() => !window.matchMedia('(max-width: 768px)').matches && setIsOpen(false)}
      onClick={toggleTooltip}
    >
      <span className="cursor-help border-b border-dotted border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-5 bg-[#1C1C1E] text-[#F9F8F5] rounded-xl shadow-xl md:max-w-none max-md:max-w-[calc(100vw-48px)] max-md:left-auto max-md:right-0 max-md:translate-x-0"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-bold mb-2">Definition</div>
            <div className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Content Designer</div>
            <p className="text-sm leading-relaxed opacity-80">
              A design professional who uses words as a primary tool to build intuitive, human-centered product experiences.
            </p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1C1C1E] max-md:left-auto max-md:right-4 max-md:translate-x-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DictionaryTooltip;