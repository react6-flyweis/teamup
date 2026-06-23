import React, { useState, useRef, useEffect } from 'react';
import { useLocationContext } from '../context/LocationContext';

const LocationSelector = ({ isMobile, onSelect }) => {
  const { selectedLocation, setSelectedLocation, locations } = useLocationContext();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (loc) => {
    setSelectedLocation(loc);
    setIsOpen(false);
    if (onSelect) {
      onSelect(loc);
    }
  };

  const widthClass = isMobile ? 'w-full' : 'w-40';
  const textClass = isMobile ? 'text-[14px]' : 'text-[13px]';
  const dropdownAnimClass = isMobile ? '' : 'animate-dropdown';

  return (
    <div ref={selectorRef} className={`relative inline-block ${widthClass} text-white text-sm font-normal`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-[#8B8B8B] rounded-md px-3 py-2 bg-black/40 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <img src="https://flagcdn.com/us.svg" alt="flag" className="w-5 h-auto rounded-sm shadow-sm" />
          <div className={`${textClass} font-bold leading-tight whitespace-nowrap`}>
            {selectedLocation ? `${selectedLocation.city}, ${selectedLocation.state}` : 'Select Location'}
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-white transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className={`absolute mt-1 bg-black border border-gray-400 rounded shadow-md w-full z-50 ${dropdownAnimClass}`}>
          {locations.map((loc, idx) => (
            <div
              key={loc._id || idx}
              onClick={() => handleSelect(loc)}
              className="px-3 py-1 hover:bg-gray-700 cursor-pointer"
            >
              {loc.city}, {loc.state}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
