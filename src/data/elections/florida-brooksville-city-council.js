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
      id: 'placeholder-council-1',
      name: 'City Council Candidate',
      district: 'At-Large',
      position: 'candidate',
      background: 'Candidate information will be updated as elections approach.',
      positions: {
        'downtown-revitalization': 'historic-preservation',
        'city-services': 'infrastructure',
        'business-development': 'local-business'
      }
    }
  ]
};