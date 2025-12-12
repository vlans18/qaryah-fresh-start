import React, { useState } from 'react';

const HalalcationTripPlanner = () => {
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [isHalalDiningActive, setIsHalalDiningActive] = useState(false);
  const [isPrivateAmenitiesActive, setIsPrivateAmenitiesActive] = useState(false);
  const [isMosqueProximityActive, setIsMosqueProximityActive] = useState(false);

  const handleSearch = () => {
    alert(
      JSON.stringify(
        {
          destination,
          travelDates,
          filters: {
            halalDining: isHalalDiningActive,
            privateBeachPool: isPrivateAmenitiesActive,
            mosqueProximity: isMosqueProximityActive,
          },
        },
        null,
        2
      )
    );
  };

  const handleDateClick = () => {
    setTravelDates('10 Jan – 18 Jan');
  };

  return (
    <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto rounded-2xl bg-slate-800/90 border border-amber-500/20 shadow-2xl shadow-black/70 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 text-slate-50">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
            Halalcation Global Search
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Halal-Friendly Travel Planning, Powered by Qaryah.
          </p>
        </div>
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-600/70">
          {/* Globe/Plane Icon */}
          <svg className="h-4 w-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Search Input Group */}
      <div className="space-y-4">
        {/* Row 1 – Destination & Dates */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          {/* Destination Input */}
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-300 mb-1 block">
              City, Country, or Attraction
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Search Mecca, Istanbul, or Kuala Lumpur..."
              className="w-full rounded-xl bg-slate-900/80 border border-slate-600/70 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:border-amber-300/70"
            />
          </div>

          {/* Travel Dates Button */}
          <div className="sm:w-60">
            <label className="text-xs font-medium text-slate-300 mb-1 block">
              Travel Dates
            </label>
            <button
              onClick={handleDateClick}
              className="w-full inline-flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-600/70 px-3 py-2.5 text-sm text-slate-200 hover:border-amber-300/70 hover:bg-slate-900 transition"
            >
              <span>{travelDates || 'Select Check-in & Check-out'}</span>
              {/* Calendar Icon */}
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2 – Halal Filters (Chips) */}
        <div className="flex flex-wrap gap-2.5 mt-1">
          {/* Filter 1 – Halal Dining Nearby */}
          <button
            onClick={() => setIsHalalDiningActive(!isHalalDiningActive)}
            className={
              isHalalDiningActive
                ? 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-emerald-500/15 border border-emerald-400/60 text-[11px] sm:text-xs text-emerald-200'
                : 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-slate-900 border border-slate-600 text-[11px] sm:text-xs text-slate-200 hover:bg-slate-800 hover:border-emerald-400/40 transition'
            }
          >
            {/* Crescent/Fork Icon */}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span>Halal Dining Nearby</span>
          </button>

          {/* Filter 2 – Private Beach/Pool */}
          <button
            onClick={() => setIsPrivateAmenitiesActive(!isPrivateAmenitiesActive)}
            className={
              isPrivateAmenitiesActive
                ? 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-cyan-500/15 border border-cyan-400/60 text-[11px] sm:text-xs text-cyan-200'
                : 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-slate-900 border border-slate-600 text-[11px] sm:text-xs text-slate-200 hover:bg-slate-800 hover:border-cyan-400/40 transition'
            }
          >
            {/* Sun/Wave Icon */}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Private Beach/Pool</span>
          </button>

          {/* Filter 3 – Mosque Proximity */}
          <button
            onClick={() => setIsMosqueProximityActive(!isMosqueProximityActive)}
            className={
              isMosqueProximityActive
                ? 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-amber-500/15 border border-amber-300/70 text-[11px] sm:text-xs text-amber-200'
                : 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-slate-900 border border-slate-600 text-[11px] sm:text-xs text-slate-200 hover:bg-slate-800 hover:border-amber-400/40 transition'
            }
          >
            {/* Dome/Minaret Icon */}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Mosque Proximity</span>
          </button>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="mt-6 space-y-2">
        <button
          onClick={handleSearch}
          className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/40 hover:brightness-105 hover:shadow-amber-400/60 transition-all"
        >
          Find Halal-Friendly Trips
        </button>
        <p className="text-[11px] text-slate-400 text-center">
          Powered by Qaryah
        </p>
      </div>
    </div>
  );
};

export default HalalcationTripPlanner;
