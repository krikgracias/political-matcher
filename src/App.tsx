import { useState, useEffect } from 'react';
import ElectionMatcher from './components/elections/ElectionMatcher.jsx';
import ElectionSelector from './components/elections/ElectionSelector.jsx';
import BallotMeasureMatcher from './components/ballot-measures/BallotMeasureMatcher';
import type { ElectionConfig, BallotMeasureConfig } from './types';
import { ELECTION_REGISTRY } from './data/electionRegistry.js';
import { getBallotMeasuresForLocation } from './data/ballotMeasuresRegistry.js';

function App() {
  const [electionConfig, setElectionConfig] = useState<ElectionConfig | null>(null);
  const [ballotMeasureConfig, setBallotMeasureConfig] = useState<BallotMeasureConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Start with loading true
  const [error, setError] = useState<string | null>(null);
  const [showLanding, setShowLanding] = useState<boolean>(true);

  const loadConfig = async (state: string, county: string, office: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setElectionConfig(null);
    setBallotMeasureConfig(null);

    try {
      if (office === 'ballot-measures') {
        const measures = getBallotMeasuresForLocation(county, state);
        if (measures.length === 0) throw new Error('No ballot measures found for this location.');
        
        // ✅ CORRECTED LOGIC: Check for county-specific measures correctly
        let chosenMeasure = measures.find(m => m.jurisdiction?.counties?.includes(county.toLowerCase()));
        if (!chosenMeasure) chosenMeasure = measures[0];
        
        setBallotMeasureConfig(chosenMeasure);
      } else {
        const configKey = `${state.toLowerCase()}-${county.toLowerCase()}-${office.toLowerCase()}`;
        const config = ELECTION_REGISTRY[configKey];
        if (!config) throw new Error(`Election config not found: ${configKey}`);
        setElectionConfig(config as ElectionConfig);
      }
    } catch (err: any) {
      setError(err.message || 'Content not found.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const county = urlParams.get('county');
    const office = urlParams.get('office');
    
    if (state && county && office) {
      setShowLanding(false);
      loadConfig(state, county, office);
    } else {
      setLoading(false); // If no params, stop loading
    }
  }, []);

  const handleElectionSelect = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state') || '';
    const county = urlParams.get('county') || '';
    const office = urlParams.get('office') || '';
    
    if (state && county && office) {
      setShowLanding(false);
      loadConfig(state, county, office);
    }
  };

  const handleBackToLanding = () => {
    window.history.pushState(null, '', '/');
    setShowLanding(true);
    setElectionConfig(null);
    setBallotMeasureConfig(null);
    setError(null);
  };

  if (showLanding) {
    return <ElectionSelector onElectionSelect={handleElectionSelect} />;
  }
  if (loading) {
    return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center"><h2>Loading...</h2></div>;
  }
  if (error) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl text-red-500 mb-4">Content Not Available</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <button onClick={handleBackToLanding} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Selection</button>
      </div>
    );
  }

  // ✅ UPDATED STYLING for the back button
  const backButton = (
    <div className="bg-gray-800 p-3 border-b border-gray-700">
      <button onClick={handleBackToLanding} className="bg-gray-600 hover:bg-gray-500 text-white text-sm font-bold py-2 px-4 rounded">
        ← Back to Selection
      </button>
    </div>
  );
  
  if (ballotMeasureConfig) {
    return <div>{backButton}<BallotMeasureMatcher config={ballotMeasureConfig} /></div>;
  }
  
  if (electionConfig) {
    return <div>{backButton}<ElectionMatcher config={electionConfig} /></div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <button onClick={handleBackToLanding} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Selection</button>
    </div>
  );
}

export default App;