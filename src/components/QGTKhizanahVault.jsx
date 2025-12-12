import React from 'react';

export default function QGTKhizanahVault({
  qgtBalance = 1018.55,
  fiatValue = 1001.0,
  fiatCurrency = 'USD',
  benchmarkLabel = 'KWD Benchmark'
}) {
  const handleRedeem = () => {
    alert('Initiating secure redemption process...');
  };

  const formattedQGT = qgtBalance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const formattedFiat = fiatValue.toLocaleString('en-US', {
    style: 'currency',
    currency: fiatCurrency
  });

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-amber-500/15 shadow-2xl shadow-black/60 p-5 sm:p-6 md:p-7 text-slate-50">
      {/* Header Section */}
      <div className="flex items-start justify-between gap-3">
        {/* Left side - Title */}
        <div>
          <div className="flex items-center gap-2">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/70 border border-slate-600/60">
              <svg
                className="h-4 w-4 text-amber-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight">
              Khizanah Vault Balance
            </h3>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Your Gold-Anchored Utility Token (QGT).
          </p>
        </div>

        {/* Right side - Badges */}
        <div className="flex flex-col items-end gap-1 text-[10px] sm:text-xs">
          {/* Shariah Audited Badge */}
          <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-2 py-1 text-emerald-300">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Shariah Audited</span>
          </div>

          {/* Gold-Pegged Badge */}
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-400/40 px-2 py-1 text-amber-300">
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6h18v2H3V6zm2 4h14v8H5v-8zm2 2v4h10v-4H7z" />
            </svg>
            <span>Gold-Pegged</span>
          </div>
        </div>
      </div>

      {/* Balance Display Block */}
      <div className="mt-6 flex flex-col gap-2">
        {/* QGT Balance (primary) */}
        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-amber-200">
            {formattedQGT}{' '}
            <span className="text-base sm:text-lg text-amber-300/80">QGT</span>
          </span>
        </div>

        {/* Fiat Value (secondary) */}
        <div className="text-xs sm:text-sm text-amber-300/80">
          ≈ {formattedFiat} {fiatCurrency} ({benchmarkLabel})
        </div>
      </div>

      {/* Actions Section */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Primary Action Button */}
        <button
          type="button"
          onClick={handleRedeem}
          className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-900 shadow-lg shadow-amber-500/40 hover:shadow-amber-400/60 hover:brightness-105 transition-all"
        >
          Redeem QGT for Gold/Fiat
        </button>

        {/* Transparency Link */}
        <button
          type="button"
          className="text-xs sm:text-sm text-slate-300 underline-offset-4 hover:underline hover:text-amber-200/90 transition"
        >
          Reserve Attestation: View Latest Report
        </button>
      </div>
    </div>
  );
}
