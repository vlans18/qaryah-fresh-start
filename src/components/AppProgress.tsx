import React from 'react';
import { CheckCircle2, Clock, Target } from 'lucide-react';

const AppProgress: React.FC = () => {
  const milestones = [
    {
      quarter: 'Q4 2024',
      title: 'Foundation Launch',
      status: 'completed',
      progress: 100,
      items: [
        'SunnahMall MVP with 500+ vendors',
        'Ibadah tools integration complete',
        '50K+ active users onboarded',
        'Community features launched',
      ],
    },
    {
      quarter: 'Q1 2025',
      title: 'AI & Intelligence',
      status: 'current',
      progress: 75,
      items: [
        'Kodana.ai platform beta launch',
        'Travel module development',
        'Financial services foundation',
        'Strategic partnerships expansion',
      ],
    },
    {
      quarter: 'Q2 2025',
      title: 'Financial Services',
      status: 'upcoming',
      progress: 30,
      items: [
        'Shariah banking launch',
        'Investment products release',
        'Insurance integration',
        'QGT staking platform',
      ],
    },
    {
      quarter: 'Q3 2025',
      title: 'Global Expansion',
      status: 'upcoming',
      progress: 0,
      items: [
        'Multi-country rollout',
        'Localization complete',
        'Regional partnerships',
        '1M+ user milestone',
      ],
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: <CheckCircle2 className="w-5 h-5" />, color: 'emerald', label: 'Completed' };
      case 'current':
        return { icon: <Clock className="w-5 h-5" />, color: 'amber', label: 'In Progress' };
      default:
        return { icon: <Target className="w-5 h-5" />, color: 'slate', label: 'Planned' };
    }
  };

  return (
    <section id="app-progress" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6 px-5 py-2 bg-blue-950/50 border border-blue-500/30 rounded-full">
            <p className="text-sm font-medium text-blue-400">Product Development</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Development Roadmap</h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Track our progress from MVP to comprehensive ecosystem. Transparent execution with measurable milestones.
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => {
            const config = getStatusConfig(milestone.status);
            return (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-${config.color}-500/30 rounded-xl hover:border-${config.color}-500/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${config.color}-600/20 rounded-lg text-${config.color}-400`}>
                      {config.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">{milestone.quarter}</p>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                  </div>
                  <span className={`px-3 py-1 bg-${config.color}-600/20 border border-${config.color}-500/30 text-${config.color}-400 text-xs font-medium rounded-full`}>
                    {config.label}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Progress</span>
                    <span className="text-sm font-bold text-white">{milestone.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${config.color}-500 transition-all duration-500`}
                      style={{ width: `${milestone.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {milestone.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${config.color}-400 mt-2 flex-shrink-0`} />
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppProgress;
