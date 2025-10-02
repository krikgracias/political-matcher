export const ELECTION_CONFIG_SCHOOL_BOARD = {
  id: 'florida-hillsborough-school-board',
  state: 'florida',
  county: 'hillsborough',
  office: 'school-board',
  title: 'Hillsborough County School Board',
  description: 'Find school board members who align with your priorities for Hillsborough County Public Schools - Florida\'s 7th largest district serving 224,000+ students',
  electionDate: '2026-08-18',
  questions: [
    {
      id: 'desantis-resistance',
      category: 'governance',
      text: 'In 2024, Hillsborough voters rejected DeSantis-backed challengers in favor of incumbents. How should the board balance state mandates with local control?',
      options: [
        { value: 'local-autonomy', label: 'Prioritize local decision-making within legal boundaries' },
        { value: 'state-alignment', label: 'Align closely with state education policies' },
        { value: 'selective-resistance', label: 'Selectively challenge overreach while complying with law' },
        { value: 'community-driven', label: 'Let community input guide response to state mandates' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'achievement-gap',
      category: 'equity',
      text: 'Hillsborough has significant achievement gaps. What should be the priority to ensure all students succeed?',
      options: [
        { value: 'early-intervention', label: 'Intensive early intervention in elementary grades' },
        { value: 'resource-allocation', label: 'Target resources to highest-need schools' },
        { value: 'family-engagement', label: 'Strengthen family and community engagement' },
        { value: 'comprehensive-strategy', label: 'Comprehensive strategy addressing multiple factors' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'teacher-retention',
      category: 'staffing',
      text: 'How should Hillsborough address teacher recruitment and retention in a competitive Tampa Bay market?',
      options: [
        { value: 'competitive-pay', label: 'Make salaries competitive with neighboring districts' },
        { value: 'signing-bonuses', label: 'Signing bonuses for high-need schools and subjects' },
        { value: 'working-conditions', label: 'Improve working conditions and reduce bureaucracy' },
        { value: 'comprehensive-package', label: 'Comprehensive compensation and support package' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'hurricane-recovery',
      category: 'infrastructure',
      text: 'Hurricanes Helene and Milton required $709M in recovery funds. How should the district prioritize resilience and recovery?',
      options: [
        { value: 'hardening-facilities', label: 'Invest in hardening school facilities against storms' },
        { value: 'rapid-response', label: 'Build rapid response and recovery systems' },
        { value: 'community-hubs', label: 'Make schools community resilience hubs' },
        { value: 'balanced-approach', label: 'Balance immediate needs with long-term resilience' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'curriculum-transparency',
      category: 'policy',
      text: 'How should the board handle curriculum transparency and parental involvement in instructional materials?',
      options: [
        { value: 'maximum-transparency', label: 'Maximum transparency with all materials online' },
        { value: 'trust-professionals', label: 'Trust professional educators with appropriate communication' },
        { value: 'parent-committees', label: 'Parent review committees for sensitive materials' },
        { value: 'balanced-approach', label: 'Balance transparency with professional autonomy' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'mental-health',
      category: 'student-support',
      text: 'What should be the district\'s approach to addressing student mental health and behavioral challenges?',
      options: [
        { value: 'more-counselors', label: 'Hire significantly more counselors and social workers' },
        { value: 'restorative-practices', label: 'Implement restorative justice and trauma-informed practices' },
        { value: 'discipline-focus', label: 'Focus on clear discipline policies and consequences' },
        { value: 'comprehensive-support', label: 'Comprehensive support including academics and wellness' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'school-choice',
      category: 'programs',
      text: 'How should Hillsborough balance traditional schools, magnet programs, and charter schools?',
      options: [
        { value: 'expand-choice', label: 'Expand magnet and choice programs' },
        { value: 'strengthen-traditional', label: 'Focus on strengthening all traditional schools' },
        { value: 'charter-growth', label: 'Support charter school growth for innovation' },
        { value: 'quality-all', label: 'Ensure quality across all school types' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'funding-priorities',
      category: 'budget',
      text: 'With limited resources, what should be the top budget priority?',
      options: [
        { value: 'teacher-pay', label: 'Teacher and staff compensation' },
        { value: 'facilities', label: 'Aging facilities and new construction' },
        { value: 'technology', label: 'Educational technology and innovation' },
        { value: 'support-services', label: 'Student support services and programs' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'literacy-math',
      category: 'academics',
      text: 'What approach should the district take to improve literacy and math outcomes?',
      options: [
        { value: 'evidence-based', label: 'Evidence-based instruction (science of reading, etc.)' },
        { value: 'intervention-focus', label: 'Intensive intervention for struggling students' },
        { value: 'teacher-development', label: 'Professional development for all teachers' },
        { value: 'comprehensive-plan', label: 'Comprehensive K-12 plan with multiple strategies' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'community-relations',
      category: 'community',
      text: 'After contentious 2024 elections, how should the board rebuild community trust and engagement?',
      options: [
        { value: 'listening-tours', label: 'Regular community listening tours and town halls' },
        { value: 'transparency-focus', label: 'Radical transparency in all board operations' },
        { value: 'focus-results', label: 'Focus on results and let outcomes speak' },
        { value: 'collaborative-approach', label: 'Build collaborative partnerships with all stakeholders' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'nadia-combs',
      name: 'Nadia Combs',
      district: 'District 1',
      position: 'current',
      background: 'Re-elected August 2024 with 53% of vote, defeating DeSantis-backed Layla Collins (37%) and Julie Magill (10%). Targeted by DeSantis and Moms for Liberty. Backed by Florida Democratic Party. Represents Northwest Hillsborough. Beat well-funded State Sen. Jay Collins\' wife despite being outspent. Previous victory over Republican Steve Cona in 2020 despite being outspent.',
      positions: {
        'desantis-resistance': 'local-autonomy',
        'achievement-gap': 'resource-allocation',
        'teacher-retention': 'comprehensive-package',
        'hurricane-recovery': 'balanced-approach',
        'curriculum-transparency': 'balanced-approach',
        'mental-health': 'comprehensive-support',
        'school-choice': 'quality-all',
        'funding-priorities': 'teacher-pay',
        'literacy-math': 'comprehensive-plan',
        'community-relations': 'collaborative-approach'
      }
    },
    {
      id: 'stacy-hahn',
      name: 'Dr. Stacy Hahn',
      district: 'District 2',
      position: 'current',
      background: 'Current board member representing District 2. Experienced educator with focus on student achievement and district operations.',
      positions: {
        'desantis-resistance': 'community-driven',
        'achievement-gap': 'comprehensive-strategy',
        'teacher-retention': 'competitive-pay',
        'hurricane-recovery': 'balanced-approach',
        'curriculum-transparency': 'trust-professionals',
        'mental-health': 'comprehensive-support',
        'school-choice': 'strengthen-traditional',
        'funding-priorities': 'support-services',
        'literacy-math': 'evidence-based',
        'community-relations': 'collaborative-approach'
      }
    },
    {
      id: 'jessica-vaughn',
      name: 'Jessica Vaughn',
      district: 'District 3',
      position: 'current',
      background: 'Current Vice Chair. Re-elected August 2024 with 59% of vote, defeating DeSantis-backed Myosha Powell (41%). Targeted by DeSantis and Moms for Liberty. Backed by Florida Democratic Party. Represents Northeast Hillsborough. Outfundraised Powell 3-1. Survived brutal Democratic primary challenge from Bonnie Lambert. Initially considered not running due to time demands on family but decided to continue serving.',
      positions: {
        'desantis-resistance': 'selective-resistance',
        'achievement-gap': 'family-engagement',
        'teacher-retention': 'working-conditions',
        'hurricane-recovery': 'community-hubs',
        'curriculum-transparency': 'balanced-approach',
        'mental-health': 'restorative-practices',
        'school-choice': 'quality-all',
        'funding-priorities': 'teacher-pay',
        'literacy-math': 'comprehensive-plan',
        'community-relations': 'listening-tours'
      }
    },
    {
      id: 'patti-rendon',
      name: 'Patti Rendon',
      district: 'District 4',
      position: 'current',
      background: 'Current board member representing District 4. Focused on district operations and student success.',
      positions: {
        'desantis-resistance': 'community-driven',
        'achievement-gap': 'comprehensive-strategy',
        'teacher-retention': 'comprehensive-package',
        'hurricane-recovery': 'balanced-approach',
        'curriculum-transparency': 'trust-professionals',
        'mental-health': 'comprehensive-support',
        'school-choice': 'strengthen-traditional',
        'funding-priorities': 'facilities',
        'literacy-math': 'teacher-development',
        'community-relations': 'collaborative-approach'
      }
    },
    {
      id: 'henry-washington',
      name: 'Henry "Shake" Washington',
      district: 'District 5',
      position: 'current',
      background: 'Re-elected August 2024 with 60.6% of vote, defeating Kenneth Gay (24.4%), Elvis Piggott (13.6%), and former board member Tamara Shamburger (write-in). Longtime district employee with deep institutional knowledge. First elected 2020, defeating incumbent Tamara Shamburger. Represents diverse community in District 5.',
      positions: {
        'desantis-resistance': 'local-autonomy',
        'achievement-gap': 'early-intervention',
        'teacher-retention': 'comprehensive-package',
        'hurricane-recovery': 'rapid-response',
        'curriculum-transparency': 'trust-professionals',
        'mental-health': 'comprehensive-support',
        'school-choice': 'strengthen-traditional',
        'funding-priorities': 'support-services',
        'literacy-math': 'intervention-focus',
        'community-relations': 'collaborative-approach'
      }
    },
    {
      id: 'karen-perez',
      name: 'Karen Perez',
      district: 'District 6 At-Large',
      position: 'current',
      background: 'Former Board Chair. Represents countywide at-large District 6. Experienced leader with countywide perspective on district issues.',
      positions: {
        'desantis-resistance': 'community-driven',
        'achievement-gap': 'comprehensive-strategy',
        'teacher-retention': 'competitive-pay',
        'hurricane-recovery': 'balanced-approach',
        'curriculum-transparency': 'balanced-approach',
        'mental-health': 'comprehensive-support',
        'school-choice': 'quality-all',
        'funding-priorities': 'teacher-pay',
        'literacy-math': 'comprehensive-plan',
        'community-relations': 'transparency-focus'
      }
    },
    {
      id: 'lynn-gray',
      name: 'Lynn Gray',
      district: 'District 7 At-Large',
      position: 'current',
      background: 'Re-elected November 2024, defeating Karen Bendorf in runoff after receiving 35% in August primary (Bendorf got 30%). Represents countywide at-large District 7. Only race that went to November runoff in 2024.',
      positions: {
        'desantis-resistance': 'community-driven',
        'achievement-gap': 'comprehensive-strategy',
        'teacher-retention': 'comprehensive-package',
        'hurricane-recovery': 'balanced-approach',
        'curriculum-transparency': 'balanced-approach',
        'mental-health': 'comprehensive-support',
        'school-choice': 'quality-all',
        'funding-priorities': 'facilities',
        'literacy-math': 'evidence-based',
        'community-relations': 'collaborative-approach'
      }
    }
  ]
};