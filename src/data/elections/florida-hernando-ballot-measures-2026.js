export const ELECTION_CONFIG = {
  id: 'florida-hernando-ballot-measures-2026',
  state: 'florida',
  county: 'hernando',
  office: 'ballot-measures',
  title: 'Hernando County Ballot Measures 2026',
  description: 'Learn about ballot measures and constitutional amendments on your ballot',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'infrastructure-bond',
      category: 'fiscal',
      text: 'Should Hernando County issue bonds for infrastructure improvements?',
      options: [
        { value: 'strongly-support', label: 'Strongly support - infrastructure is critical' },
        { value: 'support-conditions', label: 'Support with proper oversight and conditions' },
        { value: 'oppose-taxes', label: 'Oppose - would increase taxes too much' },
        { value: 'oppose-priorities', label: 'Oppose - other priorities are more important' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'environmental-protection',
      category: 'environment',
      text: 'Should the county create additional environmental protection measures?',
      options: [
        { value: 'strongly-support', label: 'Strongly support - protect natural resources' },
        { value: 'support-balanced', label: 'Support balanced environmental protections' },
        { value: 'oppose-business', label: 'Oppose - would hurt business development' },
        { value: 'oppose-unnecessary', label: 'Oppose - current protections are sufficient' }
      ],
      order: 2,
      active: true
    }
  ],
  candidates: [
    {
      id: 'yes-infrastructure-bond',
      name: 'YES on Infrastructure Bond',
      district: 'Countywide',
      position: 'ballot-measure',
      background: 'Supporting the infrastructure bond measure for road, water, and facility improvements.',
      positions: {
        'infrastructure-bond': 'strongly-support',
        'environmental-protection': 'support-balanced'
      }
    },
    {
      id: 'no-infrastructure-bond',
      name: 'NO on Infrastructure Bond',
      district: 'Countywide',
      position: 'ballot-measure',
      background: 'Opposing the infrastructure bond due to tax impact and spending concerns.',
      positions: {
        'infrastructure-bond': 'oppose-taxes',
        'environmental-protection': 'oppose-unnecessary'
      }
    }
  ]
};