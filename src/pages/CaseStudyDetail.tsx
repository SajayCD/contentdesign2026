"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Content for Mutual Funds
  const isMutualFunds = slug === 'mutual-funds';

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32">
        {isMutualFunds ? (
          <article>
            {/* Header */}
            <header className="px-6 md:px-12 mb-16">
              <div className="max-w-[1200px] mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-12 transition-colors">
                  <ArrowLeft size={16} /> Back to all work
                </Link>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="tag">Content Design</span>
                  <span className="tag">FinTech</span>
                  <span className="tag">Research</span>
                  <span className="tag">Impact</span>
                </div>
                
                <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
                  From 50k to 500k+: The Mutual Funds Revamp
                </h1>
                
                <p className="text-2xl text-[var(--color-text-muted)] max-w-3xl">
                  How content design drove a 1,160% increase in monthly SIPs — and built better investors along the way.
                </p>
              </div>
            </header>

            {/* Stat Bar */}
            <section className="bg-white border-y border-[var(--color-border)] py-12 px-6 md:px-12 mb-24">
              <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>630k</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Peak monthly SIPs</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>72%</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Mandate ratio</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>12mo</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Time to 10x</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>-60%</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Support ratio drop</div>
                </div>
              </div>
            </section>

            {/* Content */}
            <section className="px-6 md:px-12 mb-24">
              <div className="max-w-[720px] mx-auto">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">Context</h2>
                  <p className="mb-8">
                    Mutual funds revamp at Angel One. v1 had launched with ~50k SIPs/month and a 15–20% mandate success rate. The goal was to scale this significantly while ensuring users understood what they were investing in.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">Problem Statements</h2>
                  <p className="mb-8">
                    User awareness gaps; fears around money and mandates; lack of understanding of compound interest. Users were dropping off because the language was too technical and the stakes felt too high without enough guidance.
                  </p>

                  <blockquote className="pull-quote">
                    "When this project started, we were at 50,000 new SIPs monthly. We hit 150,000 — our 3x goal — within just 3 months."
                  </blockquote>

                  <h2 className="text-3xl font-bold mb-6">Approach & Solutions</h2>
                  <p className="mb-8">
                    We focused on user education through micro-copy and goal-based calculators. We introduced a "SIP Health" feature that used plain language to explain complex financial metrics. We also redesigned the mandate flows to address fears around automated payments.
                  </p>

                  <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
                    <span className="text-[var(--color-text-muted)] font-medium">[Figma embed — Mutual Funds Revamp]</span>
                  </div>

                  <h2 className="text-3xl font-bold mb-6">Impact</h2>
                  <p className="mb-8">
                    The results were transformative. Beyond the 1,160% growth in SIPs, we saw a massive drop in support tickets related to investment confusion. We didn't just sell more products; we built more confident investors.
                  </p>
                </div>
              </div>
            </section>
          </article>
        ) : (
          <div className="px-6 md:px-12 py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study: {slug}</h1>
            <p className="text-xl text-[var(--color-text-muted)] mb-8">[PLACEHOLDER for {slug} content]</p>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;