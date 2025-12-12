import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Shield, Users, Award } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section className="space-y-4">
      <SectionHeader
        eyebrow="Leadership & Governance"
        title="Team and Shariah oversight driving Qaryah Digital"
      />

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-8 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-amber-300">Core Team</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-bold text-slate-900 shadow-lg shadow-amber-400/30">
                F
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-base font-semibold text-white mb-1">Founder & CEO</h4>
                <p className="text-sm text-amber-200/80 mb-2">Leading Qaryah Digital's vision</p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Experienced in Islamic fintech, digital ecosystems, and Shariah-aligned product development.
                  Building a sustainable, real-value platform for the global Muslim market.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="font-semibold text-emerald-300">Strategic advisors:</span> Technology,
                Shariah compliance, and market development experts guiding the platform's growth trajectory.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-8 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-emerald-300">Robust Shariah Governance</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">External Shariah Advisory</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Working with qualified scholars and Shariah advisors to ensure all products,
                  token mechanics, and financial flows remain fully compliant with Islamic principles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Ongoing Auditing & Compliance</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Regular reviews of contracts, gold-backing mechanisms, and revenue models to maintain
                  transparency and adherence to halal standards.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-400">
                <span className="font-semibold text-emerald-300">Commitment:</span> Clear separation between
                utility and speculation, with focus on real-world value creation and ethical governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
