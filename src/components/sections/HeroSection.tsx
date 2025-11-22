import React from 'react';
import { CTAButton } from '../ui/CTAButton';

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <img
          src="/qgt-coin-placeholder.svg"
          alt="QGT gold coin"
          className="w-4 h-4 rounded-full"
        />
        <span>Qaryah Digital · QGT · Singapore</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,1.4fr] items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Qaryah Digital & QGT
            <span className="block text-emerald-300">
              Real-Value, Gold-Anchored Ecosystem
            </span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
            Qaryah Digital is building a Shariah-aligned super-app for the
            global Muslim market – combining Ibadah tools, Sunnah-driven
            commerce, Muslim-friendly travel, and a real-value token,
            Qaryah Gold Token (QGT), that progressively anchors to
            physical gold.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:enquiry@qaryahdigital.com?subject=Request%20for%20Investor%20Brief">
              <CTAButton variant="primary">Download Investor Brief</CTAButton>
            </a>
            <a href="mailto:enquiry@qaryahdigital.com?subject=Schedule%20a%20Call">
              <CTAButton variant="secondary">Schedule a Call</CTAButton>
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 pr-32 sm:pr-44 shadow-xl shadow-emerald-500/30">
          <h2 className="mb-3 text-sm font-semibold text-emerald-200">
            Investor Snapshot
          </h2>
          <dl className="space-y-3 text-sm text-zinc-100">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">Target market</dt>
              <dd className="font-semibold text-right">Global Muslim economy</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">Core asset focus</dt>
              <dd className="font-semibold text-right">Gold-anchored token (QGT)</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">Core modules</dt>
              <dd className="font-semibold text-right">
                Ibadah · SunnahMall · Travel
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">Build hub</dt>
              <dd className="font-semibold text-right">Singapore · ASEAN-first</dd>
            </div>
          </dl>

          <div className="pointer-events-none absolute right-2 bottom-1/2 translate-y-1/2 sm:-right-4">
            <img
              src="/gold-bars.svg"
              alt="Gold bars"
              className="h-20 w-20 sm:h-28 sm:w-28 drop-shadow-[0_0_35px_rgba(250,204,21,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
