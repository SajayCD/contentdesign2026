"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-12">Hi there, fellow human beings (and their cats).</h1>
            
            <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-6">
              <p>
                I'm Sajay, a Senior Content Designer based in Bengaluru. I specialize in taking complex, high-stakes products and making them feel intuitive, human, and trustworthy.
              </p>
              <p>
                With over 8 years of experience, I've helped shape products used by millions. My approach is rooted in the belief that content is design, and that the right words can solve problems that pixels alone cannot.
              </p>
              <p>
                I've spent a significant part of my career in FinTech, where the challenge is often translating "bank-speak" into something that actually makes sense to a person trying to secure their financial future.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Currently thinking about:</h2>
              <ul className="space-y-4">
                {[
                  'Taste as a key differentiator in the era of Generative AI',
                  'The radical candor framework by Kim Scott',
                  'The revival of house music in clubs across the world'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] mt-1">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-4">Favourite creators:</h2>
              <p className="text-[var(--color-text-muted)]">
                Yuval Noah Harari, Kurzgesagt, Tim Urban, John Mayer, Neil deGrasse Tyson, Paras Chopra.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-tag-bg)] aspect-[4/5] rounded-2xl flex items-center justify-center border border-[var(--color-border)] sticky top-32"
          >
            <span className="text-[var(--color-text-muted)] font-medium">[Photo]</span>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;