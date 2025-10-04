// src/components/CountyOfficesSelector.tsx
import React from 'react';

interface CountyOfficesSelectorProps {
  state: string;
  county: string;
  onOfficeSelect: (office: string, year?: string) => void;
  onBack: () => void;
}

const CountyOfficesSelector: React.FC<CountyOfficesSelectorProps> = ({
  state,
  county,
  onOfficeSelect,
  onBack
}) => {
  const offices = [
    { 
      office: 'school-board', 
      name: 'School Board', 
      date: '2026-11-03',
      icon: '🏫',
      description: 'Elect members who oversee public schools'
    },
    { 
      office: 'county-commission', 
      name: 'County Commission', 
      date: '2026-11-03',
      icon: '🏛️',
      description: 'Choose commissioners who manage county services'
    },
    { 
      office: 'ballot-measures', 
      name: '2026 Ballot Measures', 
      date: '2026-11-03',
      year: '2026',
      icon: '📋',
      description: 'Vote on constitutional amendments and local measures'
    }
  ];
  
  // Add city council for Hernando
  if (county === 'hernando') {
    offices.splice(2, 0, {
      office: 'city-council',
      name: 'City Council (Brooksville)',
      date: '2025-11-05',
      icon: '🏘️',
      description: 'Select city council members'
    });
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Map
        </button>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2 capitalize">
          {county} County Elections
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Choose an election type to view candidates and measures
        </p>
        
        <div className="grid gap-4">
          {offices.map((item) => (
            <button
              key={item.office}
              onClick={() => onOfficeSelect(item.office, item.year)}
              className="bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-400 
                         rounded-lg p-6 text-left transition-all duration-200 
                         hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Election Date: {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountyOfficesSelector;