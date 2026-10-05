"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Highlighter from '@/components/ui/Highlighter';

const THESIS_URL = "https://drive.google.com/file/d/1daHhmeQcNiqXhIqyOcHhzW18NGZPf8pc/view?usp=sharing";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto">
          
          {/* Section A: Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Research
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)] mb-16" style={{ fontFamily: 'var(--font-body)' }}>
              Original academic research on the effect of language in the apps we use.
            </p>
          </motion.div>

          {/* Section B: Thesis intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block text-[11px] font-semibold text-[#4F46E5] bg-[#EEF2FF] px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-body)' }}>
                MSc Thesis
              </span>
              <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
                University College Dublin, 2026
              </span>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Who is the crowd?
            </h2>
            <p className="text-xl leading-relaxed text-[var(--color-text)] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
              How the microcopy of 13 investing, betting and prediction-market apps turns an order book into a &ldquo;probability&rdquo;, and why interface language carries regulatory weight.
            </p>
          </motion.div>

          {/* Section C: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5">
                <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>A+</Highlighter>
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>Final grade</div>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5">
                <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>13</Highlighter>
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>Apps across investing, betting and prediction markets</div>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5">
                <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>421</Highlighter>
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>Screenshots</div>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-5">
                <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>~540</Highlighter>
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>Unique instances of microcopy</div>
              </div>
            </div>
          </motion.div>

          {/* Section D: Central finding card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-[#F2FBF6] border border-[#C6E9D5] rounded-[12px] overflow-hidden">
              <div className="bg-[#E6F4EA] px-4 py-2 border-b border-[#C6E9D5]">
                <span className="text-[11px] font-bold text-[#137333] uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>Central finding</span>
              </div>
              <div className="p-5 md:p-6 flex gap-4 items-start">
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-[#137333] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-1">S</div>
                <div className="min-w-0">
                  <p className="text-2xl md:text-3xl font-bold leading-snug text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
                    Market Prices = <del className="text-[#137333] decoration-2"><span className="sr-only">Deleted: </span>Probabilities</del> <ins className="text-[#137333] underline decoration-2 underline-offset-4"><span className="sr-only">Inserted: </span>the order book</ins>
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    Polymarket&rsquo;s daily newsletter: &ldquo;Welcome back to your daily mind meld with the Polymarket order book.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-3 mb-16" style={{ fontFamily: 'var(--font-body)' }}>
              The interface presents this number as a probability; its own microcopy inadvertently admits that it measures the order book.
            </p>
          </motion.div>

          {/* Section E: Key Findings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Key Findings</h3>
            <div className="border-t border-[var(--color-border)] mb-16">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-6 border-b border-[var(--color-border)]">
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    <Highlighter>Email only</Highlighter>
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>All Polymarket asked for at sign-up</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>Register tracks regulation</h4>
                  <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Prediction markets alone describe their pricing mechanism as measurement, while their own surfaces stage whale accounts, leaderboards and streak mechanics drawn from the gambling industry they disclaim.</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-6 border-b border-[var(--color-border)]">
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    <Highlighter>&euro;8.01 &rarr; ~&euro;4</Highlighter>
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>What survived leaving Polymarket</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>At exit, the spectrum reverses</h4>
                  <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Regulated platforms return funds intact while resisting departure; the unregulated platform releases the account in a single click but taxes the value through crypto-only transfers.</p>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-6 border-b border-[var(--color-border)]">
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    <Highlighter>$910,340.20</Highlighter>
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>One account&rsquo;s single-day profit. My portfolio, same screen: $7.43</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>The crowd is staged</h4>
                  <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Diversity, independence and decentralisation fail structurally, while aggregation survives to produce a number.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section F: Four Interface-Level Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Four Interface-Level Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Exit&ndash;Entry Parity</h4>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Minimum withdrawals should not exceed minimum deposits.</p>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Round-Trip Disclosure</h4>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>The full cost of getting money out should be explained before money goes in.</p>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Closure Parity</h4>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Options for closing an account should be as discoverable and as short as opening one.</p>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Affordance Truthfulness</h4>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Interface elements that do not function are objective misrepresentations.</p>
              </div>
            </div>
          </motion.div>

          {/* Section G: Method and Theory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Method and Theory</h3>
            <div className="flex flex-wrap gap-2 mb-12">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium bg-[var(--color-tag-bg)] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Walkthrough method (Light, Burgess & Duguay, 2016)</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium bg-[var(--color-tag-bg)] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Critical discourse analysis (Fairclough, 2013)</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium bg-[var(--color-tag-bg)] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Multimodal analysis (Kress & van Leeuwen, 1996)</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium bg-[var(--color-tag-bg)] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Behavioural finance (Kahneman & Tversky, 1979)</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium bg-[var(--color-tag-bg)] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>Wisdom of crowds (Surowiecki, 2004)</span>
            </div>
          </motion.div>

          {/* Section H: Read the thesis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a href={THESIS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Read the full thesis<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>PDF, 126 pages</span>
            </div>
          </motion.div>

          {/* Section I: Currently Researching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-[var(--color-border)] pt-16">
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Currently Researching</h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-8" style={{ fontFamily: 'var(--font-body)' }}>Working notes and open questions</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                  <p className="text-lg leading-relaxed text-[var(--color-text)] mb-6" style={{ fontFamily: 'var(--font-body)' }}>Can the presence of bots on social media change how likely you are to voice your opinion? Can they tip the scales in terms of a public debate?</p>
                  <a href="https://docs.google.com/document/d/1tt4SyVgq12U6E9OCuar8R1eaZLTHZg9DFrNImyT4gwU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-auto text-[#4F46E5] underline" style={{ fontFamily: 'var(--font-body)' }}>Read more &rarr;</a>
                </div>
                <div className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6">
                  <p className="text-lg leading-relaxed text-[var(--color-text)] mb-6" style={{ fontFamily: 'var(--font-body)' }}>How does YouTube rank a heavily discussed term like &ldquo;Prediction Markets&rdquo; during a regulatory event? What factors play into it and what voices are privileged?</p>
                  <a href="https://docs.google.com/document/d/1aw1y0BIDyu6mgmu2WcHmI7XhGarfhQPWz51oR0c-wF4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-auto text-[#4F46E5] underline" style={{ fontFamily: 'var(--font-body)' }}>Read more &rarr;</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Research;