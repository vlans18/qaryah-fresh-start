import React from 'react';

const SunnahMallProductCard = ({
  productTitle = 'Premium Organic Sidr Honey',
  qgtPrice = 1.25,
  fiatPrice = 1.22,
  fiatCurrency = 'USD',
  sellerName = 'Al-Amin Farms',
  rating = 4.5,
}) => {
  const handleAddToCart = () => {
    alert(`Added ${productTitle} to your SunnahMall cart.`);
  };

  const formattedQGT = qgtPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedFiat = fiatPrice.toLocaleString(undefined, {
    style: 'currency',
    currency: fiatCurrency,
    minimumFractionDigits: 2,
  });

  return (
    <div
      className="w-full max-w-xs overflow-hidden rounded-xl bg-slate-900 shadow-2xl shadow-black/70 border border-slate-700/50
                 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/10"
    >
      {/* 1. Product Image Placeholder (5:4 Aspect Ratio) */}
      <div className="relative pt-[80%] bg-slate-800/80 flex items-center justify-center border-b border-slate-700">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
          {/* Placeholder Icon */}
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L15 15m0 0l4.814-4.814a2 2 0 012.828 0L22 13.5M19 14l-4-4m-7-5a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-sm mt-1">Image Loading...</span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* 2. Title and Badges */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-slate-50 truncate">{productTitle}</h3>

          {/* Compliance Badges */}
          <div className="flex items-center gap-2 text-[10px] font-medium mt-1">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-700/30 px-2 py-0.5 text-emerald-300 border border-emerald-500/50">
              {/* Tick Mark Icon */}
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
              Halal Verified
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-700/30 px-2 py-0.5 text-cyan-300 border border-cyan-500/50">
              {/* Leaf/Ethical Icon */}
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Ethical Sourced
            </span>
          </div>
        </div>

        {/* 3. Price Display */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-amber-300">
            {formattedQGT}{' '}
            <span className="text-sm text-amber-500/80">QGT</span>
          </div>
          <div className="text-xs text-slate-400">
            ≈ {formattedFiat}
          </div>
        </div>

        {/* 4. Seller and Rating */}
        <div className="text-xs text-slate-400 pt-1 border-t border-slate-700/60">
          <span className="font-medium">Sold by: {sellerName}</span> |
          <span className="text-yellow-400 pl-1">
            {'★'.repeat(Math.floor(rating))}
            <span className="text-slate-600">{'★'.repeat(5 - Math.floor(rating))}</span>
            <span className="text-slate-400/80 pl-1">({rating})</span>
          </span>
        </div>

        {/* 5. Action Button */}
        <button
          onClick={handleAddToCart}
          className="mt-2 w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-400
                     px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-amber-500/30 hover:brightness-105
                     transition-all duration-200"
        >
          Add to Cart (Pay with QGT)
        </button>
      </div>
    </div>
  );
};

export default SunnahMallProductCard;
