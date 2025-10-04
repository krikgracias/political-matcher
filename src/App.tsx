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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLanding, setShowLanding] = useState<boolean>(true);

  // ✅ ALL LOGIC MUST BE INSIDE THE APP FUNCTION
  
  const loadConfig = async (state: string, county: string, office: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setElectionConfig(null);
    setBallotMeasureConfig(null);

    try {
      if (office === 'ballot-measures') {
        const measures = getBallotMeasuresForLocation(county, state);
        if (measures.length === 0) throw new Error('No ballot measures found.');
        
        let chosenMeasure = measures.find(m => m.jurisdiction?.counties?.includes(county));
        if (!chosenMeasure) chosenMeasure = measures[0];
        
        setBallotMeasureConfig(chosenMeasure);
      } else {
        const configKey = `${state}-${county}-${office}`;
        const config = ELECTION_REGISTRY[configKey];
        if (!config) throw new Error(`Election config not found: ${configKey}`);
        setElectionConfig(config);
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
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error} <button onClick={handleBackToLanding}>Go Back</button></div>;
  }

  const backButton = (
    <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <button onClick={handleBackToLanding} style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
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

  return <div><button onClick={handleBackToLanding}>Go Back</button></div>;
}

export default App;