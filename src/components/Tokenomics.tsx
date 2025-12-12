import React from 'react';
import { Coins, Lock, TrendingUp, Shield, Zap, Users2 } from 'lucide-react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block mb-6 px-5 py-2 bg-amber-950/50 border border-amber-500/30 rounded-full">
            <p className="text-sm font-medium text-amber-400">QGT Token Economics</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Token & Value Model</h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Qaryah Gold Token (QGT) backed by physical gold reserves, providing stability and intrinsic value across the ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-br from-amber-950/30 to-slate-900/50 border border-amber-500/30 rounded-2xl hover:border-amber-500/50 transition-all duration-300 shadow-lg shadow-amber-500/5 hover:shadow-amber-500/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-amber-600/20 rounded-xl">
                <Coins className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Gold-Backed Token</h3>
                <p className="text-amber-400 font-medium">1 QGT = 1g Physical Gold</p>
              </div>
            </div>

            <div className="relative h-32 bg-gradient-to-r from-amber-600/20 via-amber-500/30 to-amber-600/20 rounded-xl mb-6 overflow-hidden border border-amber-500/20 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-300 mb-1">1,000,000,000</div>
                  <div className="text-sm text-amber-400/80 font-medium">Total QGT Supply</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Initial Price</p>
                <p className="text-2xl font-bold text-white">$0.10</p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Target Price</p>
                <p className="text-2xl font-bold text-emerald-400">$1.20</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p className="text-slate-300 text-sm">Physical gold stored in Switzerland vault with quarterly audits</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p className="text-slate-300 text-sm">Shariah-compliant structure certified by Islamic scholars</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p className="text-slate-300 text-sm">Redemption available anytime for verified users</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Token Distribution</h3>
            <div className="space-y-4 mb-8">
              {[
                { label: 'Community & Ecosystem', value: 30, amount: '300M', color: 'bg-emerald-500' },
                { label: 'Team & Advisors', value: 20, amount: '200M', color: 'bg-blue-500' },
                { label: 'Strategic Partners', value: 20, amount: '200M', color: 'bg-purple-500' },
                { label: 'Reserve Fund', value: 15, amount: '150M', color: 'bg-amber-500' },
                { label: 'Seed & Private Sale', value: 10, amount: '100M', color: 'bg-orange-500' },
                { label: 'Treasury', value: 5, amount: '50M', color: 'bg-slate-500' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-slate-600 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-slate-400 text-sm">{item.amount} QGT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white w-12 text-right">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl">
              <h4 className="font-semibold text-white mb-4">Vesting Schedule</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  Team: 4-year linear vesting with 1-year cliff
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  Advisors: 2-year vesting with 6-month cliff
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  Strategic partners: Custom per agreement
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Token Utilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Transaction Fees',
                desc: 'Pay reduced fees across all ecosystem services',
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: 'Staking Rewards',
                desc: 'Earn 12-20% APY by staking QGT tokens',
              },
              {
                icon: <Users2 className="w-6 h-6" />,
                title: 'Governance Rights',
                desc: 'Vote on protocol upgrades and treasury allocation',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Yield Farming',
                desc: 'Provide liquidity and earn additional rewards',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Premium Access',
                desc: 'Unlock exclusive features in Kodana.ai platform',
              },
              {
                icon: <Coins className="w-6 h-6" />,
                title: 'Loyalty Benefits',
                desc: 'Cashback and rewards on marketplace purchases',
              },
            ].map((utility, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 rounded-xl hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 bg-emerald-600/10 rounded-lg w-fit mb-4 group-hover:bg-emerald-600/20 transition-colors">
                  <div className="text-emerald-400">{utility.icon}</div>
                </div>
                <h4 className="font-semibold text-white mb-2">{utility.title}</h4>
                <p className="text-sm text-slate-400">{utility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
