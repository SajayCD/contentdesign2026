"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ScalingPart5 = () => {
  const navCards = [
    { title: "From 50k to 500k+: The Mutual Funds Revamp", path: "/work/mutual-funds" },
    { title: "Integrating Content into Design Systems", path: "/work/design-system" },
    { title: "Workshops I have conducted", path: "/work/workshops" },
    { title: "A bit more about me", path: "/about" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-12">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">All Work</Link>
            <span>→</span>
            <Link to="/work/content-design-org" className="hover:text-[var(--color-accent)] transition-colors">Scaling a Content Design Org</Link>
            <span>→</span>
            <span className="text-[var(--color-text)] font-medium">Part 5</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs mb-4">
              Part 5 of 5
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold mb-8 leading-tight">
              This article is a work in progress (aren't we all?)
            </h1>

            <p className="text-xl text-[var(--color-text-muted)] mb-16 max-w-lg mx-auto">
              I'm still writing this one. Check back soon — or explore the rest of the series in the meantime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-left">
              {navCards.map((card, i) => (
                <Link 
                  key={i} 
                  to={card.path}
                  className="group bg-white border border-[var(--color-border)] p-8 rounded-2xl hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <h3 className="text-lg font-bold group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors mt-4">
                    Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Series Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-[var(--color-border)] text-left">
              <Link 
                to="/scaling-part-4" 
                className="btn-secondary justify-center"
              >
                ← Part 4
              </Link>
              <Link 
                to="/work/content-design-org" 
                className="btn-primary justify-center"
              >
                Back to Overview →
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScalingPart5;