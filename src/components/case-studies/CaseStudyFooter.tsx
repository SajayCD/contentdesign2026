"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudyFooterProps {
  nextTitle: string;
  nextSlug: string;
}

const CaseStudyFooter = ({ nextTitle, nextSlug }: CaseStudyFooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="px-6 md:px-12 py-24 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Back to top */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border-[1.5px] border-[#E4E3DF] flex items-center justify-center text-[#6B6B6B] hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all duration-300"
          aria-label="Back to top"
        >
          <span className="text-lg">↑</span>
        </button>

        {/* Next Case Study */}
        <Link to={`/work/${nextSlug}`} className="group text-right">
          <div className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">Next Case Study</div>
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{nextTitle}</h2>
            <ArrowRight size={24} className="text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-2 transition-all" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyFooter;