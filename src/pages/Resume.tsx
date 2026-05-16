"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ role, company, date, bullets, defaultExpanded = false }: any) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{role}</h3>
          <span className="hidden md:block text-[var(--color-border)]">|</span>
          <span className="font-medium text-[var(--color-text-muted)]">{company}</span>
          <span className="hidden md:block text-[var(--color-border)]">|</span>
          <span className="text-sm text-[var(--color-text-muted)]">{date}</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-4">
              {bullets.map((bullet: string, i: number) => (
                <p key={i} className="text-[var(--color-text-muted)] leading-relaxed flex gap-3">
                  <span className="text-[var(--color-accent)] shrink-0">↳</span>
                  <span>{bullet}</span>
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Resume = () => {
  const experiences = [
    {
      role: "Senior UX Writer",
      company: "Angel One",
      date: "Feb 2022 – Present · 1 Promotion",
      defaultExpanded: true,
      bullets: [
        "Leading UX Content strategy and maturity for a suite of 8 financial products serving 20 Million+ Indian investors. 1 Billion+ orders were placed in 2023 on the experiences I helped create.",
        "Guiding 4 UX writers to collaborate with UX designers, researchers, product managers, & developers to deliver compelling UX solutions.",
        "Integrating content components in the design system, maintaining system guidelines and documenting evolving terminologies.",
        "Developing scalable UX writing and style guidelines, best practices, CTA safe word lists, abbreviation lists and a financial terms dictionary."
      ]
    },
    {
      role: "Technical and UX Writer",
      company: "Goscale Inc.",
      date: "Jan 2021 – Jan 2022 · Pandemic Layoff",
      bullets: [
        "Collaborated with UX designers to write micro-copy for 3 products: UI labels, notifications, empty states, pop-ups, error states, and more.",
        "Worked with the CTO to develop technical documentation, product guides, FAQs and release notes."
      ]
    },
    {
      role: "Content Marketing Lead",
      company: "Mason",
      date: "Mar 2020 – Dec 2020",
      bullets: [
        "Worked across teams to create positioning, content marketing strategy, and UX copy for two SaaS products.",
        "Revamped UX copy across the app to help increase completion of feature flows by 37% and decrease support queries by 33%."
      ]
    },
    {
      role: "Senior Content Writer",
      company: "Greytip Software",
      date: "July 2019 – Feb 2020",
      bullets: [
        "Delivered content and copy for all customer & prospect facing marketing efforts: website, landing pages, long-form blogs, newsletters, reports, brochures, and online advertising.",
        "Revamped email nurture campaigns and copies across the user journey to surpass benchmarks (Open Rates >40%, CTRs >6-10%)."
      ]
    }
  ];

  const skills = ["UX Writing", "Content Design", "Content Strategy", "Mentoring", "Leadership", "Project Management", "Attention To Detail", "Prototyping"];
  const tools = ["Figma", "Miro", "JIRA", "Confluence", "Tableau", "Google Docs"];

  const nameWords = ["Sajay", "Jai", "Singh"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[900px] mx-auto">
          {/* Hero */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-24">
            <div>
              <h1 className="text-6xl font-bold mb-4 flex gap-[0.3em]" style={{ fontFamily: 'var(--font-display)' }}>
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-block cursor-default"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <p className="text-xl text-[var(--color-text-muted)]">
                Helping software speak and sound human.
              </p>
            </div>
            <a 
              href="/sajay-resume.pdf" 
              className="btn-primary gap-2"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>

          <div className="space-y-24">
            {/* Experience */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Experience</h2>
              <div className="border-t border-[var(--color-border)]">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
                ))}
              </div>
            </section>

            {/* Skills & Tools */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Tools</h2>
                  <div className="flex flex-wrap gap-2">
                    {tools.map(tool => (
                      <span key={tool} className="tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">MSc Communication & Media — In Progress</h3>
                  <p className="text-[var(--color-text-muted)]">University College Dublin, Ireland</p>
                </div>
                <div className="bg-white border border-[var(--color-border)] p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">B.E. Computer Science & Engineering</h3>
                  <p className="text-[var(--color-text-muted)]">Thapar University, India</p>
                </div>
              </div>
            </section>

            {/* Talks */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Talks & Workshops</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">→ How it works: UX Writing at Angel One</h3>
                  <p className="text-[var(--color-text-muted)]">Topics: How UX writing builds emotional connections, establishes brand personality, and eventually drives business outcomes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">→ Think like a UX Writer: Workshop</h3>
                  <p className="text-[var(--color-text-muted)]">Topics: How PMs can collaborate efficiently with UX writers, write better copy, learn content design practices and ultimately make a better UX.</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Languages</h2>
              <p className="text-xl font-bold">English — Native Proficiency (C2) · IELTS: 8.5</p>
            </section>
          </div>

          <div className="mt-32 pt-12 border-t border-[var(--color-border)]">
            <Link to="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium">
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;