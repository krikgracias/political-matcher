// src/data/elections/florida-hernando-ballot-measures-2026.js
import { AMENDMENT_3_2024 } from '../ballot-measures/florida-amendment-3-marijuana.js';

export const ELECTION_CONFIG = {
  ...AMENDMENT_3_2024,  // This spreads all the required properties
  
  // Override with county-specific metadata
  id: 'florida-hernando-ballot-measures-2026',
  state: 'florida',
  county: 'hernando',
  office: 'ballot-measures',
  title: 'Hernando County Ballot Measures 2026',
  description: 'Learn about ballot measures and constitutional amendments on your ballot',
  electionDate: '2026-11-03',
  
  // Add map to prevent undefined errors
  map: null,
  
  // Keep candidates empty for ballot measures
  candidates: []
  
  // The questions, fiscalImpact, results, supportersArguments, etc. 
  // all come from AMENDMENT_3_2024 via the spread operator
};