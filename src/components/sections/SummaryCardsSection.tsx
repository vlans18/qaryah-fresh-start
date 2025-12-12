import React from 'react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function SummaryCardsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="grid gap-6 grid-cols-1 md:grid-cols-3" ref={ref}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card
          title="What is Qaryah?"
        body={
          <>
            <p className="text-sm text-zinc-300">
              A digital ecosystem that brings together faith tools,
              commerce, and travel for Muslims – starting with:
            </p>
            <ul className="mt-2 space-y-1 text-xs text-zinc-300">
              <li>• Ibadah: Quran, prayer tools, daily trackers</li>
              <li>• SunnahMall: Halal / Sunnah-based marketplace</li>
              <li>• Muslim-friendly travel & services</li>
            </ul>
          </>
        }
      />
      </div>
      <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card
          title="What is QGT?"
          body={
            <>
              <p className="text-sm text-zinc-300">
                Qaryah Gold Token (QGT) is a real-value utility token used
                across the Qaryah ecosystem, with a roadmap to progressively
                anchor to physical gold.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Minted when users enter via fiat</li>
                <li>• Used for spending, rewards, and loyalty</li>
                <li>• Later phases: backed by allocated gold reserves</li>
              </ul>
            </>
          }
        />
      </div>
      <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Card
          title="Why now?"
          body={
            <>
              <p className="text-sm text-zinc-300">
                Stablecoins and tokenised real-world assets are reshaping
                finance. The global Muslim population remains under-served.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Rising demand for real-asset backing</li>
                <li>• Large, growing Muslim consumer base</li>
                <li>• Need for Shariah-aligned digital rails</li>
              </ul>
            </>
          }
        />
      </div>
    </section>
  );
}
