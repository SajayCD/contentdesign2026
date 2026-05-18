"use client";

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import DictionaryTooltip from '@/components/ui/DictionaryTooltip';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--color-border)] py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-[var(--color-text-muted)]">
            Sajay Jai Singh — <DictionaryTooltip>Content Designer</DictionaryTooltip>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="mailto:sajay.contentjedi@gmail.com" 
              className="hover:text-[var(--color-accent)] transition-colors"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sajaysingh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--color-accent)] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-50">
          All words, diagrams, and designs on this site are original work — no AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;