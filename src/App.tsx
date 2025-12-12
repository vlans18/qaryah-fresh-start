import React, { useEffect, useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { SummaryCardsSection } from './components/sections/SummaryCardsSection';
import { EcosystemPillarsSection } from './components/sections/EcosystemPillarsSection';
import { TokenModelSection } from './components/sections/TokenModelSection';
import { InvestorValueSection } from './components/sections/InvestorValueSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { GlowingBannerSection } from './components/sections/GlowingBannerSection';
import { NextStepsSection } from './components/sections/NextStepsSection';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AnimatedStats } from './components/AnimatedStats';
import { TrustIndicators } from './components/TrustIndicators';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import QGTKhizanahVault from './components/QGTKhizanahVault';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-emerald-950 text-white relative">
      <AnimatedBackground />
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16 space-y-16 relative z-10 pt-24">
        <div id="overview">
          <HeroSection />
        </div>
        <div id="app-progress">
          <SummaryCardsSection />
        </div>
        <div id="kodana">
          <AnimatedStats />
        </div>
        <div id="modules">
          <EcosystemPillarsSection />
        </div>
        <div id="tokenomics">
          <TokenModelSection />
          <div className="mt-16">
            <TrustIndicators />
          </div>
          <div className="mt-16">
            <QGTKhizanahVault />
          </div>
        </div>
        <div id="investor">
          <InvestorValueSection />
        </div>
        <LeadershipSection />
        <div id="roadmap">
          <GlowingBannerSection />
          <div className="mt-16">
            <NextStepsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
