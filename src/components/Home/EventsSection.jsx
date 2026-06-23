import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';

const EventsSection = ({ bg2, queen, king }) => {
  const handleBooking = useBooking();
  return (
    <div className="flex justify-center px-4 mt-20 mb-0">
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] h-auto min-h-[600px] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Queen Image */}
        <div className="relative lg:absolute lg:left-0 lg:bottom-0 z-10 transition-transform duration-500 hover:scale-110">
          <img
            src={queen}
            alt="Queen"
            className="h-[250px] sm:h-[350px] lg:h-[550px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 py-12 lg:py-0 max-w-lg mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
            NIGHTS OUT
          </h1>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight uppercase drop-shadow-md">
              THE ULTIMATE PARTY DESTINATION
            </p>
            <p className="text-base sm:text-lg text-gray-100 font-semibold drop-shadow-sm">
              From Birthdays and Team Socials to Kings & Queens Dos, we’ve got your night covered with epic games, food, and drinks.
            </p>
          </div>
          <button
            onClick={handleBooking}
            className="mt-10 px-10 py-4 bg-[#00AACB] hover:bg-[#E1017D] hover:scale-105 text-white font-bold rounded-full transition-all duration-300 text-xl shadow-lg uppercase"
          >
            Explore Events
          </button>
        </div>

        {/* King Image */}
        <div className="relative lg:absolute lg:right-0 lg:bottom-0 z-10 transition-transform duration-500 hover:scale-110">
          <img
            src={king}
            alt="King"
            className="h-[250px] sm:h-[350px] lg:h-[550px] object-contain"
          />
        </div>
        
        {/* Subtle Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default EventsSection;
