import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuSection = ({ bits, drinks }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 px-4 sm:px-6 md:flex-row md:gap-6 lg:gap-10 lg:py-8 lg:px-12 md:mb-0 mt-20">
      {/* BITS Card */}
      <div className="relative w-full max-w-[600px]">
        <img
          src={bits}
          alt="Bits"
          className="w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[365px] object-cover rounded-lg shadow-md"
        />
        <div
          className="font-posterama absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col items-center justify-center p-2"
        >
          <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold mt-8 sm:mt-12 lg:mt-24 mb-2 sm:mb-4">
            BITS
          </h2>

          <button
            onClick={() => navigate('/food')}
            className="bg-cyan-500 hover:bg-[#E1017D] w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mt-4 sm:mt-8 lg:mt-24 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 lg:py-4 rounded"
          >
            VIEW MENU
          </button>
        </div>
      </div>

      {/* Ampersand */}
      <div className="text-2xl sm:text-3xl font-bold text-gray-700 hidden md:block">
        &
      </div>

      {/* DRINKS Card */}
      <div className="relative w-full max-w-[600px]">
        <img
          src={drinks}
          alt="Drinks"
          className="w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[365px] object-cover rounded-lg shadow-md"
        />
        <div
          className="font-posterama absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col items-center justify-center p-2"
        >
          <h2 className="text-white text-center text-xl sm:text-3xl md:text-4xl lg:text-[54px] font-bold mt-8 sm:mt-12 lg:mt-24 mb-2 sm:mb-4 leading-none">
            DRINKS <span className="text-[#00AACB]">&</span><br /> COCKTAILS
          </h2>

          <button
            onClick={() => navigate('/cocktails')}
            className="font-posterama bg-cyan-500 hover:bg-[#E1017D] w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mt-4 sm:mt-8 lg:mt-24 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 lg:py-4 rounded transition-colors"
          >
            VIEW MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
