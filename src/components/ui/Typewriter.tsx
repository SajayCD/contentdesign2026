"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 50 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(timer);
        setTimeout(() => setIsComplete(true), 500);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="inline-flex items-center">
      {displayedText}
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ 
              opacity: { repeat: Infinity, duration: 0.8 }
            }}
            className="inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-1"
          />
        )}
      </AnimatePresence>
    </span>
  );
};

export default Typewriter;