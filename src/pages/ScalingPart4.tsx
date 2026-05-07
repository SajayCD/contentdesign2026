"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';

const ScalingPart4 = () => {
  const tips = [
    {
      title: "PREPARE WELL",
      text: "Interview preparation is not limited to candidates. You have limited time to decide on every candidate—prepare well to make the best use of it. Go through the candidates' resumes and portfolios. Notice the minor details. Prepare your questions ahead of time. Dress well (even if it is a video call) and show up on time."
    },
    {
      title: "PROVIDE AN INTERVIEW STRUCTURE",
      text: "Candidates may be interviewing at multiple places, and every company has a slightly varied process. Go with the assumption that the candidate does not know anything about the process you follow, and help set the context for them. I find it helpful to also set a time structure for the interview call - for example, if I have 55 mins, I will split it into sections of 20:20:15 for the 3 most important things I want to cover."
    },
    {
      title: "BE A (REALLY) GOOD LISTENER",
      text: "If there is one thing you want to take away from this list - learn how to become a great listener. To get to know someone the most you can in a short interview, you have to become the best listener in the room. Become comfortable with silence, ask open ended questions, and give people time to speak. Again, I would be amiss if I did not list Chris Voss's tips on how to become a good listener."
    },
    {
      title: "MAKE PEOPLE COMFORTABLE, AND FORGIVE MINOR MISTAKES",
      text: "There is a quote that goes, \"Give people enough time to talk, and they will always tell you about themselves.\" The more comfortable the person you're talking to is, the more you can learn about them. This is a serious, professional setting, and they probably feel the pressure. So smile, take it easy, take some pressure off them, and understand the person in front of you (physically or virtually) is human. We often mirror the behaviour of those around us, so if you're calm and relaxed, they're also likely to be comfortable."
    },
    {
      title: "TAKE NOTES AND MAKE A LARGE CONTEXT ASSESSMENT",
      text: "Now that you have made your candidate comfortable, go into apex observation zone. Observe everything they do - how they respond to questions, how they take criticisms, how they present, how they talk about other people. It is important to make a judgement based on as much data as you have about them - decisions should never be based on single criteria (for example, a well-prepared answer about work on their favourite project). When interviewing multiple candidates, I have found that making notes about these observations, even the smallest ones, helps in the decision making process."
    },
    {
      title: "DIG INTO CLAIMS, ESPECIALLY AMBITIOUS ONES",
      text: "When people talk about their work - there will be ambitious claims. I see them as a positive sign; these claims show competency and (at least) an intent to do good work. It is important to keep asking questions, get into the minute details, and ask them to elaborate as much as possible. The comfort and proficiency of their answers will tell you if they have actually done that work."
    },
    {
      title: "ADAPTABILITY IS UNDERRATED",
      text: "Great traits to look out for while a candidate talks about their work are flexibility and adaptability. This aligns with my perspective on values over responsibilities. Someone may be great at doing one job - but how well do they adapt when parameters out of their control change? This is sometimes also called \"thinking on your feet\"; however, I believe that phrase is a bit reductionist. It implies that there is a lack of time. This is seldom the case, but you need the people in your team to figure out the solutions themselves. Watch out for this skill while talking to people."
    },
    {
      title: "DO NOT FEEL GUILTY",
      text: "As designers, we are highly empathetic people. I have sometimes noticed my colleagues hesitating to ask the difficult questions or make the candidate uncomfortable, even if they have a suspicion that needs further clarity. This is natural. We build products that ease people's lives and we want to keep others comfortable. However, it is important to understand that this is an 'evaluation' of their skills and not a social event. Finding the best-suited candidate for this role is your job, so do not hesitate to play the devil's advocate if needed. All of this works as long as you are respectful to the other person."
    },
    {
      title: "ALWAYS KEEP TIME FOR THEIR QUESTIONS, PROVIDE AMPLE CONTEXT",
      text: "This is a simple part of the process that adds a lot of value. The quality of questions candidates ask reflects how much they have thought about this role. And your answers to them reflect your entire design org. It's a great time to hear candid thoughts from them and make a good impression of your org."
    },
    {
      title: "ASK CANDIDATES FOR FEEDBACK",
      text: "Lastly, make sure to ask for feedback from every candidate on your hiring process. In most cases, there are gaps that will most likely be discovered only from a candidate's perspective. It is crucial to hear them out, even if they are not selected for the position. This will likely make your process much more candidate-friendly over time."
    }
  ];

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
            <span className="text-[var(--color-text)] font-medium">Part 4</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs mb-4">
              Part 4 of 5
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-12 leading-tight">
              Being a great interviewer
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-12">
                I have interviewed candidates at all levels and at different stages of the interview process, overseeing the hiring of 6 UX writers in our team. Over 100+ interviews, these are my insights and tips to remember if you're just starting. Based on your experience conducting interviews, some might be redundant to you; please feel free to skip them.
              </p>

              <div className="space-y-16 mb-24">
                {tips.map((tip, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="text-6xl font-bold text-[var(--color-accent)] opacity-20 select-none leading-none">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{tip.title}</h3>
                      <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-16">Passing on interview feedback</h2>
              <p className="mb-8">
                This is part of the interview insights, but I have kept it as a separate section to emphasize the importance of passing on great-quality feedback.
              </p>

              <blockquote className="pull-quote">
                Your interviews are only as good as the feedback you give to the other members of your panel - be sincere and provide as many details as you can.
              </blockquote>

              <p className="mb-12">
                I have observed a surprising number of people (even in senior management) who are great at taking interviews but provide just a few words of feedback. This blocks the next panellist—they have to find out information about your interview instead of building upon it. Conversely, when you provide objective, detailed feedback, the next panellist can build up on your observations and follow up on the points to be tested.
              </p>
              <p className="mb-12">
                Here is a simple framework for providing interview feedback:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-[var(--color-accent)]">3 PROS</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      <span>Great understanding of design and UX.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      <span>Experience working with multiple stakeholders and multiple projects concurrently.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      <span>Good clarity of thoughts and is confident in their approach.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-red-500">3 CONS</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">→</span>
                      <span>Has worked in a very fixed, limited-scope role. Will need handholding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">→</span>
                      <span>Does not have experience on content strategy and process thinking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">→</span>
                      <span>Has worked only with writing for US English, not experienced in other locales.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xl font-bold mb-12 text-center">
                CONCLUSION LINE: Let us move them to the next round.
              </p>

              <p className="mb-12">
                Be objective in both your pros and cons, and do not feel guilty about being truthful. Remember, it is your job to provide the clearest picture and get the best-suited candidate for your team.
              </p>
              <p className="mb-16">
                In the next part of this series, I will be talking about onboarding new candidates, understanding their career goals, strengths and weaknesses, and setting them up for success.
              </p>

              {/* Series Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[var(--color-border)]">
                <Link 
                  to="/scaling-part-3" 
                  className="btn-secondary justify-center"
                >
                  ← Part 3
                </Link>
                <Link 
                  to="/scaling-part-5" 
                  className="btn-primary justify-center"
                >
                  Part 5: Onboarding and setting people up for success →
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

export default ScalingPart4;