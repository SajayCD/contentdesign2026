"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';

const ScalingPart2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-12">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">All Work</Link>
            <span>→</span>
            <Link to="/work/content-design-org" className="hover:text-[var(--color-accent)] transition-colors">Scaling a Content Design Org</Link>
            <span>→</span>
            <span className="text-[var(--color-text)] font-medium">Part 2</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs mb-4">
              Part 2 of 5
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-12 leading-tight">
              Figuring out who you want to hire
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                In the last section, we talked about convincing your boss and higher management to hire new team members. Once you have their alignment and agreement, you might be asked an essential question: "What/who are we looking for?"
              </p>
              <p className="mb-12">
                This might seem like your manager's job - but you can add value to this process. The better your answer to this question, the easier it will be for management to understand, and the easier things will be for you further in this process. You're the closest to the day-to-day work, so you are the best person to answer what your team needs - if your management is open to it, take advantage of this opportunity.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-16">From 'I' to 'Team': The 2nd person you hire</h2>
              <p className="mb-8">
                Something important changes when you go from an individual contributor to a team. The change happens at this stage only, but impacts all future stages of your team.
              </p>
              <p className="mb-8">
                When you are the sole writer of the team, the entire perception of the UX writing team is based on how you work. When you start adding team members, you become a "UX Writing Team." All collaborators from other teams and the organization will look at you as a team, and your colleague(s) will be an equal part of how that team is perceived.
              </p>

              <blockquote className="pull-quote">
                Whoever you bring on to your team at this stage will be your partner in crime, achievements, and adversity. Be very mindful of what kind of responsibilities you're looking for your teammate to take—and, more importantly, what values will best complement yours.
              </blockquote>

              <h2 className="text-3xl font-bold mb-6 mt-16">Define responsibilities, but define values better</h2>
              <p className="mb-8">
                When defining the responsibilities for your future teammates, be liberal in defining the responsibilities you'd want them to take. Yes, there will be things you are sure of, but hiring and onboarding members is a very dynamic process (something I will talk more about later in this series). Often, the person you interview and the person who joins your team will differ in some aspects.
              </p>
              <p className="mb-12">
                So, while you need to define the responsibilities to get hiring started, a far more important part of the job description also needs to be defined: values.
              </p>
              <p className="mb-8">
                Here is an example: In our product team, due to a lack of awareness of UX writing, developers would miss many UX copy instances while implementing the design in the actual build. It was a process issue.
              </p>
              <p className="mb-8">
                Solving this at the organisational level required better processes that everyone would be on board with. Meanwhile, the UX writers had to be obsessed with getting the details correct. It could mean checking the exact UX string in up to six different places and ensuring it was accurate—in the Figma file, in the test build with QA, and then in the actual build, later updating the .txt file with developers. It could get tedious, but we needed someone with obsessive attention to detail (someone similar to me).
              </p>
              <p className="mb-12">
                Here is an example of a complementary value: We knew someone we needed to create more awareness about the work of the UX writing team in the org. While more strategic plans were in place, having someone who loves talking to people would be a great addition to team. It was something I didn't mind doing, but I was (and am) not a bubbly extrovert. I like to get deeper into the projects with the relevant people. While hiring the second person, we focused on this value, which helped our team massively in the long run.
              </p>
              <p className="mb-12">
                More examples of values are sincerity with timelines, flexibility to ad-hoc requirements, negotiation skills, and the ability to push back demanding stakeholders. These values are subjective, and their importance is completely contextual to your situation.
              </p>

              <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm mb-12">
                <p className="mb-8">
                  Values often get talked about on company websites as boilerplate, buzzword cocktails. However, when hiring for a younger team, it is essential to define the "professional values" that you want in your colleagues. This will depend on how and where you and your manager see the team going and your own strongest and weakest values.
                </p>
                <p className="font-medium">
                  When you hire for the correct values instead of just "responsibilities," you ensure that even if the role's responsibilities change, the person will be a good fit for the team in the long term.
                </p>
              </div>

              <p className="mb-16">
                Once you figure out the values you want to hire for, you'll need to prepare for a new aspect of your role: setting up a hiring process.
              </p>

              {/* Series Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[var(--color-border)]">
                <Link 
                  to="/scaling-part-1" 
                  className="btn-secondary justify-center"
                >
                  ← Part 1
                </Link>
                <Link 
                  to="/scaling-part-3" 
                  className="btn-primary justify-center"
                >
                  Part 3: Setting up a hiring process →
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

export default ScalingPart2;