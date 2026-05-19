"use client";

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DictionaryTooltipProps {
  children: React.ReactNode;
  className?: string;
}

const DictionaryTooltip = ({ children, className }: DictionaryTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          className={`bg-white p-4 rounded-xl border border-[var(--color-border)] shadow-lg text-sm text-[var(--color-text)] z-[100] ${className}`}
          style={{ maxWidth: '420px', width: 'max-content' }}
        >
          <div className="space-y-2">
            <div className="font-bold text-[var(--color-accent)] uppercase tracking-widest text-[10px]">Definition</div>
            <p className="leading-relaxed">
              {children === "Content Designer" ? (
                "A design professional who uses words as a primary tool to solve user problems, structure information, and create intuitive product experiences."
              ) : (
                "A specialist focused on the planning, creation, and governance of content within digital products."
              )}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DictionaryTooltip;