"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Presentation } from 'lucide-react';

const Workshops = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="px-6 md:px-12 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-12 transition-colors">
            <ArrowLeft size={16} /> Back to all work
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="tag">Advocacy</span>
            <span className="tag">Education</span>
            <span className="tag">Workshops</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
            Workshops & Talks
          </h1>
          
          <p className="text-2xl text-[var(--color-text-muted)] max-w-3xl">
            Most UX Writing roles come with the responsibility of increasing awareness of the UX writing team, bringing more visibility and aligning other collaborating teams with our process. With these goals in mind, I conducted multiple workshops for my organization.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Workshop 1 */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-6 text-[var(--color-accent)]">
                <Presentation size={24} />
                <span className="font-bold uppercase tracking-widest text-xs">Workshop 1</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">How it works: UX Writing at Angel One</h2>
              
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Topics and Objective</h3>
                <p className="mb-4">
                  <strong>Topics:</strong> How UX writing builds emotional connections, establishes brand personality, and eventually drives business outcomes.
                </p>
                <p>
                  <strong>Objective:</strong> Evangelising and building awareness about our team at the Angel One Design Summit.
                </p>
              </div>

              <div className="mb-12">
                <div className="bg-white border-2 border-[var(--color-border)] rounded-2xl overflow-hidden h-[700px] flex flex-col items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[var(--color-tag-bg)] opacity-50"></div>
                  <div className="z-10 text-center p-8">
                    <Presentation size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
                    <h3 className="text-xl font-bold mb-2">Figma Presentation — How it works: UX Writing at Angel One</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Interactive Figma embed — click to explore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-6 text-[var(--color-accent)]">
                <Presentation size={24} />
                <span className="font-bold uppercase tracking-widest text-xs">Workshop 2</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Think like a UX Writer: Workshop</h2>
              
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Topics and Objective</h3>
                <p>
                  <strong>Topics and Objective:</strong> How PMs can collaborate efficiently with UX writers, write better copy for Angel One, learn content design practices and ultimately make a better UX.
                </p>
              </div>

              <div className="mb-12">
                <div className="bg-white border-2 border-[var(--color-border)] rounded-2xl overflow-hidden h-[700px] flex flex-col items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[var(--color-tag-bg)] opacity-50"></div>
                  <div className="z-10 text-center p-8">
                    <Presentation size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
                    <h3 className="text-xl font-bold mb-2">Figma Presentation — Think like a UX Writer: Workshop</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Interactive Figma embed — click to explore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--color-border)]">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--color-accent)] transition-colors">
                <ArrowLeft size={16} /> ← All Work
              </Link>
              <Link to="/work/content-design-org" className="group inline-flex items-center gap-4 text-right">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Next Case Study</div>
                  <div className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Scaling a Content Design Org →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
};

export default Workshops;