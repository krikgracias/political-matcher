// src/App.tsx
import { useState, useEffect } from 'react';
import ElectionSelector from './components/elections/ElectionSelector';
import ElectionMatcher from './components/elections/ElectionMatcher';
import BallotMeasureMatcher from './components/ballot-measures/BallotMeasureMatcher';
import MapSelector from './components/MapSelector';
import { ELECTION_REGISTRY } from './data/electionRegistry';
import { LocationSelection } from './types/map.types';

type ViewMode = 'map' | 'dropdown';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedElection, setSelectedElection] = useState<string | null>(null);
  const [electionConfig, setElectionConfig] = useState<any>(null);
  
  const handleMapLocationSelect = ({ state, county }: LocationSelection): void => {
    const params = new URLSearchParams({
      state: state,
      county: county,
      viewMode: 'dropdown'
    });
    window.history.pushState(null, '', `?${params.toString()}`);
    setViewMode('dropdown');
    checkUrlParams();
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
        setSelectedElection(electionKey);
      }
    }
  };
  
  useEffect(() => {
    checkUrlParams();
  }, []);
  
  if (electionConfig) {
    if (electionConfig.office === 'ballot-measures') {
      return <BallotMeasureMatcher config={electionConfig} />;
    }
    return <ElectionMatcher config={electionConfig} />;
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