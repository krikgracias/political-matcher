// src/data/ballot-measures/hillsborough-transit-tax.ts

export const BALLOT_MEASURE_CONFIG_TRANSIT_TAX = {
  id: 'hillsborough-transit-tax-2024',
  type: 'county-referendum',
  
  jurisdiction: {
    level: 'county',
    name: 'Hillsborough County',
    counties: ['hillsborough']
  },
  
  title: 'Half-Cent Sales Tax for Transit',
  shortTitle: 'Transit Sales Tax',
  ballotTitle: 'Hillsborough County Transportation Sales Surtax',
  number: null,
  
  electionDate: '2024-11-05',
  status: 'completed',
  
  summary: 'Adds a 0.5% sales tax (half-cent per dollar) in Hillsborough County to fund public transportation improvements including bus rapid transit, road improvements, and expanded transit services for 30 years.',
  
  fullText: `Shall Hillsborough County levy a one-half percent sales surtax for 30 years, beginning January 1, 2025, to fund transportation improvements including:

- Bus rapid transit corridors
- Enhanced bus service frequency
- Road resurfacing and improvements
- Pedestrian and bicycle infrastructure
- Traffic signal synchronization
- Transit facility improvements

The surtax would generate approximately $600 million annually and would be subject to annual independent audits and citizen oversight.`,
  
  plainLanguage: {
    whatItDoes: 'Adds half a penny to every dollar you spend in Hillsborough County (0.5% sales tax increase) to fund transportation projects for the next 30 years.',
    
    whatChanges: [
      'Sales tax goes from 7.5% to 8.0% in Hillsborough County',
      '$600+ million raised annually for transportation',
      'Funds bus rapid transit, road improvements, sidewalks',
      '30-year tax (expires in 2054)',
      'Citizen oversight committee reviews spending'
    ],
    
    whatStaysSame: [
      'No property tax increase',
      'Groceries and medicine still exempt from sales tax',
      'Tax only applies in Hillsborough County',
      'Existing transportation projects continue'
    ]
  },
  
  fiscalImpact: {
    summary: 'Raises approximately $600 million annually for 30 years',
    details: [
      'Total over 30 years: Approximately $18 billion',
      'Average household cost: About $180 per year',
      'Tourists and visitors pay approximately 30% of total',
      'Bond capacity: Can borrow against future revenue for major projects',
      'Administration costs: Less than 2% of revenue'
    ],
    source: 'Hillsborough County Financial Impact Analysis'
  },
  
  requirements: {
    threshold: 50,
    thresholdType: 'simple-majority',
    turnoutRequired: false
  },
  
  results: {
    passed: false,
    votesFor: 245123,
    votesAgainst: 267845,
    percentFor: 47.8,
    percentAgainst: 52.2,
    totalVotes: 512968,
    note: 'Failed by 4.4 percentage points'
  },
  
  supportersArguments: [
    {
      category: 'traffic-relief',
      title: 'Reduces Traffic Congestion',
      argument: 'Provides alternatives to driving, reducing congestion on I-275, I-4, and major roads. Tampa is one of the most congested metros in America.',
      strength: 'high'
    },
    {
      category: 'economic-growth',
      title: 'Economic Development',
      argument: 'Better transit attracts businesses and jobs. Tampa is losing companies to cities with better transportation infrastructure.',
      strength: 'medium'
    },
    {
      category: 'tourism-pays',
      title: 'Visitors Help Pay',
      argument: 'About 30% is paid by tourists and visitors through hotel, restaurant, and retail purchases, not just residents.',
      strength: 'medium'
    },
    {
      category: 'comprehensive-plan',
      title: 'Comprehensive Solution',
      argument: 'Funds not just transit but also road improvements, sidewalks, and bike lanes. Benefits drivers and non-drivers alike.',
      strength: 'medium'
    }
  ],
  
  opponentsArguments: [
    {
      category: 'tax-burden',
      title: 'Regressive Tax Increase',
      argument: 'Another tax increase during inflation and high cost of living. Sales tax is regressive and hurts low-income families most who spend higher percentage of income on taxable goods.',
      strength: 'high'
    },
    {
      category: 'government-waste',
      title: 'History of Government Waste',
      argument: 'No guarantee money will be spent wisely. Previous transit plans have failed or gone over budget. County has poor track record with major projects.',
      strength: 'medium'
    },
    {
      category: 'car-dependent',
      title: 'Will Not Reduce Driving',
      argument: 'Tampa Bay area is too spread out and car-dependent. Most people will still need cars. This will not meaningfully fix traffic or change behavior.',
      strength: 'medium'
    },
    {
      category: 'thirty-years',
      title: 'Too Long of a Commitment',
      argument: '30 years is too long to commit to a tax. Technology and transportation needs will change dramatically. Should be shorter term with option to renew.',
      strength: 'low'
    }
  ],
  
  supporters: [
    {
      name: 'All for Transportation',
      type: 'advocacy-group',
      description: 'Coalition of businesses, civic groups, and transit advocates',
      funding: '$8 million campaign'
    },
    {
      name: 'Tampa Bay Chamber',
      type: 'business-group',
      description: 'Regional business community support'
    },
    {
      name: 'Tampa Bay Times',
      type: 'media-endorsement',
      description: 'Editorial board endorsed YES'
    }
  ],
  
  opponents: [
    {
      name: 'No Tax for Tracks',
      type: 'opposition-committee',
      description: 'Grassroots opposition coalition',
      funding: '$2 million campaign'
    },
    {
      name: 'Americans for Prosperity - Florida',
      type: 'advocacy-group',
      description: 'Conservative anti-tax advocacy group'
    }
  ],
  
  questions: [
    {
      id: 'main-position',
      category: 'core-position',
      text: 'Should Hillsborough County increase sales tax by 0.5% for transit?',
      options: [
        { value: 'yes-strongly', label: 'YES - Strongly support' },
        { value: 'yes-conditionally', label: 'YES - Support with reservations' },
        { value: 'no-alternatives', label: 'NO - Prefer other funding methods' },
        { value: 'no-strongly', label: 'NO - Strongly oppose' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'transit-usage',
      category: 'personal-impact',
      text: 'Would you use improved public transit if available?',
      options: [
        { value: 'definitely', label: 'Yes, regularly' },
        { value: 'sometimes', label: 'Yes, occasionally' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'never', label: 'No, I will drive' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'funding-preference',
      category: 'alternatives',
      text: 'If not sales tax, how should transit be funded?',
      options: [
        { value: 'property-tax', label: 'Property tax increase' },
        { value: 'gas-tax', label: 'Gas tax increase' },
        { value: 'tolls', label: 'More toll roads' },
        { value: 'user-fees', label: 'Higher transit fares' },
        { value: 'no-funding', label: 'No new transit funding needed' }
      ],
      order: 3,
      active: true
    }
  ],
  
  tags: ['transportation', 'sales-tax', 'public-transit', 'traffic', 'infrastructure'],
  createdBy: 'admin',
  lastUpdated: '2024-11-06',
  verified: true
};

export { BALLOT_MEASURE_CONFIG_TRANSIT_TAX as HILLSBOROUGH_TRANSIT_TAX_2024 };