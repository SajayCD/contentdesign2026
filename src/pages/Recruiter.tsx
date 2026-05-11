"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Globe, Music } from 'lucide-react';
import TrackChangesTooltip from '@/components/ui/TrackChangesTooltip';
import Highlighter from '@/components/ui/Highlighter';

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
            
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 mb-12">
              <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-[var(--color-text-muted)]">Overview</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span><TrackChangesTooltip text="also: the person who stopped that error message from ruining your day">Senior Content Designer</TrackChangesTooltip> with <Highlighter>8+ years</Highlighter> of experience in high-growth tech.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>Specialized in FinTech, Design Systems, and scaling content organizations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>Proven track record: <Highlighter>1,160%</Highlighter> growth in SIPs at Angel One through content strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)]">●</span>
                  <span>MSc Communication & Media, UCD Dublin (In Progress)</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <a href="#" className="btn-secondary justify-center py-6">
                <FileText size={20} /> Resume (PDF)
              </a>
              <a href="#" className="btn-secondary justify-center py-6">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="#" className="btn-secondary justify-center py-6">
                <Globe size={20} /> Blog
              </a>
              <a href="#" className="btn-secondary justify-center py-6">
                <Music size={20} /> Music Page
              </a>
            </div>

            <div className="bg-[var(--color-tag-bg)] rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">Get in touch</h2>
              <p className="text-lg mb-6">I'm currently open to new opportunities in Bengaluru or remote.</p>
              <div className="space-y-2">
                <p className="font-medium">sajay.contentjedi@gmail.com</p>
                <p className="text-[var(--color-text-muted)]">+91 [Phone Number] (WhatsApp available)</p>
              </div>
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