// ─────────────────────────────────────────────────────────────
//  Portfolio data — single source of truth
//  To add a new project: add an object to PROJECTS array.
//  To add a new service: add an object to SERVICES array.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Pooja Nandhini S.M',
  role: 'Freelance Web Designer & Developer',
  tagline: 'Websites That Look Sharp and Work Hard',
  heroHeadline: 'Websites That Look Sharp and Work Hard',
  heroSubline:
    'I design and build fast, responsive, SEO-ready websites for startups and small businesses, from first wireframe to final launch.',
  heroCta: 'Start a project',
  heroCtaSecondary: 'See my work',
  email: 'pixelperfectdesignsindia@gmail.com',
  whatsapp: 'https://wa.me/91XXXXXXXXXX', // Replace with real number
  instagram: 'https://instagram.com/',     // Replace
  linkedin: 'https://linkedin.com/in/',    // Replace
  github: 'https://github.com/',           // Replace
  location: 'India — available worldwide, remote',
  available: true,
}

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'greencircle',
    title: 'GreenCircle: Community Gardening Platform',
    category: 'Web Development',
    tags: ['React.js', 'Firebase', 'JavaScript'],
    tagline: 'A web app where gardeners share plants, exchange knowledge and join community activities.',
    coverImage: '/greencircle.jpg',
    accentColor: '#3d6b43',
    // Case study fields
    problem:
      'Plant lovers had no dedicated space to share plants, swap growing tips, or discover local community activities. General social platforms felt impersonal and unfocused.',
    myRole:
      'Full-stack developer — designed the data architecture, built all screens in React and Firebase, and handled deployment.',
    process: [
      'Mapped the core user flows: posting a plant, browsing the community feed, joining an activity.',
      'Set up Firestore collections for users, plants and events with real-time listener hooks.',
      'Built a card-based feed with image upload, comments and a simple activity calendar.',
      'Iterated on the plant exchange flow to make offering and requesting plants feel friction-free.',
    ],
    result:
      'A working web application where registered users can share plants, post gardening knowledge and join community activities — built and deployed end-to-end.',
    stack: ['React.js', 'Firebase (Firestore + Auth)', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/', // Replace with real link
    demo: null,
  },
  {
    id: 'placement-portal',
    title: 'Placement Portal',
    category: 'Web Development',
    tags: ['Flask', 'Python', 'SQLite'],
    tagline: 'A full-stack platform that centralizes job postings, applications and placement tracking for students, recruiters and admins.',
    coverImage: '/placement-portal.jpg',
    accentColor: '#c8a020',
    problem:
      'Campus recruitment ran across spreadsheets, email chains and phone calls. Students missed postings, recruiters lost track of applications, and administrators had no way to audit the process.',
    myRole:
      'Full-stack developer — designed the relational schema, built the Flask backend, and created separate dashboards for three user roles.',
    process: [
      'Mapped three distinct user journeys: students browsing and applying, recruiters posting and shortlisting, admins managing the whole pipeline.',
      'Designed a single SQLite schema that could power all three views without duplicating data.',
      'Built role-based authentication so each user type only sees what is relevant to them.',
      'Added a dashboard with filterable applicant lists, status badges and a basic interview scheduler.',
    ],
    result:
      'A self-contained recruitment system: students apply online, recruiters manage candidates from posting to offer, and admins have a single view of the entire pipeline.',
    stack: ['Flask', 'Python', 'SQLite', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/', // Replace with real link
    demo: null,
  },
  {
    id: 'qr-attendance',
    title: 'QR Attendance System',
    category: 'Web Development',
    tags: ['React.js', 'Firebase'],
    tagline: 'A secure QR-based workflow for generating, scanning and recording attendance digitally.',
    coverImage: '/qr-attendance.jpg',
    accentColor: '#2a7fa0',
    problem:
      'Manual roll call wasted class time and was easy to game. Faculty needed a faster, tamper-resistant way to record attendance and produce reports.',
    myRole:
      'Full-stack developer — built the QR generation logic, real-time scan validation and the faculty reporting dashboard.',
    process: [
      'Designed time-bound QR codes that expire after each class window, making advance screenshots useless.',
      'Used Firebase real-time database so attendance updates appear on the faculty screen the moment a student scans.',
      'Built a faculty dashboard showing a live attendance list per session with export-ready reports.',
      'Added an admin view to audit historical data by date, class or student.',
    ],
    result:
      'A deployed system that removes paper registers entirely, prevents proxy attendance through time-expiry logic, and generates exportable attendance reports on demand.',
    stack: ['React.js', 'Firebase (Realtime DB + Auth)', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/', // Replace with real link
    demo: null,
  },
  {
    id: 'gloco',
    title: '',
    category: '',
    tags: [],
    tagline: '',
    coverImage: '/gloco.jpg',
    accentColor: '#b5673a',
    problem: '',
    myRole: '',
    process: [],
    result: '',
    stack: [],
    github: null,
    demo: null,
  },
]

// ─── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'web-design', icon: 'pen-tool', title: 'Web Design', group: 'Design',
    forWho: 'Businesses looking for clear, user-friendly website designs.',
    included: ['Mobile-first layouts', 'UI designs', 'Reviewed before development'],
    deliverable: 'A reviewed website design ready for development.',
  },
  {
    id: 'web-development', icon: 'monitor', title: 'Web Development', group: 'Build',
    forWho: 'Businesses that need responsive websites and online stores.',
    included: ['React or Shopify builds', 'SEO-ready websites', 'Landing pages and online stores'],
    deliverable: 'A responsive, SEO-ready website.',
  },
  {
    id: 'web-applications', icon: 'monitor', title: 'Web Applications', group: 'Build',
    forWho: 'Businesses that need a full-stack web application.',
    included: ['Full-stack apps', 'Database integration', 'User accounts'],
    deliverable: 'A full-stack app with a database and user accounts.',
  },
  {
    id: 'social-media',
    icon: 'chart',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
  {
    id: 'digital-marketing',
    icon: 'megaphone',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
  {
    id: 'graphic-design',
    icon: 'pen-tool',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
  {
    id: 'web-development',
    icon: 'monitor',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
  {
    id: 'app-development',
    icon: 'smartphone',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
  {
    id: 'video-editing',
    icon: 'film',
    title: '',
    group: '',
    forWho: '',
    included: [],
    deliverable: '',
  },
]

// ─── Process ──────────────────────────────────────────────────
export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We start with a short brief call. I ask about your business, your audience and what you actually need — not what you think you need. You leave knowing exactly what I will deliver and when.',
    clientGets: 'A written project brief and a clear scope of work.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'I put together a project plan with milestones and a timeline. No surprises. If your project spans more than one service, I show you how they connect so everything ships together.',
    clientGets: 'A project plan with milestone dates and review checkpoints.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'I build. You see progress in real time through shared files and staging links. I work in focused sprints and flag any questions early rather than at the end.',
    clientGets: 'A staging link or shared design file to review at each milestone.',
  },
  {
    step: '04',
    title: 'Refine',
    description:
      'Two rounds of revisions are included in every project. I give you a clear feedback form so the process is fast and nothing gets lost in long email threads.',
    clientGets: 'Two structured revision rounds with a feedback form.',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'I handle deployment, go-live checks and a handover guide for your new website.',
    clientGets: 'Deployment and a handover guide.',
  },
]

// ─── Who I work with ──────────────────────────────────────────
export const WHO_I_WORK_WITH = [
  {
    title: 'Early-stage startups',
    desc: 'You have an idea and need a clear, professional website to bring it to life.',
  },
  {
    title: 'Small businesses going online',
    desc: 'Your business needs a responsive website to reach customers online.',
  },
  {
    title: 'Local brands ready to grow',
    desc: 'You need a polished website that presents your business clearly.',
  },
  {
    title: 'Creators building a brand',
    desc: '',
  },
]

// ─── About ────────────────────────────────────────────────────
export const ABOUT = {
  intro:
    "I'm Pooja Nandhini S.M, a web developer and designer with 2 years of hands-on experience, having worked on several client projects across design and development.",
  body:
    'I’m strong at both sides of the craft: designing clean, user-friendly interfaces and building them into fast, responsive, reliable websites. With me, you get one point of contact, one consistent look, and a finished product delivered end to end.',
  howIWork:
    'Two revision rounds are included, and every project ends with deployment and a handover guide.',
  tools: [
    'React', 'Shopify', 'Responsive Design', 'Landing Pages', 'E-Commerce',
  ],
  portrait: '/portrait.jpg', // Supply your own photo
}

// ─── Nav ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]
