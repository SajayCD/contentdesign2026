"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrackChangesTooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

const TrackChangesTooltip = ({ children, text, className = "" }: TrackChangesTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#34A853] text-white text-[12px] font-medium rounded-full whitespace-nowrap z-50 pointer-events-none hidden md:block shadow-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {text}
            {/* Small arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#34A853]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TrackChangesTooltip;