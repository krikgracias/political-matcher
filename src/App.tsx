import { useState, useEffect } from 'react';
import ElectionMatcher from './components/ElectionMatcher.jsx';

function App() {
  const [electionConfig, setElectionConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state') || 'florida';
    const county = urlParams.get('county') || 'hernando';
    const office = urlParams.get('office') || 'school-board';
    
    loadElectionConfig(state, county, office);
  }, []);

  const loadElectionConfig = async (state, county, office) => {
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

  return <ElectionMatcher config={electionConfig} />;
}

export default App;