"use client";

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DictionaryTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-xl z-[100]"
          sideOffset={10}
          style={{ maxWidth: '380px', width: 'max-content' }}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Definition</span>
              <span className="text-[10px] text-[var(--color-text-muted)]">/ˈkɒntɛnt dɪˈzaɪnə/</span>
            </div>
            <h4 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Content Designer</h4>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              A design professional who uses words as a primary tool to solve user problems, structure information, and create intuitive digital experiences.
            </p>
            <div className="pt-2 border-t border-[var(--color-border)]">
              <p className="text-[10px] italic text-[var(--color-text-muted)]">"Pixels show you where to go; words tell you why you're there."</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DictionaryTooltip;