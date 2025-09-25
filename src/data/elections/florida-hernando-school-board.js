export const ELECTION_CONFIG = {
  id: 'florida-hernando-school-board',
  state: 'florida',
  county: 'hernando', 
  office: 'school-board',
  title: 'Hernando County School Board',
  description: 'Find school board candidates who align with your educational priorities',
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
      id: 'support-staff-priority',
      category: 'teacherSupport',
      text: 'What is the priority for support staff (bus drivers, aides, etc.)?',
      options: [
        { value: 'raise-wages', label: 'Raise wages to attract more applicants' },
        { value: 'improve-training', label: 'Improve training and professional development' },
        { value: 'hire-retirees', label: 'Hire retired professionals as drivers' },
        { value: 'retention-focus', label: 'Focus on current staff retention first' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'ese-support',
      category: 'specialNeeds',
      text: 'How should the district support special needs students?',
      options: [
        { value: 'hire-certified-teachers', label: 'Hire more ESE-certified teachers' },
        { value: 'train-existing', label: 'Train existing teachers in special needs support' },
        { value: 'no-parent-costs', label: 'Ensure parents don\'t pay extra for ESE services' },
        { value: 'specialized-facilities', label: 'Create specialized facilities and programs' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'overcrowding-solution',
      category: 'infrastructure',
      text: 'How should the district handle overcrowding?',
      options: [
        { value: 'build-immediately', label: 'Build new permanent school buildings immediately' },
        { value: 'portables-while-planning', label: 'Continue using portables while planning carefully' },
        { value: 'support-charter-expansion', label: 'Support both public and charter school expansion' },
        { value: 'redistricting', label: 'Implement redistricting to balance enrollment' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'budget-approach',
      category: 'budgetPriorities',
      text: 'How should the school district approach budget management?',
      options: [
        { value: 'maintain-efficiency', label: 'Maintain current spending and focus on efficiency' },
        { value: 'increase-for-needs', label: 'Increase spending on critical needs even if taxes rise' },
        { value: 'cut-admin-costs', label: 'Cut administrative costs to fund classroom priorities' },
        { value: 'alternative-funding', label: 'Seek alternative funding through grants and partnerships' }
      ],
      order: 7,
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
      order: 8,
      active: true
    },
    {
      id: 'parent-input-level',
      category: 'parentInvolvement',
      text: 'How much input should parents have in school decisions?',
      options: [
        { value: 'major-voice', label: 'Major voice in curriculum and policy decisions' },
        { value: 'regular-consultation', label: 'Regular consultation on important issues' },
        { value: 'professional-judgment', label: 'Input welcomed but professional judgment should prevail' },
        { value: 'individual-focus', label: 'Focus on individual student issues rather than district policy' }
      ],
      order: 9,
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
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'michelle-bonczek',
      name: 'Michelle Bonczek',
      district: 'District 4',
      position: 'current',
      background: 'Mother of 7, substitute teacher, Bachelor\'s in Psychology, Master\'s in Education Law. 43 years in Hernando County.',
      positions: {
        'safety-priority': 'security-personnel',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'combined-approach',
        'support-staff-priority': 'raise-wages',
        'ese-support': 'no-parent-costs',
        'overcrowding-solution': 'portables-while-planning',
        'budget-approach': 'cut-admin-costs',
        'budget-priority': 'student-programs',
        'parent-input-level': 'major-voice',
        'educational-focus': 'balanced-approach'
      }
    },
    {
      id: 'kayce-hawkins',
      name: 'Kayce Hawkins',
      district: 'District 2',
      position: 'current',
      background: 'Former teacher, entrepreneur, mother of 3, 18 years in Hernando County.',
      positions: {
        'safety-priority': 'mental-health',
        'discipline-approach': 'restorative-justice',
        'teacher-shortage': 'improve-conditions',
        'support-staff-priority': 'improve-training',
        'ese-support': 'train-existing',
        'overcrowding-solution': 'build-immediately',
        'budget-approach': 'increase-for-needs',
        'budget-priority': 'teacher-salaries',
        'parent-input-level': 'regular-consultation',
        'educational-focus': 'stem-focused'
      }
    },
    {
      id: 'mark-cioffi',
      name: 'Mark Evan Cioffi',
      district: 'District 4',
      position: 'candidate',
      background: 'Retired USAF pilot, Delta Airlines captain, PhD in Business Administration, 67 years old.',
      positions: {
        'safety-priority': 'security-personnel',
        'discipline-approach': 'zero-tolerance',
        'teacher-shortage': 'raise-salaries',
        'support-staff-priority': 'raise-wages',
        'ese-support': 'specialized-facilities',
        'overcrowding-solution': 'build-immediately',
        'budget-approach': 'cut-admin-costs',
        'budget-priority': 'building-construction',
        'parent-input-level': 'professional-judgment',
        'educational-focus': 'vocational-technical'
      }
    },
    {
      id: 'susan-duval',
      name: 'Susan Duval',
      district: 'District 5',
      position: 'current',
      background: 'Veteran school board member since 2014, 40+ years in Hernando County Schools.',
      positions: {
        'safety-priority': 'crisis-communication',
        'discipline-approach': 'administrator-involvement',
        'teacher-shortage': 'improve-conditions',
        'support-staff-priority': 'retention-focus',
        'ese-support': 'hire-certified-teachers',
        'overcrowding-solution': 'redistricting',
        'budget-approach': 'maintain-efficiency',
        'budget-priority': 'teacher-salaries',
        'parent-input-level': 'regular-consultation',
        'educational-focus': 'college-prep'
      }
    },
    {
      id: 'mark-johnson',
      name: 'Mark Johnson',
      district: 'District 1',
      position: 'current',
      background: 'Previous board member 2014-2018, Masters in Public Administration, focused on vocational training.',
      positions: {
        'safety-priority': 'mental-health',
        'discipline-approach': 'teacher-autonomy',
        'teacher-shortage': 'bonuses-incentives',
        'support-staff-priority': 'raise-wages',
        'ese-support': 'train-existing',
        'overcrowding-solution': 'support-charter-expansion',
        'budget-approach': 'alternative-funding',
        'budget-priority': 'transportation-safety',
        'parent-input-level': 'individual-focus',
        'educational-focus': 'vocational-technical'
      }
    }
  ]
};