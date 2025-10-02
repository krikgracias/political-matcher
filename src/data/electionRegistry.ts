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

// HILLSBOROUGH COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as HillsboroughSchoolBoard } from './elections/florida-hillsborough-school-board';
import { ELECTION_CONFIG_COMMISSION as HillsboroughCountyCommission } from './elections/florida-hillsborough-county-commission';

// POLK COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PolkSchoolBoard } from './elections/florida-polk-school-board';
import { ELECTION_CONFIG_COMMISSION as PolkCountyCommission } from './elections/florida-polk-county-commission';

// PASCO COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as PascoSchoolBoard } from './elections/florida-pasco-school-board';
import { ELECTION_CONFIG_COMMISSION as PascoCommission } from './elections/florida-pasco-county-commission';

// CITRUS COUNTY
import { ELECTION_CONFIG_SCHOOL_BOARD as CitrusSchoolBoard } from './elections/florida-citrus-school-board';
import { ELECTION_CONFIG_COMMISSION as CitrusCountyCommission } from './elections/florida-citrus-county-commission';

// BALLOT MEASURES
import { AMENDMENT_3_2024 } from './ballot-measures/florida-amendment-3-marijuana';
import { HILLSBOROUGH_TRANSIT_TAX_2024 } from './ballot-measures/hillsborough-transit-tax';

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
  'florida-pinellas-ballot-measures-2026': AMENDMENT_3_2024,

  // HILLSBOROUGH COUNTY
  'florida-hillsborough-school-board': HillsboroughSchoolBoard,
  'florida-hillsborough-county-commission': HillsboroughCountyCommission,
  'florida-hillsborough-ballot-measures-2026': HILLSBOROUGH_TRANSIT_TAX_2024,
  
  // POLK COUNTY
  'florida-polk-school-board': PolkSchoolBoard,
  'florida-polk-county-commission': PolkCountyCommission,
  'florida-polk-ballot-measures-2026': AMENDMENT_3_2024, 

  // PASCO COUNTY
  'florida-pasco-school-board': PascoSchoolBoard,
  'florida-pasco-county-commission': PascoCommission,
  'florida-pasco-ballot-measures-2026': AMENDMENT_3_2024,

  // CITRUS COUNTY
  'florida-citrus-school-board': CitrusSchoolBoard,
  'florida-citrus-county-commission': CitrusCountyCommission,
  'florida-citrus-ballot-measures-2026': AMENDMENT_3_2024,
};