import { ELECTION_CONFIG as SchoolBoard } from './elections/florida-hernando-school-board.js';
import { ELECTION_CONFIG as CountyCommission } from './elections/florida-hernando-county-commission.js';
import { ELECTION_CONFIG as CityCouncil } from './elections/florida-brooksville-city-council.js';
import { ELECTION_CONFIG as BallotMeasures } from './elections/florida-hernando-ballot-measures-2026.js';

export const ELECTION_REGISTRY = {
  'florida-hernando-school-board': SchoolBoard,
  'florida-hernando-county-commission': CountyCommission,
  'florida-brooksville-city-council': CityCouncil,
  'florida-hernando-ballot-measures-2026': BallotMeasures
};