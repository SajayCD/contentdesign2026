"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface TrackChangesTooltipProps {
  children: React.ReactNode;
  text: string;
}

const TrackChangesTooltip = ({ children, text }: TrackChangesTooltipProps) => {
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
      <span className="border-b-2 border-green-500/30 hover:border-green-500 transition-colors">
        {children}
      </span>
      
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64 pointer-events-none"
          >
            <span className="block bg-[#E7F3EF] border border-[#B2D4C9] rounded-sm p-3 shadow-lg relative">
              {/* Track Changes Header */}
              <span className="flex items-center gap-2 mb-2 pb-2 border-b border-[#B2D4C9]/50">
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-[10px] text-white font-bold">
                  S
                </span>
                <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider">
                  Suggested Change
                </span>
              </span>
              
              <span className="text-sm text-green-900 leading-relaxed block">
                {text}
              </span>

              {/* Tooltip Arrow */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#E7F3EF] border-r border-b border-[#B2D4C9] rotate-45 -mt-[6px]"></span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TrackChangesTooltip;