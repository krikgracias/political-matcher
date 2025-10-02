export const ELECTION_CONFIG_COMMISSION = {
  id: 'florida-pasco-county-commission',
  state: 'florida',
  county: 'pasco',
  office: 'county-commission',
  title: 'Pasco County Commission',
  description: 'Find county commissioners who align with your priorities for Pasco County - one of Florida\'s fastest-growing counties with ~590,000 residents',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'explosive-growth',
      category: 'growth',
      text: 'Pasco County, especially Wesley Chapel, is experiencing explosive population growth. How should development be managed?',
      options: [
        { value: 'embrace-growth', label: 'Embrace growth to expand tax base and economy' },
        { value: 'managed-growth', label: 'Managed growth with infrastructure requirements' },
        { value: 'slow-growth', label: 'Slow growth to preserve community character' },
        { value: 'strategic-planning', label: 'Strategic planning balancing growth and quality of life' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'roads-infrastructure',
      category: 'infrastructure',
      text: 'Roads and infrastructure are struggling to keep up with growth. What should be the funding priority?',
      options: [
        { value: 'developer-impact', label: 'Higher developer impact fees to fund infrastructure' },
        { value: 'sales-tax', label: 'Consider sales tax referendum for transportation' },
        { value: 'state-federal', label: 'Aggressive pursuit of state and federal funding' },
        { value: 'public-private', label: 'Public-private partnerships for major projects' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'east-west-divide',
      category: 'equity',
      text: 'Pasco has distinct East (Dade City, rural) and West (New Port Richey/Wesley Chapel, urban) regions. How should county resources be allocated?',
      options: [
        { value: 'equal-distribution', label: 'Equal distribution across all districts' },
        { value: 'growth-areas', label: 'Prioritize rapidly growing areas' },
        { value: 'rural-preservation', label: 'Invest in preserving rural East Pasco character' },
        { value: 'needs-based', label: 'Needs-based allocation addressing each area uniquely' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'housing-affordability',
      category: 'housing',
      text: 'Rapid growth is driving up housing costs. How should the county address affordable housing?',
      options: [
        { value: 'zoning-changes', label: 'Zoning changes to allow more diverse housing types' },
        { value: 'developer-incentives', label: 'Incentivize developers to include affordable units' },
        { value: 'workforce-housing', label: 'County programs for workforce housing' },
        { value: 'market-driven', label: 'Let market forces address supply and demand' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'economic-development',
      category: 'economy',
      text: 'How should Pasco diversify its economy and attract quality jobs?',
      options: [
        { value: 'business-recruitment', label: 'Aggressive business recruitment with incentives' },
        { value: 'small-business', label: 'Support local small businesses and entrepreneurs' },
        { value: 'tech-innovation', label: 'Focus on technology and innovation sectors' },
        { value: 'balanced-approach', label: 'Balanced approach supporting multiple sectors' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'schools-coordination',
      category: 'education',
      text: 'Schools are struggling with growth. How should the county coordinate with the school district?',
      options: [
        { value: 'joint-planning', label: 'Joint planning requiring school capacity before development' },
        { value: 'land-donation', label: 'Donate county land for new schools' },
        { value: 'impact-fees', label: 'Increase impact fees dedicated to school construction' },
        { value: 'separate-responsibility', label: 'Keep county and school district responsibilities separate' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'environment-conservation',
      category: 'environment',
      text: 'How should the county balance development with environmental conservation?',
      options: [
        { value: 'aggressive-conservation', label: 'Aggressive land acquisition for conservation' },
        { value: 'development-first', label: 'Prioritize development with basic environmental standards' },
        { value: 'green-development', label: 'Require green building and low-impact development' },
        { value: 'strategic-conservation', label: 'Strategic conservation of critical natural areas' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'public-safety',
      category: 'safety',
      text: 'With rapid growth, how should public safety services be expanded?',
      options: [
        { value: 'proportional-growth', label: 'Grow services proportionally with population' },
        { value: 'aggressive-hiring', label: 'Aggressively hire deputies and firefighters ahead of growth' },
        { value: 'technology-efficiency', label: 'Use technology to improve efficiency' },
        { value: 'impact-fee-funded', label: 'Use impact fees to fund growth-related safety needs' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'two-government-centers',
      category: 'governance',
      text: 'Pasco alternates meetings between West Pasco (New Port Richey) and East Pasco (Dade City) government centers. Should this continue?',
      options: [
        { value: 'maintain-both', label: 'Maintain both centers for geographic accessibility' },
        { value: 'consolidate', label: 'Consolidate operations for efficiency' },
        { value: 'virtual-access', label: 'Increase virtual access and reduce travel' },
        { value: 'expand-centers', label: 'Expand both centers to serve growing population' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'comprehensive-plan',
      category: 'planning',
      text: 'What should guide Pasco\'s comprehensive plan update for the next 20 years?',
      options: [
        { value: 'pro-growth', label: 'Pro-growth policies to maximize economic development' },
        { value: 'smart-growth', label: 'Smart growth with mixed-use and transit-oriented development' },
        { value: 'rural-preservation', label: 'Preserve rural character in East Pasco' },
        { value: 'balanced-vision', label: 'Balanced vision accommodating diverse regional needs' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'ron-oakley',
      name: 'Ron Oakley',
      district: 'District 1',
      position: 'current',
      background: 'Represents District 1. Elected countywide but must reside in District 1. Experienced commissioner focused on district and countywide issues.',
      positions: {
        'explosive-growth': 'managed-growth',
        'roads-infrastructure': 'developer-impact',
        'east-west-divide': 'needs-based',
        'housing-affordability': 'zoning-changes',
        'economic-development': 'balanced-approach',
        'schools-coordination': 'joint-planning',
        'environment-conservation': 'strategic-conservation',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'balanced-vision'
      }
    },
    {
      id: 'seth-weightman',
      name: 'Seth Weightman',
      district: 'District 2',
      position: 'current',
      background: 'Current 2nd Vice Chair (as of December 2024 reorganization). Represents District 2. Elected countywide but must reside in District 2.',
      positions: {
        'explosive-growth': 'embrace-growth',
        'roads-infrastructure': 'public-private',
        'east-west-divide': 'growth-areas',
        'housing-affordability': 'developer-incentives',
        'economic-development': 'business-recruitment',
        'schools-coordination': 'impact-fees',
        'environment-conservation': 'development-first',
        'public-safety': 'impact-fee-funded',
        'two-government-centers': 'virtual-access',
        'comprehensive-plan': 'pro-growth'
      }
    },
    {
      id: 'kathryn-starkey',
      name: 'Kathryn Starkey',
      district: 'District 3',
      position: 'current',
      background: 'Current Board Chair (elected December 2024). Re-elected November 2024 defeating Democrat Janine Duffy. Quote: "It\'s a privilege to serve as chair. Pasco County has made remarkable strides in becoming a great place to live, work and play, and I\'m proud of the progress we\'ve achieved. I look forward to building on that success to continue making Pasco County an even better place for all."',
      positions: {
        'explosive-growth': 'strategic-planning',
        'roads-infrastructure': 'state-federal',
        'east-west-divide': 'needs-based',
        'housing-affordability': 'workforce-housing',
        'economic-development': 'balanced-approach',
        'schools-coordination': 'joint-planning',
        'environment-conservation': 'strategic-conservation',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'balanced-vision'
      }
    },
    {
      id: 'lisa-yeager',
      name: 'Lisa Yeager',
      district: 'District 4',
      position: 'current',
      background: 'Represents District 4. Elected countywide but must reside in District 4. Focused on serving district and broader county needs.',
      positions: {
        'explosive-growth': 'managed-growth',
        'roads-infrastructure': 'developer-impact',
        'east-west-divide': 'needs-based',
        'housing-affordability': 'zoning-changes',
        'economic-development': 'small-business',
        'schools-coordination': 'land-donation',
        'environment-conservation': 'green-development',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'smart-growth'
      }
    },
    {
      id: 'jack-mariano',
      name: 'Jack Mariano',
      district: 'District 5',
      position: 'current',
      background: 'Current Vice Chair. Longest-serving commissioner - first elected 2004, serving fourth term. Past Chairman of BCC, Tourist Development Council, and Metropolitan Planning Organization. Also served as Chairman of Tampa Bay Regional Planning Council. First Pasco Commissioner to receive Advanced Certified County Commissioner designation from Florida Association of Counties. Sits on Department of Environmental Protection committees.',
      positions: {
        'explosive-growth': 'strategic-planning',
        'roads-infrastructure': 'state-federal',
        'east-west-divide': 'balanced-equity',
        'housing-affordability': 'developer-incentives',
        'economic-development': 'balanced-approach',
        'schools-coordination': 'joint-planning',
        'environment-conservation': 'strategic-conservation',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'balanced-vision'
      }
    },
    {
      id: 'lisa-yeager',
      name: 'Lisa Yeager',
      district: 'District 4',
      position: 'current',
      background: 'Represents District 4. Elected countywide but must reside in District 4. Focused on serving district and broader county needs.',
      positions: {
        'explosive-growth': 'managed-growth',
        'roads-infrastructure': 'developer-impact',
        'east-west-divide': 'needs-based',
        'housing-affordability': 'zoning-changes',
        'economic-development': 'small-business',
        'schools-coordination': 'land-donation',
        'environment-conservation': 'green-development',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'smart-growth'
      }
    },
    {
      id: 'jack-mariano',
      name: 'Jack Mariano',
      district: 'District 5',
      position: 'current',
      background: 'Current Vice Chair. Longest-serving commissioner - first elected 2004, serving fourth term. Past Chairman of BCC, Tourist Development Council, and Metropolitan Planning Organization. Also served as Chairman of Tampa Bay Regional Planning Council. First Pasco Commissioner to receive Advanced Certified County Commissioner designation from Florida Association of Counties. Sits on Department of Environmental Protection committees.',
      positions: {
        'explosive-growth': 'strategic-planning',
        'roads-infrastructure': 'state-federal',
        'east-west-divide': 'needs-based',
        'housing-affordability': 'developer-incentives',
        'economic-development': 'balanced-approach',
        'schools-coordination': 'joint-planning',
        'environment-conservation': 'strategic-conservation',
        'public-safety': 'proportional-growth',
        'two-government-centers': 'maintain-both',
        'comprehensive-plan': 'balanced-vision'
      }
    }
  ]
};