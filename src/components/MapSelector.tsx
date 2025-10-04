// src/components/MapSelector.tsx
import React, { useState } from 'react';
import USAMap from './USAMap';
import FloridaCountiesMap from './FloridaCountiesMap';
import { LocationSelection } from '../types/map.types';

interface MapSelectorProps {
  onLocationSelect: (location: LocationSelection) => void;
}

type ViewType = 'usa' | 'florida';

const MapSelector: React.FC<MapSelectorProps> = ({ onLocationSelect }) => {
  const [currentView, setCurrentView] = useState<ViewType>('usa');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  const handleStateSelect = (stateName: string): void => {
    if (stateName === 'florida') {
      setSelectedState('florida');
      setCurrentView('florida');
    }
  };
  
  const handleCountySelect = (countyName: string): void => {
    onLocationSelect({
      state: 'florida',
      county: countyName,
      viewMode: 'map'
    });
  };
  
  const handleBack = (): void => {
    setCurrentView('usa');
    setSelectedState(null);
  };
  
  return (
    <div className="w-full h-screen">
      {currentView === 'usa' ? (
        <USAMap onStateSelect={handleStateSelect} />
      ) : (
        <FloridaCountiesMap 
          onCountySelect={handleCountySelect}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default MapSelector;