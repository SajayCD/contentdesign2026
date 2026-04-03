"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  number: string;
  title: string;
  impact: string;
  tags: string[];
  slug: string;
}

const CaseStudyCard = ({ number, title, impact, tags, slug }: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to={`/work/${slug}`}
        className="group block bg-white p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-l-4 hover:border-l-[var(--color-accent)] h-full flex flex-col"
      >
        <div className="text-sm font-medium text-[var(--color-text-muted)] mb-6">
          {number}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h3>
        
        <div className="text-[var(--color-accent)] font-medium mb-6">
          {impact}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">
          → Read case study
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;