// src/data/ballotMeasuresRegistry.js

// Import all ballot measures
import { AMENDMENT_3_2024 } from './ballot-measures/florida-amendment-3-marijuana.js';
import { HILLSBOROUGH_TRANSIT_TAX_2024 } from './ballot-measures/hillsborough-transit-tax.js';

// Registry of all ballot measures
export const BALLOT_MEASURES = {
  'florida-amendment-3-2024': {
    config: AMENDMENT_3_2024,
    jurisdictions: ['florida'],
    counties: null // null = applies to all counties in Florida
  },
  'hillsborough-transit-tax-2024': {
    config: HILLSBOROUGH_TRANSIT_TAX_2024,
    jurisdictions: ['hillsborough'],
    counties: ['hillsborough']
  }
};

// Helper function: Get all ballot measures for a specific location
export function getBallotMeasuresForLocation(county, state = 'florida') {
  const measures = [];
  
  Object.entries(BALLOT_MEASURES).forEach(([id, measure]) => {
    // Include statewide measures
    if (measure.jurisdictions.includes(state) && measure.counties === null) {
      measures.push(measure.config);
    }
    
    // Include county-specific measures
    if (county && measure.counties && measure.counties.includes(county.toLowerCase())) {
      measures.push(measure.config);
    }
  });
  
  return measures;
}

// Helper function: Get only upcoming ballot measures
export function getUpcomingBallotMeasures(county, state = 'florida') {
  const today = new Date();
  return getBallotMeasuresForLocation(county, state)
    .filter(measure => {
      const electionDate = new Date(measure.electionDate);
      return electionDate >= today && measure.status === 'upcoming';
    })
    .sort((a, b) => new Date(a.electionDate) - new Date(b.electionDate));
}

// Helper function: Get measures by type
export function getBallotMeasuresByType(type, county, state = 'florida') {
  return getBallotMeasuresForLocation(county, state)
    .filter(measure => measure.type === type);
}

// Helper function: Get measures by election date
export function getBallotMeasuresByDate(electionDate, county, state = 'florida') {
  return getBallotMeasuresForLocation(county, state)
    .filter(measure => measure.electionDate === electionDate);
}

// Helper function: Get completed measures with results
export function getCompletedBallotMeasures(county, state = 'florida') {
  return getBallotMeasuresForLocation(county, state)
    .filter(measure => measure.status === 'completed' && measure.results);
}

// Constants for ballot measure types
export const BALLOT_MEASURE_TYPES = {
  CONSTITUTIONAL_AMENDMENT: 'constitutional-amendment',
  COUNTY_REFERENDUM: 'county-referendum',
  CITY_REFERENDUM: 'city-referendum',
  BOND_ISSUE: 'bond-issue',
  TAX_LEVY: 'tax-levy',
  CHARTER_AMENDMENT: 'charter-amendment',
  INITIATIVE: 'initiative',
  RECALL: 'recall'
};

// Constants for argument categories
export const ARGUMENT_CATEGORIES = {
  PERSONAL_FREEDOM: 'personal-freedom',
  FISCAL_IMPACT: 'fiscal-impact',
  PUBLIC_SAFETY: 'public-safety',
  ECONOMIC_DEVELOPMENT: 'economic-development',
  EDUCATION: 'education',
  HEALTHCARE: 'healthcare',
  ENVIRONMENT: 'environment',
  TRANSPORTATION: 'transportation',
  GOVERNMENT_ACCOUNTABILITY: 'government-accountability',
  SOCIAL_JUSTICE: 'social-justice',
  TAX_BURDEN: 'tax-burden',
  INFRASTRUCTURE: 'infrastructure'
};