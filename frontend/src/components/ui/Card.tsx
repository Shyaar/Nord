import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  hover?: boolean;
}

export const Card = ({ children, className = '', noPadding = false, hover = false }: CardProps) => {
  return (
    <div
      className={`
        bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm
        ${hover ? 'transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] hover:-translate-y-1' : ''}
        ${noPadding ? '' : 'p-6'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
