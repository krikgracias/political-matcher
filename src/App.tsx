// src/App.tsx
import { useState, useEffect } from 'react';
import ElectionSelector from './components/elections/ElectionSelector';
import ElectionMatcher from './components/elections/ElectionMatcher';
import BallotMeasureMatcher from './components/ballot-measures/BallotMeasureMatcher';
import MapSelector from './components/MapSelector';
import CountyOfficesSelector from './components/CountyOfficesSelector'; // Add this line
import { ELECTION_REGISTRY } from './data/electionRegistry';
import { LocationSelection } from './types/map.types';

type ViewMode = 'map' | 'dropdown' | 'county-offices';

interface SelectedLocation {
  state: string;
  county: string;
}

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);
  const [electionConfig, setElectionConfig] = useState<any>(null);
  
  const handleMapLocationSelect = ({ state, county }: LocationSelection): void => {
    // Store the selected location
    setSelectedLocation({ state, county });
    setViewMode('county-offices');
  };
  
const handleOfficeSelect = (office: string, year?: string): void => {
  if (!selectedLocation) return;
  
  let electionKey = `${selectedLocation.state}-${selectedLocation.county}-${office}`;
  if (year) {
    electionKey += `-${year}`;
  }
  
  console.log('Looking for election key:', electionKey); // Debug log
  
  const config = ELECTION_REGISTRY[electionKey];
  if (config) {
    console.log('Found config:', config); // Debug log
    setElectionConfig(config);
  } else {
    console.error('No config found for:', electionKey);
  }
};
  
  const checkUrlParams = (): void => {
    const params = new URLSearchParams(window.location.search);
    const state = params.get('state');
    const county = params.get('county');
    const office = params.get('office');
    const year = params.get('year');
    
    if (state && county && office) {
      let electionKey = `${state}-${county}-${office}`;
      if (year) {
        electionKey += `-${year}`;
      }
      
      const config = ELECTION_REGISTRY[electionKey];
      if (config) {
        setElectionConfig(config);
      }
    }
  };
  
  useEffect(() => {
    checkUrlParams();
  }, []);
  
  // If an election is selected, show it
  if (electionConfig) {
    if (electionConfig.office === 'ballot-measures') {
      return <BallotMeasureMatcher config={electionConfig} />;
    }
    return <ElectionMatcher config={electionConfig} />;
  }
  
  // Show county offices selector after county is selected from map
  if (viewMode === 'county-offices' && selectedLocation) {
    return (
      <CountyOfficesSelector
        state={selectedLocation.state}
        county={selectedLocation.county}
        onOfficeSelect={handleOfficeSelect}
        onBack={() => {
          setSelectedLocation(null);
          setViewMode('map');
        }}
      />
    );
  }
  
  return (
    <div className="relative">
      <button
        onClick={() => setViewMode(viewMode === 'map' ? 'dropdown' : 'map')}
        className="fixed top-4 right-4 z-20 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        Switch to {viewMode === 'map' ? 'List' : 'Map'} View
      </button>
      
      {viewMode === 'map' ? (
        <MapSelector onLocationSelect={handleMapLocationSelect} />
      ) : (
        <ElectionSelector onElectionSelect={checkUrlParams} />
      )}
    </div>
  );
}

export default App;