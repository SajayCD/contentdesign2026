"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Mail } from 'lucide-react';
import DictionaryTooltip from '@/components/ui/DictionaryTooltip';

const Recruiter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-8">Hi there, future colleague. You look nice today.</h1>
            
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-[var(--color-text-muted)]">I AM</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>A Senior Content Designer with 5+ years of experience in high-growth tech.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>Specialized in FinTech, Design Systems, and scaling content organizations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>With a proven track record: 1,160% growth in SIPs at Angel One through content strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>Based out of (sometimes) sunny Dublin, Ireland 🌦️.</span>
                </li>
              </ul>
            </div>

            {/* Get in touch moved up */}
            <div className="bg-[var(--color-tag-bg)] rounded-2xl p-8 mb-12">
              <h2 className="text-xl font-bold mb-4">Get in touch</h2>
              <p className="text-lg mb-6">I am currently open to new opportunities. Reach out at</p>
              <a 
                href="mailto:sajay.contentjedi@gmail.com" 
                className="text-2xl font-medium text-[#4F46E5] hover:underline"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                sajay.contentjedi@gmail.com
              </a>
            </div>

            {/* Unique Page Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <a href="mailto:sajay.contentjedi@gmail.com" className="btn-secondary justify-center py-6">
                <Mail size={20} /> Mail
              </a>
              <a href="https://www.linkedin.com/in/sajaysingh/" target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center py-6">
                <Linkedin size={20} /> LinkedIn
              </a>
              <Link to="/resume" className="btn-secondary justify-center py-6">
                <FileText size={20} /> Resume
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Link to="/" className="text-[var(--color-accent)] font-medium hover:underline">
                ← Back to full portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recruiter;