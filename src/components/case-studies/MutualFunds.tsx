"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';
import Highlighter from '@/components/ui/Highlighter';

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
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">MANDATE RATIO (300% improvement)</div>
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
            <p className="mb-8">
              The most critical data points for us to track were:
              <br />1. Number of new SIPs registered every month
              <br />2. Number of guaranteed recurring payments (with the help of bank mandates)
            </p>
            <p className="mb-12">
              This case study documents our journey of further understanding our user needs, adding more features and optimizing the current journeys to meet our business goals.
            </p>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">A (very) simple Mutual Fund order flow</span>
            </div>

            <h2 className="text-3xl font-bold mb-8">Problem Statements</h2>
            <p className="mb-12">
              Based on our qualitative (clickstream + tableau analytics) and quantitative (in collaboration with the UX research team) research, the following areas were causing users to drop off or not place their orders:
            </p>

            <div className="space-y-8 mb-24">
              {/* Card 1 */}
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Awareness about Mutual Funds</h3>
                <p className="mb-4 text-[var(--color-text-muted)]">A lot of our users had a very trivial understanding of what mutual funds actually are.</p>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>How do I invest in mutual funds? How much should I invest?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>When I buy mutual funds I am buying stocks, right?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Are mutual funds really better than keeping my money in the bank/a fixed deposit?</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Understanding markets and investing</h3>
                <p className="mb-4 text-[var(--color-text-muted)]">Due to social media and general myths about investing, many investors do not have a complete picture of how markets work.</p>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Where should I invest my money? High returns mean the mutual fund is good, right?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>How do mutual fund returns work?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Will my money be doubled/tripled? How much time will it take?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Lack of understanding of compound interest</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Fears</h3>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>What if my money is lost?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>What if my payment fails and I do not get my money back?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Should I set up a mandate? What if I do not have the required balance at the time of payment?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)]">→</span>
                    <span>Setting up the automatic mandate is a complex process, what if I make a mistake?</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8">Approach and Solutions</h2>
            
            <div className="bg-[var(--color-tag-bg)] p-4 rounded-lg mb-12 text-sm text-[var(--color-text-muted)]">
              Please use the expand button (⌞⌝) in all Figma files to scroll, zoom in and view more details. It is present in the top right of every embed. My notes explaining design decisions are added in yellow.
            </div>

            <h3 className="text-2xl font-bold mb-4">User education and engagement</h3>
            <p className="mb-8">Educating users about the basics of mutual funds and to answer common questions and concerns.</p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-16 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">User Education & Awareness — Figma</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Making better investors</h3>
            <p className="mb-8">Guiding better investment behaviour through SIP Health.</p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-8 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">SIP Health Feature — Figma</span>
            </div>
            <p className="mb-12">
              The following were implemented as part of this initiative:
              <br />→ Explaining the benefits of compounding on withdrawal
              <br />→ Switching to better plans for same funds
              <br />→ Reinforcing investments behaviours as "pending actions"
            </p>

            <h3 className="text-2xl font-bold mb-4">Comprehensive goal calculators</h3>
            <p className="mb-8">Most investment apps in India offer trivial returns calculators that give an estimation of pure returns based on a specific investment amount and returns percentage. However, most investors start saving for specific goals — and we decided to adapt the calculators to these goals.</p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-16 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Goal Calculators — Figma</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Addressing fears</h3>
            <p className="mb-8">Explaining the flexibility of SIPs to address most common fears.</p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Addressing Fears — Copy & UX — Figma</span>
            </div>
            <p className="mb-12">
              An elaborate, yet clear enough explanation and flow of how autopay works. Handling emotions correctly when payments/autopay setup fails and making sure the error is not repeated.
            </p>
            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-24 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Autopay Flow & Error States — Figma</span>
            </div>

            <h2 className="text-3xl font-bold mb-12">Impact</h2>
            
            <div className="space-y-12 mb-24">
              <blockquote className="pull-quote">
                When this project started we were at about 50,000 new SIPs monthly and a 20% mandate ratio (the ratio of SIPs with an active payment mandate).
              </blockquote>
              <blockquote className="pull-quote">
                Our goal: 3x new monthly SIPs to 150,000 in 365 days — a goal that we hit within just 3 months of starting the project.
              </blockquote>
              <blockquote className="pull-quote">
                This increased to about 500k+ in a little over 12 months after we started this project, hitting our highest ever number of <Highlighter>630,000</Highlighter> new SIPs in July 2024.
              </blockquote>
              <blockquote className="pull-quote">
                Currently our mandate ratio (the percentage of SIPs that are registered with an Autopay mandate) is at a whopping <Highlighter>72%</Highlighter>, which is a 300% improvement.
              </blockquote>
              <blockquote className="pull-quote">
                Due to increased awareness about mandates and mutual funds, our Contact Ratio (the ratio of investors contacting customer support) went down from 5% to below <Highlighter>2%</Highlighter>.
              </blockquote>
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