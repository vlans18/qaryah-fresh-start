import React, { useState } from 'react';
import { Mail, Calendar, FileText, CheckCircle2, Download, TrendingUp, DollarSign, Users } from 'lucide-react';

const InvestorSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'deck' | 'call'>('deck');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  return (
    <section id="investor" className="py-24 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block mb-6 px-5 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full shadow-lg shadow-emerald-500/20">
            <p className="text-sm font-medium text-emerald-400">For Qualified Investors</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Opportunity
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join us in building the world's most comprehensive Islamic digital ecosystem
          </p>
        </div>

        {!showForm && !submitted && (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <button
                onClick={() => { setShowForm(true); setFormType('deck'); }}
                className="group relative p-8 bg-gradient-to-br from-emerald-950/50 to-slate-900/50 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/60 transition-all duration-300 text-left overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-emerald-600/20 rounded-xl group-hover:bg-emerald-600/30 transition-colors">
                      <FileText className="w-8 h-8 text-emerald-400" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg shadow-emerald-600/50">
                      POPULAR
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Investor Deck</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Comprehensive presentation with market analysis, financial projections, competitive landscape, and growth strategy.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">
                    Request Access
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setShowForm(true); setFormType('call'); }}
                className="group relative p-8 bg-gradient-to-br from-blue-950/50 to-slate-900/50 border border-blue-500/30 rounded-2xl hover:border-blue-500/60 transition-all duration-300 text-left overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors">
                      <Calendar className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Schedule Call</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Connect with our leadership team for a detailed discussion on investment terms, strategic roadmap, and partnership opportunities.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                    Book Meeting
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Investment Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, label: 'Projected IRR', value: '35-45%', color: 'emerald' },
                  { icon: <DollarSign className="w-6 h-6" />, label: 'Valuation', value: '$50M', color: 'blue' },
                  { icon: <Users className="w-6 h-6" />, label: 'User Growth', value: '250% YoY', color: 'purple' },
                  { icon: <Download className="w-6 h-6" />, label: 'Min Investment', value: '$100K', color: 'amber' },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gradient-to-br from-${metric.color}-950/30 to-slate-900/50 border border-${metric.color}-500/30 rounded-xl hover:border-${metric.color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${metric.color}-500/10 group`}
                  >
                    <div className={`p-3 bg-${metric.color}-600/10 rounded-lg w-fit mb-4 group-hover:bg-${metric.color}-600/20 transition-colors`}>
                      <div className={`text-${metric.color}-400`}>{metric.icon}</div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-slate-400 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-8 md:p-12 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-8">Why Invest in Qaryah Digital?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Massive Market Opportunity',
                      points: [
                        'Islamic fintech TAM: $200B+ globally',
                        '1.8B+ Muslim population, 60% under-banked',
                        'Southeast Asia: 240M Muslims, growing middle class',
                        'Limited competition in comprehensive solutions',
                      ],
                    },
                    {
                      title: 'Strong Traction & Metrics',
                      points: [
                        '50K+ active users in first 6 months',
                        '250% YoY growth trajectory sustained',
                        '$1M+ monthly GMV on marketplace',
                        '15+ strategic partnerships secured',
                      ],
                    },
                    {
                      title: 'Defensible Competitive Moats',
                      points: [
                        'First-mover advantage in Islamic super-app',
                        'Proprietary Kodana.ai platform with ML models',
                        'Gold-backed token unique value proposition',
                        'Deep Shariah compliance expertise',
                      ],
                    },
                    {
                      title: 'Path to Profitability',
                      points: [
                        'Multiple revenue streams established',
                        'Unit economics improving quarterly',
                        'Cash flow positive by Q3 2025',
                        'Conservative 5-year financial model',
                      ],
                    },
                  ].map((section, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-400 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {showForm && !submitted && (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                {formType === 'deck' ? 'Request Investor Deck' : 'Schedule a Call'}
              </h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      placeholder="Investment Firm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
                    <select
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    >
                      <option value="">Select Role</option>
                      <option value="investor">Institutional Investor</option>
                      <option value="vc">Venture Capital</option>
                      <option value="angel">Angel Investor</option>
                      <option value="partner">Strategic Partner</option>
                      <option value="advisor">Advisor</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-600/30"
                  >
                    {formType === 'deck' ? 'Request Deck' : 'Schedule Call'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:bg-slate-800 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {submitted && (
          <div className="max-w-2xl mx-auto text-center p-12 bg-gradient-to-br from-emerald-950/50 to-slate-900/50 border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-500/20">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-600/20 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Request Received!</h3>
            <p className="text-xl text-slate-300 mb-2">
              {formType === 'deck'
                ? 'The investor deck will be sent to your email shortly.'
                : 'Our team will contact you within 24 hours to schedule your call.'}
            </p>
            <p className="text-slate-400">Thank you for your interest in Qaryah Digital.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvestorSection;
