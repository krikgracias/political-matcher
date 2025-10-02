export const ELECTION_CONFIG_COMMISSION = {
  id: 'florida-hillsborough-county-commission',
  state: 'florida',
  county: 'hillsborough',
  office: 'county-commission',
  title: 'Hillsborough County Commission',
  description: 'Find county commissioners who align with your priorities for Hillsborough County - Tampa Bay\'s largest county with ~1.5 million residents and a $9 billion budget',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'republican-divide',
      category: 'governance',
      text: 'The Republican commission majority is divided between moderates (Hagan, Boles) and conservatives (Wostal). What approach should guide county decisions?',
      options: [
        { value: 'moderate-pragmatic', label: 'Moderate, pragmatic approach focused on results' },
        { value: 'conservative-principles', label: 'Conservative principles and limited government' },
        { value: 'bipartisan-collaboration', label: 'Bipartisan collaboration across ideological lines' },
        { value: 'community-priorities', label: 'Let community priorities guide decision-making' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'fluoride-controversy',
      category: 'public-health',
      text: 'Commissioner Wostal proposed removing fluoride from water but was defeated by moderate Republicans and Democrats. How should public health decisions be made?',
      options: [
        { value: 'medical-experts', label: 'Follow recommendations of medical and dental experts' },
        { value: 'local-choice', label: 'Let residents choose through referendum' },
        { value: 'cautious-approach', label: 'Cautious approach with workshops before major changes' },
        { value: 'individual-freedom', label: 'Prioritize individual freedom and choice' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'hurricane-recovery',
      category: 'emergency-management',
      text: 'Hurricanes Helene and Milton required $709M in recovery funds. How should the county prepare for future storms?',
      options: [
        { value: 'infrastructure-hardening', label: 'Major investment in infrastructure hardening' },
        { value: 'emergency-reserves', label: 'Build larger emergency reserves and response capacity' },
        { value: 'managed-retreat', label: 'Consider managed retreat from most vulnerable areas' },
        { value: 'comprehensive-resilience', label: 'Comprehensive resilience plan with multiple strategies' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'transportation-congestion',
      category: 'infrastructure',
      text: 'Transportation and congestion are top concerns. What should be the priority?',
      options: [
        { value: 'road-expansion', label: 'Expand roads and improve major corridors' },
        { value: 'public-transit', label: 'Invest heavily in public transit and light rail' },
        { value: 'mixed-approach', label: 'Mix of road improvements and transit options' },
        { value: 'smart-growth', label: 'Smart growth reducing need for long commutes' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'housing-affordability',
      category: 'housing',
      text: 'Housing affordability is a crisis. What should the county prioritize?',
      options: [
        { value: 'zoning-reform', label: 'Zoning reform to allow more housing types and density' },
        { value: 'workforce-housing', label: 'County programs for workforce housing development' },
        { value: 'developer-incentives', label: 'Incentives for developers to include affordable units' },
        { value: 'market-solutions', label: 'Let market forces increase supply naturally' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'budget-priorities',
      category: 'budget',
      text: 'With a $9 billion budget, what should be the top spending priority?',
      options: [
        { value: 'public-safety', label: 'Public safety - sheriff, fire, emergency services' },
        { value: 'infrastructure', label: 'Infrastructure - roads, water, transportation' },
        { value: 'human-services', label: 'Human services and safety net programs' },
        { value: 'economic-development', label: 'Economic development and job creation' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'tampa-relations',
      category: 'intergovernmental',
      text: 'How should the county work with Tampa and other municipalities on regional issues?',
      options: [
        { value: 'strong-partnership', label: 'Strong regional partnership on shared challenges' },
        { value: 'county-leadership', label: 'County should lead regional coordination efforts' },
        { value: 'municipal-autonomy', label: 'Respect municipal autonomy with limited county role' },
        { value: 'issue-specific', label: 'Collaborate on specific issues while respecting boundaries' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'economic-development',
      category: 'economy',
      text: 'How should Hillsborough attract businesses and create quality jobs?',
      options: [
        { value: 'tax-incentives', label: 'Aggressive tax incentives for major employers' },
        { value: 'small-business', label: 'Support local small businesses and entrepreneurs' },
        { value: 'tech-innovation', label: 'Focus on technology, healthcare, and innovation sectors' },
        { value: 'quality-life', label: 'Invest in quality of life to attract talent and companies' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'environment-conservation',
      category: 'environment',
      text: 'How should the county balance development with environmental protection?',
      options: [
        { value: 'conservation-priority', label: 'Make conservation and water quality top priorities' },
        { value: 'development-first', label: 'Prioritize economic development with basic protections' },
        { value: 'green-development', label: 'Require green building and sustainable development' },
        { value: 'strategic-balance', label: 'Strategic balance protecting critical natural areas' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'county-schools',
      category: 'education',
      text: 'County Commission doesn\'t control school board budget. How should the county support education?',
      options: [
        { value: 'facility-support', label: 'Donate land and support school facility needs' },
        { value: 'joint-planning', label: 'Joint planning ensuring development includes schools' },
        { value: 'workforce-programs', label: 'County workforce programs aligned with schools' },
        { value: 'separate-roles', label: 'Keep county and school district roles separate' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'harry-cohen',
      name: 'Harry Cohen',
      district: 'District 1',
      position: 'current',
      background: 'Lone Democrat on seven-member commission. Represents District 1. Voted with moderate Republicans (Hagan, Boles) to defeat Wostal\'s fluoride removal proposal. Cited American Dental Association and urged caution, noting federal government still recommends fluoridation.',
      positions: {
        'republican-divide': 'bipartisan-collaboration',
        'fluoride-controversy': 'medical-experts',
        'hurricane-recovery': 'comprehensive-resilience',
        'transportation-congestion': 'public-transit',
        'housing-affordability': 'zoning-reform',
        'budget-priorities': 'human-services',
        'tampa-relations': 'strong-partnership',
        'economic-development': 'quality-life',
        'environment-conservation': 'conservation-priority',
        'county-schools': 'joint-planning'
      }
    },
    {
      id: 'ken-hagan',
      name: 'Ken Hagan',
      district: 'District 2',
      position: 'current',
      background: 'Current Board Chair. Moderate Republican. Lifelong Hillsborough resident, first elected 2002, ranking member. Chosen as Chair 8 times (unprecedented). Represents District 2 covering New Tampa/USF area. Voted against Wostal\'s fluoride and DOGE proposals. Fiscal conservative with reasonable, common-sense approach. Focuses on transportation, housing affordability, public safety. Re-elected 2024 with 78% in Republican primary. Quote: "Extreme cancel culture and no compromise perspectives undermine our community\'s stability, safety, and prosperity."',
      positions: {
        'republican-divide': 'moderate-pragmatic',
        'fluoride-controversy': 'cautious-approach',
        'hurricane-recovery': 'comprehensive-resilience',
        'transportation-congestion': 'mixed-approach',
        'housing-affordability': 'developer-incentives',
        'budget-priorities': 'infrastructure',
        'tampa-relations': 'strong-partnership',
        'economic-development': 'quality-life',
        'environment-conservation': 'strategic-balance',
        'county-schools': 'facility-support'
      }
    },
    {
      id: 'gwen-myers',
      name: 'Gwen Myers',
      district: 'District 3',
      position: 'current',
      background: 'Democrat. Serves as Chaplain on commission. Represents District 3. Provides progressive voice on board.',
      positions: {
        'republican-divide': 'bipartisan-collaboration',
        'fluoride-controversy': 'medical-experts',
        'hurricane-recovery': 'comprehensive-resilience',
        'transportation-congestion': 'public-transit',
        'housing-affordability': 'workforce-housing',
        'budget-priorities': 'human-services',
        'tampa-relations': 'strong-partnership',
        'economic-development': 'small-business',
        'environment-conservation': 'conservation-priority',
        'county-schools': 'joint-planning'
      }
    },
    {
      id: 'christine-miller',
      name: 'Christine Miller',
      district: 'District 4',
      position: 'current',
      background: 'Current Vice Chair. Republican. Appointed by Gov. DeSantis in June 2024. Greater Plant City Chamber of Commerce CEO. Won Republican primary with 68% over Cody Powell. Defeated Democrat Nicole Payne in general election. Sometimes votes with Wostal but also moderate on some issues. Filed resolution for DOGE cooperation (softer than Wostal\'s full audit request).',
      positions: {
        'republican-divide': 'conservative-principles',
        'fluoride-controversy': 'individual-freedom',
        'hurricane-recovery': 'emergency-reserves',
        'transportation-congestion': 'road-expansion',
        'housing-affordability': 'market-solutions',
        'budget-priorities': 'economic-development',
        'tampa-relations': 'issue-specific',
        'economic-development': 'tax-incentives',
        'environment-conservation': 'development-first',
        'county-schools': 'separate-roles'
      }
    },
    {
      id: 'donna-cameron-cepeda',
      name: 'Donna Cameron Cepeda',
      district: 'District 5 At-Large',
      position: 'current',
      background: 'Republican. Represents countywide at-large District 5. Voted with Wostal and Miller on fluoride proposal (in minority).',
      positions: {
        'republican-divide': 'conservative-principles',
        'fluoride-controversy': 'individual-freedom',
        'hurricane-recovery': 'infrastructure-hardening',
        'transportation-congestion': 'road-expansion',
        'housing-affordability': 'developer-incentives',
        'budget-priorities': 'public-safety',
        'tampa-relations': 'issue-specific',
        'economic-development': 'tax-incentives',
        'environment-conservation': 'strategic-balance',
        'county-schools': 'workforce-programs'
      }
    },
    {
      id: 'chris-boles',
      name: 'Chris Boles',
      district: 'District 6 At-Large',
      position: 'current',
      background: 'Republican. Represents countywide at-large District 6. Won Republican primary, defeated Democrat Sean Shaw in general election. Voted with Hagan and Cohen against Wostal\'s fluoride proposal. Moderate Republican forming coalition with Hagan and Democrats on some issues. Wostal shut down his attempt to comment after fluoride vote.',
      positions: {
        'republican-divide': 'moderate-pragmatic',
        'fluoride-controversy': 'cautious-approach',
        'hurricane-recovery': 'comprehensive-resilience',
        'transportation-congestion': 'mixed-approach',
        'housing-affordability': 'zoning-reform',
        'budget-priorities': 'infrastructure',
        'tampa-relations': 'strong-partnership',
        'economic-development': 'tech-innovation',
        'environment-conservation': 'strategic-balance',
        'county-schools': 'joint-planning'
      }
    },
    {
      id: 'joshua-wostal',
      name: 'Joshua Wostal',
      district: 'District 7 At-Large',
      position: 'current',
      background: 'Republican. Navy veteran. Represents countywide at-large District 7. Most conservative member. Proposed fluoride removal (defeated 3-4). Proposed state DOGE audit (defeated by Hagan/Miller/Democrats). Openly questioned whether Hagan and Boles are "even Republicans" on social media after fluoride vote. Pushes conservative agenda but often left hanging by moderate Republicans.',
      positions: {
        'republican-divide': 'conservative-principles',
        'fluoride-controversy': 'individual-freedom',
        'hurricane-recovery': 'emergency-reserves',
        'transportation-congestion': 'road-expansion',
        'housing-affordability': 'market-solutions',
        'budget-priorities': 'public-safety',
        'tampa-relations': 'municipal-autonomy',
        'economic-development': 'tax-incentives',
        'environment-conservation': 'development-first',
        'county-schools': 'separate-roles'
      }
    }
  ]
};