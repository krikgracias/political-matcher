export const ELECTION_CONFIG_COMMISSION = {
  id: 'florida-citrus-county-commission',
  state: 'florida',
  county: 'citrus',
  office: 'county-commission',
  title: 'Citrus County Commission',
  description: 'Find county commissioners who align with your priorities for Citrus County',
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
      id: 'housing-crisis',
      category: 'social',
      text: 'How should the county address affordable housing and homelessness?',
      options: [
        { value: 'increase-programs', label: 'Increase county funding for housing assistance programs' },
        { value: 'partner-nonprofits', label: 'Partner with nonprofits and seek federal grants' },
        { value: 'zoning-incentives', label: 'Use zoning and incentives to encourage affordable housing' },
        { value: 'minimal-intervention', label: 'Minimal government intervention, let market solve it' }
      ],
      order: 3,
      active: true
    }
  ],
  candidates: [
    {
      id: 'jeff-kinnard',
      name: 'Jeff Kinnard',
      district: 'District 1',
      position: 'current',
      background: 'Re-elected in November 2024. Republican commissioner focused on preserving "Old Florida" character while managing growth.',
      positions: {
        'growth-management': 'controlled-growth',
        'infrastructure-priority': 'roads-transportation',
        'housing-crisis': 'partner-nonprofits'
      }
    },
    {
      id: 'diana-finegan',
      name: 'Diana Finegan',
      district: 'District 2',
      position: 'current',
      background: 'Current Vice Chair of Citrus County Commission. Elected in 2022, experienced in county governance.',
      positions: {
        'growth-management': 'balanced-approach',
        'infrastructure-priority': 'water-sewer',
        'housing-crisis': 'partner-nonprofits'
      }
    },
    {
      id: 'janet-barek',
      name: 'Janet A. Barek',
      district: 'District 3',
      position: 'current',
      background: 'Second Vice Chair. Sworn in November 2024 after defeating 24-year incumbent Ruthie Schlabach. 74-year-old Citrus Springs resident and regular commission meeting attendee known for vigorous campaigning.',
      positions: {
        'growth-management': 'community-input',
        'infrastructure-priority': 'roads-transportation',
        'housing-crisis': 'zoning-incentives'
      }
    },
    {
      id: 'rebecca-bays',
      name: 'Rebecca Bays',
      district: 'District 4',
      position: 'current',
      background: 'Current Chair of Citrus County Commission. Experienced county leader with strong administrative background.',
      positions: {
        'growth-management': 'balanced-approach',
        'infrastructure-priority': 'broadband-internet',
        'housing-crisis': 'partner-nonprofits'
      }
    },
    {
      id: 'holly-davis',
      name: 'Holly L. Davis',
      district: 'District 5',
      position: 'current',
      background: 'Re-elected November 2024 with 76% of vote. Completed year as Chair. Architect of county\'s first strategic plan. Known for strategic planning and community development.',
      positions: {
        'growth-management': 'balanced-approach',
        'infrastructure-priority': 'broadband-internet',
        'housing-crisis': 'partner-nonprofits'
      }
    }
  ]
};