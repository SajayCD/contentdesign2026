"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrackChangesTooltipProps {
  children: React.ReactNode;
  text: string;
}

const TrackChangesTooltip = ({ children, text }: TrackChangesTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <span
      ref={containerRef}
      className="relative inline cursor-default"
      onMouseEnter={() => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
          setIsOpen(false);
        }
      }}
      onClick={handleToggle}
      style={{
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: 'rgba(34, 197, 94, 0.5)',
        textUnderlineOffset: '4px',
      }}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-[calc(100%+16px)] left-0 z-[50] w-[280px] max-w-[calc(100vw-48px)] pointer-events-none"
          >
            <div className="bg-[#F2FBF6] border border-[#C6E9D5] rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#E6F4EA] px-3 py-1.5 border-b border-[#C6E9D5]">
                <span className="text-[10px] font-bold text-[#137333] uppercase tracking-wider">
                  Suggested Change
                </span>
              </div>
              
              {/* Content */}
              <div className="p-3 flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-[#137333] flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
                  S
                </div>
                <p className="text-[13px] text-[#137333] leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#C6E9D5]" />
            <div className="absolute top-[calc(100%-1px)] left-[4px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#F2FBF6]" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TrackChangesTooltip;