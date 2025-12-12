import React, { useState } from 'react';

const IbadahPrayerTracker = ({
  locationLabel = 'Singapore',
  hijriDate = '20 Jumada Al-Awwal 1447H',
  gregorianDate = '12 December 2025',
  prayerTimes: initialPrayerTimes = [
    { name: 'Fajr', time: '05:32', status: 'pending' },
    { name: 'Dhuhr', time: '13:05', status: 'pending' },
    { name: 'Asr', time: '16:28', status: 'pending' },
    { name: 'Maghrib', time: '18:55', status: 'pending' },
    { name: 'Isha', time: '20:10', status: 'pending' },
  ],
}) => {
  const [items, setItems] = useState(initialPrayerTimes);

  const toggleStatus = (name) => {
    setItems((prev) =>
      prev.map((p) =>
        p.name === name
          ? { ...p, status: p.status === 'completed' ? 'pending' : 'completed' }
          : p
      )
    );
  };

  const completedCount = items.filter((p) => p.status === 'completed').length;
  const totalCount = items.length;
  const progressPercent = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/20 shadow-2xl shadow-black/60 p-5 sm:p-6 text-slate-50">
      {/* Header Area */}
      <div className="flex items-start justify-between gap-3">
        {/* Left Side */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold tracking-tight">
            Ibadah – Daily Prayer Tracker
          </h2>
          <div className="mt-1 text-xs sm:text-sm text-slate-400">
            <div>{locationLabel}</div>
            <div>
              {hijriDate} • {gregorianDate}
            </div>
          </div>
        </div>

        {/* Right Side - Summary Chip */}
        <div className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-emerald-500/10 border border-emerald-400/40 text-[11px] sm:text-xs text-emerald-300">
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {completedCount} / {totalCount} completed
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full rounded-full bg-slate-800 mt-4 overflow-hidden">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Prayer List */}
      <div className="mt-5 space-y-2.5">
        {items.map((prayer) => (
          <div
            key={prayer.name}
            className="flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/60 px-3 py-2.5"
          >
            {/* Left Section */}
            <div>
              <div className="text-sm font-semibold">{prayer.name}</div>
              <div className="text-xs text-slate-400">{prayer.time}</div>
            </div>

            {/* Right Section - Toggle Button */}
            <button
              onClick={() => toggleStatus(prayer.name)}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition ${
                prayer.status === 'completed'
                  ? 'bg-emerald-500/20 border border-emerald-400/60 text-emerald-300'
                  : 'bg-slate-800 border border-slate-600 text-slate-300 hover:bg-emerald-500/20 hover:border-emerald-400/50'
              }`}
            >
              {prayer.status === 'completed' ? (
                <>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Completed
                </>
              ) : (
                'Mark as done'
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Copy */}
      <div className="mt-4 text-[11px] sm:text-xs text-slate-500">
        Track your salat completion daily and build consistent Ibadah habits.
      </div>
    </div>
  );
};

export default IbadahPrayerTracker;
