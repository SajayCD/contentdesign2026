"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';

const DesignSystem = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="px-6 md:px-12 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <CaseStudyHeader />
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="tag">Systems</span>
            <span className="tag">Standards</span>
            <span className="tag">Design System</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
            Content in Design System
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="mb-12 text-xl leading-relaxed">
              I find Torrey Podmajersky's process the most comprehensive for building a voice and tone guide. Many organisations use it, and her process has become the gold standard in most UX content organizations. Here is a brief look into how we set up a Voice and Tone chart for a finance product.
            </p>

            <blockquote className="pull-quote">
              Opinion: The work begins once we have the voice and tone chart in place. Guidelines are only as good as how well they're used.
            </blockquote>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-16 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Voice and Tone Chart — Angel One</span>
            </div>

            <p className="mb-8">
              When people are using flows that involve their money, emotions are high. Further, many screens are information-heavy and involve serious investing and trading decisions.
            </p>
            <p className="mb-12">
              To minimize cognitive processing, we standardized the repetitive information points and decision-oriented words used across the app:
            </p>

            <div className="space-y-4 mb-16">
              {[
                "Writing Amounts",
                "Writing Action Words",
                "Writing Dates, Months and Years",
                "Writing Time",
                "Writing for System feedback",
                "Writing Tooltips",
                "Writing Toast Notifications",
                "Writing Push Notifications",
                "Writing Call to Actions",
                "Standard dictionary of finance terms",
                "A safe list of acceptable synonyms to use"
              ].map((item, i) => (
                <a 
                  key={i} 
                  href="#"
                  className="flex items-center justify-between p-4 bg-white border border-[var(--color-border)] rounded-xl shadow-sm transition-all duration-200 ease-in-out hover:bg-[#FAFAFA] hover:border-l-2 hover:border-l-[var(--color-accent)] cursor-pointer group no-underline"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium text-[var(--color-text)]">{item}</span>
                  </div>
                  <ArrowRight size={20} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Build it, and they will use it?</h2>
            <p className="mb-12">
              Once we had a comprehensive guide in place to standardize the most repeated content components of our product - the next part of this process began: adoption and implementation.
            </p>

            <h2 className="text-3xl font-bold mb-6">Internal Adoption</h2>
            <p className="mb-12">
              This process was relatively simple for the internal team (all UX Writers). All existing team members were onboarded to the guidelines, and any new UX writer had to digest them as part of their onboarding. To ensure that these guidelines were implemented efficiently in all designs, we set up a simple peer-review process within our team.
            </p>

            <h2 className="text-3xl font-bold mb-6">External Adoption</h2>
            <p className="mb-8">
              A significant challenge for our team was the adoption of UX Writing guidelines by UX Designers. To address this issue, we decided to integrate content components and variations as instances into the design system that our team was building. I worked with the design system manager to explain, onboard, test and roll out solutions within our design system.
            </p>
            <p className="mb-12">
              Here are a few screenshots of how the final implementation looked like:
            </p>

            <div className="space-y-8 mb-16">
              <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Design System Screenshot — Content Variables</span>
              </div>
              <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">All variables for a component type (time)</span>
              </div>
            </div>

            <p className="mb-12">
              At the next stage, we added the component, instances as well as the usage guidelines within the Design system in Figma.
            </p>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Component with instances and usage guidelines in Figma</span>
            </div>

            <p className="text-xl font-bold mb-16 text-center">
              This practice brought both our content and design systems in one place.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyFooter nextTitle="Design Audits" nextSlug="design-audits" />
    </motion.article>
  );
};

export default DesignSystem;