export const ELECTION_CONFIG = {
  id: 'florida-senate-district-11',
  state: 'florida',
  county: 'multi', // Covers Citrus, Hernando, Sumter, parts of Pasco
  office: 'state-senate',
  title: 'Florida Senate District 11 Special Election',
  description: 'December 9, 2025 - Find which state senate candidate aligns with your values',
  electionDate: '2025-12-09',
  coverage: 'Citrus, Hernando, Sumter, and parts of Pasco County',
  questions: [
    {
      id: 'healthcare-access',
      category: 'healthcare',
      text: 'How should Florida approach healthcare access and affordability?',
      options: [
        { value: 'expand-medicaid', label: 'Expand Medicaid to cover more low-income residents' },
        { value: 'market-based', label: 'Use market-based solutions and competition' },
        { value: 'state-programs', label: 'Create targeted state programs for specific needs' },
        { value: 'maintain-current', label: 'Maintain current system with minor improvements' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'education-funding',
      category: 'education',
      text: 'What should be the priority for education funding in Florida?',
      options: [
        { value: 'increase-teacher-pay', label: 'Significantly increase teacher salaries' },
        { value: 'school-choice', label: 'Expand school choice and charter schools' },
        { value: 'facility-improvements', label: 'Focus on school facilities and infrastructure' },
        { value: 'balanced-investment', label: 'Balanced investment across all education needs' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'economic-development',
      category: 'economy',
      text: 'How should the state promote economic growth?',
      options: [
        { value: 'lower-taxes', label: 'Lower taxes and reduce business regulations' },
        { value: 'infrastructure-investment', label: 'Invest in infrastructure to attract businesses' },
        { value: 'workforce-development', label: 'Focus on workforce training and development' },
        { value: 'small-business-support', label: 'Prioritize support for small and local businesses' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'environmental-policy',
      category: 'environment',
      text: 'What should be Florida\'s approach to environmental protection?',
      options: [
        { value: 'strong-regulations', label: 'Implement strong environmental protections' },
        { value: 'balanced-approach', label: 'Balance environmental needs with economic growth' },
        { value: 'local-control', label: 'Let local communities decide environmental policy' },
        { value: 'minimal-regulation', label: 'Minimize regulations to support business' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'property-insurance',
      category: 'housing',
      text: 'How should Florida address the property insurance crisis?',
      options: [
        { value: 'state-intervention', label: 'Increase state intervention and regulation' },
        { value: 'reform-lawsuits', label: 'Reform lawsuit system to reduce costs' },
        { value: 'strengthen-citizens', label: 'Strengthen Citizens Property Insurance' },
        { value: 'market-solutions', label: 'Let market forces resolve the issue' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'veterans-support',
      category: 'social',
      text: 'What veterans services should Florida prioritize?',
      options: [
        { value: 'healthcare-mental', label: 'Healthcare and mental health services' },
        { value: 'housing-assistance', label: 'Housing and homelessness prevention' },
        { value: 'job-training', label: 'Job training and employment assistance' },
        { value: 'comprehensive-support', label: 'Comprehensive support across all areas' }
      ],
      order: 6,
      active: true
    }
  ],
  candidates: [
    {
      id: 'ralph-massullo',
      name: 'Ralph Massullo',
      district: 'District 11',
      position: 'candidate',
      party: 'Republican',
      background: 'Former Florida State Representative and physician with medical practice in Hernando County. Served in Florida House 2012-2022.',
      positions: {
        'healthcare-access': 'market-based',
        'education-funding': 'balanced-investment',
        'economic-development': 'lower-taxes',
        'environmental-policy': 'balanced-approach',
        'property-insurance': 'reform-lawsuits',
        'veterans-support': 'healthcare-mental'
      }
    },
    {
      id: 'ash-marwah',
      name: 'Ash Marwah',
      district: 'District 11',
      position: 'candidate',
      party: 'Democrat',
      background: 'Vietnam War veteran and engineer with decades of community service. Focus on healthcare access and veteran support.',
      positions: {
        'healthcare-access': 'expand-medicaid',
        'education-funding': 'increase-teacher-pay',
        'economic-development': 'workforce-development',
        'environmental-policy': 'strong-regulations',
        'property-insurance': 'state-intervention',
        'veterans-support': 'comprehensive-support'
      }
    }
  ]
};