"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyHeader = () => {
  return (
    <div className="mb-12">
      <Link 
        to="/" 
        className="text-[14px] font-medium text-[#6B6B6B] hover:text-[#4F46E5] hover:underline decoration-[#4F46E5] transition-colors"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        All Work
      </Link>
    </div>
  );
};

export default CaseStudyHeader;