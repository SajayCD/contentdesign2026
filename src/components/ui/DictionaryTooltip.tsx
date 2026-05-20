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
  term?: string;
  definition?: string;
}

const DictionaryTooltip = ({ children, term, definition }: DictionaryTooltipProps) => {
  // Default definition for "Content Designer" as it's the primary use case
  const defaultDefinition = "A design discipline focused on using language to help people get things done. It's about structure, hierarchy, and clarity, not just 'writing'.";
  
  const displayTerm = term || (typeof children === 'string' ? children : "Content Design");
  const displayDefinition = definition || defaultDefinition;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors inline-block">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-white p-4 rounded-xl border border-[var(--color-border)] shadow-xl max-w-[280px] z-[100]"
        >
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              {displayTerm}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text)]">
              {displayDefinition}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DictionaryTooltip;