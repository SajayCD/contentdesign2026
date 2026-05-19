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
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <span className="inline cursor-help border-b border-dotted border-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-white p-4 rounded-xl border border-[var(--color-border)] shadow-xl max-w-[280px] z-[100]">
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Definition</div>
            <p className="text-sm leading-relaxed text-[var(--color-text)]">
              A designer who uses language to help people use and understand products. They focus on clarity, hierarchy, and the human side of the machine.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DictionaryTooltip;