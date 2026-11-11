// ─────────────────────────────────────────────────────────────
//  Portfolio data — single source of truth
//  To add a new project: add an object to PROJECTS array.
//  To add a new service: add an object to SERVICES array.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Pooja Nandhini S.M',
  role: 'Freelance Web Designer & Developer',
  tagline: 'Clean websites for small businesses and startups that win customers.',
  heroHeadline: 'Clean websites for small businesses and startups that win customers.',
  heroSubline:
    'I handle both design and code, turning your ideas into fast, search-ready sites that work smoothly on every screen.',
  heroCta: 'Start a project',
  heroCtaSecondary: 'See my work',
  email: 'pixelperfectdesignsindia@gmail.com',
  whatsapp: 'https://wa.me/917358968480',
  instagram: 'https://www.instagram.com/elevate_by_pooja?utm_source=qr&igsh=MTV5aHczZHNoMjNxOA==',
  linkedin: 'https://www.linkedin.com/in/pooja-nandhini-97bab1351',
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
    tagline: 'A community web app where local plant lovers list plant cuttings, share knowledge, and join meetups.',
    coverImage: '/greencircle.jpg',
    accentColor: '#3d6b43',
    // Case study fields
    problem:
      'Local gardeners had no single place to exchange plant cuttings or share regional care advice without cluttered feeds.',
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
    demo: 'https://green-a050a.web.app/',
  },
  {
    id: 'food-store',
    title: 'Food Munch: Restaurant & Online Food Store',
    category: 'Web Development',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    tagline: 'A responsive food ordering web app featuring categorized menus, special promo deals, and delivery workflows.',
    coverImage: '/foodstore.jpg',
    accentColor: '#c8a020',
    problem:
      'The restaurant needed an appetizing digital storefront to showcase fresh menus, highlight offers, and simplify online ordering.',
    myRole:
      'Web developer — built the responsive UI, categorized menus, and deployed to Firebase.',
    process: [
      'Designed responsive menu layouts for starters, mains, and beverages.',
      'Built high-conversion promotional offer cards and customer proof sections.',
      'Optimized asset loading and mobile-first navigation across all screen sizes.',
      'Deployed on Firebase Hosting with fast load times.',
    ],
    result:
      'A deployed, mobile-first food ordering website that showcases menus and promotional campaigns.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/', // Replace with real link
    demo: 'https://food-store-5058e.web.app/',
  },
]

// ─── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'web-design', icon: 'pen-tool', title: 'Web Design', group: 'Design',
    forWho: 'Small businesses and startups needing intuitive, mobile-ready site designs.',
    included: ['Custom wireframes', 'Mobile-first UI design', 'Figma prototypes'],
    deliverable: 'Figma mockups & design system',
  },
  {
    id: 'web-development', icon: 'monitor', title: 'Web Development', group: 'Build',
    forWho: 'Businesses that need fast, responsive websites and landing pages.',
    included: ['React or Shopify builds', 'On-page SEO optimization', 'Live deployment'],
    deliverable: 'Production build & domain launch',
  },
  {
    id: 'web-applications', icon: 'monitor', title: 'Web Applications', group: 'Build',
    forWho: 'Founders who need custom tools with user logins and database workflows.',
    included: ['Full-stack apps', 'Database integration', 'Role-based dashboards'],
    deliverable: 'Auth, database & admin portal',
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
      'We begin with a brief call about your goals, audience, and essential features. You receive a written project brief and an agreed scope of work.',
    clientGets: 'A written project brief and an agreed scope of work.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'I map out site architecture, key pages, and target delivery dates. You receive a clear project schedule with milestones, review checkpoints, and clear next steps.',
    clientGets: 'A project schedule with milestone dates and review checkpoints.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'I design layouts and develop clean code. You receive private preview links and Figma boards to track progress in real time.',
    clientGets: 'Private preview links and Figma design boards.',
  },
  {
    step: '04',
    title: 'Refine',
    description:
      'We review the staging build together. You receive two structured revision rounds and a simple feedback sheet so every tweak gets handled quickly.',
    clientGets: 'Two structured revision rounds and a feedback tracking sheet.',
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'I run final domain, speed, and mobile checks before publishing. You receive a live website, all source files, and a simple handover guide.',
    clientGets: 'Live site deployment, source files, and a handover guide.',
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
    "I'm Pooja Nandhini S.M, with 2 years of hands-on experience delivering client projects. Instead of juggling a separate designer and programmer, you work directly with me.",
  body:
    'I create clean layouts and build them cleanly in React and Shopify, giving you direct communication, one cohesive style, and a site delivered on schedule.',
  howIWork:
    'Two revision rounds are included, and every project ends with live deployment and a handover guide.',
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
