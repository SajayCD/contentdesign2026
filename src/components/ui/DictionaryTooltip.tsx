"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface DictionaryTooltipProps {
  children: React.ReactNode;
}

const DictionaryTooltip = ({ children }: DictionaryTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const showTooltip = isMobile ? isOpen : isHovered;

  return (
    <span 
      ref={containerRef}
      className="relative inline-block cursor-help group"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggle}
    >
      <span className="border-b border-dotted border-[var(--color-text-muted)] hover:border-[var(--color-accent)] transition-colors">
        {children}
      </span>
      
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className={`absolute bottom-full mb-3 z-50 w-72 pointer-events-none ${
              isMobile ? 'left-auto right-0 translate-x-0' : 'left-1/2 -translate-x-1/2'
            }`}
            style={isMobile ? { maxWidth: 'calc(100vw - 48px)' } : {}}
          >
            <span className="block bg-white border border-[var(--color-border)] rounded-xl p-5 shadow-xl relative">
              <span className="block text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-2">
                Noun / Definition
              </span>
              <span className="block text-sm text-[var(--color-text)] leading-relaxed italic mb-2">
                "A designer who uses words as a design material to build intuitive, human-centered product experiences."
              </span>
              <span className="block text-[11px] text-[var(--color-text-muted)]">
                Synonyms: UX Writer, Content Strategist, Product Writer.
              </span>

              {/* Tooltip Arrow */}
              <span className={`absolute top-full w-3 h-3 bg-white border-r border-b border-[var(--color-border)] rotate-45 -mt-[6px] ${
                isMobile ? 'right-4' : 'left-1/2 -translate-x-1/2'
              }`}></span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default DictionaryTooltip;