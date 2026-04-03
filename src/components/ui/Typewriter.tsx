"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

const Typewriter = ({ text, delay = 600, speed = 60 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className="relative">
      {displayedText}
      <span 
        className={`inline-block w-[2px] h-[0.8em] ml-1 align-middle bg-[var(--color-accent)] ${isComplete ? 'animate-pulse' : 'animate-pulse'}`}
        style={{ opacity: 1 }}
      ></span>
    </span>
  );
};

export default Typewriter;