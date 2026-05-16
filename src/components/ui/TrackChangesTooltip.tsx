"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrackChangesTooltipProps {
  children: React.ReactNode;
  text: string;
  avatarInitials?: string;
  label?: string;
  className?: string;
}

const TrackChangesTooltip = ({ 
  children, 
  text, 
  avatarInitials = "CD", 
  label = "Suggested edit",
  className = "" 
}: TrackChangesTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`relative inline-block has-tooltip ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: 'underline',
        textDecorationStyle: 'dashed',
        textDecorationColor: 'rgba(52, 168, 83, 0.45)',
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
            className="absolute bottom-[calc(100%+12px)] left-0 z-[100] bg-white border-t-[3px] border-t-[#34A853] rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-[12px_16px] min-w-[200px] max-w-[280px] pointer-events-none hidden md:block"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-[18px] h-[18px] rounded-full bg-[#34A853] flex items-center justify-center text-[9px] text-white font-bold shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
                {avatarInitials}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#34A853]" style={{ fontFamily: 'var(--font-body)' }}>
                {label}
              </span>
            </div>
            <p className="text-[13px] text-[#1C1C1E] leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
              {text}
            </p>
            
            {/* Triangle pointer */}
            <div className="absolute top-full left-4 border-[6px] border-transparent border-t-[#34A853]" />
            <div className="absolute top-[calc(100%-1px)] left-[17px] border-[5px] border-transparent border-t-white z-[1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default TrackChangesTooltip;