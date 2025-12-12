import React from 'react';

export function GlowingBannerSection() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-900/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(250,204,21,0.4)]">
        <div className="grid gap-6 md:grid-cols-[auto,1.7fr] items-center">
          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.45),transparent_70%)]" />
            <img
              src="/qgt-coin-placeholder.svg"
              alt="QGT gold coin"
              className="relative z-10 w-[200px] h-[200px] drop-shadow-[0_0_70px_rgba(250,204,21,0.9)]"
            />
          </div>
          <div className="space-y-2 text-sm text-amber-50">
            <div className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-200">
              Born from trust · Anchored in gold · Powered by Ummah
            </div>
            <p>
              QGT is designed as a real-value token with a benchmarked price
              model and a long-term plan to be supported by gold
              acquisition. The objective is to move away from pure
              speculation and toward transparent, utility-driven value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
