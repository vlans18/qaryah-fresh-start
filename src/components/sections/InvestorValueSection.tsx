import React from 'react';
import { GoldCard } from '../ui/GoldCard';
import { SectionHeader } from '../ui/SectionHeader';

export function InvestorValueSection() {
  return (
    <section className="space-y-4">
      <SectionHeader
        eyebrow="Investor lens"
        title="Why Qaryah and QGT are attractive to capital"
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <GoldCard
          title="Real-world assets"
          body={
            <p className="text-xs text-zinc-300">
              Focus on physical gold as a long-term store of value,
              avoiding purely speculative tokenomics.
            </p>
          }
        />
        <GoldCard
          title="Under-served market"
          body={
            <p className="text-xs text-zinc-300">
              Large Muslim population with limited Shariah-aligned digital
              finance and commerce rails at global scale.
            </p>
          }
        />
        <GoldCard
          title="Multiple revenue lines"
          body={
            <p className="text-xs text-zinc-300">
              Minting fees, marketplace commissions, travel partnerships,
              SaaS dashboards, and more.
            </p>
          }
        />
        <GoldCard
          title="Shariah governance"
          body={
            <p className="text-xs text-zinc-300">
              Designed with Shariah-aligned structures, advisory input, and
              clear separation between utility and speculation.
            </p>
          }
        />
      </div>
    </section>
  );
}
