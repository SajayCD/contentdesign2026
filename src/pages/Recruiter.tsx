"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Mail } from 'lucide-react';

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
            <h1 className="text-5xl font-bold mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Hi there, future colleague. You look nice today.
            </h1>
            
            {/* I AM Section */}
            <div className="mb-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-8">I AM</h2>
              <div className="space-y-6">
                {[
                  "A Senior Content Designer with 5+ years of experience in high-growth tech.",
                  "Specialised in FinTech, Design Systems, and scaling content organisations.",
                  "Someone with a proven track record — 1,160% growth in SIPs at Angel One through content strategy.",
                  "Based out of (sometimes) sunny Dublin, Ireland 🌦️"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 text-lg leading-relaxed">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get in touch Section */}
            <div className="bg-[var(--color-tag-bg)] rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-4">Get in touch</h2>
              <p className="text-lg mb-6 text-[var(--color-text-muted)]">I am currently open to new opportunities. Reach out at</p>
              <a 
                href="mailto:sajay.contentjedi@gmail.com" 
                className="text-2xl font-medium text-[#4F46E5] hover:underline"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                sajay.contentjedi@gmail.com
              </a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-[var(--color-border)]">
              <a 
                href="mailto:sajay.contentjedi@gmail.com" 
                className="btn-secondary justify-center py-6 gap-3"
              >
                <Mail size={20} /> 
                <span className="font-bold">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sajaysingh/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary justify-center py-6 gap-3"
              >
                <Linkedin size={20} /> 
                <span className="font-bold">LinkedIn</span>
              </a>
              <Link 
                to="/resume" 
                className="btn-secondary justify-center py-6 gap-3"
              >
                <FileText size={20} /> 
                <span className="font-bold">Resume</span>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <Link to="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium">
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