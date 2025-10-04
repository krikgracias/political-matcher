// src/data/electionRegistry.js

// HERNANDO COUNTY
import { ELECTION_CONFIG as HernandoSchoolBoard } from './elections/florida-hernando-school-board';
import { ELECTION_CONFIG as HernandoCountyCommission } from './elections/florida-hernando-county-commission';
import { ELECTION_CONFIG as BrooksvilleCityCouncil } from './elections/florida-brooksville-city-council';
import { ELECTION_CONFIG as HernandoBallotMeasures } from './elections/florida-hernando-ballot-measures-2026';

// STATE RACES
import { ELECTION_CONFIG as Senate11 } from './elections/florida-senate-district-11';

// PINELLAS COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PinellasSchoolBoard } from './elections/florida-pinellas-school-board';
import { ELECTION_CONFIG_COMMISSION as PinellasCountyCommission } from './elections/florida-pinellas-county-commission';
import { ELECTION_CONFIG as PinellasBallotMeasures } from './elections/florida-pinellas-ballot-measures-2026';

// HILLSBOROUGH COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as HillsboroughSchoolBoard } from './elections/florida-hillsborough-school-board';
import { ELECTION_CONFIG_COMMISSION as HillsboroughCountyCommission } from './elections/florida-hillsborough-county-commission';
import { ELECTION_CONFIG as HillsboroughBallotMeasures } from './elections/florida-hillsborough-ballot-measures-2026';

// POLK COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PolkSchoolBoard } from './elections/florida-polk-school-board';
import { ELECTION_CONFIG_COMMISSION as PolkCountyCommission } from './elections/florida-polk-county-commission';
import { ELECTION_CONFIG as PolkBallotMeasures } from './elections/florida-polk-ballot-measures-2026';

// PASCO COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PascoSchoolBoard } from './elections/florida-pasco-school-board';
import { ELECTION_CONFIG_COMMISSION as PascoCommission } from './elections/florida-pasco-county-commission';
import { ELECTION_CONFIG as PascoBallotMeasures } from './elections/florida-pasco-ballot-measures-2026';

// CITRUS COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as CitrusSchoolBoard } from './elections/florida-citrus-school-board';
import { ELECTION_CONFIG_COMMISSION as CitrusCountyCommission } from './elections/florida-citrus-county-commission';
import { ELECTION_CONFIG as CitrusBallotMeasures } from './elections/florida-citrus-ballot-measures-2026';

export const ELECTION_REGISTRY = {
  // STATE RACES (Multi-County)
  'florida-senate-district-11': Senate11,
  
  // HERNANDO COUNTY
  'florida-hernando-school-board': HernandoSchoolBoard,
  'florida-hernando-county-commission': HernandoCountyCommission,
  'florida-hernando-city-council': BrooksvilleCityCouncil,
  'florida-hernando-ballot-measures-2026': HernandoBallotMeasures,
  
  // PINELLAS COUNTY
  'florida-pinellas-school-board': PinellasSchoolBoard,
  'florida-pinellas-county-commission': PinellasCountyCommission,
  'florida-pinellas-ballot-measures-2026': PinellasBallotMeasures,

  // HILLSBOROUGH COUNTY
  'florida-hillsborough-school-board': HillsboroughSchoolBoard,
  'florida-hillsborough-county-commission': HillsboroughCountyCommission,
  'florida-hillsborough-ballot-measures-2026': HillsboroughBallotMeasures,
  
  // POLK COUNTY
  'florida-polk-school-board': PolkSchoolBoard,
  'florida-polk-county-commission': PolkCountyCommission,
  'florida-polk-ballot-measures-2026': PolkBallotMeasures,

  // PASCO COUNTY
  'florida-pasco-school-board': PascoSchoolBoard,
  'florida-pasco-county-commission': PascoCommission,
  'florida-pasco-ballot-measures-2026': PascoBallotMeasures,

  // CITRUS COUNTY
  'florida-citrus-school-board': CitrusSchoolBoard,
  'florida-citrus-county-commission': CitrusCountyCommission,
  'florida-citrus-ballot-measures-2026': CitrusBallotMeasures,
};