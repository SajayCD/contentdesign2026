"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import TrackChangesTooltip from '@/components/ui/TrackChangesTooltip';
import { Globe, Linkedin, Headphones } from 'lucide-react';
import HobbyCard from '@/components/about/HobbyCard';
import SocialLinkCard from '@/components/about/SocialLinkCard';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-[60%]"
            >
              <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Meow Meow 🐱
              </h1>
              
              <div className="space-y-6 text-[var(--color-text)] text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  Somebody once told me only cats visit 'about' pages on websites, welcome to my little corner on the internet! I'm Sajay, a <TrackChangesTooltip text="also: the person who stopped that error message from ruining your day">Content Designer</TrackChangesTooltip> based in Dublin, Ireland. I specialize in taking complex, high-stakes product language and making it feel intuitive, human, and trustworthy.
                </p>
                <p>
                  Personally, the most fascinating things to me are artistic expression, the creative process, the importance of storytelling and creating beautiful things. I practice being an artist in as many different mediums as possible. I am obsessed with pop culture; I believe it is our medium for telling stories and connecting with other humans. I am also curious about different cultures: the way we set up societies, what stories we tell ourselves, <a href="https://youtu.be/zen-m0rMp4I?si=GHGcifLt1GwZRezM" target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] underline">our imagined realities</a>, and how the core tenets of human behaviour drive every culture.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[40%] flex justify-end"
            >
              <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
                <img 
                  src="/sajay-photo.jpg" 
                  alt="Sajay Jai Singh" 
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
            </motion.div>
          </div>

          {/* Currently Researching Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-[var(--color-text)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Currently Researching:</h2>
            <ul className="space-y-4 text-[var(--color-text)]" style={{ fontFamily: 'var(--font-body)' }}>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] mt-1">↳</span>
                <span className="text-lg leading-relaxed">
                  As a part of my MSc in Communications and Media at UCD, I am researching how the language on various financial platforms (for investing, trading, gambling, prediction markets) can steer and shape user agency. This ties in a UX and sociology perspective to produce original academic research on the effect of language in the apps we use.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] mt-1">↳</span>
                <span className="text-lg leading-relaxed">
                  Can the presence of bots on social media change how likely you are to voice your opinion? Can they tip the scales in terms of a public debate? <a href="https://docs.google.com/document/d/1tt4SyVgq12U6E9OCuar8R1eaZLTHZg9DFrNImyT4gwU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] underline">Read more →</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] mt-1">↳</span>
                <span className="text-lg leading-relaxed">
                  How does YouTube rank a heavily discussed term like "Prediction Markets" during a regulatory event? What factors play into it and what voices are privileged? <a href="https://docs.google.com/document/d/1aw1y0BIDyu6mgmu2WcHmI7XhGarfhQPWz51oR0c-wF4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] underline">Read more →</a>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Sidequests Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-[var(--color-text)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Sidequests & Hobbies</h2>
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

          {/* Find me elsewhere Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Find me elsewhere</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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