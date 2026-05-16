"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyFooter from './CaseStudyFooter';
import Highlighter from '@/components/ui/Highlighter';

const CDAT = () => {
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
            <span className="tag">Process</span>
            <span className="tag">QA</span>
            <span className="tag">Efficiency</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
            Content Design Acceptance Testing (CDAT)
          </h1>
        </div>
      </header>

      {/* Stat Bar */}
      <section className="bg-white border-y border-[var(--color-border)] py-12 px-6 md:px-12 mb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              936
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per year</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              39
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per sprint</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              80
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per month (approx.)</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              0
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Content debt from new builds (goal)</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[720px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="mb-12 text-xl leading-relaxed">
              While audits helped us with existing design debt, a major problem we wanted to solve was to stop creating new content design debt with every new build.
            </p>

            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <p className="mb-12">
              We ended up saving over <Highlighter>936 hours saved per year</Highlighter> (~<Highlighter>80 hours</Highlighter> a month) of design and development bandwidth by implementing this process and preventing issues pre-emptively.
            </p>

            <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
            <p className="mb-12">
              Many content design solutions errors would creep in while the engineering team implemented the new designs in any build. While this was more of a due diligence problem from other teams, we understood that the best way to solve this from the content design team was to evolve our DAT process to include UX Copy changes.
            </p>

            <h2 className="text-3xl font-bold mb-6">Primary Objective</h2>
            <p className="mb-4">
              To implement and optimize a streamlined Content Design Acceptance Testing (CDAT) process within our team.
            </p>
            <p className="mb-12">
              Enhance content implementation efficiency, track issues, and ensure consistent, high-quality content design delivery across our product experiences.
            </p>

            <h2 className="text-3xl font-bold mb-8">Process Workflow</h2>
            
            <div className="mb-12 overflow-hidden rounded-xl border border-[var(--color-border)]">
              <div className="bg-[var(--color-text)] text-white px-6 py-4 font-bold">
                Time saved by implementing CDAT
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--color-tag-bg)] border-b border-[var(--color-border)]">
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider"></th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Per Sprint/Build Issues</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Design Hours</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Dev Hours</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr>
                      <td className="px-6 py-4 font-bold">Before</td>
                      <td className="px-6 py-4">~15</td>
                      <td className="px-6 py-4">22.5</td>
                      <td className="px-6 py-4">22.5</td>
                      <td className="px-6 py-4 font-bold">45</td>
                    </tr>
                    <tr className="bg-indigo-50/30">
                      <td className="px-6 py-4 font-bold text-[var(--color-accent)]">After</td>
                      <td className="px-6 py-4">~15</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4 font-bold text-[var(--color-accent)]">6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>39 hours</Highlighter>
                </div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Time Saved/Sprint (Sprint = 2 weeks)</div>
              </div>
              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  <Highlighter>936 hours</Highlighter>
                </div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Time Saved/Year</div>
              </div>
            </div>

            <p className="mb-16">
              Since the design team and UX Writing team had parallel, separate inputs, we decided to run parallel DAT processes for both. Each team took responsibility for conducting the DAT for their scope.
            </p>

            <h2 className="text-3xl font-bold mb-12">Steps and Stakeholders</h2>
            
            <div className="relative pl-8 border-l-2 border-[var(--color-border)] space-y-12 mb-16">
              {[
                "UX Writers to gain access to the UAT and PAT (test builds) to conduct CDAT. (One time step)",
                "Align PMs on the process and get sign-off.",
                "Align developers and inform them of the process.",
                "Every engineering and product team had their own ways of working, so our process varies slightly for 3 different products:\n→ Product 1: Devs to share the relevant build versions with the UXW team - in tickets where UXW is involved.\n→ Product 2: PMs to share the relevant screenshots/screen recordings.\n→ Product 3: Every Wednesday UXW team will be notified about the upcoming week's release by the QA team.",
                "→ Product 1: UX Writing team to test implementations on the relevant build (including constraints of time/edge cases).\n→ Product 2: Test tickets within 3 hours.\n→ Product 3: Test tickets within 3 days in CUG/PAT/evidence shared by QA stakeholders.",
                "Update results for successful / flag issues for unsuccessful implementations. Go back to step 4 till successful.",
                "Track all statuses across sprints."
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-sm"></div>
                  <div className="font-bold text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Step {i + 1}</div>
                  <p className="text-lg whitespace-pre-line">{step}</p>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-16 border border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">CDAT Process Flowchart — upload Figma export here</span>
            </div>

            <h2 className="text-3xl font-bold mb-8">Challenges</h2>
            
            <div className="space-y-4 mb-24">
              {[
                "In edge cases or one-time updates it was challenging to validate UX writing work in the test builds. Some cases had rare/one-time appearance, and some were dependent on external factors (e.g. third-party APIs).",
                "Streamlining with Dev timelines to test tickets - a substantial number of tickets from some sprints are in Dev/not were at time not picked up, which created an increasing backlog.",
                "Streamlining a single timeline to test tickets."
              ].map((challenge, i) => (
                <div key={i} className="flex gap-4 p-6 bg-amber-50 border border-amber-100 rounded-2xl text-amber-900">
                  <AlertCircle className="shrink-0 mt-1" size={20} />
                  <p className="font-medium">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter nextTitle="Workshops & Talks" nextSlug="workshops" />
    </motion.article>
  );
};

export default CDAT;