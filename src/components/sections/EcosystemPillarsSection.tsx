import React from 'react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function EcosystemPillarsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="space-y-4" ref={ref}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <SectionHeader
          eyebrow="Product pillars"
          title="Qaryah ecosystem in four core tracks"
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card
            title="SunnahMall"
          body={
            <ul className="space-y-1 text-xs text-zinc-300">
              <li>• Halal & Sunnah-aligned products</li>
              <li>• Merchant onboarding with clear SOPs</li>
              <li>• QGT-based rewards and loyalty</li>
            </ul>
          }
        />
        </div>
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card
            title="Ibadah"
            body={
              <ul className="space-y-1 text-xs text-zinc-300">
                <li>• Quran, prayer times, Qiblah, dzikir</li>
                <li>• Habit and ibadah trackers</li>
                <li>• Entry point for daily engagement</li>
              </ul>
            }
          />
        </div>
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card
            title="Muslim-Friendly Travel"
            body={
              <ul className="space-y-1 text-xs text-zinc-300">
                <li>• Stay and travel curation for Muslims</li>
                <li>• Halal-friendly hotels and experiences</li>
                <li>• Integrated with QGT spend and rewards</li>
              </ul>
            }
          />
        </div>
        <div className={`transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card
            title="QaryahPay & Khizanah"
            body={
              <ul className="space-y-1 text-xs text-zinc-300">
                <li>• Wallet and payment rails</li>
                <li>• Khizanah Vault: digital gold saving model</li>
                <li>• On-ramp to gold-anchored value in later phases</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
}
