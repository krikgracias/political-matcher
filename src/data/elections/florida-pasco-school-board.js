export const ELECTION_CONFIG_SCHOOL_BOARD = {
  id: 'florida-pasco-school-board',
  state: 'florida',
  county: 'pasco',
  office: 'school-board',
  title: 'Pasco County School Board',
  description: 'Find school board members who align with your priorities for Pasco County Schools - Florida\'s 10th largest district serving 84,049 students across 104 schools',
  electionDate: '2026-08-18',
  questions: [
    {
      id: 'rapid-growth',
      category: 'infrastructure',
      text: 'Pasco is one of Florida\'s fastest-growing counties, especially in Wesley Chapel. How should the district manage explosive enrollment growth?',
      options: [
        { value: 'new-schools', label: 'Aggressive new school construction to eliminate portables' },
        { value: 'boundary-changes', label: 'Strategic boundary changes to balance enrollment' },
        { value: 'virtual-expansion', label: 'Expand virtual school options to manage capacity' },
        { value: 'comprehensive-plan', label: 'Comprehensive facilities plan with multiple strategies' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'superintendent-transition',
      category: 'leadership',
      text: 'John Legg became superintendent in 2024 after 12 years under Kurt Browning. He allows teachers to grade homework again. How should the board work with new leadership?',
      options: [
        { value: 'strong-support', label: 'Give superintendent strong support and autonomy' },
        { value: 'active-oversight', label: 'Active board oversight and policy direction' },
        { value: 'collaborative', label: 'Collaborative partnership with clear roles' },
        { value: 'cautious-evaluation', label: 'Cautious evaluation before making major changes' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'teacher-retention',
      category: 'staffing',
      text: 'The 2022 tax referendum supports teacher pay raises. How should the district further address teacher recruitment and retention?',
      options: [
        { value: 'competitive-salaries', label: 'Make salaries competitive with Tampa Bay region' },
        { value: 'signing-bonuses', label: 'Signing bonuses for high-need subjects and schools' },
        { value: 'working-conditions', label: 'Improve working conditions and reduce class sizes' },
        { value: 'comprehensive-strategy', label: 'Comprehensive strategy including pay and support' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'portable-classrooms',
      category: 'facilities',
      text: 'Jessica Wright campaigned on eliminating portable classrooms. What should be the district\'s facilities priority?',
      options: [
        { value: 'eliminate-portables', label: 'Aggressively eliminate portable classrooms' },
        { value: 'renovate-existing', label: 'Renovate and expand existing school buildings' },
        { value: 'new-construction', label: 'Focus on new school construction in growth areas' },
        { value: 'balanced-approach', label: 'Balanced approach based on community needs' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'class-size',
      category: 'academics',
      text: 'How should the district address class size, especially in high-growth schools?',
      options: [
        { value: 'strict-compliance', label: 'Strict compliance with state class size requirements' },
        { value: 'hire-more-teachers', label: 'Hire more teachers to reduce class sizes further' },
        { value: 'flexible-approach', label: 'Flexible approach based on grade level and subject' },
        { value: 'technology-solutions', label: 'Use technology and co-teaching models' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'charter-schools',
      category: 'school-choice',
      text: 'New Superintendent John Legg founded and runs Pasco\'s oldest charter school (Dayspring Academy). How should the district approach charter schools?',
      options: [
        { value: 'expand-charters', label: 'Support charter school expansion for choice' },
        { value: 'strengthen-traditional', label: 'Focus resources on strengthening traditional schools' },
        { value: 'collaborative-approach', label: 'Collaborative approach between traditional and charter' },
        { value: 'quality-accountability', label: 'Focus on quality and accountability for all schools' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'budget-transparency',
      category: 'governance',
      text: 'Jessica Wright emphasized transparency in Pasco\'s $1.9B budget. How should budget decisions be made?',
      options: [
        { value: 'maximum-transparency', label: 'Maximum transparency with detailed public reporting' },
        { value: 'community-input', label: 'Regular community input sessions on budget priorities' },
        { value: 'professional-judgment', label: 'Trust professional judgment of administration' },
        { value: 'performance-based', label: 'Performance-based budgeting tied to outcomes' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'east-west-divide',
      category: 'equity',
      text: 'Pasco has distinct East (Dade City, rural) and West (New Port Richey, suburban) regions. How should resources be distributed?',
      options: [
        { value: 'equal-distribution', label: 'Equal per-student distribution regardless of location' },
        { value: 'needs-based', label: 'Needs-based allocation targeting struggling schools' },
        { value: 'growth-focus', label: 'Prioritize rapidly growing areas like Wesley Chapel' },
        { value: 'balanced-equity', label: 'Balance equity with addressing unique regional needs' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'parental-involvement',
      category: 'community',
      text: 'How should the district balance parental rights advocacy with professional educator autonomy?',
      options: [
        { value: 'parent-priority', label: 'Prioritize parental rights and transparency' },
        { value: 'educator-autonomy', label: 'Trust professional educators\' expertise' },
        { value: 'collaborative-model', label: 'Collaborative model with parent input and educator leadership' },
        { value: 'clear-boundaries', label: 'Clear boundaries between policy and instructional decisions' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'student-achievement',
      category: 'academics',
      text: 'What should be the top priority to improve student achievement outcomes?',
      options: [
        { value: 'literacy-focus', label: 'Intensive focus on early literacy and reading' },
        { value: 'stem-expansion', label: 'Expand STEM and career technical programs' },
        { value: 'support-services', label: 'Increase counselors and student support services' },
        { value: 'comprehensive-approach', label: 'Comprehensive approach addressing multiple factors' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'al-hernandez',
      name: 'Al Hernandez',
      district: 'District 1',
      position: 'current',
      background: 'Elected November 2022, defeating James M. Washington. Represents District 1 schools in southern and central Pasco.',
      positions: {
        'rapid-growth': 'comprehensive-plan',
        'superintendent-transition': 'collaborative',
        'teacher-retention': 'comprehensive-strategy',
        'portable-classrooms': 'balanced-approach',
        'class-size': 'flexible-approach',
        'charter-schools': 'quality-accountability',
        'budget-transparency': 'community-input',
        'east-west-divide': 'balanced-equity',
        'parental-involvement': 'collaborative-model',
        'student-achievement': 'comprehensive-approach'
      }
    },
    {
      id: 'colleen-beaudoin',
      name: 'Colleen Beaudoin',
      district: 'District 2',
      position: 'current',
      background: 'Current Vice Chairman. Unopposed in 2024 election - won automatically without appearing on ballot. Represents District 2 schools in central Pasco east of U.S. 41. Experienced board member with broad community support.',
      positions: {
        'rapid-growth': 'comprehensive-plan',
        'superintendent-transition': 'strong-support',
        'teacher-retention': 'competitive-salaries',
        'portable-classrooms': 'balanced-approach',
        'class-size': 'hire-more-teachers',
        'charter-schools': 'collaborative-approach',
        'budget-transparency': 'professional-judgment',
        'east-west-divide': 'balanced-equity',
        'parental-involvement': 'collaborative-model',
        'student-achievement': 'comprehensive-approach'
      }
    },
    {
      id: 'cynthia-armstrong',
      name: 'Cynthia Armstrong',
      district: 'District 3',
      position: 'current',
      background: 'Current Board Chairman. Provides leadership for the five-member board. Represents District 3 schools.',
      positions: {
        'rapid-growth': 'comprehensive-plan',
        'superintendent-transition': 'collaborative',
        'teacher-retention': 'comprehensive-strategy',
        'portable-classrooms': 'balanced-approach',
        'class-size': 'flexible-approach',
        'charter-schools': 'quality-accountability',
        'budget-transparency': 'community-input',
        'east-west-divide': 'balanced-equity',
        'parental-involvement': 'clear-boundaries',
        'student-achievement': 'comprehensive-approach'
      }
    },
    {
      id: 'jessica-wright',
      name: 'Jessica Wright',
      district: 'District 4',
      position: 'current',
      background: 'Elected August 2024, narrowly defeating 14-year incumbent Alison Crumbley (who had DeSantis endorsement). First incumbent defeat in 20 years. Florida Virtual School social studies teacher, 34. Two children in district. Former teacher in Pasco schools where she was once a student. Masters in education, certified in educational leadership. Campaigned on eliminating portables, reducing class sizes, budget transparency. Ties to Florida Freedom to Read Project (anti-censorship). Supported by Jessica Wright for transparency and accountability.',
      positions: {
        'rapid-growth': 'new-schools',
        'superintendent-transition': 'active-oversight',
        'teacher-retention': 'working-conditions',
        'portable-classrooms': 'eliminate-portables',
        'class-size': 'hire-more-teachers',
        'charter-schools': 'strengthen-traditional',
        'budget-transparency': 'maximum-transparency',
        'east-west-divide': 'needs-based',
        'parental-involvement': 'educator-autonomy',
        'student-achievement': 'support-services'
      }
    },
    {
      id: 'megan-harding',
      name: 'Megan Harding',
      district: 'District 5',
      position: 'current',
      background: 'Elected 2018, defeating Tara O\'Connor. Represents District 5 schools. Board member during transition from Superintendent Browning to Legg.',
      positions: {
        'rapid-growth': 'comprehensive-plan',
        'superintendent-transition': 'strong-support',
        'teacher-retention': 'comprehensive-strategy',
        'portable-classrooms': 'balanced-approach',
        'class-size': 'flexible-approach',
        'charter-schools': 'collaborative-approach',
        'budget-transparency': 'performance-based',
        'east-west-divide': 'balanced-equity',
        'parental-involvement': 'collaborative-model',
        'student-achievement': 'comprehensive-approach'
      }
    }
  ]
};