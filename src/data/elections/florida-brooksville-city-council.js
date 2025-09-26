export const ELECTION_CONFIG = {
  id: 'florida-brooksville-city-council',
  state: 'florida',
  county: 'hernando',
  office: 'city-council',
  title: 'Brooksville City Council',
  description: 'Find city council candidates who align with your vision for Brooksville',
  electionDate: '2025-11-05',
  questions: [
    {
      id: 'downtown-revitalization',
      category: 'development',
      text: 'How should Brooksville approach downtown revitalization?',
      options: [
        { value: 'historic-preservation', label: 'Focus on historic preservation and heritage tourism' },
        { value: 'modern-development', label: 'Encourage modern retail and dining development' },
        { value: 'mixed-use', label: 'Promote mixed-use development with residential and commercial' },
        { value: 'community-led', label: 'Let community organizations lead revitalization efforts' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'city-services',
      category: 'services',
      text: 'What city services should receive priority funding?',
      options: [
        { value: 'police-fire', label: 'Police and fire department services' },
        { value: 'infrastructure', label: 'Street maintenance and utility improvements' },
        { value: 'parks-recreation', label: 'Parks, recreation, and community programs' },
        { value: 'economic-development', label: 'Economic development and business attraction' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'business-development',
      category: 'economic',
      text: 'How should the city attract and support businesses?',
      options: [
        { value: 'tax-incentives', label: 'Offer tax incentives and reduced regulations' },
        { value: 'infrastructure-support', label: 'Invest in infrastructure to support businesses' },
        { value: 'local-business', label: 'Focus on supporting existing local businesses' },
        { value: 'selective-recruitment', label: 'Selectively recruit businesses that fit community character' }
      ],
      order: 3,
      active: true
    }
  ],
candidates: [
    {
      id: 'christa-tanner',
      name: 'Christa Tanner',
      district: 'Mayor',
      position: 'current',
      background: 'Current Mayor of Brooksville, focused on historic preservation and downtown revitalization while maintaining small-town character.',
      positions: {
        'downtown-revitalization': 'historic-preservation',
        'city-services': 'parks-recreation',
        'business-development': 'selective-recruitment'
      }
    },
    {
      id: 'thomas-bronson',
      name: 'Thomas Bronson',
      district: 'Vice Mayor',
      position: 'current',
      background: 'Vice Mayor of Brooksville, experienced in community development and local government operations.',
      positions: {
        'downtown-revitalization': 'mixed-use',
        'city-services': 'infrastructure',
        'business-development': 'infrastructure-support'
      }
    },
    {
      id: 'jw-mckethan',
      name: 'J.W. McKethan',
      district: 'Council Member',
      position: 'current',
      background: 'Newly elected Brooksville City Council member, committed to representing residents\' interests and responsible city development.',
      positions: {
        'downtown-revitalization': 'community-led',
        'city-services': 'police-fire',
        'business-development': 'local-business'
      }
    },
    {
      id: 'louis-hallal',
      name: 'Louis Hallal',
      district: 'Council Member',
      position: 'current',
      background: 'New Brooksville City Council member focused on making decisions in the best interest of Brooksville residents.',
      positions: {
        'downtown-revitalization': 'historic-preservation',
        'city-services': 'economic-development',
        'business-development': 'tax-incentives'
      }
    },
    {
      id: 'betty-erhard',
      name: 'Betty Erhard',
      district: 'Council Member',
      position: 'current',
      background: 'Recently elected to Brooksville City Council, bringing fresh perspective to local government and community development.',
      positions: {
        'downtown-revitalization': 'mixed-use',
        'city-services': 'parks-recreation',
        'business-development': 'selective-recruitment'
      }
    }
  ]
};