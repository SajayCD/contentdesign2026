"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DictionaryTooltipProps {
  children: React.ReactNode;
  className?: string;
}

const DictionaryTooltip = ({ children, className = "" }: DictionaryTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsHovered(false);
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
      setIsHovered(!isHovered);
    }
  };

  return (
    <span
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
          setIsHovered(false);
        }
      }}
      onClick={handleToggle}
      style={{
        display: 'inline',
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: 'rgba(79, 70, 229, 0.4)',
        textUnderlineOffset: '3px',
        cursor: 'default'
      }}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 left-0 md:bottom-[calc(100%+12px)] md:top-auto md:mt-0 md:left-0 z-[100] bg-white border-t-[3px] border-t-[#4F46E5] rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-[12px_16px] min-w-[240px] max-w-[calc(100vw-48px)] md:max-w-none pointer-events-none"
          >
            <div className="space-y-1">
              <div className="text-[13px] font-medium text-[#1C1C1E]" style={{ fontFamily: 'var(--font-body)' }}>
                con·tent de·sign·er
              </div>
              <div className="text-[12px] text-[#6B6B6B] italic" style={{ fontFamily: 'var(--font-body)' }}>
                Also called "UX Writer"
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4F46E5]" style={{ fontFamily: 'var(--font-body)' }}>
                NOUN
              </div>
              <p className="text-[13px] text-[#1C1C1E] leading-[1.6] mt-2" style={{ fontFamily: 'var(--font-body)' }}>
                a design professional who crafts the words that guide users through digital products.
              </p>
            </div>
            {/* Arrow adjusted for top/bottom positioning */}
            <div className="absolute bottom-full left-4 md:top-full md:bottom-auto md:left-4 border-[6px] border-transparent border-b-[#4F46E5] md:border-t-[#4F46E5] md:border-b-transparent" />
            <div className="absolute bottom-[calc(100%-1px)] left-[17px] md:top-[calc(100%-1px)] md:bottom-auto md:left-[17px] border-[5px] border-transparent border-b-white md:border-t-white md:border-b-transparent z-[1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default DictionaryTooltip;