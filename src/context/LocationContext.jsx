import React, { createContext, useState, useContext, useEffect } from 'react';

const LocationContext = createContext();

export const locations = [
  { city: 'Folsom', state: 'CA' },
  { city: 'Citrus Heights', state: 'CA' },
  { city: 'Eastvale', state: 'CA' },
];

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(() => {
    const saved = localStorage.getItem('selectedLocation');
    return saved ? JSON.parse(saved) : locations[1];
  });

  useEffect(() => {
    localStorage.setItem('selectedLocation', JSON.stringify(selectedLocation));
  }, [selectedLocation]);

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation, locations }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
