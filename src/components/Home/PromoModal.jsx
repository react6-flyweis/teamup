import React, { useState, useEffect } from 'react';

const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show promo modal after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-[100] animate-slide-up">
      <div className="bg-gradient-to-br from-[#E1017D] to-[#b00162] text-white rounded-xl w-full sm:w-[400px] p-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/20">
        <button
          className="absolute top-2 right-4 text-white text-3xl font-light hover:text-gray-200 transition-colors"
          onClick={() => setIsVisible(false)}
        >
          ×
        </button>
        <h2
          style={{ fontFamily: 'Posterama2001W04' }}
          className="text-[20px] font-bold leading-tight mb-6 mt-2 uppercase tracking-wide text-center"
        >
          SIGN UP TO RECEIVE 10% OFF YOUR FIRST GAME, NEWS & UPDATES
        </h2>
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" style={{ fontFamily: 'Noir Pro' }}>
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex justify-start">
            <button
              style={{ fontFamily: 'Posterama2001W04' }}
              className="bg-black text-white px-8 py-3 mt-4 rounded font-bold hover:bg-gray-900 transition-colors uppercase text-sm"
              onClick={() => setIsVisible(false)}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
