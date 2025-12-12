import React from 'react';

type CardProps = {
  title: string;
  body: React.ReactNode;
};

export function Card({ title, body }: CardProps) {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md shadow-black/50 hover:border-emerald-500/40 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group">
      <h3 className="text-base font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">{title}</h3>
      <div className="flex-1">{body}</div>
    </div>
  );
}
