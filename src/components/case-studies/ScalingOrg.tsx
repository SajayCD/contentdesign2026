"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ScalingOrg = () => {
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
  );
};

export default ScalingOrg;