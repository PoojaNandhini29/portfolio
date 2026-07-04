// ─────────────────────────────────────────────────────────────
//  Portfolio content — single source of truth
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Pooja Nandhini',
  roles: [
    'Full Stack Software Engineer',
    'AI Solutions Developer',
    'Digital Solutions Consultant',
    'Freelance Developer',
  ],
  headline: 'Full Stack Software Engineer | AI Solutions Developer | Digital Solutions Consultant',
  subtitle:
    'I build scalable web applications, AI-powered solutions, business automation systems, and modern digital experiences that help businesses streamline operations and accelerate growth.',
  email: 'pixelperfectdesignsindia@gmail.com',
  location: 'India · Available Worldwide (Remote)',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resume: '/resume.pdf',
}

export const HIGHLIGHTS = [
  { label: '1+ Years Experience', icon: 'briefcase' },
  { label: 'Multiple Real-world Projects', icon: 'rocket' },
  { label: 'Full Stack Developer', icon: 'layers' },
  { label: 'Freelance Available', icon: 'sparkles' },
]

export const STATS = [
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '30+', label: 'Technologies' },
  { value: '100%', label: 'Client Focused' },
]

export const ABOUT = [
  "Hello! I'm Pooja Nandhini, a Full Stack Software Engineer passionate about developing software solutions that solve real-world business challenges.",
  'I specialize in designing and developing complete web applications, business management systems, AI-powered solutions, and automation platforms using modern technologies.',
  'My expertise spans frontend development, backend development, database design, REST APIs, UI/UX, AI integrations, SEO optimization, and cloud deployment.',
  'I enjoy turning ideas into scalable, user-friendly applications that improve productivity and create meaningful impact. I continuously learn emerging technologies and enjoy solving complex engineering problems while maintaining clean architecture and best coding practices.',
]

export const SKILLS = [
  {
    title: 'Programming Languages',
    icon: 'terminal',
    items: ['Python', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'code',
    items: ['React', 'Bootstrap', 'Tailwind CSS', 'Flutter (Basics)'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Flask', 'Laravel', 'REST API', 'Authentication', 'MVC Architecture'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'AI & Automation',
    icon: 'brain',
    items: ['OpenAI API', 'Chatbot Development', 'Voiceflow', 'Botpress'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Canva'],
  },
  {
    title: 'Deployment',
    icon: 'rocket',
    items: ['Vercel', 'Netlify'],
  },
  {
    title: 'SEO & Digital',
    icon: 'globe',
    items: ['SEO', 'Google Business Profile Optimization', 'Performance Optimization'],
  },
]

export const PROFICIENCY = [
  { label: 'Backend (Flask · Laravel)', value: 92 },
  { label: 'Frontend (React · Tailwind)', value: 88 },
  { label: 'Database & APIs', value: 90 },
  { label: 'AI Integration & Automation', value: 85 },
]

export const PROJECTS = [
  {
    id: 'placement-portal',
    title: 'Placement Portal',
    badge: 'Flagship Project',
    category: 'Python',
    accent: '#6366f1',
    tagline: 'Recruitment & placement management platform',
    description:
      'A comprehensive recruitment and placement management platform developed using Flask to simplify hiring workflows between candidates, recruiters, employers, and administrators. The platform offers centralized job management, secure authentication, resume management, recruiter dashboards, analytics, and administrative controls.',
    features: [
      'Candidate Registration',
      'Secure Login',
      'Resume Upload',
      'Job Search',
      'Job Applications',
      'Recruiter Dashboard',
      'Employer Dashboard',
      'Admin Dashboard',
      'Job Posting',
      'Candidate Shortlisting',
      'Interview Scheduling',
      'Email Notifications',
      'Role-Based Authentication',
      'Analytics Dashboard',
      'Profile Management',
    ],
    stack: ['Flask', 'Python', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
    highlights: [
      'Authentication System',
      'Resume Management',
      'Dashboard Analytics',
      'Role Based Access',
      'Responsive Design',
    ],
    challenges:
      'Designing a secure role-based access system that cleanly separates candidate, recruiter, employer, and admin workflows while keeping a single, cohesive data model and reusable dashboard analytics.',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 'greencircle',
    title: 'GreenCircle',
    category: 'PHP',
    accent: '#10b981',
    tagline: 'Community-driven environmental platform',
    description:
      'GreenCircle is a community-driven environmental platform connecting gardeners, plant enthusiasts, nurseries, and eco-conscious individuals. It encourages users to share gardening knowledge, exchange plants, participate in environmental initiatives, and promote sustainable living.',
    features: [
      'User Registration',
      'Gardening Community Feed',
      'Plant Sharing',
      'Plant Marketplace',
      'Nursery Listings',
      'Gardening Tips',
      'Discussion Forums',
      'Event Management',
      'Community Groups',
      'Plant Care Guides',
      'Image Upload',
      'Search & Filters',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    highlights: ['Community Platform', 'Sustainable Living', 'User Interaction', 'Social Features'],
    challenges:
      'Architecting a social feed with marketplace, forums, and event management under one Laravel MVC codebase while keeping content moderation and image handling performant.',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 'qr-attendance',
    title: 'QR Code Attendance Management System',
    category: 'Python',
    accent: '#06b6d4',
    tagline: 'Automated attendance via dynamic QR codes',
    description:
      'A smart attendance management application that automates attendance tracking using dynamically generated QR codes. Designed for educational institutions and organizations to reduce manual work and improve attendance accuracy.',
    features: [
      'QR Code Generation',
      'QR Code Scanning',
      'Student Registration',
      'Faculty Dashboard',
      'Attendance Reports',
      'Daily Logs',
      'Real-time Verification',
      'Secure Authentication',
      'Export Reports',
      'Attendance Analytics',
    ],
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    highlights: ['QR Authentication', 'Attendance Automation', 'Report Generation', 'Dashboard'],
    challenges:
      'Generating time-bound, tamper-resistant QR codes and validating scans in real time to prevent proxy attendance while producing exportable analytics.',
    github: 'https://github.com/',
    demo: '#',
  },
  {
    id: 'temp-job-booking',
    title: 'Temporary Job Booking Portal',
    category: 'PHP',
    accent: '#8b5cf6',
    tagline: 'Gig-economy platform for short-term work',
    description:
      'A web application designed to connect employers with temporary workers for short-term jobs. The platform enables businesses to post temporary job opportunities while allowing workers to discover and apply for available shifts based on their skills and availability.',
    features: [
      'Employer Registration',
      'Worker Registration',
      'Temporary Job Posting',
      'Job Booking',
      'Booking Confirmation',
      'Worker Profiles',
      'Employer Dashboard',
      'Notifications',
      'Reviews & Ratings',
      'Availability Management',
      'Payment Ready Architecture',
    ],
    stack: ['Laravel', 'PHP', 'Bootstrap', 'JavaScript', 'MySQL'],
    highlights: ['Gig Economy Platform', 'Booking Workflow', 'User Management', 'Responsive Interface'],
    challenges:
      'Modelling a real-time availability and booking workflow with reviews and a payment-ready architecture, avoiding double-bookings across concurrent employer requests.',
    github: 'https://github.com/',
    demo: '#',
  },
]

export const PROJECT_FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'Python', label: 'Python / Flask' },
  { key: 'PHP', label: 'Laravel / PHP' },
]

export const SERVICES = [
  { title: 'Full Stack Web Development', icon: 'layers', desc: 'End-to-end web apps from database to polished UI.' },
  { title: 'Custom Web Applications', icon: 'code', desc: 'Tailored business systems built around your workflow.' },
  { title: 'AI Chatbot Development', icon: 'bot', desc: 'Conversational assistants with OpenAI, Voiceflow & Botpress.' },
  { title: 'Business Automation Solutions', icon: 'zap', desc: 'Automate repetitive operations and save hours weekly.' },
  { title: 'Mobile App Development', icon: 'smartphone', desc: 'Cross-platform mobile experiences with Flutter.' },
  { title: 'REST API Development', icon: 'server', desc: 'Secure, documented and scalable API layers.' },
  { title: 'SEO Optimization', icon: 'search', desc: 'Rank higher with technical and on-page SEO.' },
  { title: 'Google Business Profile Setup', icon: 'globe', desc: 'Local visibility and optimized business listings.' },
  { title: 'UI/UX Design', icon: 'palette', desc: 'Clean, intuitive, user-centered interface design.' },
  { title: 'Website Maintenance', icon: 'wrench', desc: 'Ongoing updates, monitoring and improvements.' },
  { title: 'Deployment & Hosting', icon: 'rocket', desc: 'Reliable deployment on Vercel, Netlify & cloud.' },
  { title: 'Database Design', icon: 'database', desc: 'Well-structured, normalized and performant schemas.' },
]

export const WHY_ME = [
  'Clean and Maintainable Code',
  'Scalable Software Architecture',
  'Responsive Design',
  'SEO Friendly Development',
  'Strong Problem Solving',
  'User-Centered Design',
  'Continuous Learning',
  'Timely Project Delivery',
]

export const EDUCATION = [
  {
    period: '2021 — 2025',
    title: "Bachelor's Degree in Computer Science / Information Technology",
    org: 'Computer Science & Engineering',
    desc: 'Focused on software engineering, data structures, databases, web technologies and building real-world full stack projects.',
  },
  {
    period: 'Ongoing',
    title: 'Freelance Full Stack Engineer & Consultant',
    org: 'Self-employed',
    desc: 'Delivering web applications, AI solutions and automation systems for businesses while continuously learning emerging technologies.',
  },
]

export const CERTIFICATIONS = [
  { title: 'Python Programming', issuer: 'Certification', icon: 'terminal' },
  { title: 'Flask Development', issuer: 'Certification', icon: 'server' },
  { title: 'Laravel Development', issuer: 'Certification', icon: 'code' },
  { title: 'AI Fundamentals', issuer: 'Certification', icon: 'brain' },
  { title: 'React', issuer: 'Certification', icon: 'code' },
  { title: 'SEO', issuer: 'Certification', icon: 'search' },
  { title: 'Git & GitHub', issuer: 'Certification', icon: 'git' },
]

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
