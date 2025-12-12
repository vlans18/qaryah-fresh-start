import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Chip } from '../ui/Chip';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

export function TokenModelSection() {
  const { ref, isVisible } = useScrollAnimation();
  const qgtCount = useCountUp(5489, 2000, isVisible);
  const kwdCount = useCountUp(1250, 2000, isVisible);
  const sgdCount = useCountUp(5400, 2000, isVisible);

  return (
    <section className="space-y-4" ref={ref}>
      <SectionHeader
        eyebrow="QGT – real-value token model"
        title="Gold & benchmark logic for Qaryah Gold Token (QGT)"
      />
      <div className="rounded-3xl border border-amber-500/40 bg-slate-950/80 p-5 sm:p-6 lg:p-8 shadow-[0_0_50px_rgba(251,191,36,0.25)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              QGT – Real Value Token
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/80">
                QARYAH GOLD TOKEN (QGT)
              </div>
              <div className="mt-1 text-4xl sm:text-5xl font-bold text-amber-400" style={{ textShadow: '0 0 30px rgba(251, 191, 36, 0.6)' }}>
                {qgtCount.toLocaleString()} QGT
              </div>
              <p className="mt-1 text-sm text-zinc-300">
                Benchmarked to strong fiat + future fractional-gold
                backing.
              </p>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-4 hover:border-amber-400/40 transition-all duration-300">
                <div className="text-xs text-zinc-400">Approx. KWD value</div>
                <div className="text-lg font-semibold text-amber-300" style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}>
                  ≈ {kwdCount.toLocaleString()} KWD
                </div>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-slate-900/80 p-4 hover:border-amber-400/40 transition-all duration-300">
                <div className="text-xs text-zinc-400">Approx. SGD value</div>
                <div className="text-lg font-semibold text-amber-300" style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}>
                  ≈ {sgdCount.toLocaleString()} SGD
                </div>
              </div>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <div className="h-full flex flex-col rounded-2xl border border-zinc-800 bg-slate-900/80 p-4 text-xs text-zinc-200">
                <div className="mb-2 font-semibold text-emerald-200">
                  Phase 1: Stable benchmark token
                </div>
                <p className="flex-1">
                  Benchmarked against strong fiat while gold reserves are
                  being prepared and ecosystem rails are launched.
                </p>
              </div>
              <div className="h-full flex flex-col rounded-2xl border border-zinc-800 bg-slate-900/80 p-4 text-xs text-zinc-200">
                <div className="mb-2 font-semibold text-emerald-200">
                  Phases 2–3: Fractional gold backing
                </div>
                <p className="flex-1">
                  Users accumulate fraction-to-1 Dinar while Qaryah builds
                  long-term reserves and certificate model.
                </p>
              </div>
            </div>

            <p className="mt-2 text-[11px] text-zinc-500">
              Note: Numbers shown are conceptual for explanation only.
              Actual pricing, reserves and rollout will follow licensed
              partners and Shariah approvals.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end flex-none">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.32),transparent_60%)]" />
              <img
                src="/qgt-coin-placeholder.svg"
                alt="QGT gold coin"
                className="relative z-10 w-[210px] h-[210px] drop-shadow-[0_0_60px_rgba(250,204,21,0.8)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-emerald-100">
          <Chip>Benchmark-based starting value</Chip>
          <Chip>Progressive minting fee tiers</Chip>
          <Chip>Merchant & consumer reward rails</Chip>
          <Chip>Life-gold fractional saving</Chip>
          <Chip>Pathway toward gold-backed reserves</Chip>
        </div>

        <p className="mt-3 text-[11px] text-zinc-300">
          <span className="font-semibold">Utility:</span> Used across
          SunnahMall, travel and services payments, loyalty, and merchant
          encash flows.{" "}
          <span className="font-semibold">Stability objective:</span>{" "}
          Emphasis on real usage (payments, rewards, redemption) rather than
          trading hype.
        </p>
      </div>
    </section>
  );
}
