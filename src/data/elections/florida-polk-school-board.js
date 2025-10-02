export const ELECTION_CONFIG_SCHOOL_BOARD = {
  id: 'florida-polk-school-board',
  state: 'florida',
  county: 'polk',
  office: 'school-board',
  title: 'Polk County School Board',
  description: 'Find school board members who align with your priorities for Polk County Public Schools - one of Florida\'s largest districts serving 109,558 students across 168 schools',
  electionDate: '2026-08-18',
  questions: [
    {
      id: 'reading-proficiency',
      category: 'academics',
      text: 'Polk County has a significant reading challenge, with 60% of 10th graders falling short of proficiency. What strategies should be prioritized to improve reading outcomes?',
      options: [
        { value: 'phonics-intensive', label: 'Intensive phonics programs starting in early grades' },
        { value: 'reading-specialists', label: 'More reading specialists and intervention teachers' },
        { value: 'extended-time', label: 'Extended learning time and summer reading programs' },
        { value: 'parent-engagement', label: 'Family literacy programs and parent engagement' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'school-choice',
      category: 'policy',
      text: 'With 30,000-50,000 new families moving to Polk annually, how should the district balance school choice expansion with traditional public schools?',
      options: [
        { value: 'expand-choice', label: 'Aggressively expand charter schools and choice programs' },
        { value: 'destination-schools', label: 'Make every traditional school a "destination school" worth choosing' },
        { value: 'balanced-portfolio', label: 'Balanced approach with both traditional and choice options' },
        { value: 'traditional-focus', label: 'Focus resources on improving existing traditional schools' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'book-policy',
      category: 'policy',
      text: 'Polk County\'s book challenge process has been used as a model statewide. What approach to library materials do you prefer?',
      options: [
        { value: 'current-process', label: 'Keep current transparent review process with parent opt-out' },
        { value: 'stricter-review', label: 'Implement stricter pre-screening of all library materials' },
        { value: 'more-access', label: 'Reduce restrictions and trust librarian professional judgment' },
        { value: 'age-appropriate', label: 'Focus on age-appropriate placement rather than removal' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'teacher-pay',
      category: 'staffing',
      text: 'How should the district prioritize teacher compensation to recruit and retain talent in a competitive market?',
      options: [
        { value: 'veteran-raises', label: 'Significant raises for veteran teachers with 10+ years' },
        { value: 'starting-salary', label: 'Competitive starting salaries to attract new teachers' },
        { value: 'performance-based', label: 'Performance-based bonuses for high-achieving teachers' },
        { value: 'across-board', label: 'Across-the-board raises for all instructional staff' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'mental-health',
      category: 'student-support',
      text: 'With over 50% of students missing 10+ days and growing mental health concerns, what should be the priority?',
      options: [
        { value: 'counselors', label: 'More counselors and mental health professionals in schools' },
        { value: 'attendance-programs', label: 'Targeted attendance intervention and family outreach' },
        { value: 'community-partnerships', label: 'Partner with community mental health providers' },
        { value: 'prevention-curriculum', label: 'School-wide social-emotional learning curriculum' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'vocational-programs',
      category: 'career-readiness',
      text: 'Polk Career Connect recently graduated its first class. How should workforce development expand?',
      options: [
        { value: 'expand-career-connect', label: 'Rapid expansion of Career Connect to all high schools' },
        { value: 'industry-partnerships', label: 'More partnerships with local employers for apprenticeships' },
        { value: 'career-academies', label: 'Specialized career academies in high-demand fields' },
        { value: 'dual-enrollment', label: 'Expand dual enrollment for college and career credentials' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'infrastructure',
      category: 'facilities',
      text: 'With explosive population growth requiring new schools, how should facilities be prioritized?',
      options: [
        { value: 'new-construction', label: 'Prioritize new school construction in growth areas' },
        { value: 'renovate-existing', label: 'Renovate and upgrade aging facilities first' },
        { value: 'balanced-approach', label: 'Balance new construction with existing school needs' },
        { value: 'modular-flexible', label: 'Use modular buildings for flexibility with growth' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'transparency',
      category: 'governance',
      text: 'The district dropped from B to C grade in 2022. How should the board increase accountability?',
      options: [
        { value: 'public-dashboards', label: 'Real-time public dashboards showing academic progress' },
        { value: 'community-forums', label: 'Regular community forums on district performance' },
        { value: 'superintendent-goals', label: 'Clear superintendent goals tied to academic outcomes' },
        { value: 'budget-transparency', label: 'Detailed budget transparency and spending reports' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'destination-schools',
      category: 'innovation',
      text: 'Chair Wyatt\'s "Destination Schools" initiative aims to make every school a choice. Do you support school-based budgeting?',
      options: [
        { value: 'full-autonomy', label: 'Give principals significant budget autonomy for their schools' },
        { value: 'guided-flexibility', label: 'Guided flexibility within district parameters' },
        { value: 'centralized-control', label: 'Maintain centralized budget control for equity' },
        { value: 'pilot-program', label: 'Pilot program at select schools before expansion' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'district-grade',
      category: 'academics',
      text: 'What timeline and approach should the district take to return to a B or A state grade?',
      options: [
        { value: 'aggressive-2year', label: 'Aggressive 2-year plan with major interventions' },
        { value: 'steady-improvement', label: 'Steady year-over-year improvement without disruption' },
        { value: 'focus-foundations', label: 'Focus on foundational skills before worrying about grade' },
        { value: 'holistic-metrics', label: 'Advocate for more holistic metrics beyond test scores' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'william-allen',
      name: 'William Allen',
      district: 'District 1',
      position: 'current',
      background: 'Re-elected August 2024. Tenured faculty member at Florida Southern College with 20 years of teaching experience in higher education. First term on school board.',
      positions: {
        'reading-proficiency': 'phonics-intensive',
        'school-choice': 'balanced-portfolio',
        'book-policy': 'current-process',
        'teacher-pay': 'veteran-raises',
        'mental-health': 'counselors',
        'vocational-programs': 'dual-enrollment',
        'infrastructure': 'balanced-approach',
        'transparency': 'superintendent-goals',
        'destination-schools': 'guided-flexibility',
        'district-grade': 'steady-improvement'
      }
    },
    {
      id: 'travis-keyes',
      name: 'Travis L. Keyes',
      district: 'District 2',
      position: 'current',
      background: 'Elected August 2024, defeating Marcus Wright Jr. Vice President at SouthState Bank. Former Certified General Contractor. Product of Polk schools. Served on Audit & Finance Committee (Chair 2021-2024) and Superintendent Search Committee. Focus: equal access to education, safe schools, fiscal accountability.',
      positions: {
        'reading-proficiency': 'phonics-intensive',
        'school-choice': 'expand-choice',
        'book-policy': 'current-process',
        'teacher-pay': 'performance-based',
        'mental-health': 'community-partnerships',
        'vocational-programs': 'expand-career-connect',
        'infrastructure': 'new-construction',
        'transparency': 'budget-transparency',
        'destination-schools': 'full-autonomy',
        'district-grade': 'aggressive-2year'
      }
    },
    {
      id: 'rick-nolte',
      name: 'Rick Nolte',
      district: 'District 3',
      position: 'current',
      background: 'Elected August 2022, defeating incumbent Sarah Fortney with 50.97% of vote. Only local candidate endorsed by Gov. Ron DeSantis. Conservative focused on parental rights and education standards. Affiliated with County Citizens Defending Freedom.',
      positions: {
        'reading-proficiency': 'phonics-intensive',
        'school-choice': 'expand-choice',
        'book-policy': 'stricter-review',
        'teacher-pay': 'performance-based',
        'mental-health': 'prevention-curriculum',
        'vocational-programs': 'industry-partnerships',
        'infrastructure': 'balanced-approach',
        'transparency': 'public-dashboards',
        'destination-schools': 'guided-flexibility',
        'district-grade': 'aggressive-2year'
      }
    },
    {
      id: 'sara-wyatt',
      name: 'Sara Beth Reynolds Wyatt',
      district: 'District 4',
      position: 'current',
      background: 'Re-elected August 2024, defeating Rebekah Ricks. Current Board Chair (unanimously re-elected). Third term since 2016 (elected at age 23). Product of Polk schools. Nonprofit executive. Creator of "Destination Schools" initiative. Endorsed by BusinessVoice, Polk Education Association, Sheriff Grady Judd, Florida Education Association.',
      positions: {
        'reading-proficiency': 'reading-specialists',
        'school-choice': 'destination-schools',
        'book-policy': 'age-appropriate',
        'teacher-pay': 'across-board',
        'mental-health': 'counselors',
        'vocational-programs': 'career-academies',
        'infrastructure': 'balanced-approach',
        'transparency': 'community-forums',
        'destination-schools': 'full-autonomy',
        'district-grade': 'steady-improvement'
      }
    },
    {
      id: 'kay-fields',
      name: 'Kay Fields',
      district: 'District 5',
      position: 'current',
      background: 'Re-elected August 2022 to sixth term with 76% of vote. Longest-serving member with 20+ years experience. Defeated Terry Clark. Former chair. Deep institutional knowledge of district operations.',
      positions: {
        'reading-proficiency': 'reading-specialists',
        'school-choice': 'balanced-portfolio',
        'book-policy': 'age-appropriate',
        'teacher-pay': 'veteran-raises',
        'mental-health': 'counselors',
        'vocational-programs': 'dual-enrollment',
        'infrastructure': 'balanced-approach',
        'transparency': 'superintendent-goals',
        'destination-schools': 'guided-flexibility',
        'district-grade': 'steady-improvement'
      }
    },
    {
      id: 'justin-sharpless',
      name: 'Justin Sharpless',
      district: 'District 6',
      position: 'current',
      background: 'Elected August 2022 with 51.39%, defeating Sara Jones. Agriculture professor at Warner University. Lake Wales native from teaching family. UF graduate. Campaign: "Sharpie for Students." While he signed DeSantis pledge, focused on student issues over culture wars. Endorsed by Sheriff Judd, Business Voice, Republican Party, Builders Association.',
      positions: {
        'reading-proficiency': 'phonics-intensive',
        'school-choice': 'balanced-portfolio',
        'book-policy': 'current-process',
        'teacher-pay': 'performance-based',
        'mental-health': 'community-partnerships',
        'vocational-programs': 'industry-partnerships',
        'infrastructure': 'new-construction',
        'transparency': 'budget-transparency',
        'destination-schools': 'pilot-program',
        'district-grade': 'focus-foundations'
      }
    },
    {
      id: 'lisa-miller',
      name: 'Lisa Bone Miller',
      district: 'District 7',
      position: 'current',
      background: 'Re-elected November 2022 runoff, defeating Jill Sessions after 42.43% in primary. First elected 2017. Affiliated with MillShire Realty. Mother of 11-year-old daughter and 20-year-old profoundly autistic son, providing personal insight into special education. Champion of district efficiency review and family-school collaboration.',
      positions: {
        'reading-proficiency': 'parent-engagement',
        'school-choice': 'destination-schools',
        'book-policy': 'age-appropriate',
        'teacher-pay': 'across-board',
        'mental-health': 'counselors',
        'vocational-programs': 'dual-enrollment',
        'infrastructure': 'balanced-approach',
        'transparency': 'budget-transparency',
        'destination-schools': 'guided-flexibility',
        'district-grade': 'steady-improvement'
      }
    }
  ]
};