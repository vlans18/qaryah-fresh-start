import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type HeroSectionWrapperProps = {
  children: React.ReactNode;
};

export function HeroSectionWrapper({ children }: HeroSectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
