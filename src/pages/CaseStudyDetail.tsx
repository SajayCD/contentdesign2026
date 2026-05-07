"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2, Clock, Presentation, FileText, BookOpen } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const isMutualFunds = slug === 'mutual-funds';
  const isScalingOrg = slug === 'content-design-org';
  const isCDAT = slug === 'cdat';
  const isWorkshops = slug === 'workshops';
  const isDesignAudits = slug === 'design-audits';
  const isDesignSystem = slug === 'design-system';

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32">
        {isMutualFunds && (
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
          </motion.article>
        )}

        {isScalingOrg && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <header className="px-6 md:px-12 mb-16">
              <div className="max-w-[1200px] mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-12 transition-colors">
                  <ArrowLeft size={16} /> All Work
                </Link>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="tag">Leadership</span>
                  <span className="tag">Strategy</span>
                  <span className="tag">Scaling</span>
                </div>
                
                <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-6 max-w-4xl">
                  Scaling a Content Design Org: A Blueprint
                </h1>
              </div>
            </header>

            {/* Intro Section */}
            <section className="px-6 md:px-12 mb-24">
              <div className="max-w-[720px] mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-8">
                    UX Writing is having its heyday in the whole product development space. Specifically in India, where I have worked for most of my professional career, UX writing is today where UX design was a decade ago. The most competent product teams realise and give importance to Content Design; but many teams are still playing catch up - teams that do not yet have the clarity, the right people to convince them, or the right people at the top guiding organisational decisions.
                  </p>
                  <p className="mb-12">
                    In the coming (and current) years, I imagine many teams building out solid content design organizations and experiencing the growing pains that come with this process.
                  </p>
                  <p className="mb-8">
                    A little about me: I serve a stellar team of four content designers at Angel One. I lead UX Content strategy and maturity for a suite of 8 financial products serving 20 Million+ Indian investors. In 2023, 1 billion+ orders were placed on the experiences I helped create. We have solid processes, expectations, and team and organisational awareness for every step of the content lifecycle, including:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
                    {[
                      'Requirement discovery',
                      'Brainstorming and collaboration',
                      'Content standardization',
                      'Design system integration',
                      'Governance and guidance',
                      'Content design review',
                      'Content design acceptance testing',
                      'and much more'
                    ].map((item, i) => (
                      <div key={i} className="bg-[var(--color-tag-bg)] px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        {item}
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-6">Second Section</h2>
                  <p className="mb-8">
                    So, how did we go from something trivial to a sophisticated, well-managed, transparent process with checks and balances? This article will guide you through a step-by-step process, whether you have just started building out your content org or are somewhere along the way.
                  </p>
                  <p className="mb-8 font-bold">But first,</p>
                  <p className="mb-12">
                    The first thing to do to set off on the right path (something that we learnt pretty late in the process) is to figure out the right mental model for content design at your organization.
                  </p>
                  <p className="mb-8">
                    This can help you answer many 'big picture' questions, like:
                  </p>

                  <div className="bg-white border-2 border-[var(--color-accent)] p-8 rounded-2xl shadow-sm mb-12">
                    <p className="text-xl font-medium leading-relaxed italic">
                      How do you assess your content design? How do you define it in a way that not only management but also future colleagues can understand? How do you define progress and goals for the entire content design org (different from personal OKRs or KPIs)? How do you show impact and improvement regarding organisational growth and performance?
                    </p>
                  </div>

                  <p className="mb-8">
                    Answering these questions is critical to the progress of your content design org and will set you up for success in the long term, and the answer is a content maturity model.
                  </p>
                  <p className="mb-8">
                    A CMM (Content Maturity Model), put simply - is a framework defining all processes, tools, outputs, people, collaborators, and impact and ways to measure it.
                  </p>
                  <p className="mb-12">
                    To figure out where you must go, you must first understand where you are.
                  </p>

                  <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-2xl mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-900">Third Section</h2>
                    <p className="mb-8 text-indigo-900">
                      Based on the state of these factors, every org is assigned a maturity level. To assess the content maturity level of your organisation, you can ask some direct questions. These questions fall under 4 pillars:
                    </p>
                    
                    <div className="bg-white/50 aspect-video rounded-xl flex items-center justify-center mb-8 border border-indigo-200">
                      <span className="text-indigo-400 font-medium uppercase tracking-widest text-xs">CMM 4 Pillars Diagram</span>
                    </div>

                    <p className="mb-8 text-indigo-900">
                      The next thing to do is answer these questions for every strategy pillar for your current situation. This will be different for every company - depending on the product goals, business goals, product roadmap and your managers/your goal for the content org.
                    </p>
                    <p className="mb-8 text-indigo-900">
                      These answers can help you understand where you are in terms of content design maturity into one of 5 levels:
                    </p>

                    <div className="bg-white/50 aspect-video rounded-xl flex items-center justify-center mb-4 border border-indigo-200">
                      <span className="text-indigo-400 font-medium uppercase tracking-widest text-xs">5 Content Maturity Levels Diagram</span>
                    </div>
                    <p className="text-xs text-indigo-400 text-center italic">Adapted for UX Content in a software product</p>
                  </div>

                  <h2 className="text-3xl font-bold mb-6">Fourth Section</h2>
                  <p className="mb-8">
                    In case you need a reference, this is the maturity assessment we did for our organization. The confidential/sensitive details have been removed. Feel free to use this as a starting point, but remember that every product will have its own unique maturity assessment.
                  </p>

                  <div className="bg-[var(--color-tag-bg)] aspect-video rounded-xl flex items-center justify-center mb-12 border border-[var(--color-border)]">
                    <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Maturity Assessment Example</span>
                  </div>

                  <p className="mb-12">
                    You may not have the answer to every question and some pillars may not even apply at every stage - and that's okay. For example, when we conducted the maturity assessment for our product, we realised there was no "evangelism strategy" for our team in work on account of our bandwidth being so limited. We did not answer those questions for the first 2 stages - our evangelism strategy only comes in from the third stage.
                  </p>
                  <p className="mb-12">
                    Once you have a maturity assessment, you have a clear mental model for thinking about a "UX content Strategy" in your organization. You also have a set of clear, actionable items for all parts of your strategy.
                  </p>

                  <h2 className="text-3xl font-bold mb-8">5 Parts to 5 Stages</h2>
                  <p className="mb-8">
                    Many of us have been or will be the first UX writers on our design team. It is the curse of a fledgling discipline—companies realise its value, but not to an extent where it is a make-or-break part of the team.
                  </p>
                  <p className="mb-8">
                    Depending on where you are, it is possible to take your organization from one level to another as a solo UX writer. This is entirely subjective, but in my experience, the initial stages of being the sole writer helped. Being a solo writer often gives you the speed to move through the initial stages independently.
                  </p>
                  <p className="mb-8">
                    Eventually, you will reach a stage where you want to expand your team - this could be due to the size of the product or to content strategy initiatives and team priorities.
                  </p>
                  <p className="mb-8">
                    There are enough articles about the documents, processes, and guidelines you need to create to set up an initial content design foundation, so in this guide, I will discuss the people side of things: convincing your stakeholders, figuring out who you need to hire, the hiring process, and onboarding new people.
                  </p>
                  <p className="mb-16">
                    These lessons are entirely based on my experience of going from 1 (just me) to our current team of 5 content designers. I hope they help you ensure your content design scales correctly.
                  </p>

                  {/* Series Navigation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {[
                      { title: "Part 1: Convincing your stakeholders", path: "/scaling-part-1" },
                      { title: "Part 2: Figuring out who you want to hire", path: "/scaling-part-2" },
                      { title: "Part 3: Setting up a hiring process", path: "/scaling-part-3" },
                      { title: "Part 4: Being a great interviewer", path: "/scaling-part-4" },
                      { title: "Part 5: Onboarding and setting people up for success", path: "/scaling-part-5", comingSoon: true },
                    ].map((card, i) => (
                      <Link 
                        key={i} 
                        to={card.path}
                        className="group bg-white border border-[var(--color-border)] p-8 rounded-2xl hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                          {card.comingSoon && (
                            <span className="text-[10px] uppercase tracking-widest bg-[var(--color-tag-bg)] px-2 py-1 rounded font-medium text-[var(--color-text-muted)]">Coming Soon</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors mt-4">
                          Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Next Case Study */}
            <section className="px-6 md:px-12 py-24 bg-white border-t border-[var(--color-border)]">
              <div className="max-w-[1200px] mx-auto">
                <Link to="/work/design-audits" className="group block">
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">Next Case Study</div>
                  <div className="flex justify-between items-end">
                    <h2 className="text-4xl md:text-6xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Design Audits: A Hedge Against Design Debt</h2>
                    <ArrowRight size={48} className="text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-4 transition-all hidden md:block" />
                  </div>
                </Link>
              </div>
            </section>
          </motion.article>
        )}

        {isCDAT && (
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
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>936</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per year</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>39</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per sprint</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>80</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">Hours saved per month (approx.)</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>0</div>
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
                    We ended up saving over 900 hours every year (~80 hours a month) of design and development bandwidth by implementing this process and preventing issues pre-emptively.
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
                      <div className="text-4xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>39 hours</div>
                      <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Time Saved/Sprint (Sprint = 2 weeks)</div>
                    </div>
                    <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl text-center">
                      <div className="text-4xl font-bold text-[var(--color-accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>936 hours</div>
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

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--color-border)]">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--color-accent)] transition-colors">
                      <ArrowLeft size={16} /> ← All Work
                    </Link>
                    <Link to="/work/design-audits" className="group inline-flex items-center gap-4 text-right">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Next Case Study</div>
                        <div className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Design Audits →</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </motion.article>
        )}

        {isWorkshops && (
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
        )}

        {isDesignAudits && (
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
        )}

        {isDesignSystem && (
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
                      <div key={i} className="flex items-center gap-6 p-4 bg-white border border-[var(--color-border)] rounded-xl shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
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

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-[var(--color-border)]">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--color-accent)] transition-colors">
                      <ArrowLeft size={16} /> ← All Work
                    </Link>
                    <Link to="/work/design-audits" className="group inline-flex items-center gap-4 text-right">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Next Case Study</div>
                        <div className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">Design Audits →</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </motion.article>
        )}

        {!isMutualFunds && !isScalingOrg && !isCDAT && !isWorkshops && !isDesignAudits && !isDesignSystem && (
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