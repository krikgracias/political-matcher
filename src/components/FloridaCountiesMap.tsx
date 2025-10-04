// src/components/FloridaCountiesMap.tsx
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { CountiesWithData } from '../types/map.types';

interface FloridaCountiesMapProps {
  onCountySelect: (countyName: string) => void;
  onBack: () => void;
}

const FloridaCountiesMap: React.FC<FloridaCountiesMapProps> = ({ onCountySelect, onBack }) => {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/FL-12-florida-counties.json";
  
  const countiesWithData: CountiesWithData = {
    'Hernando': { elections: 4, name: 'hernando' },
    'Citrus': { elections: 3, name: 'citrus' },
    'Hillsborough': { elections: 3, name: 'hillsborough' },
    'Polk': { elections: 3, name: 'polk' },
    'Pinellas': { elections: 3, name: 'pinellas' },
    'Pasco': { elections: 3, name: 'pasco' }
  };
  
  const getCountyColor = (countyName: string): string => {
    const county = countiesWithData[countyName];
    if (!county) return "#E5E7EB";
    if (county.elections >= 4) return "#1E40AF";
    if (county.elections >= 3) return "#3B82F6";
    return "#60A5FA";
  };
  
  return (
    <div className="w-full h-screen bg-gray-100 relative">
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-md">
        <button 
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-1"
        >
          ← Back to USA
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Florida Counties</h2>
        <p className="text-gray-600 mt-1">Select your county to view elections</p>
      </div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-81.5, 27.6],
          scale: 5500
        }}
        className="w-full h-full"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo: any) => {
                const countyName = geo.properties.NAME;
                const hasData = countiesWithData[countyName];
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredCounty(countyName)}
                    onMouseLeave={() => setHoveredCounty(null)}
                    onClick={() => hasData && onCountySelect(hasData.name)}
                    style={{
                      default: {
                        fill: getCountyColor(countyName),
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      },
                      hover: {
                        fill: hasData ? "#1D4ED8" : "#D1D5DB",
                        stroke: "#FFFFFF",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: hasData ? "pointer" : "default"
                      },
                      pressed: {
                        fill: "#1E3A8A",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      
      {hoveredCounty && (
        <div className="absolute bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {countiesWithData[hoveredCounty]
            ? `${hoveredCounty} County - ${countiesWithData[hoveredCounty].elections} elections available`
            : `${hoveredCounty} County - Coming Soon`}
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2 text-gray-800">Elections Available</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-900 rounded"></div>
            <span className="text-sm text-gray-700">4 elections</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-700">3 elections</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span className="text-sm text-gray-700">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloridaCountiesMap;