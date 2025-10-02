import { useState, useEffect } from 'react';
import ElectionMatcher from './components/elections/ElectionMatcher.jsx';
import ElectionSelector from './components/elections/ElectionSelector.jsx';
import type { ElectionConfig } from './types';
import { ELECTION_REGISTRY } from './data/electionRegistry.js';
import BallotMeasuresPage from './pages/BallotMeasuresPage';

function App() {
  const [electionConfig, setElectionConfig] = useState<ElectionConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLanding, setShowLanding] = useState<boolean>(true);

  useEffect(() => {
    // Check if URL has election parameters
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const county = urlParams.get('county');
    const office = urlParams.get('office');
    
    if (state && county && office) {
      setShowLanding(false);
      loadElectionConfig(state, county, office);
    }
  }, []);

// In loadElectionConfig function:

const loadElectionConfig = async (state: string, county: string, office: string): Promise<void> => {
    setLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const year = urlParams.get('year');
      
      let configKey;
      if (office === 'ballot-measures' && year) {
        configKey = `${state}-${county}-ballot-measures-${year}`;
      } else {
        configKey = `${state}-${county}-${office}`;
      }
      
      console.log('Looking for election config key:', configKey);
      
      const config = ELECTION_REGISTRY[configKey];
      if (!config) {
        throw new Error(`Election config not found: ${configKey}`);
      }
      
      setElectionConfig(config);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Failed to load election config:', err);
      setError(`Election not found: ${state}-${county}-${office}`);
      setLoading(false);
    }
  };
  const handleElectionSelect = () => {
    // Re-read URL parameters and load election
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state') || '';
    const county = urlParams.get('county') || '';
    const office = urlParams.get('office') || '';
    
    if (state && county && office) {
      setShowLanding(false);
      loadElectionConfig(state, county, office);
    }
  };

  const handleBackToLanding = () => {
    window.history.pushState(null, '', '/');
    setShowLanding(true);
    setElectionConfig(null);
    setError(null);
  };

  // Show landing page
  if (showLanding) {
    return <ElectionSelector onElectionSelect={handleElectionSelect} />;
  }

  // Show loading
  if (loading) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Loading election data...</h2>
      </div>
    );
  }

  // Show error
  if (error) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Election Not Available</h2>
        <p>{error}</p>
        <button 
          onClick={handleBackToLanding}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Back to Election Selection
        </button>
      </div>
    );
  }

  // Show election matcher with back button
  return (
    <div>
      <div style={{
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd'
      }}>
        <button
          onClick={handleBackToLanding}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Back to Election Selection
        </button>
      </div>
      <ElectionMatcher config={electionConfig!} />
    </div>
  );
}

export default App;