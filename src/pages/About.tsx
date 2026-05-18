"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import TrackChangesTooltip from '@/components/ui/TrackChangesTooltip';
import { Globe, FileText, Linkedin, Headphones } from 'lucide-react';
import HobbyCard from '@/components/about/HobbyCard';
import SocialLinkCard from '@/components/about/SocialLinkCard';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-[60%]"
            >
              <h1 className="text-5xl font-bold mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                Hi there, fellow human beings (and their cats 🐱).
              </h1>
              
              <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-6" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  I'm Sajay, a <TrackChangesTooltip text="also: the person who stopped that error message from ruining your day">Content Designer</TrackChangesTooltip> based in Bengaluru. I specialize in taking complex, high-stakes products and making them feel intuitive, human, and trustworthy.
                </p>
                <p>
                  With over 8 years of experience, I've helped shape products used by millions. My approach is rooted in the belief that content is design, and that the right words can solve problems that pixels alone cannot.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[40%] flex justify-center md:justify-end"
            >
              <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-none border-none outline-none ring-0 ring-offset-0">
                <img 
                  src="/sajay-photo.jpg" 
                  alt="Sajay Jai Singh" 
                  className="w-full h-full object-cover object-[center_top] border-none outline-none shadow-none ring-0"
                  style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Sidequests Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-12" style={{ fontFamily: 'var(--font-display)' }}>Sidequests & Hobbies</h2>
            <div className="flex flex-wrap gap-6">
              <HobbyCard 
                icon={
                  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="36" r="12" stroke="#4F46E5" strokeWidth="2"/>
                    <circle cx="14" cy="36" r="5" stroke="#4F46E5" strokeWidth="1.5"/>
                    <circle cx="14" cy="36" r="1.5" fill="#4F46E5"/>
                    <circle cx="50" cy="36" r="12" stroke="#4F46E5" strokeWidth="2"/>
                    <circle cx="50" cy="36" r="5" stroke="#4F46E5" strokeWidth="1.5"/>
                    <circle cx="50" cy="36" r="1.5" fill="#4F46E5"/>
                    <rect x="26" y="28" width="12" height="16" rx="2" stroke="#4F46E5" strokeWidth="1.5"/>
                  </svg>
                }
                label="DJ as Sajavibe"
                backText="Sajavibe on Instagram"
                backSymbol="♪"
              />
              
              <HobbyCard 
                icon={
                  <svg viewBox="0 0 64 64" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 54 L32 10 L58 54 Z" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M23 30 L32 10 L41 30 Z" fill="white" stroke="#4F46E5" strokeWidth="1.5" strokeLinejoin="round"/>
                    <line x1="32" y1="10" x2="32" y2="4" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M32 4 L38 7 L32 10 Z" fill="#4F46E5"/>
                  </svg>
                }
                label="Mountain Climbing"
                backText="Last climb: Glendalough, Co. Wicklow"
                backSymbol="★"
              />

              <HobbyCard 
                icon={
                  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="16" y1="32" x2="48" y2="32" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
                    <rect x="4" y="22" width="7" height="20" rx="2" stroke="#4F46E5" strokeWidth="2"/>
                    <rect x="53" y="22" width="7" height="20" rx="2" stroke="#4F46E5" strokeWidth="2"/>
                  </svg>
                }
                label="Lifting Weights"
                backText="My favourite lift is the bench press"
                backSymbol="↑"
              />
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Currently researching:</h2>
            <ul className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
              {[
                '[PLACEHOLDER — Sajay will add his thesis summary here]',
                'Taste as a key differentiator in the era of Generative AI',
                'The radical candor framework by Kim Scott'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">↳</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Find me elsewhere Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Find me elsewhere</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SocialLinkCard icon={FileText} label="Resume" href="/resume" />
              <SocialLinkCard icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/sajaysingh/" isExternal />
              <SocialLinkCard icon={Globe} label="Blog" href="https://sajaysingh.medium.com/" isExternal />
              <SocialLinkCard icon={Headphones} label="Music" href="https://www.instagram.com/sajavibe/" isExternal />
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;