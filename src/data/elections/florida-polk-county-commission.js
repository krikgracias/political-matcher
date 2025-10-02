export const ELECTION_CONFIG_COMMISSION = {
  id: 'florida-polk-county-commission',
  state: 'florida',
  county: 'polk',
  office: 'county-commission',
  title: 'Polk County Commission',
  description: 'Find county commissioners who align with your priorities for Polk County - Florida\'s fastest-growing county balancing explosive development with rural character',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'growth-management',
      category: 'development',
      text: 'Polk is Florida\'s fastest-growing county with 30,000-50,000 new families arriving annually. How should growth be managed?',
      options: [
        { value: 'controlled-growth', label: 'Strict growth controls to preserve character and infrastructure' },
        { value: 'smart-growth', label: 'Smart growth with infill development and strategic planning' },
        { value: 'business-friendly', label: 'Business-friendly approach to attract jobs and investment' },
        { value: 'community-driven', label: 'Community-driven decisions with extensive public input' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'roads-funding',
      category: 'infrastructure',
      text: 'In 2023, the Commission rejected a half-cent sales tax for roads. With infrastructure struggling, how should roads be funded?',
      options: [
        { value: 'impact-fees', label: 'Higher impact fees so new development pays its share' },
        { value: 'sales-tax', label: 'Revisit the half-cent sales tax for dedicated road funding' },
        { value: 'budget-reallocation', label: 'Reallocate existing budget priorities toward roads' },
        { value: 'state-federal', label: 'Aggressive pursuit of state and federal infrastructure grants' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'affordable-housing',
      category: 'housing',
      text: 'Rapid development is driving up costs. How should the county address affordable housing for teachers, first responders, and working families?',
      options: [
        { value: 'zoning-incentives', label: 'Zoning changes and incentives for affordable units' },
        { value: 'partnerships', label: 'Public-private partnerships with developers and nonprofits' },
        { value: 'workforce-housing', label: 'County-funded workforce housing programs' },
        { value: 'market-solutions', label: 'Let market forces work without government intervention' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'economic-development',
      category: 'economy',
      text: 'How should Polk attract high-skill, high-wage jobs while supporting agriculture and existing small businesses?',
      options: [
        { value: 'tech-advanced', label: 'Recruit technology and advanced manufacturing companies' },
        { value: 'balanced-sectors', label: 'Balanced approach supporting both new and traditional sectors' },
        { value: 'small-business', label: 'Focus on supporting local small businesses and agriculture' },
        { value: 'tax-incentives', label: 'Aggressive tax incentives to attract major employers' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'environment',
      category: 'environment',
      text: 'Polk has beautiful lakes and wetlands but faces development pressure. How should natural resources be protected?',
      options: [
        { value: 'conservation-priority', label: 'Make conservation and water quality the top priority' },
        { value: 'balanced-approach', label: 'Balance growth with environmental protection measures' },
        { value: 'development-first', label: 'Prioritize development with basic environmental standards' },
        { value: 'land-acquisition', label: 'Aggressive land acquisition for preservation' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'public-safety',
      category: 'safety',
      text: 'With rapid population growth, how should public safety services be funded to maintain low crime rates?',
      options: [
        { value: 'increase-funding', label: 'Significantly increase law enforcement and fire rescue budgets' },
        { value: 'proportional-growth', label: 'Grow services proportionally with population' },
        { value: 'efficiency-first', label: 'Maximize efficiency of existing resources first' },
        { value: 'impact-fees-safety', label: 'Use impact fees to fund growth-related safety needs' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'rural-preservation',
      category: 'land-use',
      text: 'South of SR 60, Polk remains rural. How should agricultural heritage and rural character be preserved while the north urbanizes?',
      options: [
        { value: 'strong-protections', label: 'Strong zoning protections for rural and agricultural lands' },
        { value: 'transfer-rights', label: 'Transfer of development rights from rural to urban areas' },
        { value: 'market-driven', label: 'Let property owners decide without restrictions' },
        { value: 'mixed-approach', label: 'Allow limited development with rural character standards' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'transparency',
      category: 'governance',
      text: 'How can residents get earlier notice and meaningful input on major development projects?',
      options: [
        { value: 'expanded-notice', label: 'Expand notification radius and timeframes for public hearings' },
        { value: 'online-portal', label: 'Create online portal tracking all development applications' },
        { value: 'neighborhood-meetings', label: 'Require developer-hosted neighborhood meetings' },
        { value: 'current-adequate', label: 'Current notification process is adequate' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'impact-fees',
      category: 'development',
      text: 'The Commission increased transportation impact fees in 2023. Should this approach continue?',
      options: [
        { value: 'increase-more', label: 'Increase impact fees further to fully cover new growth costs' },
        { value: 'current-level', label: 'Maintain current impact fee structure' },
        { value: 'reduce-fees', label: 'Reduce fees to encourage more development' },
        { value: 'expand-categories', label: 'Expand impact fees to schools, parks, and other services' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'comprehensive-plan',
      category: 'planning',
      text: 'The comprehensive plan needs updating for explosive growth. What should be the top priority?',
      options: [
        { value: 'infrastructure-capacity', label: 'Ensure infrastructure capacity before approving development' },
        { value: 'urban-rural', label: 'Clear urban growth boundary to protect rural areas' },
        { value: 'mixed-use', label: 'Promote mixed-use, walkable development patterns' },
        { value: 'streamline-process', label: 'Streamline approval process for faster development' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'becky-troutman',
      name: 'Becky Troutman',
      district: 'District 1',
      position: 'current',
      background: 'Elected November 2024 with 63%. Lakeland resident managing two businesses (school psychology and interior decorating). Background in education, corporate training, real estate. Served 6 years on Planning Commission. Board member of United Way, Learning Resource Center. Guardian Ad Litem volunteer. Campaign heavily financed by land developers.',
      positions: {
        'growth-management': 'business-friendly',
        'roads-funding': 'budget-reallocation',
        'affordable-housing': 'zoning-incentives',
        'economic-development': 'balanced-sectors',
        'environment': 'balanced-approach',
        'public-safety': 'proportional-growth',
        'rural-preservation': 'mixed-approach',
        'transparency': 'online-portal',
        'impact-fees': 'current-level',
        'comprehensive-plan': 'infrastructure-capacity'
      }
    },
    {
      id: 'rick-wilson',
      name: 'Rick Wilson',
      district: 'District 2',
      position: 'current',
      background: 'Current Board Chair (2024-25). First elected 2018, re-elected 2022. Polk native, second-generation business owner and rancher. Former NASCAR driver (13 years) before returning to family ranch and heavy equipment business (started 1940s). Focus on transportation planning, job creation, environmental preservation.',
      positions: {
        'growth-management': 'smart-growth',
        'roads-funding': 'state-federal',
        'affordable-housing': 'partnerships',
        'economic-development': 'balanced-sectors',
        'environment': 'balanced-approach',
        'public-safety': 'proportional-growth',
        'rural-preservation': 'strong-protections',
        'transparency': 'expanded-notice',
        'impact-fees': 'current-level',
        'comprehensive-plan': 'infrastructure-capacity'
      }
    },
    {
      id: 'bill-braswell',
      name: 'Bill Braswell',
      district: 'District 3',
      position: 'current',
      background: 'Re-elected November 2024 to third term (unopposed). Former Board Chair (2023-24). Retired Air Force after 22 years. Known for fiscal responsibility and measured approach to growth.',
      positions: {
        'growth-management': 'smart-growth',
        'roads-funding': 'impact-fees',
        'affordable-housing': 'partnerships',
        'economic-development': 'balanced-sectors',
        'environment': 'balanced-approach',
        'public-safety': 'efficiency-first',
        'rural-preservation': 'strong-protections',
        'transparency': 'expanded-notice',
        'impact-fees': 'current-level',
        'comprehensive-plan': 'infrastructure-capacity'
      }
    },
    {
      id: 'martha-santiago',
      name: 'Martha Santiago, Ed.D.',
      district: 'District 4',
      position: 'current',
      background: 'Current Vice Chair (2024-25). First elected 2018, re-elected 2022. Former Board Chair (2021). Owner of Leadership Consultants, LLC. Education career 1978-2017: teacher, school/district administrator in Polk schools. Former Polk State College Trustee, Dean, and Provost (Winter Haven, Lake Wales, Northeast Polk). Serves District 4 - the county\'s most rapidly developing region.',
      positions: {
        'growth-management': 'business-friendly',
        'roads-funding': 'impact-fees',
        'affordable-housing': 'zoning-incentives',
        'economic-development': 'tech-advanced',
        'environment': 'balanced-approach',
        'public-safety': 'proportional-growth',
        'rural-preservation': 'mixed-approach',
        'transparency': 'online-portal',
        'impact-fees': 'current-level',
        'comprehensive-plan': 'streamline-process'
      }
    },
    {
      id: 'michael-scott',
      name: 'Michael Scott',
      district: 'District 5',
      position: 'current',
      background: 'Elected August 2024 primary (first term). Polk native. Civil engineer (17 years) - designed roads, lift stations, sewer systems. Founded Right Trailers 20 years ago (42 employees, 6 locations in 4 states). BS Mechanical Engineering, MS Civil Engineering, MS Engineering Management (all USF). Campaign: "Smart Growth. Strategic Development. Strong Communities."',
      positions: {
        'growth-management': 'smart-growth',
        'roads-funding': 'impact-fees',
        'affordable-housing': 'zoning-incentives',
        'economic-development': 'tech-advanced',
        'environment': 'conservation-priority',
        'public-safety': 'proportional-growth',
        'rural-preservation': 'strong-protections',
        'transparency': 'online-portal',
        'impact-fees': 'expand-categories',
        'comprehensive-plan': 'infrastructure-capacity'
      }
    }
  ]
};