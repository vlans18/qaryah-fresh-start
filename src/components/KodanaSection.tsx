import React from 'react';
import { Brain, Zap, TrendingUp, Shield } from 'lucide-react';

const KodanaSection: React.FC = () => {
  return (
    <section id="kodana" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6 px-5 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full">
            <p className="text-sm font-medium text-purple-400">AI-Powered Platform</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Kodana.ai</h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Enterprise-grade AI delivering Islamic finance intelligence, market analysis, and personalized Shariah-compliant guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Prediction Accuracy', value: '87%' },
            { label: 'Response Time', value: '<100ms' },
            { label: 'Daily Analysis', value: '1M+' },
            { label: 'Uptime SLA', value: '99.99%' },
          ].map((metric, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-purple-950/30 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all"
            >
              <p className="text-sm text-slate-400 mb-2">{metric.label}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Brain />, title: 'Market Intelligence', desc: 'Real-time Shariah-compliant investment analysis' },
            { icon: <Zap />, title: 'Smart Recommendations', desc: 'ML-powered personalized financial guidance' },
            { icon: <TrendingUp />, title: 'Predictive Analytics', desc: 'Forecast Islamic asset movements with 87% accuracy' },
            { icon: <Shield />, title: 'Compliance Engine', desc: 'Automated Shariah law verification system' },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="p-3 bg-purple-600/10 rounded-lg w-fit mb-4 text-purple-400 group-hover:bg-purple-600/20 transition-colors">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KodanaSection;
