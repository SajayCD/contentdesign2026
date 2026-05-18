"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLinkCardProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isExternal?: boolean;
}

const SocialLinkCard = ({ icon: Icon, label, href, isExternal = false }: SocialLinkCardProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent)] hover:shadow-sm transition-all duration-300 group">
      <div className="w-10 h-10 rounded-full bg-[var(--color-tag-bg)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:bg-indigo-50 transition-colors">
        <Icon size={20} />
      </div>
      <span className="font-bold text-sm uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
        {label}
      </span>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className="block">
      {content}
    </Link>
  );
};

export default SocialLinkCard;