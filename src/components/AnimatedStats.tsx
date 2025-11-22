import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Shield } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Global Muslim Market',
    value: 1900,
    suffix: 'M+',
    prefix: '',
    isGold: false,
  },
  {
    icon: TrendingUp,
    label: 'Projected Market Growth',
    value: 3,
    suffix: 'T',
    prefix: '$',
    isGold: true,
  },
  {
    icon: Globe,
    label: 'Target Countries',
    value: 50,
    suffix: '+',
    prefix: '',
    isGold: false,
  },
  {
    icon: Shield,
    label: 'Shariah Compliant',
    value: 100,
    suffix: '%',
    prefix: '',
    isGold: true,
  },
];

function AnimatedCounter({ value, prefix, suffix, isGold }: { value: number; prefix: string; suffix: string; isGold: boolean }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span
      ref={ref}
      className={`text-4xl font-bold ${isGold ? 'text-amber-400' : 'text-emerald-400'}`}
      style={isGold ? { textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' } : undefined}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900/50 to-emerald-950/30 rounded-2xl border border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            The Opportunity in Numbers
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A rapidly growing market with significant untapped potential for Shariah-aligned fintech solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`h-full flex flex-col items-center justify-between text-center space-y-4 p-6 rounded-xl bg-slate-950/40 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[200px] ${
                stat.isGold
                  ? 'border-amber-500/20 hover:border-amber-400/50 hover:shadow-amber-400/20'
                  : 'border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-emerald-500/10'
              }`}
            >
              <div className={`p-3 rounded-full ${
                stat.isGold
                  ? 'bg-amber-500/10 border border-amber-500/30'
                  : 'bg-emerald-500/10 border border-emerald-500/20'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.isGold ? 'text-amber-400' : 'text-emerald-400'}`} />
              </div>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isGold={stat.isGold}
              />
              <p className="text-sm text-zinc-400 font-medium leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
