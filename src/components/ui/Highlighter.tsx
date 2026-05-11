"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
}

const Highlighter = ({ children, className = "" }: HighlighterProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ originX: 0 }}
        className="absolute bottom-[10%] left-0 w-full h-[60%] bg-[#FFE566] opacity-55 z-0"
      />
    </span>
  );
};

export default Highlighter;