"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Typewriter from '@/components/ui/Typewriter';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DictionaryTooltip from '@/components/ui/DictionaryTooltip';

const Index = () => {
  const caseStudies = [
    {
      id: '1',
      number: '01',
      title: 'From 50k to 500k+: The Mutual Funds Revamp',
      impact: '1,160% growth in 12 months',
      tags: ['Content Design', 'FinTech'],
      slug: 'mutual-funds'
    },
    {
      id: '2',
      number: '02',
      title: 'Scaling a Content Design Org: A Blueprint',
      impact: 'From 1 to 5 writers',
      tags: ['Leadership', 'Strategy'],
      slug: 'content-design-org'
    },
    {
      id: '3',
      number: '03',
      title: 'Content in Design System',
      impact: 'Voice & Tone at scale',
      tags: ['Systems', 'Standards'],
      slug: 'design-system'
    },
    {
      id: '4',
      number: '04',
      title: 'Design Audits: A Hedge Against Design Debt',
      impact: '900+ dev hours saved annually',
      tags: ['Process', 'Governance'],
      slug: 'design-audits'
    },
    {
      id: '5',
      number: '05',
      title: 'Content Design Acceptance Testing (CDAT)',
      impact: '936 hours saved/year',
      tags: ['Process', 'QA'],
      slug: 'cdat'
    },
    {
      id: '6',
      number: '06',
      title: 'Workshops & Talks',
      impact: 'Evangelism across 50+ team members',
      tags: ['Advocacy', 'Education'],
      slug: 'workshops'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen flex items-center px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto w-full">
            <ScrollReveal>
              <h1 className="text-[clamp(56px,8vw,88px)] font-bold mb-8 leading-[1.1]">
                Sajay Jai Singh
              </h1>
              
              <div className="text-[clamp(24px,4vw,48px)] font-medium mb-8 min-h-[1.2em]">
                <Typewriter text="Helping software speak and sound human." />
              </div>
              
              <div className="space-y-2 mb-12">
                <p className="text-xl text-[var(--color-text-muted)]">
                  <DictionaryTooltip>Content Designer</DictionaryTooltip> · MSc Media and Communications, University College Dublin
                </p>
                <p className="text-xl text-[var(--color-text-muted)]">
                  1 billion+ orders placed on the experiences I helped shape.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#work" className="btn-primary">See my work →</a>
                <Link to="/resume" className="btn-secondary">View Resume</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal className="mb-16">
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-tighter leading-none">
                Selected Work
              </h2>
            </ScrollReveal>
            
            <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {caseStudies.map(study => (
                <CaseStudyCard key={study.id} {...study} />
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-8">Beyond the pixels.</h2>
              <p className="text-xl text-[var(--color-text-muted)] mb-8">
                I believe that words are the most powerful design tool we have. When we get the language right, the interface almost disappears.
              </p>
              <Link to="/about" className="text-[var(--color-accent)] font-medium hover:underline">
                More about me →
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;