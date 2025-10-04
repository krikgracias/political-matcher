import { useState, useEffect } from 'react';
import ElectionMatcher from './components/elections/ElectionMatcher.jsx';
import ElectionSelector from './components/elections/ElectionSelector.jsx';
import BallotMeasureMatcher from './components/ballot-measures/BallotMeasureMatcher';
import type { ElectionConfig, BallotMeasureConfig } from './types'; // Make sure both types are imported
import { ELECTION_REGISTRY } from './data/electionRegistry.js';
import { getBallotMeasuresForLocation } from './data/ballotMeasuresRegistry.js'; // Import ballot measure function

function App() {
  // 1. USE SEPARATE STATE VARIABLES
  const [electionConfig, setElectionConfig] = useState<ElectionConfig | null>(null);
  const [ballotMeasureConfig, setBallotMeasureConfig] = useState<BallotMeasureConfig | null>(null);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLanding, setShowLanding] = useState<boolean>(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const county = urlParams.get('county');
    const office = urlParams.get('office');
    
    if (state && county && office) {
      setShowLanding(false);
      loadConfig(state, county, office);
    }
  }, []);

  // 2. UPDATE YOUR LOADING LOGIC
  const loadConfig = async (state: string, county: string, office: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setElectionConfig(null);
    setBallotMeasureConfig(null);

    try {
      if (office === 'ballot-measures') {
        const measures = getBallotMeasuresForLocation(county, state);
        if (measures.length === 0) {
          throw new Error('No ballot measures found for this location.');
        }
        // This loads the first available measure. You can add more specific logic if needed.
        setBallotMeasureConfig(measures[0]);
      } else {
        const configKey = `${state}-${county}-${office}`;
        const config = ELECTION_REGISTRY[configKey];
        if (!config) {
          throw new Error(`Election config not found: ${configKey}`);
        }
        setElectionConfig(config);
      }
    } catch (err: any) {
      console.error('Failed to load config:', err);
      setError(err.message || `Content not found for: ${state}-${county}-${office}`);
    } finally {
      setLoading(false);
    }
  };

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

  // 3. UPDATE THE RESET LOGIC
  const handleBackToLanding = () => {
    window.history.pushState(null, '', '/');
    setShowLanding(true);
    setElectionConfig(null);
    setBallotMeasureConfig(null); // Reset the new state as well
    setError(null);
  };

  // The landing, loading, and error views remain the same
  if (showLanding) {
    return <ElectionSelector onElectionSelect={handleElectionSelect} />;
  }
  if (loading) {
    return <div style={{padding: '40px', textAlign: 'center'}}><h2>Loading...</h2></div>;
  }
  if (error) {
    return (
        <div style={{padding: '40px', textAlign: 'center'}}>
            <h2>Content Not Available</h2>
            <p>{error}</p>
            <button onClick={handleBackToLanding}>Back to Selection</button>
        </div>
    );
  }

  // 4. UPDATE THE RENDERING LOGIC
  const backButton = (
    <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <button onClick={handleBackToLanding} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        ← Back to Selection
      </button>
    </div>
  );
  
  if (ballotMeasureConfig) {
    return (
      <div>
        {backButton}
        <BallotMeasureMatcher config={ballotMeasureConfig} />
      </div>
    );
  }
  
  if (electionConfig) {
    return (
      <div>
        {backButton}
        <ElectionMatcher config={electionConfig} />
      </div>
    );
  }

  // Fallback if no config is loaded after loading completes
  return (
    <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Could not load content.</h2>
        <button onClick={handleBackToLanding}>Back to Selection</button>
    </div>
  );
}

export default App;