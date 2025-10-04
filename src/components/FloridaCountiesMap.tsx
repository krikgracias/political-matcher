// src/components/FloridaCountiesMap.tsx
import React, { useState } from 'react';
import { CountiesWithData } from '../types/map.types';

interface FloridaCountiesMapProps {
  onCountySelect: (countyName: string) => void;
  onBack: () => void;
}

const FloridaCountiesMap: React.FC<FloridaCountiesMapProps> = ({ onCountySelect, onBack }) => {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  
  const countiesWithData: CountiesWithData = {
    'Hernando': { elections: 4, name: 'hernando' },
    'Citrus': { elections: 3, name: 'citrus' },
    'Hillsborough': { elections: 3, name: 'hillsborough' },
    'Polk': { elections: 3, name: 'polk' },
    'Pinellas': { elections: 3, name: 'pinellas' },
    'Pasco': { elections: 3, name: 'pasco' }
  };
  
  const getCountyColor = (elections: number): string => {
    if (elections >= 4) return "bg-gradient-to-br from-blue-600 to-blue-700";
    if (elections >= 3) return "bg-gradient-to-br from-blue-500 to-blue-600";
    return "bg-gradient-to-br from-blue-400 to-blue-500";
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to USA Map
          </button>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Florida Counties</h1>
          <p className="text-gray-600 text-lg">Select your county to view available elections</p>
        </div>
        
        {/* County Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(countiesWithData).map(([countyName, data]) => (
            <button
              key={countyName}
              onClick={() => onCountySelect(data.name)}
              onMouseEnter={() => setHoveredCounty(countyName)}
              onMouseLeave={() => setHoveredCounty(null)}
              className={`
                ${getCountyColor(data.elections)}
                text-white rounded-xl p-6 
                transform transition-all duration-200
                hover:scale-105 hover:shadow-2xl
                focus:outline-none focus:ring-4 focus:ring-blue-300
                relative overflow-hidden
              `}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-2">{countyName} County</h3>
                <div className="flex items-center justify-center gap-2 text-blue-100">
                  <span className="text-3xl font-bold">{data.elections}</span>
                  <span className="text-sm">elections<br/>available</span>
                </div>
                
                {/* Hover indicator */}
                <div className={`mt-4 text-sm ${hoveredCounty === countyName ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  Click to view →
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Info Box */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-3">📍 Coverage Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="mb-2">✓ School Board Elections</p>
              <p className="mb-2">✓ County Commission Races</p>
            </div>
            <div>
              <p className="mb-2">✓ City Council (select cities)</p>
              <p className="mb-2">✓ 2026 Ballot Measures</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 italic">
            More Florida counties will be added soon. We're working to expand coverage across all 67 counties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloridaCountiesMap;