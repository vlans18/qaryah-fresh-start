import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function NextStepsSection() {
  return (
    <section className="space-y-4">
      <SectionHeader
        eyebrow="Engage with us"
        title="Next steps for interested investors"
      />
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7">
        <div className="grid gap-5 md:grid-cols-[2fr,1.3fr] items-center">
          <div className="space-y-3 text-sm text-zinc-200">
            <p>
              Qaryah Digital is preparing its first external capital raise
              to accelerate product build, merchant onboarding, and initial
              gold allocation.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>• Request the full investor briefing and data pack.</li>
              <li>• Schedule a call to review roadmap and assumptions.</li>
              <li>
                • Explore strategic roles (distribution, Shariah, gold,
                banking, or travel partnerships).
              </li>
            </ul>
            <p className="pt-2 text-xs text-zinc-400">
              For investor enquiries:{" "}
              <span className="font-semibold text-zinc-100">
                enquiry@qaryahdigital.com
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:enquiry@qaryahdigital.com?subject=Request%20for%20Investor%20Brief" className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition text-center">
              Download Investor Brief
            </a>
            <a href="mailto:enquiry@qaryahdigital.com?subject=Book%20a%2030-minute%20Call" className="rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-2.5 text-sm font-semibold text-zinc-100 hover:border-emerald-400 hover:text-emerald-200 transition text-center">
              Book a 30-minute call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
