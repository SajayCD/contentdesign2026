"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyHeader = () => {
  return (
    <div className="mb-12">
      <Link 
        to="/" 
        className="group inline-flex items-center gap-[6px] text-[14px] font-medium text-[#6B6B6B] hover:text-[#4F46E5] transition-all duration-200 cursor-pointer"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
        <span>All Work</span>
      </Link>
    </div>
  );
};

export default CaseStudyHeader;