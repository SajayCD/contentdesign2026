"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from './Highlighter';

interface CaseStudyCardProps {
  number: string;
  title: string;
  impact: string;
  tags: string[];
  slug: string;
}

const CaseStudyCard = ({ number, title, impact, tags, slug }: CaseStudyCardProps) => {
  return (
    <Link 
      to={`/work/${slug}`}
      className="group flex flex-col p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] hover:border-[var(--color-accent)] transition-all duration-300 h-full"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="text-sm font-bold text-[var(--color-accent)] opacity-40">{number}</span>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
        {title}
      </h3>
      
      <div className="text-sm font-medium text-[var(--color-text-muted)] mb-8">
        Impact: <Highlighter>{impact}</Highlighter>
      </div>

      <div className="mt-auto text-[var(--color-accent)] font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
        Read case study →
      </div>
    </Link>
  );
};

export default CaseStudyCard;