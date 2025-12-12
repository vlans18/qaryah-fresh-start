import React from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <header className="space-y-1">
      <div className="text-xs font-medium uppercase tracking-wide text-emerald-300">
        {eyebrow}
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        {title}
      </h2>
    </header>
  );
}
