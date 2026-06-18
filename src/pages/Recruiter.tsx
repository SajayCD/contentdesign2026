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
              Hi there, you look nice today!
            </h1>
            
            {/* I AM Section */}
            <div className="bg-white border border-[#E4E3DF] rounded-[12px] px-[28px] py-[24px] mb-12">
              <h2 
                className="text-sm uppercase tracking-[0.08em] text-[#6B6B6B] mb-8"
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontWeight: '800' 
                }}
              >
                I AM
              </h2>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {[
                  "A Senior UX Writer with 6+ years of work experience at the intersection of tech and language.",
                  "A multidisciplinary content professional who has worked across formats as a UX Writer, Technical Writer, and more.",
                  "Someone with a proven track record: 1,160% growth in SIPs in 12 months at Angel One through content strategy.",
                  "Based out of (sometimes) sunny Dublin, Ireland 🌦️."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 text-lg leading-relaxed">
                    <div 
                      className="w-[10px] h-[10px] rounded-full bg-[#4F46E5] shrink-0" 
                      style={{ marginTop: '10px' }}
                    />
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