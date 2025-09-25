import { useState, useEffect } from 'react';
import ElectionMatcher from './components/ElectionMatcher.jsx';
import type { ElectionConfig } from './types';

function App() {
  const [electionConfig, setElectionConfig] = useState<ElectionConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const state: string = urlParams.get('state') || 'florida';
    const county: string = urlParams.get('county') || 'hernando';
    const office: string = urlParams.get('office') || 'school-board';
    
    loadElectionConfig(state, county, office);
  }, []);

  const loadElectionConfig = async (state: string, county: string, office: string): Promise<void> => {
    try {
      const configModule = await import(`./data/elections/${state}-${county}-${office}.js`);
      setElectionConfig(configModule.ELECTION_CONFIG);
      setLoading(false);
    } catch (err) {
      setError(`Election not found: ${state}-${county}-${office}`);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Loading election data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Election Not Available</h2>
        <p>{error}</p>
        <p>Available elections:</p>
        <ul style={{textAlign: 'left', display: 'inline-block'}}>
          <li><a href="/?state=florida&county=hernando&office=school-board">Hernando County School Board</a></li>
        </ul>
      </div>
    );
  }

  return <ElectionMatcher config={electionConfig!} />;
}

export default App;