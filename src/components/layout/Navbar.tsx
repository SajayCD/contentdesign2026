"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Recruiter?', path: '/recruiter' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 md:py-6 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="relative h-8 flex items-center">
          {/* Homepage specific logo behavior */}
          {isHome && (
            <span 
              className={`absolute left-0 text-[13px] font-medium uppercase tracking-[0.08em] text-[#6B6B6B] transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Content Design Portfolio
            </span>
          )}
          
          <Link 
            to="/" 
            className={`text-2xl font-bold tracking-tight transition-opacity duration-300 ${isHome && !isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sajay
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                location.pathname === link.path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
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