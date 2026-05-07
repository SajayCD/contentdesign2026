"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import MutualFunds from '@/components/case-studies/MutualFunds';
import ScalingOrg from '@/components/case-studies/ScalingOrg';
import CDAT from '@/components/case-studies/CDAT';
import Workshops from '@/components/case-studies/Workshops';
import DesignAudits from '@/components/case-studies/DesignAudits';
import DesignSystem from '@/components/case-studies/DesignSystem';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const renderCaseStudy = () => {
    switch (slug) {
      case 'mutual-funds':
        return <MutualFunds />;
      case 'content-design-org':
        return <ScalingOrg />;
      case 'cdat':
        return <CDAT />;
      case 'workshops':
        return <Workshops />;
      case 'design-audits':
        return <DesignAudits />;
      case 'design-system':
        return <DesignSystem />;
      default:
        return (
          <div className="px-6 md:px-12 py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study: {slug}</h1>
            <p className="text-xl text-[var(--color-text-muted)] mb-8">[PLACEHOLDER for {slug} content]</p>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32">
        {renderCaseStudy()}
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;