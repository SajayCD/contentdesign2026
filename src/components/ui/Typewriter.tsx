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
    <span className="relative inline-block">
      {displayedText}
      <span 
        className="inline-block w-[2px] h-[0.9em] ml-1 align-middle bg-[#4F46E5] animate-[blink_1s_step-end_infinite]"
      ></span>
      <style>{`
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;