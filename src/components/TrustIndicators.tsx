import React from 'react';
import { Shield, Lock, CheckCircle, Award } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Shariah Compliant',
    description: 'Fully aligned with Islamic finance principles',
  },
  {
    icon: Lock,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security and encryption',
  },
  {
    icon: CheckCircle,
    title: 'Audited Smart Contracts',
    description: 'Third-party verified blockchain code',
  },
  {
    icon: Award,
    title: 'Regulated Operations',
    description: 'Singapore-based with MAS compliance',
  },
];

const technologies = [
  'Blockchain',
  'Smart Contracts',
  'Web3',
  'Digital Assets',
  'Fintech',
  'E-Commerce',
];

export function TrustIndicators() {
  return (
    <section className="space-y-12 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Built on Trust & Technology
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Combining cutting-edge blockchain technology with Islamic finance principles
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustFeatures.map((feature, index) => (
          <div
            key={index}
            className="h-full flex flex-col p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-emerald-950/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-500/10 min-h-[180px]"
          >
            <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 inline-block group-hover:bg-emerald-500/20 transition-colors">
              <feature.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-white mb-2 text-base">{feature.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="py-8 px-6 rounded-xl bg-slate-950/40 border border-slate-800">
        <p className="text-center text-sm text-zinc-400 mb-4">Powered by</p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-lg bg-slate-900/60 border border-emerald-500/10 text-emerald-300 text-sm font-medium hover:border-emerald-500/30 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
