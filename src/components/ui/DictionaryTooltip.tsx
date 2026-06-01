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
}

const DictionaryTooltip = ({ children }: DictionaryTooltipProps) => {
  return (
    <span style={{ display: 'inline' }}>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-help border-b border-dotted border-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent 
            side="top" 
            className="bg-white p-4 rounded-xl border border-[var(--color-border)] shadow-xl max-w-[280px] z-[100]"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Dictionary Entry</span>
                <span className="text-[10px] text-[var(--color-text-muted)] italic">noun</span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text)]">
                <span className="font-bold">Content Designer:</span> A professional who uses words as a design material to solve user problems and make complex systems feel human.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
};

export default DictionaryTooltip;