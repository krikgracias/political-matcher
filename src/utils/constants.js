export const QUESTIONS = [
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
];