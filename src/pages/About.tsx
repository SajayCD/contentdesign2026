"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import TrackChangesTooltip from '@/components/ui/TrackChangesTooltip';
import { Globe, Music } from 'lucide-react';

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
              <h1 className="text-5xl font-bold mb-12">Hi there, fellow human beings (and their cats 🐱).</h1>
              
              <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-6">
                <p>
                  I'm Sajay, a <TrackChangesTooltip text="also: the person who stopped that error message from ruining your day">Content Designer</TrackChangesTooltip> based in Bengaluru. I specialize in taking complex, high-stakes products and making them feel intuitive, human, and trustworthy.
                </p>
                <p>
                  With over 8 years of experience, I've helped shape products used by millions. My approach is rooted in the belief that content is design, and that the right words can solve problems that pixels alone cannot.
                </p>
              </div>

              {/* Personal Links */}
              <div className="flex flex-wrap gap-4 mt-12">
                <a href="https://sajaysingh.medium.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-2">
                  <Globe size={18} /> Read my Blog
                </a>
                <a href="https://www.instagram.com/sajavibe/" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-2">
                  <Music size={18} /> My Music Page
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[40%] flex justify-center md:justify-end"
            >
              <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/sajay-photo.jpg" 
                  alt="Sajay Jai Singh" 
                  className="w-full h-full object-cover object-[center_top]"
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
            <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-display)' }}>Sidequests & Hobbies</h2>
            <div className="flex flex-wrap gap-6">
              <div className="w-[120px] bg-[#F9F8F5] rounded-xl p-5 flex flex-col items-center text-center">
                <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
                  <circle cx="14" cy="36" r="12" stroke="#4F46E5" strokeWidth="2"/>
                  <circle cx="14" cy="36" r="5" stroke="#4F46E5" strokeWidth="1.5"/>
                  <circle cx="14" cy="36" r="1.5" fill="#4F46E5"/>
                  <circle cx="50" cy="36" r="12" stroke="#4F46E5" strokeWidth="2"/>
                  <circle cx="50" cy="36" r="5" stroke="#4F46E5" strokeWidth="1.5"/>
                  <circle cx="50" cy="36" r="1.5" fill="#4F46E5"/>
                  <rect x="26" y="28" width="12" height="16" rx="2" stroke="#4F46E5" strokeWidth="1.5"/>
                </svg>
                <span className="text-[14px] font-medium text-[var(--color-text)]" style={{ fontFamily: 'var(--font-body)' }}>DJ as Sajavibe</span>
              </div>
              
              <div className="w-[120px] bg-[#F9F8F5] rounded-xl p-5 flex flex-col items-center text-center">
                <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
                  <path d="M4 52 L32 10 L60 52 Z" stroke="#4F46E5" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M24 28 L32 10 L40 28 Z" stroke="#4F46E5" strokeWidth="1.5" strokeLinejoin="round" fill="white"/>
                </svg>
                <span className="text-[14px] font-medium text-[var(--color-text)]" style={{ fontFamily: 'var(--font-body)' }}>Mountain Climbing</span>
              </div>

              <div className="w-[120px] bg-[#F9F8F5] rounded-xl p-5 flex flex-col items-center text-center">
                <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
                  <line x1="16" y1="32" x2="48" y2="32" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
                  <rect x="4" y="22" width="7" height="20" rx="2" stroke="#4F46E5" strokeWidth="2"/>
                  <rect x="53" y="22" width="7" height="20" rx="2" stroke="#4F46E5" strokeWidth="2"/>
                </svg>
                <span className="text-[14px] font-medium text-[var(--color-text)]" style={{ fontFamily: 'var(--font-body)' }}>Lifting Weights</span>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8">Currently researching:</h2>
            <ul className="space-y-4">
              {[
                '[PLACEHOLDER — Sajay will add his thesis summary here]',
                'Taste as a key differentiator in the era of Generative AI',
                'The radical candor framework by Kim Scott'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;