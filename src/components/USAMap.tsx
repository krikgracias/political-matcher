// src/components/USAMap.tsx
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

interface USAMapProps {
  onStateSelect: (stateName: string) => void;
}

const USAMap: React.FC<USAMapProps> = ({ onStateSelect }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  const statesWithData = ['Florida'];
  
  return (
    <div className="w-full h-screen bg-gray-100 relative">
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Select Your State</h2>
        <p className="text-gray-600 mt-1">Click on Florida to view elections</p>
      </div>
      
      <ComposableMap projection="geoAlbersUsa" className="w-full h-full">
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo: any) => {
                const stateName = geo.properties.name;
                const hasData = statesWithData.includes(stateName);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredState(stateName)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => hasData && onStateSelect(stateName.toLowerCase())}
                    style={{
                      default: {
                        fill: hasData ? "#3B82F6" : "#E5E7EB",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      },
                      hover: {
                        fill: hasData ? "#2563EB" : "#D1D5DB",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.75,
                        outline: "none",
                        cursor: hasData ? "pointer" : "default"
                      },
                      pressed: {
                        fill: "#1E40AF",
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
      
      {hoveredState && (
        <div className="absolute bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {statesWithData.includes(hoveredState) 
            ? `Click to view ${hoveredState} elections` 
            : `${hoveredState} - Coming Soon`}
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2 text-gray-800">Legend</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-700">Elections Available</span>
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

export default USAMap;