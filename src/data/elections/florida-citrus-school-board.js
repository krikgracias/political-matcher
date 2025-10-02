export const ELECTION_CONFIG = {
  id: 'florida-citrus-school-board',
  state: 'florida',
  county: 'citrus',
  office: 'school-board',
  title: 'Citrus County School Board',
  description: 'Find school board candidates who align with your educational priorities for Citrus County',
  electionDate: '2026-11-03',
  questions: [
    {
      id: 'safety-priority',
      category: 'schoolSafety',
      text: 'What should be the top priority for school safety?',
      options: [
        { value: 'security-personnel', label: 'Increase security personnel and K-9 units' },
        { value: 'mental-health', label: 'Focus on mental health support and anti-bullying' },
        { value: 'cell-phone-ban', label: 'Implement strict cell phone bans' },
        { value: 'crisis-communication', label: 'Improve crisis communication with parents' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'discipline-approach',
      category: 'schoolSafety',
      text: 'How should schools handle student discipline issues?',
      options: [
        { value: 'zero-tolerance', label: 'Zero-tolerance policies with strict consequences' },
        { value: 'restorative-justice', label: 'Restorative justice and counseling approaches' },
        { value: 'administrator-involvement', label: 'More administrator presence and involvement' },
        { value: 'teacher-autonomy', label: 'Let teachers handle classroom management independently' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'teacher-shortage',
      category: 'teacherSupport',
      text: 'How should the district address teacher shortages?',
      options: [
        { value: 'raise-salaries', label: 'Significantly raise teacher salaries' },
        { value: 'improve-conditions', label: 'Improve working conditions and support' },
        { value: 'bonuses-incentives', label: 'Offer signing bonuses and incentives' },
        { value: 'combined-approach', label: 'Combination of salary and support improvements' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'budget-priority',
      category: 'budgetPriorities',
      text: 'What deserves the highest budget priority?',
      options: [
        { value: 'teacher-salaries', label: 'Teacher salaries and benefits' },
        { value: 'building-construction', label: 'Building maintenance and construction' },
        { value: 'student-programs', label: 'Student programs and resources' },
        { value: 'transportation-safety', label: 'Transportation and safety' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'educational-focus',
      category: 'academicPrograms',
      text: 'What type of educational focus should the district prioritize?',
      options: [
        { value: 'college-prep', label: 'College preparation for all students' },
        { value: 'vocational-technical', label: 'Vocational and technical training programs' },
        { value: 'balanced-approach', label: 'Balanced approach between college and career prep' },
        { value: 'stem-focused', label: 'STEM-focused curriculum' }
      ],
      order: 5,
      active: true
    }
  ],
  candidates: [
    {
      id: 'thomas-kennedy',
      name: 'Thomas Kennedy',
      district: 'District 1',
      position: 'current',
      background: 'Current Citrus County School Board Member representing District 1.',
      positions: {
        'safety-priority': 'security-personnel',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'combined-approach',
        'budget-priority': 'building-construction',
        'educational-focus': 'balanced-approach'
      }
    },
    {
      id: 'kenneth-frink',
      name: 'Kenneth Frink',
      district: 'District 2',
      position: 'current',
      background: 'Elected November 2024. Executive manager and professional engineer with nearly 50 years in Citrus County. Former public works director, assistant county administrator, and division director at SWFWMD.',
      positions: {
        'safety-priority': 'security-personnel',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'raise-salaries',
        'budget-priority': 'teacher-salaries',
        'educational-focus': 'vocational-technical'
      }
    },
    {
      id: 'douglas-dodd',
      name: 'Douglas Dodd',
      district: 'District 3',
      position: 'current',
      background: 'Current Citrus County School Board Member representing District 3.',
      positions: {
        'safety-priority': 'mental-health',
        'discipline-approach': 'restorative-justice',
        'teacher-shortage': 'improve-conditions',
        'budget-priority': 'student-programs',
        'educational-focus': 'balanced-approach'
      }
    },
    {
      id: 'sandy-counts',
      name: 'Sandy Counts',
      district: 'District 4',
      position: 'current',
      background: 'Chairperson of Citrus County School Board (2024-2025), serving her third term. This is her third time as Board Chair, demonstrating strong leadership experience.',
      positions: {
        'safety-priority': 'crisis-communication',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'combined-approach',
        'budget-priority': 'teacher-salaries',
        'educational-focus': 'balanced-approach'
      }
    },
    {
      id: 'joseph-faherty',
      name: 'Joseph Faherty',
      district: 'District 5',
      position: 'current',
      background: 'Vice Chairperson of Citrus County School Board. Elected unanimously to leadership position, indicating strong board support.',
      positions: {
        'safety-priority': 'mental-health',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'improve-conditions',
        'budget-priority': 'student-programs',
        'educational-focus': 'stem-focused'
      }
    }
  ]
};