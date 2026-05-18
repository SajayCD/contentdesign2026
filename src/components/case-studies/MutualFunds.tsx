"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';
import Highlighter from '@/components/ui/Highlighter';
import { TrendingUp, Target, Clock, MessageSquare } from 'lucide-react';

const MutualFunds = () => {
  const impactData = [
    {
      label: "Growth",
      value: "500k+",
      description: "New monthly SIPs, up from 50k at project start.",
      icon: <TrendingUp className="text-[var(--color-accent)]" size={24} />
    },
    {
      label: "Mandate Ratio",
      value: "72%",
      description: "A 300% improvement in active payment mandates.",
      icon: <Target className="text-[var(--color-accent)]" size={24} />
    },
    {
      label: "Efficiency",
      value: "12mo",
      description: "Time taken to achieve 10x growth in orders.",
      icon: <Clock className="text-[var(--color-accent)]" size={24} />
    },
    {
      label: "Support",
      value: "-60%",
      description: "Drop in contact ratio due to better user education.",
      icon: <MessageSquare className="text-[var(--color-accent)]" size={24} />
    }
  ];

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
            <span className="tag">Content Design</span>
            <span className="tag">FinTech</span>
            <span className="tag">Research</span>
            <span className="tag">Impact</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
            From 50k to 500k+: The Mutual Funds Revamp
          </h1>
        </div>
      </header>

      {/* Stat Bar */}
      <section className="bg-white border-y border-[var(--color-border)] py-12 px-6 md:px-12 mb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              630k
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">PEAK MONTHLY SIPS</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              72%
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">MANDATE RATIO</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              12mo
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">TIME TO 10X</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              -60%
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">CONTACT RATIO DROP</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Context</h2>
            <p className="mb-8">
              Mutual funds are among the most popular investment vehicles for new investors. Angel One decided to build a new version of the Mutual funds app to test out a better UX bringing a new design language and updated UI.
            </p>
            <p className="mb-8">
              After launching v1 of the new app, we were generating ~50,000 new SIP orders every month with a 15-20% mandate success rate.
            </p>
            <p className="mb-12">
              The most critical data points for us to track were:
              <br />1. Number of new SIPs registered every month
              <br />2. Number of guaranteed recurring payments (with the help of bank mandates)
            </p>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">A (very) simple Mutual Fund order flow</span>
            </div>

            <h2 className="text-3xl font-bold mb-8">Problem Statements</h2>
            <div className="space-y-8 mb-24">
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Awareness about Mutual Funds</h3>
                <p className="mb-4 text-[var(--color-text-muted)]">A lot of our users had a very trivial understanding of what mutual funds actually are.</p>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>How do I invest in mutual funds? How much should I invest?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Understanding markets and investing</h3>
                <p className="mb-4 text-[var(--color-text-muted)]">Due to social media and general myths about investing, many investors do not have a complete picture of how markets work.</p>
              </div>

              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Fears</h3>
                <p className="mb-4 text-[var(--color-text-muted)]">What if my money is lost? What if my payment fails?</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-12">Impact</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
              {impactData.map((item, i) => (
                <div key={i} className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-tag-bg)] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.value}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-24 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">SIP Growth Dashboard Screenshot</span>
            </div>

            <h2 className="text-3xl font-bold mb-8">A Few Humblebrags</h2>
            <p className="mb-12">To put this in context, the mutual funds product has 1.5 million weekly active users.</p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">500k New SIPs Certificate — Company Recognition</span>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter nextTitle="Scaling a Content Design Org" nextSlug="content-design-org" />
    </motion.article>
  );
};

export default MutualFunds;