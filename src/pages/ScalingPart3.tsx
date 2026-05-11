"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const ScalingPart3 = () => {
  const titles = [
    'UX Writer', 'Content Designer', 'Product Writer', 'Technical Writer', 
    'Product Content Strategist', 'Content Strategist', 'Conversation Designer', 
    'UX Content Strategist', 'Design Content Editor', 'Content Editor'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-12">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">All Work</Link>
            <span>→</span>
            <Link to="/work/content-design-org" className="hover:text-[var(--color-accent)] transition-colors">Scaling a Content Design Org</Link>
            <span>→</span>
            <span className="text-[var(--color-text)] font-medium">Part 3</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs mb-4">
              Part 3 of 5
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-12 leading-tight">
              Setting up a hiring process
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                Now that you have set expectations and prepared yourself for hiring, let's move on to the main act—the actual hiring process.
              </p>
              <p className="mb-12">
                The first thing to understand about this process is that being a part of the hiring process or a hiring manager is very different from being a UX writer. Yes, you are hiring for something you do daily, but be prepared to wear a lot more different hats.
              </p>
              <p className="mb-12">
                My reason for bringing this up is that we need to let go of many of our assumptions about how people see our role—sometimes, you may even have to explain what a UX writer is (a feeling we're all familiar with).
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">Talking to the talent team</h2>
              <p className="mb-8">
                If content design is a relatively new addition to your product team, your talent team may not be clear on what profiles and skills to look for in potential candidates. Your input here can be crucial in helping them dial in and provide the right profiles.
              </p>
              <p className="mb-8">
                So, what does your input look like? Well, it depends on your talent team.
              </p>
              <p className="mb-12">
                All Designers may be called "UX Designers," but UX Writers go by many different names. In some cases, folks are doing UX writing work without it being explicitly labelled as such. So, it can be as simple as helping your talent team with all the name variations of our profession to expand their search scope.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-12">
                {titles.map((title, i) => (
                  <div key={i} className="bg-[var(--color-tag-bg)] px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] text-center">
                    {title}
                  </div>
                ))}
              </div>

              <p className="mb-12">
                This expansion of titles gave them a more extensive range to screen for. I also explained to my team what a UX writer does - giving them a walkthrough of my workflow and what the new hire would be working on. If your talent acquisition team is as patient as mine, take advantage of this to help them understand what to look for.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">Assessment stages — What do you need?</h2>
              <p className="mb-8">
                When your organization is expanding its team for the first time, be prepared to answer all questions along the hiring process, even if you're not the 'hiring manager' per se. See these points as opportunities to add value.
              </p>
              <p className="mb-8">
                Assessment stages depend on your manager's and higher management's input, so make sure you involve them in the decision-making for this process. Various stakeholders might want to be involved in this process, so it is best to have a sign-off before you finalise it.
              </p>
              <p className="mb-12">
                For example, the product head in our organization wanted to sign off on all design hires personally, so we included that round as a final check before making an offer to new candidates.
              </p>
              <p className="mb-12">
                To decide on the interview stages, the best way is to have a skill check at each level of UX writing functions—core UX Writing, Design, and Product. Our process worked something like this:
              </p>

              <div className="bg-white border border-[var(--color-border)] aspect-[16/9] rounded-2xl flex items-center justify-center mb-16">
                <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-widest text-xs">Interview Process Flow Diagram</span>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-16">To Assignment or Not to Assignment — The eternal question</h2>
              <p className="mb-8">
                UX assignments are a contentious topic in our field. Many arguments are made about them being tedious and not adding much value to the process. However, after being on both sides of the aisle, the interviewer and the interviewee - this is my opinion:
              </p>

              <blockquote className="pull-quote">
                A UX assignment is the most precise way to assess a candidate's UX skills and the legitimacy of their abilities. With the rise of AI, it is easier not to be truthful about your skill levels and create a portfolio that looks good. Not everyone will do this - but an assignment is the easiest way to check.
              </blockquote>

              <p className="mb-8">
                I have come to view assignments as a necessary evil, and my approach here is to keep them short and subjective to interpretation. In our assignments, we defined problems to the extent that they were clear but left parameters open to interpretation so we could understand the candidate's UX perspective. To be empathetic to the candidate's time, present a variety of problem statements that require more thinking and less grunt work (like creating detailed prototypes, doing market research, etc.).
              </p>
              <p className="mb-16">
                Once you have set up a process, you will start seeing (hopefully relevant) profiles from your team, and you can begin setting up interviews with them. In the next section, I will talk about how to make the most of the 45 to 60 minutes you will spend talking to every candidate.
              </p>

              {/* Series Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[var(--color-border)]">
                <Link 
                  to="/scaling-part-2" 
                  className="btn-secondary justify-center"
                >
                  ← Part 2
                </Link>
                <Link 
                  to="/scaling-part-4" 
                  className="btn-primary justify-center"
                >
                  Part 4: Being a great interviewer →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScalingPart3;