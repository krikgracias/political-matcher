//fixed file
export const ELECTION_CONFIG_COMMISSION = {
  id: 'florida-pinellas-county-commission',
  state: 'florida',
  county: 'pinellas',
  office: 'county-commission',
  title: 'Pinellas County Commission',
  description: 'Find county commissioners who align with your priorities for Pinellas County - Tampa Bay\'s most densely populated county with ~980,000 residents',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'affordable-housing',
      category: 'housing',
      text: 'Pinellas County faces a severe affordable housing crisis driven by high demand and limited land. What should be the county\'s approach?',
      options: [
        { value: 'aggressive-development', label: 'Aggressively promote mixed-income development projects' },
        { value: 'zoning-reform', label: 'Reform zoning to allow more density and diverse housing types' },
        { value: 'preserve-character', label: 'Preserve neighborhood character while encouraging infill' },
        { value: 'market-solutions', label: 'Let market forces work with minimal intervention' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'beach-tourism',
      category: 'economic-development',
      text: 'Tourism is vital to Pinellas economy, but beaches face erosion and overtourism. How should this be balanced?',
      options: [
        { value: 'aggressive-restoration', label: 'Aggressive beach restoration and environmental protection' },
        { value: 'tourism-growth', label: 'Continue promoting tourism growth and development' },
        { value: 'sustainable-tourism', label: 'Sustainable tourism with visitor limits and conservation' },
        { value: 'local-priority', label: 'Prioritize local residents\' beach access over tourism' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'transportation',
      category: 'infrastructure',
      text: 'As the most densely populated Tampa Bay county, how should Pinellas address transportation and congestion?',
      options: [
        { value: 'expand-roads', label: 'Expand roads and highways to accommodate growth' },
        { value: 'public-transit', label: 'Invest heavily in public transit and alternative transportation' },
        { value: 'smart-growth', label: 'Smart growth with mixed-use development near transit' },
        { value: 'balanced-approach', label: 'Balanced approach with both road and transit improvements' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'climate-resilience',
      category: 'environment',
      text: 'Pinellas faces sea-level rise, flooding, and hurricane risks. What should be the climate adaptation priority?',
      options: [
        { value: 'infrastructure-hardening', label: 'Infrastructure hardening and flood prevention systems' },
        { value: 'managed-retreat', label: 'Managed retreat from most vulnerable coastal areas' },
        { value: 'nature-based', label: 'Nature-based solutions like living shorelines' },
        { value: 'comprehensive-plan', label: 'Comprehensive resilience plan with multiple strategies' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'development-growth',
      category: 'land-use',
      text: 'Pinellas is largely built out with 24 municipalities. How should remaining development be managed?',
      options: [
        { value: 'redevelopment-focus', label: 'Focus on redevelopment and infill projects' },
        { value: 'slow-growth', label: 'Slow growth to protect remaining natural areas' },
        { value: 'economic-priority', label: 'Prioritize economic development and job creation' },
        { value: 'strategic-planning', label: 'Strategic planning balancing growth and conservation' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'st-pete-clearwater',
      category: 'intergovernmental',
      text: 'How should the county work with major cities like St. Petersburg and Clearwater on regional issues?',
      options: [
        { value: 'strong-collaboration', label: 'Strong regional collaboration on shared services' },
        { value: 'county-leadership', label: 'County should take leadership role in regional planning' },
        { value: 'municipal-autonomy', label: 'Respect municipal autonomy with limited county role' },
        { value: 'issue-by-issue', label: 'Collaborate on specific issues while respecting boundaries' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'public-safety',
      category: 'public-safety',
      text: 'How should public safety services be funded and coordinated across 24 municipalities?',
      options: [
        { value: 'increase-funding', label: 'Significantly increase sheriff and emergency services funding' },
        { value: 'regional-coordination', label: 'Better regional coordination and shared services' },
        { value: 'municipal-responsibility', label: 'Let municipalities primarily handle their own safety' },
        { value: 'targeted-investments', label: 'Targeted investments in high-need areas' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'charter-amendments',
      category: 'governance',
      text: 'Pinellas voters passed several charter amendments in 2024 including term limits. How should county governance evolve?',
      options: [
        { value: 'embrace-reforms', label: 'Embrace new reforms and continue improving governance' },
        { value: 'measured-implementation', label: 'Measured implementation of changes' },
        { value: 'limit-changes', label: 'Limit further changes to preserve institutional knowledge' },
        { value: 'citizen-engagement', label: 'Increase citizen engagement and transparency' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'parks-recreation',
      category: 'quality-of-life',
      text: 'With limited open space, how should parks and recreation be prioritized?',
      options: [
        { value: 'acquire-more', label: 'Aggressively acquire remaining land for parks' },
        { value: 'improve-existing', label: 'Improve and expand existing facilities' },
        { value: 'public-private', label: 'Public-private partnerships for recreation' },
        { value: 'balanced-investment', label: 'Balance new acquisition with facility improvements' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'economic-diversification',
      category: 'economic-development',
      text: 'Beyond tourism, how should Pinellas diversify its economy?',
      options: [
        { value: 'tech-innovation', label: 'Focus on tech, innovation, and knowledge economy' },
        { value: 'maintain-tourism', label: 'Continue leveraging tourism as economic driver' },
        { value: 'small-business', label: 'Support local small businesses and entrepreneurship' },
        { value: 'diverse-sectors', label: 'Recruit diverse industries including healthcare and finance' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'chris-scherer',
      name: 'Chris Scherer',
      district: 'District 1 At-Large',
      position: 'current',
      background: 'Elected November 2024, defeating Democrat Joanne Kennedy. Republican representing at-large district elected countywide. New to commission with focus on countywide issues.',
      positions: {
        'affordable-housing': 'zoning-reform',
        'beach-tourism': 'sustainable-tourism',
        'transportation': 'balanced-approach',
        'climate-resilience': 'infrastructure-hardening',
        'development-growth': 'strategic-planning',
        'st-pete-clearwater': 'issue-by-issue',
        'public-safety': 'regional-coordination',
        'charter-amendments': 'embrace-reforms',
        'parks-recreation': 'balanced-investment',
        'economic-diversification': 'diverse-sectors'
      }
    },
    {
      id: 'brian-scott',
      name: 'Brian Scott',
      district: 'District 2 At-Large',
      position: 'current',
      background: 'Current Board Chair. Elected 2022. Republican representing at-large district elected countywide. Leads commission meetings and sets policy direction.',
      positions: {
        'affordable-housing': 'preserve-character',
        'beach-tourism': 'tourism-growth',
        'transportation': 'expand-roads',
        'climate-resilience': 'infrastructure-hardening',
        'development-growth': 'economic-priority',
        'st-pete-clearwater': 'county-leadership',
        'public-safety': 'increase-funding',
        'charter-amendments': 'measured-implementation',
        'parks-recreation': 'improve-existing',
        'economic-diversification': 'maintain-tourism'
      }
    },
    {
      id: 'vince-nowicki',
      name: 'Vince Nowicki',
      district: 'District 3 At-Large',
      position: 'current',
      background: 'Elected November 2024, defeating incumbent Democrat Charlie Justice. Republican representing at-large district elected countywide. New commissioner bringing fresh perspective.',
      positions: {
        'affordable-housing': 'market-solutions',
        'beach-tourism': 'tourism-growth',
        'transportation': 'expand-roads',
        'climate-resilience': 'infrastructure-hardening',
        'development-growth': 'economic-priority',
        'st-pete-clearwater': 'municipal-autonomy',
        'public-safety': 'increase-funding',
        'charter-amendments': 'embrace-reforms',
        'parks-recreation': 'improve-existing',
        'economic-diversification': 'diverse-sectors'
      }
    },
    {
      id: 'dave-eggers',
      name: 'Dave Eggers',
      district: 'District 4',
      position: 'current',
      background: 'Current Vice Chair. Longest-serving commissioner (since 2014). Republican representing single-member district. Veteran leader with institutional knowledge and experience.',
      positions: {
        'affordable-housing': 'preserve-character',
        'beach-tourism': 'sustainable-tourism',
        'transportation': 'balanced-approach',
        'climate-resilience': 'comprehensive-plan',
        'development-growth': 'strategic-planning',
        'st-pete-clearwater': 'strong-collaboration',
        'public-safety': 'regional-coordination',
        'charter-amendments': 'measured-implementation',
        'parks-recreation': 'balanced-investment',
        'economic-diversification': 'diverse-sectors'
      }
    },
    {
      id: 'chris-latvala',
      name: 'Chris Latvala',
      district: 'District 5',
      position: 'current',
      background: 'Elected 2022. Republican representing single-member district. Former state representative who served in Florida House. Katie Blaxberg (school board member) served as his legislative aide. Connected to both county and state politics.',
      positions: {
        'affordable-housing': 'zoning-reform',
        'beach-tourism': 'sustainable-tourism',
        'transportation': 'public-transit',
        'climate-resilience': 'comprehensive-plan',
        'development-growth': 'redevelopment-focus',
        'st-pete-clearwater': 'strong-collaboration',
        'public-safety': 'regional-coordination',
        'charter-amendments': 'embrace-reforms',
        'parks-recreation': 'balanced-investment',
        'economic-diversification': 'tech-innovation'
      }
    },
    {
      id: 'kathleen-peters',
      name: 'Kathleen Peters',
      district: 'District 6',
      position: 'current',
      background: 'Serving since 2019. Republican representing single-member district. Experienced commissioner focused on district-specific and countywide issues.',
      positions: {
        'affordable-housing': 'preserve-character',
        'beach-tourism': 'sustainable-tourism',
        'transportation': 'balanced-approach',
        'climate-resilience': 'infrastructure-hardening',
        'development-growth': 'strategic-planning',
        'st-pete-clearwater': 'issue-by-issue',
        'public-safety': 'targeted-investments',
        'charter-amendments': 'measured-implementation',
        'parks-recreation': 'improve-existing',
        'economic-diversification': 'small-business'
      }
    },
    {
      id: 'rene-flowers',
      name: 'Rene Flowers',
      district: 'District 7',
      position: 'current',
      background: 'Elected 2020. Only Democrat on the seven-member commission. Represents single-member district. Provides diverse perspective on board dominated by Republicans.',
      positions: {
        'affordable-housing': 'aggressive-development',
        'beach-tourism': 'local-priority',
        'transportation': 'public-transit',
        'climate-resilience': 'comprehensive-plan',
        'development-growth': 'redevelopment-focus',
        'st-pete-clearwater': 'strong-collaboration',
        'public-safety': 'targeted-investments',
        'charter-amendments': 'citizen-engagement',
        'parks-recreation': 'acquire-more',
        'economic-diversification': 'tech-innovation'
      }
    }
  ]
};
