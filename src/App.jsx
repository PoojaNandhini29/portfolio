/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import heroImage from './assets/poojanandhini.jpg';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChevronRight,
  Code2,
  Globe2,
  Image,
  Mail,
  Megaphone,
  Menu,
  Palette,
  Share2,
  Smartphone,
  Star,
  TrendingUp,
  Video,
  Workflow,
  X,
} from 'lucide-react';
import greenCircle from './assets/greencircle.jpg';
import placementPortal from './assets/placementportal.jpg';
import qrCodeProject from './assets/qrcodeproject.jpg';
import graphicDesign from './assets/graphicdesign.jpg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#workflow' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const expertise = [
  {
    title: 'Social Media Marketing',
    icon: Share2,
    items: ['Instagram', 'Facebook', 'Content Strategy', 'Reels & Shorts', 'Analytics'],
  },
  {
    title: 'Web Development',
    icon: Code2,
    items: ['React', 'Shopify', 'Responsive Design', 'Landing Pages', 'E-Commerce', 'SEO-Ready Builds'],
  },
  {
    title: 'App Development',
    icon: Smartphone,
    items: ['Android', 'React Native', 'UI/UX Flows', 'App Store Launch', 'Maintenance'],
  },
  {
    title: 'Video Editing',
    icon: Video,
    items: ['Reels & Shorts', 'Promo Videos', 'Premiere Pro', 'After Effects', 'AI Ad Video'],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    items: ['Branding', 'Logo Design', 'Social Creatives', 'Print & Packaging'],
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    items: ['Meta Ads', 'Google Ads', 'SEO', 'Email Campaigns', 'Performance Tracking'],
  },
];

const aboutExpertise = expertise;

const heroMarquee = ['Social media', 'Websites', 'Mobile apps', 'Video editing', 'Brand design', 'Digital ads'];
const aboutMarquee = ['Strategy', 'Design', 'Build', 'Launch', 'Optimize', 'Grow'];
const experienceStats = [
  '+40% engagement focus',
  'Mobile-first delivery',
  'Short-form ready',
  'ROI-led campaigns',
  'Consistent visuals',
  'End-to-end ownership',
];

const timeline = [
  {
    period: '2025 — 2026',
    title: 'Freelance Digital Creative',
    role: 'Social · Web · App · Video · Design · Marketing',
    text: 'Working independently with brands, startups, and small businesses — offering social media marketing, web and app development, video editing, graphic design, and digital marketing as one connected service.',
    responsibilities: [
      'Managing social media accounts and content calendars to grow reach, engagement, and followers.',
      'Designing and building responsive websites and mobile apps tailored to each brand.',
      'Editing reels, promos, and motion graphics for social and ad campaigns.',
      'Running paid ad campaigns across Meta and Google with a focus on results.',
      'Creating brand identities, logos, and marketing creatives from scratch.',
      'Being a single, reliable point of contact for strategy, design, and delivery.',
    ],
  },
];

const services = [
  {
    title: 'Social Media Marketing',
    icon: Share2,
    proof: '+40% engagement focus',
    text: 'Content planning, posting, and community growth that turns your profiles into a consistent lead source.',
  },
  {
    title: 'Web Development',
    icon: Code2,
    proof: 'Fast responsive launches',
    text: 'Fast, responsive, SEO-ready websites and stores designed to convert visitors into customers.',
  },
  {
    title: 'App Development',
    icon: Smartphone,
    proof: 'Clean mobile flows',
    text: 'Android apps with clean UI/UX, from concept and design through launch and support.',
  },
  {
    title: 'Video Editing',
    icon: Video,
    proof: 'Scroll-stopping edits',
    text: 'Reels, shorts, and promos edited to grab attention and hold it.',
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    proof: 'Brand-consistent assets',
    text: 'Logos, brand identities, and social creatives with a polished, professional visual language.',
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    proof: 'Measurable ROI focus',
    text: 'Meta and Google ad campaigns, SEO, and funnels built around measurable ROI.',
  },
];


const projects = [
  {
    category: 'Web Application',
    title: 'GreenCircle – Community Gardening Platform',
    description:
      'GreenCircle is a community-driven web application designed to connect plant lovers, gardeners, and environmentally conscious individuals. The platform enables users to share plants, exchange gardening knowledge, participate in community activities, and promote sustainable living through an intuitive and engaging digital experience.',
    challenge:
      'The community needed a simple way to connect plant enthusiasts and share gardening knowledge in one place.',
    solution:
      'Built an intuitive platform for sharing plants, exchanging knowledge, and participating in community activities.',
    metrics: ['Community-driven', 'Sustainable living', 'Engaging UX'],
    stack: ['React.js', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
    image: greenCircle,
    accent: 'from-fuchsia-400/20 via-white/8 to-zinc-950',
    link: 'https://green-a050a.web.app/',
    demo: 'https://green-a050a.web.app/',
    buttonText: 'View Live Demo',
  },
  {
    category: 'Full Stack Application',
    title: 'Placement Portal Application',
    description:
      'A full-stack placement management platform developed to simplify campus recruitment processes for students, recruiters, and administrators. The application provides centralized management of job postings, student profiles, applications, and placement activities through a clean and user-friendly interface.',
    challenge:
      'Campus recruitment needed a centralized workflow for postings, applications, and placement tracking.',
    solution:
      'Delivered a clean management interface for students, recruiters, and administrators to coordinate placement tasks.',
    metrics: ['Centralized workflow', 'Campus recruitment', 'User-friendly'],
    stack: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: placementPortal,
    accent: 'from-amber-400/25 via-white/8 to-zinc-950',
    link: 'https://placement-portal-application-six.vercel.app/',
    demo: 'https://placement-portal-application-six.vercel.app/',
    buttonText: 'View Live Demo',
  },
  {
    category: 'Automation',
    title: 'QR Code Attendance Management System',
    description:
      'A smart attendance management system that automates attendance using QR code technology. The application enables secure QR code generation and scanning while maintaining accurate digital attendance records with a fast and responsive user interface.',
    challenge:
      'Attendance tracking needed to be fast, accurate, and secure without relying on manual entry.',
    solution:
      'Created a QR-based workflow for generating, scanning, and recording attendance digitally.',
    metrics: ['Secure scanning', 'Digital attendance', 'Fast interface'],
    stack: ['React.js', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
    image: qrCodeProject,
    accent: 'from-cyan-400/22 via-white/8 to-zinc-950',
    link: 'https://qr-code-eosin-rho.vercel.app/login',
    demo: 'https://qr-code-eosin-rho.vercel.app/login',
    buttonText: 'View Live Demo',
  },
  {
    category: 'Graphic Design',
    title: 'Graphic Design & Brand Creatives',
    description:
      'Designed professional branding and marketing creatives for Gloco Products, including product advertisements, promotional posters, social media creatives, and digital marketing materials. The work focuses on strong visual communication, brand consistency, and engaging designs that enhance product visibility.',
    challenge:
      'The brand needed polished creatives that kept messaging consistent across product and social campaigns.',
    solution:
      'Developed brand-consistent visuals for advertisements, posters, and social media assets.',
    metrics: ['Brand consistency', 'Marketing creatives', 'Visual communication'],
    stack: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma'],
    image: graphicDesign,
    accent: 'from-[#D4AF37]/25 via-white/8 to-stone-950',
    link: null,
    demo: null,
    buttonText: 'Creative Design Portfolio',
  },
];

const socials = [
  { label: 'Instagram', icon: Camera, href: 'https://www.instagram.com/elevate_by_pooja?utm_source=qr&igsh=MTV5aHczZHNoMjNxOA==' },
  { label: 'LinkedIn', icon: BriefcaseBusiness, href: 'https://www.linkedin.com/in/pooja-nandhini-97bab1351' },
  { label: 'WhatsApp', icon: Share2, href: 'https://wa.me/917358968480' },
  { label: 'Email', icon: Mail, href: 'mailto:poojanandhini29@gmail.com' },
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function GlassCard({ className = '', children }) {
  return <div className={cn('glass-card gold-ring', className)}>{children}</div>;
}

function MarqueeBand({ items, label }) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="marquee-container" aria-label={label}>
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function MagneticButton({ href, className = '', children, variant = 'primary', ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.2 });

  const onMove = (event) => {
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shared =
    variant === 'primary'
      ? 'button-primary shadow-[0_12px_40px_rgba(212,175,55,0.18)]'
      : 'button-secondary';

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(shared, className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return undefined;
    const glow = glowRef.current;
    if (!glow) return undefined;

    let frameId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frameId = window.requestAnimationFrame(render);
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = '1';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}

function RevealSection({ id, className = '', children }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={cn('section-pad', className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

function TechCloud() {
  const rings = [
    { title: 'Social', icon: Share2, items: ['Instagram', 'Reels', 'Growth'] },
    { title: 'Web & App', icon: Code2, items: ['Websites', 'Apps', 'Stores'] },
    { title: 'Video', icon: Video, items: ['Reels', 'Promos', 'Motion'] },
    { title: 'Design', icon: Palette, items: ['Branding', 'Logos', 'Creatives'] },
  ];

  return (
    <div className="relative mx-auto grid w-full max-w-[34rem] place-items-center py-4">
      <div className="absolute inset-0 rounded-full border border-white/5" />
      <div className="absolute inset-10 rounded-full border border-white/5" />
      <div className="absolute inset-20 rounded-full border border-[#D4AF37]/12" />
      <motion.div
        className="absolute inset-[24%] rounded-full bg-[#D4AF37]/12 blur-2xl"
        animate={{ scale: [0.95, 1.03, 0.95], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-center backdrop-blur-2xl"
        animate={{ rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/65">Pooja</p>
          <p className="mt-2 text-sm text-[#FFD700]">Creative</p>
        </div>
      </motion.div>

      {rings.map((ring, index) => {
        const Icon = ring.icon;
        const angle = (index / rings.length) * Math.PI * 2;
        const radius = 130;
        const top = `calc(50% + ${Math.sin(angle) * radius}px)`;
        const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
        return (
          <motion.div
            key={ring.title}
            className="absolute z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            style={{ top, left }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#FFD700]">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{ring.title}</p>
                <p className="mt-1 text-[11px] text-white/65">{ring.items.join(' · ')}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function HeroVideo() {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="hero-visual relative lg:pr-8"
    >
      <div className="absolute -inset-6 rounded-[36px] bg-[#D4AF37]/8 blur-[120px]" />
      <div className="hero-video-container relative overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.08] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-[18px]">
        <img
          src={heroImage}
          alt="Pooja Nandhini Portrait"
          className="hero-video"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[38px] border border-white/8" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const previewRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 40, active: false });

  const onMove = (event) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, active: true });
  };

  const onLeave = () => setGlow((prev) => ({ ...prev, active: false }));

  return (
    <motion.article
      className="group h-full"
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <GlassCard className="project-card-shell h-full p-4 sm:p-5">
        <div
          ref={previewRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="project-card-frame relative h-full rounded-[30px] border border-white/12 bg-white/[0.08] p-3 backdrop-blur-[18px]"
        >
          <div className={cn('pointer-events-none absolute inset-0 z-0 bg-gradient-to-br opacity-95', project.accent)} />
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              opacity: glow.active ? 1 : 0,
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,215,0,0.24), transparent 28%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_30%)]" />

          <div className="project-card-preview relative z-10 overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.08] backdrop-blur-[18px]">
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.25),transparent_20%)]" />
            </div>
          </div>

          <div className="project-card-content relative z-10">
          <div className="project-card-summary rounded-[24px] border border-white/12 bg-white/[0.09] p-4 backdrop-blur-[18px]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFD700]/80">{project.category}</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>
          </div>

          <div className="project-card-metrics rounded-[24px] border border-white/12 bg-white/[0.09] p-4 backdrop-blur-[18px]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">Metrics</p>
              <Image className="h-4 w-4 text-[#FFD700]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric} className="tag">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card-body grid gap-3 lg:grid-cols-2">
            <div className="project-card-detail rounded-[24px] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-[18px]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">Problem</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{project.challenge}</p>
            </div>
            <div className="project-card-detail rounded-[24px] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-[18px]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">Solution</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{project.solution}</p>
            </div>
          </div>
          </div>

          <div className="project-card-footer relative z-10">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="tag shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <CursorGlow />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-[#D4AF37]/30 focus:bg-black focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'nav-surface fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'nav-blur shadow-[0_18px_60px_rgba(0,0,0,0.5)]' : '',
        )}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-3 sm:gap-4">
          <a href="#home" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Go to home">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-sm font-semibold text-[#FFD700] transition group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
              PN
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[10px] uppercase tracking-[0.2em] text-white/65 sm:text-[11px] sm:tracking-[0.35em]">Freelance Creative</p>
              <p className="truncate text-xs font-medium text-white sm:text-sm">Pooja Nandhini S.M</p>
            </div>
          </a>

          <nav className="hidden items-center gap-3 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-5 py-2.5 text-sm uppercase tracking-[0.16em] text-white/75 transition hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute right-3 top-24 w-[min(92vw,22rem)] rounded-[28px] border border-white/12 bg-white/[0.1] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.6)] backdrop-blur-[18px]"
              initial={{ y: -24, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -24, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Navigation</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/80 transition hover:border-[#D4AF37]/25 hover:bg-white/8 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <MagneticButton href="#projects" variant="secondary" className="flex-1 justify-center">
                  Projects
                </MagneticButton>
                <MagneticButton href="#contact" className="flex-1 justify-center">
                  Contact
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main id="home" className="relative z-10 pt-20 lg:pt-28">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(255,215,0,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
          <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[#D4AF37]/12 blur-[120px]" />
          <div className="absolute right-[-8%] top-40 h-80 w-80 rounded-full bg-white/6 blur-[140px]" />

          <div className="mx-auto w-full max-w-[96rem] px-5 sm:px-6 lg:px-8 section-pad relative">
            <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-3xl hero-copy-layer min-w-0"
              >
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-[#FFD700] sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.35em]"
                >
                  <Star className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
                  <span className="sm:hidden">Freelance Digital Creative</span>
                  <span className="hidden sm:inline">Freelance · social · web · app · video · design · marketing</span>
                </motion.p>

                <h1 className="mt-4 text-[clamp(1.875rem,7vw,3rem)] font-semibold tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-7xl">
                  <span className="sm:hidden">Elevating Brands Through Design &amp; Innovation</span>
                  <span className="hidden sm:inline">Elevating Brands Through Design,<br className="hidden md:block" />Strategy &amp; Innovation</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
                  I&apos;m Pooja Nandhini S.M — a freelance digital creative who helps brands and businesses grow with one connected service: social media marketing, web and app development, video editing, graphic design, and digital marketing. From first idea to final launch, you get strategy, design, and delivery from a single reliable partner.
                </p>

                <MarqueeBand items={heroMarquee} label="Core services" />
              </motion.div>

              <HeroVideo />
            </div>

            <div className="mt-8 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2 text-white/45"
              >
                <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/15 p-1.5">
                  <motion.div
                    animate={{ y: [0, 14, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-2.5 w-1 rounded-full bg-[#FFD700]"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.38em]">Scroll</span>
              </motion.div>
            </div>
          </div>
        </section>

        <RevealSection id="about">
          <div className="container-shell about-section-grid">
            <div className="min-w-0">
              <SectionHeading
                eyebrow="About"
                title="A freelance creative who covers every part of your digital presence."
              />
              <MarqueeBand items={aboutMarquee} label="Creative process" />
              <GlassCard className="p-6 sm:p-8">
                <p className="text-base leading-8 text-zinc-300">
                  I&apos;m Pooja Nandhini S.M, a full-service freelance digital creative helping brands, startups, and small businesses show up better online. I combine six core skills — social media marketing, web development, app development, video editing, graphic design, and digital marketing — so you don&apos;t have to juggle multiple people. From building your website and app to running campaigns, editing videos, and designing your brand, I handle it all with a strategy-first, detail-obsessed approach. The result: a consistent, professional presence that actually drives growth.
                </p>
              </GlassCard>
            </div>

            <div className="about-pills-container">
              {aboutExpertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <GlassCard className="about-pill-card h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex min-w-0 items-start gap-4">
                        <div className="shrink-0 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#FFD700]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <div className="about-feature-list mt-3">
                            {item.items.map((skill) => (
                              <span key={skill} className="tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="experience">
          <div className="container-shell">
            <SectionHeading eyebrow="Experience" title="Freelance experience across the digital space." />

            <div className="grid gap-5">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <GlassCard className="experience-card p-4 sm:p-6 md:p-8">
                    <div className="experience-card-header flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#FFD700]/80">{item.period}</p>
                        <h3 className="mt-2 text-[clamp(1.25rem,5vw,1.5rem)] font-semibold text-white">{item.title}</h3>
                        <p className="experience-role mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.28em] text-white/65">{item.role}</p>
                      </div>
                      <div className="impact-stat shrink-0 sm:text-right">
                        <TrendingUp className="h-4 w-4" />
                        <span>6-service delivery system</span>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-zinc-300">{item.text}</p>

                    <div className="mt-6 min-w-0">
                      <p className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/65">Key Responsibilities</p>
                      <ul className="experience-proof-list mt-4 space-y-3">
                        {item.responsibilities.map((responsibility, responsibilityIndex) => (
                          <li key={responsibility} className="experience-proof-item">
                            <span className="experience-proof-dot" />
                            <span className="experience-proof-text flex-1">{responsibility}</span>
                            <span className="impact-pill">{experienceStats[responsibilityIndex]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="projects" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.014),rgba(255,255,255,0))]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Work"
              title="Selected work across social, web, apps, video, design, and marketing."
              description="Each project shows the challenge, the approach, and the results. Add your own live links to any card once your projects are ready."
            />

            <div className="grid items-stretch gap-5 xl:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="workflow">
          <div className="container-shell">
            <SectionHeading
              eyebrow="How I Work"
              title="A simple, transparent process from first call to final delivery."
              description="Whether it's a campaign, a website, an app, or a full brand — every project moves through the same clear stages, so you always know what's happening."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['Discover', 'Understand your goals, audience, and brand so the work is built around real results.'],
                ['Plan', 'Map out the strategy, content, timeline, and deliverables before anything is created.'],
                ['Create', 'Design and build the work  posts, sites, apps, videos, or campaigns — with quality first.'],
                ['Refine', 'Review together, polish the details, and fine-tune until it feels exactly right.'],
                ['Launch', 'Deliver, publish, and support — plus track performance and optimize what matters.'],
              ].map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.35em] text-[#FFD700]/80">
                        0{index + 1}
                      </span>
                      <ChevronRight className="h-4 w-4 text-white/35" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
                    {index === 4 ? (
                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#FFD700]">
                        <Star className="h-4 w-4" />
                        Delivered &amp; supported
                      </div>
                    ) : null}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="services" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.014),rgba(255,255,255,0))]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Services"
              title="Everything your brand needs online  from one freelancer."
              description="Pick a single service or let me handle your entire digital presence end to end."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                  >
                    <GlassCard className="service-card h-full p-6">
                      <div className="service-icon">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
                      <div className="impact-stat mt-5">
                        <TrendingUp className="h-4 w-4" />
                        <span>{service.proof}</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.014),rgba(255,255,255,0))]">
          <div className="container-shell">
            <GlassCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="section-eyebrow">Contact</p>
                  <h2 className="section-title">Let’s grow your brand together.</h2>
                  <p className="section-copy">
                    Have a project in mind or need a full digital partner? Tell me what you’re working on and I’ll get back to you with a clear plan and next steps.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[24rem]">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-[22px] border border-white/12 bg-white/[0.08] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-[#D4AF37]/30 hover:bg-white/[0.12] hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
                        aria-label={social.label}
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#FFD700]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-medium text-white">{social.label}</span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-[#FFD700]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </div>
        </RevealSection>
      </main>

      <footer className="footer-glass relative z-10 border-t border-white/10 py-8">
        <div className="container-shell flex flex-col gap-2 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-sm">
          <p>© 2026 Pooja Nandhini S.M. Freelance digital creative — social, web, app, video, design &amp; marketing.</p>
          <p className="text-white/70">Helping brands look great and grow online.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
