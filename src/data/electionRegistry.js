// HERNANDO COUNTY
import { ELECTION_CONFIG as HernandoSchoolBoard } from './elections/florida-hernando-school-board.js';
import { ELECTION_CONFIG as HernandoCountyCommission } from './elections/florida-hernando-county-commission.js';
import { ELECTION_CONFIG as BrooksvilleCityCouncil } from './elections/florida-brooksville-city-council.js';
import { ELECTION_CONFIG as HernandoBallotMeasures } from './elections/florida-hernando-ballot-measures-2026.js';

// STATE RACES
import { ELECTION_CONFIG as Senate11 } from './elections/florida-senate-district-11.js';

// PINELLAS COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PinellasSchoolBoard } from './elections/florida-pinellas-school-board.js';
import { ELECTION_CONFIG_COMMISSION as PinellasCountyCommission } from './elections/florida-pinellas-county-commission.js';

// HILLSBOROUGH COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as HillsboroughSchoolBoard } from './elections/florida-hillsborough-school-board.js';
import { ELECTION_CONFIG_COMMISSION as HillsboroughCountyCommission } from './elections/florida-hillsborough-county-commission.js';

// POLK COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PolkSchoolBoard } from './elections/florida-polk-school-board.js';
import { ELECTION_CONFIG_COMMISSION as PolkCountyCommission } from './elections/florida-polk-county-commission.js';

// PASCO COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PascoSchoolBoard } from './elections/florida-pasco-school-board.js';
import { ELECTION_CONFIG_COMMISSION as PascoCommission } from './elections/florida-pasco-county-commission.js';

// CITRUS COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as CitrusSchoolBoard } from './elections/florida-citrus-school-board.js';
import { ELECTION_CONFIG_COMMISSION as CitrusCountyCommission } from './elections/florida-citrus-county-commission.js';

// BALLOT MEASURES
import { AMENDMENT_3_2024 } from './ballot-measures/florida-amendment-3-marijuana.js';
import { HILLSBOROUGH_TRANSIT_TAX_2024 } from './ballot-measures/hillsborough-transit-tax.js';

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
  
  // HILLSBOROUGH COUNTY
  'florida-hillsborough-school-board': HillsboroughSchoolBoard,
  'florida-hillsborough-county-commission': HillsboroughCountyCommission,
  
  // POLK COUNTY
  'florida-polk-school-board': PolkSchoolBoard,
  'florida-polk-county-commission': PolkCountyCommission,
  
  // PASCO COUNTY
  'florida-pasco-school-board': PascoSchoolBoard,
  'florida-pasco-county-commission': PascoCommission,
  
  // CITRUS COUNTY
  'florida-citrus-school-board': CitrusSchoolBoard,
  'florida-citrus-county-commission': CitrusCountyCommission,

  // Add to your ELECTION_REGISTRY
'florida-hernando-ballot-measures-2026': AMENDMENT_3_2024,
'florida-citrus-ballot-measures-2026': AMENDMENT_3_2024,
'florida-hillsborough-ballot-measures-2026': HILLSBOROUGH_TRANSIT_TAX_2024,
'florida-polk-ballot-measures-2026': AMENDMENT_3_2024,
'florida-pinellas-ballot-measures-2026': AMENDMENT_3_2024,
'florida-pasco-ballot-measures-2026': AMENDMENT_3_2024,
};