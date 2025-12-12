import React from 'react';
import { ShoppingCart, BookOpen, Plane, DollarSign, Smartphone, Users } from 'lucide-react';

const SuperAppModules: React.FC = () => {
  const modules = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: 'SunnahMall',
      desc: 'Islamic e-commerce with 500+ Halal vendors',
      stats: ['500+ Vendors', '5K+ Daily Orders', '150+ Categories'],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      name: 'Ibadah Tools',
      desc: 'Complete spiritual toolkit and community',
      stats: ['2M+ Users', '180 Countries', '10K+ Hours Content'],
    },
    {
      icon: <Plane className="w-8 h-8" />,
      name: 'Travel Services',
      desc: 'Halal tourism and Umrah packages',
      stats: ['1K+ Hotels', '50+ Destinations', '200+ Packages'],
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      name: 'Financial Services',
      desc: 'Shariah-compliant banking and investments',
      stats: ['500K+ Users', '$50M+ AUM', '20+ Products'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: 'Social Network',
      desc: 'Muslim community and business networking',
      stats: ['5K+ Communities', '1M+ DAU', '100K+ Posts/Day'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: 'Super App',
      desc: 'Unified platform with seamless integration',
      stats: ['iOS/Android/Web', '100+ Integrations', '<2s Load Time'],
    },
  ];

  return (
    <section id="modules" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Super-App Modules</h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            All essential services for Muslim users in one unified, seamless platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-600/10 rounded-lg text-emerald-400 group-hover:bg-emerald-600/20 transition-colors">
                  {module.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{module.name}</h3>
                </div>
              </div>
              <p className="text-slate-300 mb-4">{module.desc}</p>
              <div className="grid grid-cols-3 gap-2">
                {module.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 bg-slate-800/50 rounded-lg">
                    <p className="text-xs text-slate-400">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperAppModules;
