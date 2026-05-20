import React, { useState } from 'react';

interface DictionaryTooltipProps {
  children: React.ReactNode;
  className?: string;
}

const DictionaryTooltip = ({ children, className = "" }: DictionaryTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline',
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: 'rgba(79, 70, 229, 0.4)',
        textUnderlineOffset: '3px',
        cursor: 'default'
      }}
    >
      {children}
      {isHovered && (
        <span style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 50,
          backgroundColor: 'white',
          border: '2px solid #4F46E5',
          borderRadius: '12px',
          padding: '16px 20px',
          width: '340px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          display: 'block',
          marginTop: '8px'
        }}>
          <p style={{ fontFamily: 'serif', fontSize: '15px', fontWeight: '600', color: '#1C1C1E', marginBottom: '4px' }}>
            con·tent de·sign·er
          </p>
          <p style={{ fontStyle: 'italic', fontSize: '13px', color: '#6B6B6B', marginBottom: '8px' }}>
            Also called "UX Writer"
          </p>
          <p style={{ fontSize: '11px', fontWeight: '700', color: '#4F46E5', letterSpacing: '0.08em', marginBottom: '6px' }}>
            NOUN
          </p>
          <p style={{ fontSize: '14px', color: '#1C1C1E', lineHeight: '1.5', margin: 0 }}>
            a design professional who crafts the words that guide users through digital products.
          </p>
        </span>
      )}
    </span>
  );
};

export default DictionaryTooltip;
