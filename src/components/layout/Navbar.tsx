"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'Writing', path: '#' },
    { name: 'About', path: '/about' },
    { name: 'Recruiter?', path: '/recruiter' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 md:py-6 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Sajay
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                location.pathname === link.path ? 'text-[var(--color-accent)] border-b border-[var(--color-accent)]' : 'text-[var(--color-text)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#" 
            className="text-sm font-medium flex items-center gap-1 hover:text-[var(--color-accent)]"
          >
            ↓ Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="#" className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Resume
          </a>
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;