import React from 'react';

type GoldCardProps = {
  title: string;
  body: React.ReactNode;
};

export function GoldCard({ title, body }: GoldCardProps) {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-amber-500/20 bg-white/5 p-6 shadow-md shadow-black/50 hover:border-amber-400/50 hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300 group">
      <h3 className="text-base font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">{title}</h3>
      <div className="flex-1">{body}</div>
    </div>
  );
}
