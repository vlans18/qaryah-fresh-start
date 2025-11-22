import React from 'react';
import { ArrowRight, TrendingUp, Users, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-slate-950 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 pt-12">
          <div className="inline-block mb-6 px-5 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full">
            <p className="text-sm font-medium text-emerald-400">Islamic Digital Ecosystem</p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Muslim
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Digital Economy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            A comprehensive super-app combining commerce, Shariah financial services, and community engagement. Product-first execution of a Muslim-focused digital ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 flex items-center justify-center gap-2">
              View Investor Deck
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-200">
              Download Whitepaper
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Users className="w-6 h-6" />, value: '5M+', label: 'Target Market Size', desc: 'Southeast Asian Muslims' },
            { icon: <TrendingUp className="w-6 h-6" />, value: '250%', label: 'YoY Growth', desc: 'Exceeding projections' },
            { icon: <Globe2 className="w-6 h-6" />, value: '$200B', label: 'TAM', desc: 'Islamic fintech market' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-600/20 rounded-lg text-emerald-400 group-hover:bg-emerald-600/30 transition-colors">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
              </div>
              <p className="text-white font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-6">Core Ecosystem Components</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'SunnahMall', desc: 'Islamic e-commerce marketplace with 500+ vendors' },
              { name: 'Ibadah Tools', desc: 'Complete spiritual toolkit for Muslims worldwide' },
              { name: 'Kodana.ai', desc: 'AI-powered Shariah-compliant financial intelligence' },
              { name: 'Financial Services', desc: 'Islamic banking, investments, and wealth management' },
            ].map((module, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-semibold text-white">{module.name}</p>
                  <p className="text-sm text-slate-400">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
