"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1E] text-[#F9F8F5] flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-[500px] w-full border-4 border-[#F9F8F5] p-8 relative aspect-[3/4] flex flex-col">
        <div className="text-4xl font-bold tracking-tighter mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          NOT FOUND QUARTERLY
        </div>
        <div className="text-xs uppercase tracking-[0.3em] mb-12 border-b border-[#F9F8F5] pb-2">
          Vol. 4 · Issue 04
        </div>
        
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-7xl font-bold leading-none mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            THIS PAGE<br />DOESN'T<br />EXIST
          </h1>
          <p className="text-2xl opacity-60">(Yet.)</p>
        </div>
        
        <div className="mt-12">
          <div className="text-xs uppercase tracking-widest mb-4 opacity-50">IN THIS ISSUE:</div>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">↳</span> Words that went missing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">↳</span> UX errors as poetry
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">↳</span> The ghost in the UI
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <Link to="/" className="inline-block border border-[#F9F8F5] px-6 py-3 hover:bg-[#F9F8F5] hover:text-[#1C1C1E] transition-all">
            ← Take me home
          </Link>
        </div>

        {/* Fake Barcode */}
        <div className="absolute bottom-8 right-8 w-24 h-12 bg-[#F9F8F5] flex items-end justify-center p-1">
          <div className="w-full h-full flex gap-[1px]">
            {[2, 1, 3, 1, 4, 2, 1, 2, 3, 1, 2, 4, 1, 2].map((w, i) => (
              <div key={i} className="bg-black h-full" style={{ width: `${w}px` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;