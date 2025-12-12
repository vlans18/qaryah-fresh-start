import React from 'react';

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export function CTAButton({ children, variant = 'primary', onClick }: CTAButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 hover:border-emerald-400 hover:text-emerald-200 hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
    >
      {children}
    </button>
  );
}
