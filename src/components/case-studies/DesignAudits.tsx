"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';

const DesignAudits = () => {
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
            <span className="tag">Process</span>
            <span className="tag">Governance</span>
            <span className="tag">Strategy</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
            Design Audits: A hedge against design debt
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="mb-12 text-xl leading-relaxed">
              Audits are often associated with being tedious and thankless, with no visibility or apparent reward.
            </p>
            <p className="mb-12">
              However, when used correctly, audits are a safe, dependable solution for cleaning up the design debt already accrued. Here, I will outline the process for the routine audits (every 6 months) we conducted for all content design across our app to prevent additional design debt.
            </p>

            <h2 className="text-3xl font-bold mb-8">The Process</h2>
            <p className="mb-12">
              We followed a standard process for a large-scale content audit across all products.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-[var(--color-border)] space-y-16 mb-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 1</div>
                <h3 className="text-xl font-bold mb-4">Go to the build live for customers</h3>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 2</div>
                <h3 className="text-xl font-bold mb-4">Audit Screens</h3>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 3</div>
                <h3 className="text-xl font-bold mb-4">Sharing Discrepancies with the Dev team</h3>
                <p className="mb-8">
                  Since we covered a large product with multiple modules and hundreds of flows, we had to find an efficient and transparent way to communicate the changes we suggested with our development team.
                </p>
                <p className="mb-12">
                  Eventually, the changes were shared in Figma with a proper file organisation and an elaborate legend explaining how to use the file.
                </p>

                <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">File Organization in Figma</span>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-lg font-bold mb-4">Creating a legend for developers</h4>
                    <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                      <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Legend for Developers — Figma Screenshot</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4">File Organisation — Changes were sorted according to major modules</h4>
                    <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                      <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">File Organisation by Module — Figma Screenshot</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4">Suggested changes — A few examples</h4>
                    <p className="mb-6">We created detailed instructions for all suggested changes.</p>
                    <div className="space-y-6">
                      <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                        <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Example Suggested Changes — Figma Screenshot</span>
                      </div>
                      <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                        <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Detailed UX Flow Representation — Figma Screenshot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 4</div>
                <h3 className="text-xl font-bold mb-4">Schedule and Prioritize bandwidth with development team</h3>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 5</div>
                <h3 className="text-xl font-bold mb-4">Once developers have made the necessary changes, verify on the newest build</h3>
              </div>

              {/* Step 6 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step 6</div>
                <h3 className="text-xl font-bold mb-4">Take insights and observations and share report with stakeholders</h3>
                <p className="mb-8">
                  While it was easy to get lost in the nitty-gritty of the audit while it was going on, we still needed to provide transparency to higher management. This was done with timely reports linked to the relevant Figma file and JIRA tickets, along with a progress update.
                </p>

                {/* PDF Card */}
                <div className="bg-white border border-[var(--color-border)] p-6 rounded-2xl flex items-center gap-4 mb-12 group hover:border-[var(--color-accent)] transition-colors">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                    <FileText size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="font-bold text-lg group-hover:text-[var(--color-accent)] transition-colors">UX Content Audit Report — Q2 (PDF, 93KB)</div>
                    <div className="text-sm text-[var(--color-text-muted)]">Note: I will upload this file and link it here later</div>
                  </div>
                </div>

                <p className="mb-8">
                  Some suggestions required detailed instructions and representation of the UX flow.
                </p>
                <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center border border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">UX Flow Representation — Audit Example</span>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <div className="pt-12 border-t border-[var(--color-border)] mb-24">
              <p className="mb-8">
                While we used this process to clear existing design debt, we also implemented more processes to prevent new design debt in our product, namely a content design acceptance testing (CDAT) process.
              </p>
              
              <Link to="/work/cdat" className="group block bg-white border border-[var(--color-border)] p-8 rounded-2xl hover:border-[var(--color-accent)] transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Read next</div>
                    <h3 className="text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Content Design Acceptance Testing (CDAT)</h3>
                  </div>
                  <ArrowRight size={32} className="text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--color-accent)] transition-colors">
                <ArrowLeft size={16} /> ← All Work
              </Link>
              <Link to="/work/design-system" className="group inline-flex items-center gap-4 text-right">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Next Case Study</div>
                  <div className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Content in Design System →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
};

export default DesignAudits;