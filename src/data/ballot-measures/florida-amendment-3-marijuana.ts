// src/data/ballot-measures/florida-amendment-3-marijuana.ts

export const BALLOT_MEASURE_CONFIG_AMENDMENT_3 = {
  id: 'florida-amendment-3-2024',
  type: 'constitutional-amendment',
  
  jurisdiction: {
    level: 'state',
    name: 'Florida',
    counties: null
  },
  
  title: 'Adult Use of Marijuana',
  shortTitle: 'Marijuana Legalization',
  ballotTitle: 'Amendment 3: Allows adults 21 years or older to possess, purchase, or use marijuana products and marijuana accessories for non-medical personal consumption',
  number: '3',
  
  electionDate: '2024-11-05',
  status: 'completed',
  
  summary: 'Allows adults 21 and older to possess, purchase, and use marijuana for recreational purposes. Does not allow home cultivation - only licensed dispensaries can sell marijuana products.',
  
  fullText: `ARTICLE X, SECTION 29 - Adult Personal Use of Marijuana

(a) ADULT PERSONAL USE. Adults who are 21 years of age or older shall have the right to possess, purchase, or use marijuana products and marijuana accessories for non-medical personal consumption by smoking, ingestion, or otherwise. Adults are prohibited from possessing more than three ounces of marijuana, with no more than five grams in the form of concentrate.

(b) MEDICAL MARIJUANA. Nothing in this section affects laws relating to the use of marijuana for medical purposes.

(c) DEFINITIONS. As used in this section:
1. "Marijuana" has the meaning given cannabis in Section 381.986, Florida Statutes (2023).
2. "Marijuana products" means marijuana, products that consist of marijuana and other ingredients, and products containing delta-9-tetrahydrocannabinol.
3. "Marijuana accessories" means any equipment, product, or material used for ingesting, inhaling, or otherwise introducing marijuana into the human body.

(d) LIMITATIONS. The legislature may provide by law for the implementation of this section including regulations on possession limits, public use restrictions, and driving under the influence.`,
  
  plainLanguage: {
    whatItDoes: 'This amendment would make recreational marijuana legal in Florida for adults 21 and older. You could buy marijuana from licensed dispensaries without needing a medical card.',
    
    whatChanges: [
      'Currently: Only medical marijuana is legal (requires doctor recommendation)',
      'If passed: Anyone 21+ can buy from dispensaries without medical card',
      'Possession limit: Up to 3 ounces (5 grams of concentrate)',
      'Home growing would still be illegal',
      'Existing medical marijuana program continues unchanged'
    ],
    
    whatStaysSame: [
      'Still illegal for anyone under 21',
      'Still illegal to drive under the influence',
      'Employers can still drug test and refuse to hire or fire',
      'No home growing allowed (only dispensaries can sell)',
      'Federal law unchanged (still federally illegal)',
      'Public consumption restrictions apply'
    ]
  },
  
  fiscalImpact: {
    summary: 'State gains estimated $195.6 million annually in new tax revenue',
    details: [
      'Sales tax revenue: Approximately $195.6 million per year',
      'Reduced law enforcement costs: Significant but not quantified',
      'Court system savings: Fewer marijuana prosecutions',
      'Regulatory costs: Minimal (uses existing medical marijuana infrastructure)',
      'Local government impact: Cities and counties can regulate but not ban'
    ],
    source: 'Florida Office of Economic and Demographic Research'
  },
  
  requirements: {
    threshold: 60,
    thresholdType: 'percentage',
    turnoutRequired: false
  },
  
  results: {
    passed: false,
    votesFor: 5627006,
    votesAgainst: 4428614,
    percentFor: 55.9,
    percentAgainst: 44.1,
    totalVotes: 10055620,
    note: 'Failed to reach 60% threshold required for Florida constitutional amendments'
  },
  
  supportersArguments: [
    {
      category: 'personal-freedom',
      title: 'Personal Freedom & Individual Rights',
      argument: 'Adults should have the freedom to make their own choices about marijuana use, just like they can with alcohol. The government should not criminalize personal choices that do not harm others.',
      strength: 'high'
    },
    {
      category: 'criminal-justice',
      title: 'Criminal Justice Reform',
      argument: 'Reduces unnecessary arrests and incarceration for marijuana possession. These arrests disproportionately affect minorities and young people, creating criminal records that limit job and education opportunities.',
      strength: 'high'
    },
    {
      category: 'tax-revenue',
      title: 'Tax Revenue for Public Services',
      argument: 'Generates nearly $200 million annually in tax revenue that can fund schools, roads, and public services. This is money currently going to the black market.',
      strength: 'medium'
    },
    {
      category: 'medical-access',
      title: 'Improved Access for Medical Users',
      argument: 'Many people who use marijuana medicinally cannot afford doctor visits and renewal fees for medical cards. This makes it more accessible for those who need it.',
      strength: 'medium'
    }
  ],
  
  opponentsArguments: [
    {
      category: 'corporate-monopoly',
      title: 'Corporate Monopoly & Greed',
      argument: 'Written by Trulieve (largest dispensary company) to benefit themselves. No home growing allowed - only their stores can sell. This is corporate greed disguised as reform.',
      strength: 'high'
    },
    {
      category: 'public-health',
      title: 'Public Health & Safety Concerns',
      argument: 'Increased access could lead to more youth use despite age restrictions, more impaired driving accidents, higher addiction rates, and mental health issues.',
      strength: 'medium'
    },
    {
      category: 'incomplete-legalization',
      title: 'Incomplete & Flawed Legalization',
      argument: 'Does not allow home growing, leaving users dependent on expensive corporate dispensaries. Better, more complete legalization measures exist in other states.',
      strength: 'medium'
    }
  ],
  
  supporters: [
    {
      name: 'Smart & Safe Florida',
      type: 'campaign-committee',
      description: 'Political committee that organized the petition drive',
      funding: '$141 million (mostly from Trulieve)'
    },
    {
      name: 'Trulieve Cannabis Corp',
      type: 'corporation',
      description: 'Florida\'s largest medical marijuana dispensary chain',
      contribution: '$141 million to campaign'
    }
  ],
  
  opponents: [
    {
      name: 'Gov. Ron DeSantis',
      type: 'elected-official',
      description: 'Actively campaigned against amendment using state resources'
    },
    {
      name: 'Florida Republican Party',
      type: 'political-party',
      description: 'Official party position: Vote NO'
    }
  ],
  
  questions: [
    {
      id: 'main-position',
      category: 'core-position',
      text: 'Should recreational marijuana be legal in Florida for adults 21 and older?',
      options: [
        { value: 'yes-strongly', label: 'YES - Strongly support legalization' },
        { value: 'yes-reservations', label: 'YES - Support with concerns' },
        { value: 'no-reform', label: 'NO - But support reform' },
        { value: 'no-strongly', label: 'NO - Oppose entirely' }
      ],
      // This is the answer that aligns with a "YES" vote on the measure
      proVoteAnswer: 'yes-strongly' 
    },
    {
      id: 'corporate-control',
      category: 'implementation',
      text: 'Does it concern you that dispensary companies wrote this amendment?',
      options: [
        { value: 'major-concern', label: 'Major concern - dealbreaker' },
        { value: 'minor-concern', label: 'Minor concern' },
        { value: 'not-concerned', label: 'Not concerned' }
      ],
      // Someone voting "YES" is less likely to be concerned
      proVoteAnswer: 'not-concerned'
    },
    {
      id: 'priority',
      category: 'importance',
      text: 'How important is marijuana legalization to you?',
      options: [
        { value: 'top-priority', label: 'Top priority' },
        { value: 'important', label: 'Important' },
        { value: 'somewhat', label: 'Somewhat important' },
        { value: 'not-important', label: 'Not important' }
      ],
      // Someone voting "YES" is more likely to consider it a high priority
      proVoteAnswer: 'top-priority'
    }
  ],
  
  tags: ['marijuana', 'cannabis', 'legalization', 'criminal-justice', 'taxation'],
  createdBy: 'admin',
  lastUpdated: '2024-11-06',
  verified: true
};

export { BALLOT_MEASURE_CONFIG_AMENDMENT_3 as AMENDMENT_3_2024 };