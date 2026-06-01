"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ExperienceCard = ({ company, date, roles, defaultExpanded = false }: any) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-4 flex justify-between items-center text-left group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{company}</h3>
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
            <div className="pb-4 space-y-8">
              {roles.map((role: any, roleIdx: number) => (
                <div key={roleIdx} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-lg font-bold text-[var(--color-text)]">{role.title}</h4>
                    <span className="text-sm text-[var(--color-text-muted)]">— {role.date}</span>
                    {role.promoted && (
                      <Badge variant="secondary" className="bg-indigo-50 text-[var(--color-accent)] border-indigo-100 font-bold">
                        ↑ Promoted
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    {role.bullets.map((bullet: string, i: number) => (
                      <p key={i} className="text-[var(--color-text-muted)] leading-relaxed flex gap-3">
                        <span className="text-[var(--color-accent)] shrink-0">→</span>
                        <span>{bullet}</span>
                      </p>
                    ))}
                  </div>
                </div>
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
      company: "Angel One Ltd.",
      date: "Feb 2022 – Oct 2024",
      defaultExpanded: true,
      roles: [
        {
          title: "Senior UX Writer",
          date: "Mar 2024 – Oct 2024",
          promoted: true,
          bullets: [
            "Guided 4 UX writers to collaborate with UX designers, researchers, & product managers to deliver compelling UX solutions.",
            "Led UX content strategy for 8 fintech products, serving 20 million Indian investors and driving over 1 billion orders in 2024.",
            "Integrated content components in the design system, maintaining system guidelines for scalability & cross-regional consistency."
          ]
        },
        {
          title: "UX Writer",
          date: "Feb 2022 – Mar 2024",
          bullets: [
            "Worked with UX designers and product managers to brainstorm and prototype user flows across 4 different products.",
            "Created microcopy for all UX flows, partnering with UX researchers to incorporate insights into content solutions.",
            "Developed UX writing guidelines & best practices to ensure consistency across cross-functional teams."
          ]
        }
      ]
    },
    {
      company: "SDOD Technologies Pvt. Ltd.",
      date: "Jan 2021 – Jan 2022",
      roles: [
        {
          title: "Technical Writer",
          date: "Jan 2021 – Jan 2022",
          bullets: [
            "Collaborated with UX designers to prototype and design content for 3 products: UI labels, notifications, empty states, pop-ups, error states, and more.",
            "Revamped UX for product support flows, decreasing support tickets by 30% & accelerating user onboarding by 2 weeks."
          ]
        }
      ]
    },
    {
      company: "Vokab Technologies Pvt. Ltd.",
      date: "May 2020 – Nov 2020",
      roles: [
        {
          title: "Member, Growth Team",
          date: "May 2020 – Nov 2020",
          bullets: [
            "Revamped UX copy for 2 SaaS products, boosting feature flow completion by 37%.",
            "Worked across teams to create positioning strategies, content marketing plans, & engaging content design."
          ]
        }
      ]
    },
    {
      company: "Greytip Software Pvt. Ltd.",
      date: "Jul 2019 – Mar 2020",
      roles: [
        {
          title: "Senior Content Writer",
          date: "Jul 2019 – Mar 2020",
          bullets: [
            "Delivered user-focused marketing content across: website, landing pages, long-form blogs, newsletters, and online advertising.",
            "Revamped email campaigns for accessible and inclusive messaging, achieving open rates over 40% and CTRs over 6–10%."
          ]
        }
      ]
    },
    {
      company: "Self Employed",
      date: "Jan 2018 – Jun 2019",
      roles: [
        {
          title: "Content Marketing Writer",
          date: "Jan 2018 – Jun 2019",
          bullets: [
            "Worked on 15+ projects with 10+ companies globally, including industry leaders such as LiveChat Inc.",
            "Successfully created and launched campaigns for: North America, Europe, Israel, and South East Asia."
          ]
        }
      ]
    },
    {
      company: "Soultrippy Adventures Pvt. Ltd.",
      date: "Jun 2017 – Dec 2017",
      roles: [
        {
          title: "Digital Marketing Executive",
          date: "Jun 2017 – Dec 2017",
          bullets: [
            "Executed content marketing strategies for blogs, social media, newsletters, emails, and all other engagement channels.",
            "Increased organic web traffic from 3,000 to 25,000 visits/month; organic traffic share from 5% to 38%."
          ]
        }
      ]
    }
  ];

  const technicalSkills = ["UX Writing", "Content Design", "Content Strategy", "Cross-functional Leadership", "A/B Testing", "Project Management", "Design Thinking", "Prototyping"];
  const tools = ["Figma", "Adobe XD", "Jira", "Confluence", "Miro", "Tableau", "Trello", "Asana"];

  const nameWords = ["Sajay", "Jai", "Singh"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[900px] mx-auto">
          {/* Hero */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <h1 className="text-6xl font-bold mb-4 flex gap-[0.3em]" style={{ fontFamily: 'var(--font-display)' }}>
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      delay: 1.2 + (i * 0.15), 
                      duration: 0.4, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ y: -4 }}
                    className="inline-block cursor-default"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <div className="space-y-2">
                <p className="text-base text-[#6B6B6B] max-w-xl">
                  Computer science engineer. Sociology master's student. Both sides of the human-machine equation.
                </p>
              </div>
            </div>
            <a 
              href="/sajay-resume.pdf" 
              className="btn-primary gap-2"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>

          <div className="space-y-8">
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
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Technical Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map(skill => (
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

            {/* Languages */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Languages</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xl font-bold">English — C2, Native Proficiency · IELTS Band Score: 8.5</p>
                  <a 
                    href="https://drive.google.com/file/d/15gC33mzQmMAfeis5Ip6JzNhtlv9U3d4e/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-xl font-bold">Hindi — Mother tongue</p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-[var(--color-border)] px-8 py-4 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">
                    MSc Communication and Media
                    <span className="inline-block text-[11px] font-semibold text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-full ml-2 align-middle">
                      EQF Level 8
                    </span>
                  </h3>
                  <p className="text-[var(--color-text-muted)] mb-1">University College Dublin, Ireland</p>
                  <p className="text-sm font-medium text-[var(--color-accent)]">Sep 2025 – Present</p>
                </div>
                <div className="bg-white border border-[var(--color-border)] px-8 py-4 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Bachelor of Engineering in Computer Engineering</h3>
                  <p className="text-[var(--color-text-muted)] mb-1">Thapar University, Patiala, India</p>
                  <p className="text-sm font-medium text-[var(--color-accent)]">Jul 2013 – Jun 2017</p>
                </div>
              </div>
            </section>

            {/* Talks */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Talks & Workshops</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-2">→ How it works: UX Writing at Angel One</h3>
                  <p className="text-[var(--color-text-muted)] mb-4">Topics: How UX writing builds emotional connections, establishes brand personality, and eventually drives business outcomes.</p>
                  <Link to="/work/workshops" className="text-sm font-bold text-[var(--color-accent)] hover:underline">
                    ↗ View case study
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">→ Think like a UX Writer: Workshop</h3>
                  <p className="text-[var(--color-text-muted)] mb-4">Topics: How PMs can collaborate efficiently with UX writers, write better copy, learn content design practices and ultimately make a better UX.</p>
                  <Link to="/work/workshops" className="text-sm font-bold text-[var(--color-accent)] hover:underline">
                    ↗ View case study
                  </Link>
                </div>
              </div>
            </section>

            {/* Honours */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">Honours & Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    ★
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Employee of the Quarter</h3>
                    <p className="text-[var(--color-text-muted)]">Angel One · April 2023</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    ★
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Team of the Quarter</h3>
                    <p className="text-[var(--color-text-muted)]">Angel One · May 2024</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-12 border-t border-[var(--color-border)]">
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