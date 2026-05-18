"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

const Typewriter = ({ text, speed = 50, delay = 500 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else {
      setIsComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed]);

  return (
    <div className="inline-flex items-center">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block w-[3px] h-[0.9em] bg-[var(--color-accent)] ml-1 translate-y-[0.1em]"
      />
    </div>
  );
};

export default Typewriter;