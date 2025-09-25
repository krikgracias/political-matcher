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
      // Handle special case for ballot measures with year
      const urlParams = new URLSearchParams(window.location.search);
      const year = urlParams.get('year');
      
      let configPath;
      if (office === 'ballot-measures' && year) {
        configPath = `./data/elections/${state}-${county}-ballot-measures-${year}.js`;
      } else {
        configPath = `./data/elections/${state}-${county}-${office}.js`;
      }
      
      const configModule = await import(configPath);
      setElectionConfig(configModule.ELECTION_CONFIG);
      setLoading(false);
    } catch (err) {
      setError(`Election not found: ${state}-${county}-${office}`);
      setLoading(false);
    }
  };

if (error) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <h2>Election Not Available</h2>
        <p>{error}</p>
        <p>Available elections:</p>
        <ul style={{textAlign: 'left', display: 'inline-block'}}>
          <li><a href="/?state=florida&county=hernando&office=school-board">Hernando County School Board</a></li>
          <li><a href="/?state=florida&county=hernando&office=county-commission">Hernando County Commission</a></li>
          <li><a href="/?state=florida&county=hernando&office=city-council">Brooksville City Council</a></li>
          <li><a href="/?state=florida&county=hernando&office=ballot-measures&year=2026">2026 Ballot Measures</a></li>
        </ul>
      </div>
    );
  }
  return <ElectionMatcher config={electionConfig!} />;
}

export default App;