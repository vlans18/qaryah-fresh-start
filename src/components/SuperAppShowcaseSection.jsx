import React from 'react';
import QGTKhizanahVault from './QGTKhizanahVault';
import SunnahMallProductCard from './SunnahMallProductCard';
import IbadahPrayerTracker from './IbadahPrayerTracker';

const SuperAppShowcaseSection = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12 bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">
      {/* Section Title + Subtitle */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-amber-300">
          Qaryah Super App Ecosystem
        </h2>
        <p className="text-center text-slate-400 mb-10">
          Finance • Commerce • Ibadah — united under one gold-backed ecosystem.
        </p>

        {/* Component Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center">
            <QGTKhizanahVault />
          </div>
          <div className="flex justify-center">
            <SunnahMallProductCard />
          </div>
          <div className="flex justify-center">
            <IbadahPrayerTracker />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperAppShowcaseSection;
