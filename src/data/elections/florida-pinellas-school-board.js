export const ELECTION_CONFIG_SCHOOL_BOARD = {
  id: 'florida-pinellas-school-board',
  state: 'florida',
  county: 'pinellas',
  office: 'school-board',
  title: 'Pinellas County School Board',
  description: 'Find school board members who align with your priorities for Pinellas County Schools - Florida\'s 7th largest district serving 93,702 students across 154 schools',
  electionDate: '2026-08-18',
  questions: [
    {
      id: 'achievement-gap',
      category: 'equity',
      text: 'Pinellas County has a persistent achievement gap between Black students and their peers. How should the "Bridging the Gap" plan be strengthened?',
      options: [
        { value: 'expand-current', label: 'Expand current programs with more funding and resources' },
        { value: 'early-intervention', label: 'Focus on early intervention in K-2 grades' },
        { value: 'community-partnerships', label: 'Deeper community partnerships and family engagement' },
        { value: 'structural-reform', label: 'Structural reforms to address systemic inequities' }
      ],
      order: 1,
      active: true
    },
    {
      id: 'board-focus',
      category: 'governance',
      text: 'The 2024 election centered on whether the board should focus on culture war issues or academic achievement. What should be the board\'s priority?',
      options: [
        { value: 'academics-only', label: 'Focus exclusively on academic achievement and operations' },
        { value: 'parental-rights', label: 'Balance academics with strong parental rights advocacy' },
        { value: 'inclusive-community', label: 'Create inclusive environment while pursuing excellence' },
        { value: 'transparency-accountability', label: 'Transparency and accountability across all areas' }
      ],
      order: 2,
      active: true
    },
    {
      id: 'superintendent',
      category: 'leadership',
      text: 'Superintendent Kevin Hendrick has broad support from the current board. How should the board work with district leadership?',
      options: [
        { value: 'strong-support', label: 'Continue strong support and let superintendent lead operations' },
        { value: 'more-oversight', label: 'Maintain support but increase board oversight' },
        { value: 'collaborative', label: 'Collaborative partnership with clear roles' },
        { value: 'evaluate-direction', label: 'Evaluate direction and consider changes if needed' }
      ],
      order: 3,
      active: true
    },
    {
      id: 'teacher-compensation',
      category: 'staffing',
      text: 'A property tax referendum passed in November 2024 to fund teacher and staff bonuses. How should teacher pay be addressed going forward?',
      options: [
        { value: 'competitive-market', label: 'Make salaries competitive with Tampa Bay market rates' },
        { value: 'performance-based', label: 'Performance-based pay with merit bonuses' },
        { value: 'experience-focused', label: 'Focus on rewarding veteran teachers and retention' },
        { value: 'comprehensive-package', label: 'Comprehensive compensation including benefits and bonuses' }
      ],
      order: 4,
      active: true
    },
    {
      id: 'curriculum-transparency',
      category: 'curriculum',
      text: 'How should the district handle curriculum transparency and parental involvement in educational decisions?',
      options: [
        { value: 'full-transparency', label: 'Maximum transparency with all materials easily accessible online' },
        { value: 'professional-trust', label: 'Trust professional educators with appropriate parent communication' },
        { value: 'parent-review', label: 'Parent review committees for curriculum and materials' },
        { value: 'balanced-approach', label: 'Balanced approach with transparency and professional autonomy' }
      ],
      order: 5,
      active: true
    },
    {
      id: 'school-choice',
      category: 'programs',
      text: 'Pinellas has strong magnet programs and career academies. How should school choice be expanded or maintained?',
      options: [
        { value: 'expand-magnets', label: 'Expand magnet programs and specialized academies' },
        { value: 'strengthen-traditional', label: 'Strengthen all traditional neighborhood schools first' },
        { value: 'charter-growth', label: 'Support charter school growth for more options' },
        { value: 'balanced-portfolio', label: 'Balanced portfolio approach with diverse options' }
      ],
      order: 6,
      active: true
    },
    {
      id: 'mental-health',
      category: 'student-support',
      text: 'How should the district address student mental health and behavioral challenges post-pandemic?',
      options: [
        { value: 'more-counselors', label: 'Hire more counselors and mental health professionals' },
        { value: 'restorative-practices', label: 'Implement restorative justice practices' },
        { value: 'discipline-focus', label: 'Focus on clear discipline policies and consequences' },
        { value: 'comprehensive-support', label: 'Comprehensive support including counseling and academics' }
      ],
      order: 7,
      active: true
    },
    {
      id: 'technology',
      category: 'innovation',
      text: 'The district uses referendum funds for digital learning. How should technology be integrated in education?',
      options: [
        { value: 'accelerate-digital', label: 'Accelerate digital learning and 1:1 devices' },
        { value: 'balanced-approach', label: 'Balance technology with traditional instruction' },
        { value: 'ai-innovation', label: 'Embrace AI and cutting-edge educational technology' },
        { value: 'limit-screen-time', label: 'Limit screen time and focus on fundamentals' }
      ],
      order: 8,
      active: true
    },
    {
      id: 'literacy',
      category: 'academics',
      text: 'What approach should the district take to improve literacy outcomes and reading proficiency?',
      options: [
        { value: 'phonics-intensive', label: 'Science of reading with intensive phonics instruction' },
        { value: 'balanced-literacy', label: 'Balanced literacy approach with multiple strategies' },
        { value: 'early-intervention', label: 'Early intervention programs for struggling readers' },
        { value: 'comprehensive-plan', label: 'Comprehensive K-12 literacy plan with assessments' }
      ],
      order: 9,
      active: true
    },
    {
      id: 'workforce-pathways',
      category: 'career-readiness',
      text: 'How should the district expand workforce development and career pathways for students?',
      options: [
        { value: 'expand-technical', label: 'Expand technical programs and vocational training' },
        { value: 'industry-partnerships', label: 'Strengthen industry partnerships and apprenticeships' },
        { value: 'dual-enrollment', label: 'Focus on dual enrollment and college credit programs' },
        { value: 'balanced-pathways', label: 'Balanced pathways for both college and career' }
      ],
      order: 10,
      active: true
    }
  ],
  candidates: [
    {
      id: 'laura-hine',
      name: 'Laura Hine',
      district: 'District 1 At-Large',
      position: 'current',
      background: 'Current Board Chair. Re-elected August 2024, defeating DeSantis-backed Danielle Marolf by nearly 40 points. First elected 2020. U.S. Naval Academy graduate with degree in aerospace engineering. Focuses on student achievement, literacy, early education, workforce pathways, and technology. Created new three-year strategic plan and increased teacher salaries. Avoids culture war arguments, emphasizes "excellence and opportunity in every school for every child."',
      positions: {
        'achievement-gap': 'expand-current',
        'board-focus': 'academics-only',
        'superintendent': 'strong-support',
        'teacher-compensation': 'comprehensive-package',
        'curriculum-transparency': 'balanced-approach',
        'school-choice': 'balanced-portfolio',
        'mental-health': 'comprehensive-support',
        'technology': 'balanced-approach',
        'literacy': 'comprehensive-plan',
        'workforce-pathways': 'balanced-pathways'
      }
    },
    {
      id: 'lisa-cane',
      name: 'Lisa N. Cane',
      district: 'District 2 At-Large',
      position: 'current',
      background: 'Elected 2018. At-large representative serving entire county. Focused on district operations and student success.',
      positions: {
        'achievement-gap': 'community-partnerships',
        'board-focus': 'academics-only',
        'superintendent': 'collaborative',
        'teacher-compensation': 'competitive-market',
        'curriculum-transparency': 'professional-trust',
        'school-choice': 'strengthen-traditional',
        'mental-health': 'comprehensive-support',
        'technology': 'balanced-approach',
        'literacy': 'balanced-literacy',
        'workforce-pathways': 'balanced-pathways'
      }
    },
    {
      id: 'dawn-peters',
      name: 'Dawn M. Peters',
      district: 'District 3 At-Large',
      position: 'current',
      background: 'Elected 2022. Aligned with Moms for Liberty. Endorsed DeSantis-backed challengers Marolf, Picard, and Geier in 2024. Advocates for parental rights and conservative education priorities.',
      positions: {
        'achievement-gap': 'early-intervention',
        'board-focus': 'parental-rights',
        'superintendent': 'more-oversight',
        'teacher-compensation': 'performance-based',
        'curriculum-transparency': 'full-transparency',
        'school-choice': 'charter-growth',
        'mental-health': 'discipline-focus',
        'technology': 'limit-screen-time',
        'literacy': 'phonics-intensive',
        'workforce-pathways': 'expand-technical'
      }
    },
    {
      id: 'eileen-long',
      name: 'Eileen M. Long',
      district: 'District 4',
      position: 'current',
      background: 'Re-elected August 2024, defeating DeSantis-backed Erika Picard. Third term (since 2016). Seminole High graduate. USF degree in Special Education with certifications in Reading and ESOL. Teacher for 34 years (32 in Pinellas). Specialized in middle school, special needs, and dropout prevention. Endorsed by Pinellas Classroom Teachers Association. Tampa Bay Times called her "a sensible thinker who blends classroom experience with straightforward approach."',
      positions: {
        'achievement-gap': 'structural-reform',
        'board-focus': 'inclusive-community',
        'superintendent': 'strong-support',
        'teacher-compensation': 'experience-focused',
        'curriculum-transparency': 'professional-trust',
        'school-choice': 'strengthen-traditional',
        'mental-health': 'comprehensive-support',
        'technology': 'balanced-approach',
        'literacy': 'early-intervention',
        'workforce-pathways': 'balanced-pathways'
      }
    },
    {
      id: 'katie-blaxberg',
      name: 'Katie Blaxberg',
      district: 'District 5',
      position: 'current',
      background: 'Elected November 2024, defeating Moms for Liberty-backed Stacy Geier. Moderate Republican. Former legislative aide to Chris Latvala. BS in Biomedical Science from University of Florida. Mother of three. Endorsed by retiring board member Carol Cook, Sheriff Bob Gualtieri, and primary challenger Brad DeCorte. Supports school choice and parental involvement but opposes Moms for Liberty extremism. Campaign motto: "Make school board meetings boring again." Faced online harassment, trolling, and security threats during campaign.',
      positions: {
        'achievement-gap': 'expand-current',
        'board-focus': 'transparency-accountability',
        'superintendent': 'collaborative',
        'teacher-compensation': 'comprehensive-package',
        'curriculum-transparency': 'balanced-approach',
        'school-choice': 'balanced-portfolio',
        'mental-health': 'comprehensive-support',
        'technology': 'balanced-approach',
        'literacy': 'comprehensive-plan',
        'workforce-pathways': 'industry-partnerships'
      }
    },
    {
      id: 'stephanie-meyer',
      name: 'Stephanie Meyer',
      district: 'District 6',
      position: 'current',
      background: 'Elected 2022. Aligned with Moms for Liberty. Endorsed DeSantis-backed challengers in 2024. Advocates for conservative education policies and parental rights.',
      positions: {
        'achievement-gap': 'early-intervention',
        'board-focus': 'parental-rights',
        'superintendent': 'more-oversight',
        'teacher-compensation': 'performance-based',
        'curriculum-transparency': 'parent-review',
        'school-choice': 'charter-growth',
        'mental-health': 'discipline-focus',
        'technology': 'limit-screen-time',
        'literacy': 'phonics-intensive',
        'workforce-pathways': 'expand-technical'
      }
    },
    {
      id: 'caprice-edmond',
      name: 'Caprice Edmond',
      district: 'District 7',
      position: 'current',
      background: 'Current Vice Chairperson. Elected 2020 in special election. Represents District 7 single-member district. Focuses on student success and operational excellence.',
      positions: {
        'achievement-gap': 'community-partnerships',
        'board-focus': 'academics-only',
        'superintendent': 'collaborative',
        'teacher-compensation': 'competitive-market',
        'curriculum-transparency': 'balanced-approach',
        'school-choice': 'balanced-portfolio',
        'mental-health': 'comprehensive-support',
        'technology': 'balanced-approach',
        'literacy': 'comprehensive-plan',
        'workforce-pathways': 'balanced-pathways'
      }
    }
  ]
};