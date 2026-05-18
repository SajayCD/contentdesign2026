"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 50 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <div className="inline-flex items-center">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="inline-block w-[3px] h-[1em] bg-[var(--color-accent)] ml-1"
      />
    </div>
  );
};

export default Typewriter;