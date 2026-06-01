"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Presentation } from 'lucide-react';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';

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
          <CaseStudyHeader />
          
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
                <p className="mb-4">
                  <strong>Topics:</strong> How UX writing builds emotional connections, establishes brand personality, and eventually drives business outcomes.
                </p>
                <p>
                  <strong>Objective:</strong> Evangelising and building awareness about our team at the Angel One Design Summit.
                </p>
              </div>

              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', margin: '32px 0', border: '1px solid #E4E3DF' }}>
                <iframe
                  src="https://embed.figma.com/proto/rhcFDoeSqOKTaZ6IYZMvuK/Sajay-s-Content-Design-Talks?page-id=50%3A2&node-id=50-5&node-type=FRAME&viewport=1165%2C5790%2C0.18&scaling=contain&content-scaling=fixed&starting-point-node-id=50%3A5&desktop-link-click-timestamp=1779804979168&desktop-ul-exp-bucket=po&embed-host=share"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                />
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
                <p>
                  <strong>Topics and Objective:</strong> How PMs can collaborate efficiently with UX writers, write better copy for Angel One, learn content design practices and ultimately make a better UX.
                </p>
              </div>

              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', margin: '32px 0', border: '1px solid #E4E3DF' }}>
                <iframe
                  src="https://embed.figma.com/proto/rhcFDoeSqOKTaZ6IYZMvuK/Sajay-s-Content-Design-Talks?page-id=50%3A2&node-id=123-32&node-type=FRAME&viewport=-4084%2C1449%2C0.17&scaling=contain&content-scaling=fixed&starting-point-node-id=123%3A32&desktop-link-click-timestamp=1779805316295&desktop-ul-exp-bucket=po&embed-host=share"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter nextTitle="From 50k to 500k+: The Mutual Funds Revamp" nextSlug="mutual-funds" />
    </motion.article>
  );
};

export default Workshops;