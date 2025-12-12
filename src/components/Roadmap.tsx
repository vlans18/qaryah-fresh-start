import React from 'react';
import { Calendar } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    { year: '2024', title: 'Foundation', desc: 'MVP launch, 50K users, marketplace operational' },
    { year: '2025', title: 'Growth', desc: 'AI platform, financial services, 1M users' },
    { year: '2026', title: 'Scale', desc: 'Global expansion, enterprise features, market leader' },
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Strategic Roadmap</h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Our vision for building the world's leading Islamic digital ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-emerald-500/30 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center p-4 bg-emerald-600/10 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-sm font-medium text-emerald-400 mb-2">{phase.year}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
              <p className="text-slate-300">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
