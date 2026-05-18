"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HobbyCardProps {
  icon: React.ReactNode;
  label: string;
  backText: string;
  backSymbol: string;
}

const HobbyCard = ({ icon, label, backText, backSymbol }: HobbyCardProps) => {
  return (
    <div className="group w-[140px] h-[160px] [perspective:1000px]">
      <motion.div 
        className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-[#F9F8F5] rounded-xl p-4 flex flex-col items-center justify-center text-center [backface-visibility:hidden] border-2 border-transparent animate-border-pulse">
          <div className="mb-3">
            {icon}
          </div>
          <span className="text-[13px] font-medium text-[var(--color-text)] leading-tight" style={{ fontFamily: 'var(--font-body)' }}>
            {label}
          </span>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-[#F9F8F5] rounded-xl p-4 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-xl text-[var(--color-accent)] mb-2 font-bold">
            {backSymbol}
          </span>
          <p className="text-[12px] font-medium text-[var(--color-text)] leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
            {backText}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HobbyCard;