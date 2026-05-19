"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const ScalingPart1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-12">
            <Link 
              to="/" 
              className="group inline-flex items-center gap-[6px] hover:text-[var(--color-accent)] transition-all duration-200"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
              <span>All Work</span>
            </Link>
            <span>→</span>
            <Link to="/work/content-design-org" className="hover:text-[var(--color-accent)] transition-colors">Scaling a Content Design Org</Link>
            <span>→</span>
            <span className="text-[var(--color-text)] font-medium">Part 1</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs mb-4">
              Part 1 of 5
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-12 leading-tight">
              Convincing your stakeholders
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                This is the first step to expanding your team. Only if your management and higher management are convinced that you need more UX writers, will everything else happen.
              </p>
              <p className="mb-8">
                In the previous part of this series, I mentioned a curse of the fledgling discipline, where the work done by our team is often seen as a 'good to have' but not a 'must have'.
              </p>
              <p className="mb-12">
                It is possible to change this perception, and it is precisely what you have to do—show your team your impact and show them how much more could be achieved with a larger team.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">How much work you do vs How much of your work is 'seen'</h2>
              <p className="mb-8">
                As the first UX writers, we may often do more work than others see. It is important to remember that you set the standard for how people perceive your work—specifically if you report to a senior designer or design head, who may not fully understand a content designer's daily tasks.
              </p>
              <p className="mb-8">
                At any given time, you may be collaborating with multiple PMs and UX Designers and working on various flows. However, this only matters if higher management can "see" and "realize" that you are wearing multiple hats.
              </p>
              <p className="mb-12">
                A simple way of doing this without seeming dismissive is to show your stakeholders the problem, not tell them. Classic storytelling advice that applies to most things in life.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">Show, don't tell your stakeholders</h2>
              
              <div className="bg-white border-l-4 border-[var(--color-accent)] p-8 rounded-r-2xl shadow-sm mb-12 italic text-xl leading-relaxed">
                This is tricky - have to show them that you are capable of managing multiple projects at once, but also that things would be better if there were more people in your team. This is actually a team problem, not your problem.
              </div>

              <p className="mb-12">
                This strategy requires some groundwork, ideally from the time you join your organisation.
              </p>

              <div className="space-y-12 mb-16">
                {[
                  "From the first project, ensure you go over and above to deliver the best work possible. We all know first impressions matter, and your new team members are more likely to trust your word if you consistently deliver what you promise.",
                  "Keep excellent documentation of your current, 'in progress', and 'planned' work. Share these updates with your manager even if they don't ask for them.",
                  "Your manager will most likely ask your peers from the design and product team for feedback on your work - and the better that feedback, the more you can build trust with your manager."
                ].map((text, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-5xl font-bold text-[var(--color-accent)] opacity-20 select-none">
                      0{i + 1}
                    </div>
                    <p className="text-lg pt-2">{text}</p>
                  </div>
                ))}
              </div>

              <p className="mb-12">
                This is why we're laying all this groundwork - to build trust with your manager and team.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">Just another day</h2>
              <p className="mb-8">
                Let's discuss a scenario that all UX writers will encounter at some point in their role.
              </p>
              <p className="mb-8">
                Imagine you are working concurrently on two projects, and now PM#3 wants your expertise on a new feature they are building.
              </p>
              <p className="mb-12">
                The most important thing to PM#3 is getting their project live; they do not care too much if you're involved in other projects. All they know is that a UX writer is available to help with the content design of their flow.
              </p>

              <div className="bg-[var(--color-tag-bg)] p-8 rounded-2xl mb-12 space-y-4">
                {[
                  "Have a realistic conversation with your PM and manager about your bandwidth.",
                  "Show them your current workload and the time needed to deliver on existing projects.",
                  "Present two options for managing the new project:\n→ Delay the newest project until one of your in-progress projects is completed.\n→ Drop something from your current projects to take on the new project.",
                  "Who decides the priority for these projects? It is the product team's job. So, the ball is now in the product team's court to determine the project-level priority.",
                  "By implementing this strategy, you have:"
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4">
                      <span className="font-bold text-[var(--color-accent)] w-5 shrink-0">{i + 1}.</span>
                      <p className="whitespace-pre-line m-0">{step}</p>
                    </div>
                    {i === 4 && (
                      <div className="pl-9 mt-4 space-y-3">
                        <p className="m-0">→ Demonstrated to the product team that you are collaborative and receptive to their requirements, rather than dismissive.</p>
                        <p className="m-0">→ Shown your manager and upper management the clear necessity for more folks on your team, instead of telling them.</p>
                        <p className="m-0">→ Helped the product team in prioritizing their requirements more effectively.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mb-8">
                That said, as you get deeper into the organization, there will definitely be times when you need to say "no"—something that designers, as empathetic people, dread doing.
              </p>
              <p className="mb-12">
                I have a very different opinion on this. Content designers need to be great at prioritizing; we need to be comfortable saying "no" without feeling guilty. If used correctly, "no" can become our best friend for being focused and creating the best work of our lives.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">Saying "no" and setting boundaries</h2>
              <p className="mb-8">
                Steve Jobs may be the most overquoted entrepreneur of all time, but I believe one of the things that made him so unique was his ability to motivate people to prioritize and stay focused. I am a massive fan of his idea of the entire product portfolio fitting on one table. Another one of my favourite ideas of his is about focus and the word 'no'.
              </p>
              <p className="mb-8">
                Here lies the most crucial distinction—saying 'no' is not a result of being unwilling to work on something; it is a result of having something more important on your plate. We have to be able to convince our peers about this distinction.
              </p>
              <p className="mb-12">
                Make it clear to your collaborators that if something more important comes up, you have no problem taking it up. However, the product team's prioritization should be clear, transparent, and respectful of your time.
              </p>

              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm mb-12">
                <div className="flex items-center gap-3 mb-4 text-[var(--color-accent)]">
                  <BookOpen size={24} />
                  <span className="font-bold uppercase tracking-widest text-xs">Book Recommendation</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Never Split The Difference</h3>
                <p className="text-[var(--color-text-muted)] mb-8">by Chris Voss</p>
                <p className="mb-8">
                  One of the best books I have read about this kind of negotiation (a part of everyday life) is Never Split The Difference by Chris Voss. Chris Voss is much better at explaining this topic than I am and I suggest reading his book. My cliff notes from the book (but seriously, go ahead and read it for yourself):
                </p>
                <ul className="space-y-3 list-none p-0">
                  {[
                    "All of life is a negotiation - and that's not a bad thing.",
                    "Negotiation is a skill that can be learned.",
                    "The best negotiators are usually the best listeners in the room.",
                    "Repeating this: listen as hard as you can to your counterparts.",
                    "Never make your counterpart in a negotiation feel like an 'adversary' - they should feel like a 'friend' and that you understand them.",
                    "All deadlines are negotiable - if you are willing to ask the right questions.",
                    "Emergency can be manufactured and can be taken away."
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-12">
                In a product and UX context, we teach our colleagues and peers how to work with us and how to respect our time, so setting boundaries is as important as any other part of your role.
              </p>
              <p className="mb-8">
                Back to our main topic: Once you have convinced your manager that you need more people in your organization, you might be asked a very important question: "What/who are we looking for?"
              </p>
              <p className="mb-16">
                In the next part of this series, I lay out the strategies and approaches to figure out who you want on your team to complement your skills.
              </p>

              {/* Series Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[var(--color-border)]">
                <Link 
                  to="/work/content-design-org" 
                  className="btn-secondary justify-center"
                >
                  ← Back to Overview
                </Link>
                <Link 
                  to="/scaling-part-2" 
                  className="btn-primary justify-center"
                >
                  Part 2: Figuring out who you want to hire →
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

export default ScalingPart1;