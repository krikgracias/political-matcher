export const ELECTION_CONFIG = {
  id: 'florida-hernando-county-commission',
  state: 'florida',
  county: 'hernando',
  office: 'county-commission',
  title: 'Hernando County Commission',
  description: 'Find county commissioners who align with your priorities for local government',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'growth-management',
      category: 'development',
      text: 'How should the county manage residential and commercial growth?',
      options: [
        { value: 'controlled-growth', label: 'Strict growth management with environmental protections' },
        { value: 'business-friendly', label: 'Business-friendly development with minimal restrictions' },
        { value: 'balanced-approach', label: 'Balanced growth considering both development and conservation' },
        { value: 'community-input', label: 'Growth decisions based on extensive community input' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'infrastructure-priority',
      category: 'infrastructure',
      text: 'What infrastructure should be the county\'s top priority?',
      options: [
        { value: 'roads-transportation', label: 'Roads and transportation improvements' },
        { value: 'water-sewer', label: 'Water and sewer system upgrades' },
        { value: 'broadband-internet', label: 'High-speed internet access countywide' },
        { value: 'parks-recreation', label: 'Parks and recreational facilities' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'environmental-protection',
      category: 'environment',
      text: 'How important is environmental protection in county decisions?',
      options: [
        { value: 'top-priority', label: 'Environmental protection should be the top priority' },
        { value: 'balanced-consideration', label: 'Balance environmental needs with economic development' },
        { value: 'minimal-regulation', label: 'Minimal environmental regulations to encourage business' },
        { value: 'state-federal-standards', label: 'Follow state and federal standards only' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'tax-spending',
      category: 'fiscal',
      text: 'What should be the county\'s approach to taxes and spending?',
      options: [
        { value: 'low-taxes-minimal', label: 'Keep taxes low with minimal government services' },
        { value: 'moderate-taxes-services', label: 'Moderate taxes to fund essential services' },
        { value: 'invest-infrastructure', label: 'Higher taxes to invest in infrastructure and growth' },
        { value: 'efficient-spending', label: 'Focus on efficient spending rather than tax levels' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'public-safety',
      category: 'safety',
      text: 'How should the county approach public safety funding?',
      options: [
        { value: 'increase-sheriff', label: 'Increase sheriff\'s department funding significantly' },
        { value: 'emergency-services', label: 'Focus on fire and emergency medical services' },
        { value: 'prevention-programs', label: 'Invest in crime prevention and community programs' },
        { value: 'maintain-current', label: 'Maintain current funding levels' }
      ],
      order: 5,
      active: true
    }
  ],
candidates: [
    {
      id: 'elizabeth-narverud',
      name: 'Elizabeth Narverud',
      district: 'District 1',
      position: 'current',
      background: 'Vice Chair of Hernando County Commission, experienced local government official focused on community development and infrastructure.',
      positions: {
        'growth-management': 'balanced-approach',
        'infrastructure-priority': 'roads-transportation',
        'environmental-protection': 'balanced-consideration',
        'tax-spending': 'moderate-taxes-services',
        'public-safety': 'maintain-current'
      }
    },
    {
      id: 'brian-hawkins',
      name: 'Brian Hawkins',
      district: 'District 2',
      position: 'current',
      background: 'Hernando County Commissioner representing District 2, focused on constituent services and responsible growth management.',
      positions: {
        'growth-management': 'controlled-growth',
        'infrastructure-priority': 'water-sewer',
        'environmental-protection': 'balanced-consideration',
        'tax-spending': 'efficient-spending',
        'public-safety': 'increase-sheriff'
      }
    },
    {
      id: 'steve-champion',
      name: 'Steve Champion',
      district: 'District 5',
      position: 'current',
      background: 'Long-serving Hernando County Commissioner for District 5, advocate for fiscal responsibility and community development.',
      positions: {
        'growth-management': 'business-friendly',
        'infrastructure-priority': 'roads-transportation',
        'environmental-protection': 'state-federal-standards',
        'tax-spending': 'low-taxes-minimal',
        'public-safety': 'maintain-current'
      }
    }
  ]
};