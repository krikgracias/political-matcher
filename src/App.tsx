// In App.tsx

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
      
      // ✅ START OF NEW LOGIC
      // Try to find a measure that is specific to the selected county
      let chosenMeasure = measures.find(m => m.jurisdiction?.counties?.includes(county));
      
      // If no county-specific measure is found, fall back to the first one in the list (the statewide one)
      if (!chosenMeasure) {
        chosenMeasure = measures[0];
      }
      
      setBallotMeasureConfig(chosenMeasure);
      // ✅ END OF NEW LOGIC

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