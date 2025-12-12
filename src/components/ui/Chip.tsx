import React from 'react';

type ChipProps = {
  children: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5" />
      <span className="text-[11px] text-emerald-50 font-medium">
        {children}
      </span>
    </span>
  );
}
