"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';
import Highlighter from '@/components/ui/Highlighter';

const GrowthTimeline = () => {
  const nodes = [
    { value: "50k", label: "Starting point", date: "Pre-project", isPeak: false },
    { value: "150k", label: "3x goal hit", date: "Month 3", isPeak: false },
    { value: "500k+", label: "12-month milestone", date: "Month 12", isPeak: false },
    { value: "630k", label: "Peak", date: "July 2024", isPeak: true },
  ];

  return (
    <div className="mb-24">
      <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-12 text-center">Growth Journey</h3>
      
      {/* Desktop Timeline */}
      <div className="hidden md:block relative px-12">
        <div className="absolute top-[44px] left-12 right-12 h-[1px] bg-[#E4E3DF]"></div>
        <div className="flex justify-between relative">
          {nodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center text-center w-32">
              <div 
                className="text-lg font-bold mb-4" 
                style={{ fontFamily: 'var(--font-display)', color: node.isPeak ? '#4F46E5' : '#4F46E5' }}
              >
                {node.value}
              </div>
              <div className={`w-6 h-6 rounded-full border-[1.5px] border-[#4F46E5] mb-4 z-10 ${node.isPeak ? 'bg-[#4F46E5]' : 'bg-white'}`}>
                {node.isPeak && <div className="w-full h-full flex items-center justify-center text-white text-[10px]">✓</div>}
              </div>
              <div className="text-[12px] text-[#6B6B6B] mb-1">{node.label}</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#4F46E5]">{node.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8 pl-8 relative">
        <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-[#E4E3DF]"></div>
        {nodes.map((node, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full border-[1.5px] border-[#4F46E5] z-10 ${node.isPeak ? 'bg-[#4F46E5]' : 'bg-white'}`}></div>
            <div className="text-lg font-bold text-[#4F46E5]" style={{ fontFamily: 'var(--font-display)' }}>{node.value}</div>
            <div className="text-[12px] text-[#6B6B6B]">{node.label}</div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-[#4F46E5]">{node.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledPullQuote = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F9F8F5] border-l-[3px] border-[#4F46E5] p-5 md:p-6 rounded-r-lg mb-8 relative overflow-hidden">
    <span 
      className="absolute top-2 left-4 text-4xl text-[#4F46E5] opacity-30 select-none"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      "
    </span>
    <div className="relative z-10 italic text-lg md:text-xl leading-relaxed pl-4">
      {children}
    </div>
  </div>
);

const MutualFunds = () => {
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

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-24 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">A (very) simple Mutual Fund order flow</span>
            </div>

            <h2 className="text-3xl font-bold mb-12">Impact</h2>
            
            <GrowthTimeline />

            <div className="space-y-6 mb-24">
              <StyledPullQuote>
                The revamp led to a <Highlighter>1,160% growth</Highlighter> in monthly SIP registrations within the first year of launch.
              </StyledPullQuote>
              <StyledPullQuote>
                By simplifying the mandate registration process, we saw the active mandate ratio jump from <Highlighter>18% to 72%</Highlighter>.
              </StyledPullQuote>
              <StyledPullQuote>
                Better user education and clearer error states resulted in a <Highlighter>60% reduction</Highlighter> in support queries related to payment failures.
              </StyledPullQuote>
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