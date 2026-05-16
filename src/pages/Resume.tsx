"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-12 transition-colors">
            <ArrowLeft size={16} /> Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-2">Sajay Jai Singh</h1>
                <p className="text-xl text-[var(--color-accent)] font-medium">Senior Content Designer</p>
              </div>
              <a href="#" className="btn-secondary py-2 px-4 text-sm">
                <Download size={16} /> PDF
              </a>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-6">Experience</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold">Senior Content Designer</h3>
                      <span className="text-sm text-[var(--color-text-muted)]">2021 — Present</span>
                    </div>
                    <p className="font-medium mb-4">Angel One</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--color-text-muted)]">
                      <li>Led content strategy for a suite of 8 financial products serving 20M+ investors.</li>
                      <li>Drove 1,160% growth in monthly SIPs through strategic content revamp.</li>
                      <li>Scaled the content design team from 1 to 5 writers.</li>
                    </ul>
                  </div>
                  {/* Add more experience items as needed */}
                </div>
              </section>

              <section>
                <h2 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-bold mb-6">Education</h2>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold">MSc Communication & Media</h3>
                    <span className="text-sm text-[var(--color-text-muted)]">In Progress</span>
                  </div>
                  <p className="font-medium">University College Dublin</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;