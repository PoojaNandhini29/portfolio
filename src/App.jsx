/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import heroPreview from './assets/hero.png';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe2,
  Image,
  Instagram,
  Linkedin,
  Mail,
  Maximize2,
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
  MoveRight,
} from 'lucide-react';

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
    items: ['Instagram', 'Facebook', 'Content Strategy', 'Community Growth', 'Reels & Shorts', 'Analytics'],
  },
  {
    title: 'Web Development',
    icon: Code2,
    items: ['React', 'WordPress', 'Responsive Design', 'Landing Pages', 'E-Commerce', 'SEO-Ready Builds'],
  },
  {
    title: 'App Development',
    icon: Smartphone,
    items: ['Android', 'iOS', 'React Native', 'UI/UX Flows', 'App Store Launch', 'Maintenance'],
  },
  {
    title: 'Video Editing',
    icon: Video,
    items: ['Reels & Shorts', 'Promo Videos', 'Motion Graphics', 'Premiere Pro', 'After Effects', 'Color Grading'],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    items: ['Branding', 'Logo Design', 'Social Creatives', 'Print & Packaging', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    items: ['Meta Ads', 'Google Ads', 'SEO', 'Email Campaigns', 'Funnels', 'Performance Tracking'],
  },
];

const aboutExpertise = expertise;

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
    text: 'Content planning, posting, and community growth that turns your profiles into a consistent lead source.',
  },
  {
    title: 'Web Development',
    icon: Code2,
    text: 'Fast, responsive, SEO-ready websites and stores designed to convert visitors into customers.',
  },
  {
    title: 'App Development',
    icon: Smartphone,
    text: 'Android and iOS apps with clean UI/UX, from concept and design through launch and support.',
  },
  {
    title: 'Video Editing',
    icon: Video,
    text: 'Reels, shorts, promos, and motion graphics edited to grab attention and hold it.',
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    text: 'Logos, brand identities, and social creatives with a polished, professional visual language.',
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    text: 'Meta and Google ad campaigns, SEO, and funnels built around measurable ROI.',
  },
];

const certifications = [
  'Meta Certified Digital Marketing Associate',
  'Google Ads & Analytics Certified',
  'Adobe Creative Suite — Design & Video',
  'Social Media Marketing Specialist',
];

const projects = [
  {
    category: 'Social Media Marketing',
    title: 'Brand Growth Campaign',
    description:
      'A full social media makeover for a lifestyle brand — content strategy, daily posting, and reels that grew the audience organically.',
    challenge:
      'The brand had an inconsistent feed and low engagement, with no clear content direction or posting rhythm.',
    solution:
      'Built a cohesive visual theme, a monthly content calendar, and a reels-first strategy that boosted reach and follower growth.',
    metrics: ['3x engagement', '10k+ new followers', 'Consistent daily posts'],
    stack: ['Instagram', 'Meta Suite', 'Content Strategy', 'Reels'],
    image: heroPreview,
    accent: 'from-fuchsia-400/20 via-white/8 to-zinc-950',
    link: '#',
    demo: '#',
  },
  {
    category: 'Web Development',
    title: 'Business Website & Store',
    description:
      'A fast, responsive website with an integrated online store, built to convert visitors into paying customers.',
    challenge:
      'The client needed a modern, mobile-friendly site that loaded quickly and ranked well on search.',
    solution:
      'Delivered a clean, SEO-ready build with clear calls to action, smooth navigation, and an easy checkout flow.',
    metrics: ['SEO-optimized', 'Mobile-first', 'Faster load times'],
    stack: ['React', 'WordPress', 'E-Commerce', 'SEO'],
    image: heroPreview,
    accent: 'from-amber-400/25 via-white/8 to-zinc-950',
    link: '#',
    demo: '#',
  },
  {
    category: 'App Development',
    title: 'Mobile App Launch',
    description:
      'A cross-platform mobile app with clean UI/UX, taken from concept and design through to store launch.',
    challenge:
      'The idea needed to become an intuitive, reliable app that felt effortless on both Android and iOS.',
    solution:
      'Designed simple user flows and a polished interface, then built and shipped the app to both app stores.',
    metrics: ['Android & iOS', 'Intuitive UX', 'Store-ready'],
    stack: ['React Native', 'UI/UX', 'App Store', 'Maintenance'],
    image: heroPreview,
    accent: 'from-cyan-400/22 via-white/8 to-zinc-950',
    link: '#',
    demo: '#',
  },
  {
    category: 'Video Editing',
    title: 'Promo & Reels Package',
    description:
      'A set of scroll-stopping reels and a promotional video edited to grab attention and drive shares.',
    challenge:
      'Raw footage needed to become punchy, on-brand content that performed well on social platforms.',
    solution:
      'Edited with tight pacing, motion graphics, captions, and color grading tuned for mobile-first viewing.',
    metrics: ['High retention', 'Motion graphics', 'Platform-optimized'],
    stack: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grade'],
    image: heroPreview,
    accent: 'from-emerald-400/22 via-white/8 to-zinc-950',
    link: '#',
    demo: '#',
  },
  {
    category: 'Graphic Design & Branding',
    title: 'Complete Brand Identity',
    description:
      'A full brand identity kit — logo, color system, typography, and social creatives with a premium, cohesive feel.',
    challenge:
      'The brand needed a memorable identity that stayed consistent across print, social, and packaging.',
    solution:
      'Created a reusable design system with a distinctive logo, controlled palette, and ready-to-use templates.',
    metrics: ['Reusable system', 'Premium assets', 'Brand-consistent'],
    stack: ['Photoshop', 'Illustrator', 'Branding', 'Social Creatives'],
    image: heroPreview,
    accent: 'from-[#D4AF37]/25 via-white/8 to-stone-950',
    link: '#',
    demo: '#',
  },
  {
    category: 'Digital Marketing',
    title: 'Paid Ads & Lead Funnel',
    description:
      'A performance marketing campaign across Meta and Google, built around a lead funnel that delivers measurable ROI.',
    challenge:
      'The client was spending on ads with little tracking and unclear returns on the budget.',
    solution:
      'Built targeted ad sets, a conversion-focused landing page, and tracking to turn spend into qualified leads.',
    metrics: ['Lower cost per lead', 'Tracked ROI', 'Higher conversions'],
    stack: ['Meta Ads', 'Google Ads', 'SEO', 'Funnels'],
    image: heroPreview,
    accent: 'from-sky-400/20 via-white/8 to-zinc-950',
    link: '#',
    demo: '#',
  },
];

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'WhatsApp', icon: BriefcaseBusiness, href: '#' },
  { label: 'Portfolio', icon: Globe2, href: '#' },
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

function MagneticButton({ href, className = '', children, variant = 'primary', ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.2 });

  const onMove = (event) => {
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

function CursorGlow({ x, y }) {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl md:block"
      style={{ x, y, scale: 1.08 }}
      aria-hidden="true"
    />
  );
}

function RevealSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={cn('section-pad', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
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
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">Pooja</p>
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
                <p className="mt-1 text-[11px] text-white/45">{ring.items.join(' · ')}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
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
      className="group"
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <GlassCard className="h-full overflow-hidden p-4 sm:p-5">
        <div
          ref={previewRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] p-3"
        >
          <div className={cn('absolute inset-0 bg-gradient-to-br opacity-95', project.accent)} />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: glow.active ? 1 : 0,
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,215,0,0.24), transparent 28%)`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_30%)]" />

          <div className="relative grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                </div>
                <Maximize2 className="h-4 w-4 text-white/40" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
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

            <div className="grid gap-3">
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFD700]/80">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Metrics</p>
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
            </div>
          </div>

          <div className="relative mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Problem</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{project.challenge}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Solution</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{project.solution}</p>
            </div>
          </div>

          <div className="relative mt-4 flex flex-wrap gap-2">
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

          <div className="relative mt-5 flex flex-wrap gap-3">
            <MagneticButton href={project.link} variant="secondary">
              View Project <Maximize2 className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={project.demo}>
              Live Link <ExternalLink className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.4 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onMove = (event) => {
      if (window.innerWidth < 768) return;
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <CursorGlow x={smoothX} y={smoothY} />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-[#D4AF37]/30 focus:bg-black focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'nav-blur shadow-[0_18px_60px_rgba(0,0,0,0.5)]' : 'bg-transparent',
        )}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-sm font-semibold text-[#FFD700] transition group-hover:-translate-y-0.5">
              PN
            </div>
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Freelance Creative</p>
              <p className="text-sm font-medium text-white">Pooja Nandhini S.M</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <MagneticButton href="#projects" variant="secondary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact">
              Contact Me
            </MagneticButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
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
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute right-3 top-24 w-[min(92vw,22rem)] rounded-[28px] border border-white/10 bg-[#101010]/95 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.6)]"
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

      <main id="home" className="pt-20">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(255,215,0,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
          <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[#D4AF37]/12 blur-[120px]" />
          <div className="absolute right-[-8%] top-40 h-80 w-80 rounded-full bg-white/6 blur-[140px]" />

          <div className="container-shell section-pad relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-3xl hero-copy-layer"
              >
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#FFD700]"
                >
                  <Star className="h-3.5 w-3.5" />
                  Freelance · social · web · app · video · design · marketing
                </motion.p>

                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Freelance Digital Creative &amp; Marketing Partner
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I&apos;m Pooja Nandhini S.M — a freelance digital creative who helps brands and businesses grow with one connected service: social media marketing, web and app development, video editing, graphic design, and digital marketing. From first idea to final launch, you get strategy, design, and delivery from a single reliable partner.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton href="#projects">
                    View Projects <ChevronRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton href="#contact" variant="secondary">
                    Contact Me <Mail className="h-4 w-4" />
                  </MagneticButton>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="hero-visual relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-[#D4AF37]/8 blur-[120px]" />
                <div className="relative min-h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]/90 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                  <div className="hero-grid absolute inset-0 opacity-35" />
                  <div className="hero-orb hero-orb-one absolute left-12 top-14 h-24 w-24 rounded-full border border-[#D4AF37]/18 bg-[#D4AF37]/8 blur-[1px]" />
                  <div className="hero-orb hero-orb-two absolute right-12 top-24 h-16 w-16 rounded-[28px] border border-white/10 bg-white/4 backdrop-blur-xl" />
                  <div className="hero-sheen absolute inset-0" />

                  <div className="relative z-10 flex h-full min-h-[520px] items-center justify-center">
                    <div className="hero-core relative h-72 w-72 sm:h-80 sm:w-80">
                      <motion.div
                        className="absolute inset-0 rounded-full border border-white/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute inset-8 rounded-full border border-[#D4AF37]/20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute inset-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-white/5 to-transparent blur-2xl"
                        animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.5, 0.72, 0.5] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/6 backdrop-blur-2xl"
                          animate={{ rotate: [0, 2, 0], y: [0, -3, 0] }}
                          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                          className="absolute inset-4 rounded-[34px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/15 via-white/6 to-transparent"
                          animate={{ rotate: [0, -2, 0] }}
                          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="hero-core-mark" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
          <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="About"
                title="A freelance creative who covers every part of your digital presence."
              />
              <GlassCard className="p-6 sm:p-8">
                <p className="text-base leading-8 text-zinc-300">
                  I&apos;m Pooja Nandhini S.M, a full-service freelance digital creative helping brands, startups, and small businesses show up better online. I combine six core skills — social media marketing, web development, app development, video editing, graphic design, and digital marketing — so you don&apos;t have to juggle multiple people. From building your website and app to running campaigns, editing videos, and designing your brand, I handle it all with a strategy-first, detail-obsessed approach. The result: a consistent, professional presence that actually drives growth.
                </p>
              </GlassCard>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                    <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#FFD700]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <div className="mt-3 flex flex-wrap gap-2">
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
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <GlassCard className="p-6 sm:p-8">
                    <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFD700]/80">{item.period}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/45">{item.role}</p>
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-8 text-zinc-300">{item.text}</p>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">Key Responsibilities</p>
                      <ul className="mt-4 space-y-3">
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex gap-3 text-sm leading-7 text-zinc-300">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFD700]" />
                            <span>{responsibility}</span>
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

            <div className="grid gap-5 xl:grid-cols-2">
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

            <div className="grid gap-4 lg:grid-cols-5">
              {[
                ['Discover', 'Understand your goals, audience, and brand so the work is built around real results.'],
                ['Plan', 'Map out the strategy, content, timeline, and deliverables before anything is created.'],
                ['Create', 'Design and build the work — posts, sites, apps, videos, or campaigns — with quality first.'],
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
              title="Everything your brand needs online — from one freelancer."
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
                    <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                      <div className="inline-flex rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#FFD700]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="certifications">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Certifications"
              title="Credentials that back up the work."
              description="Professional certifications across marketing, ads, and creative tools. Swap in your exact credentials anytime."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              {certifications.map((item) => (
                <GlassCard key={item} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#FFD700]/75">Applied credential</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#FFD700]">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                  </div>
                </GlassCard>
              ))}
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    <MagneticButton href="mailto:pixelperfectdesignsindia@gmail.com">
                      Send Email <Mail className="h-4 w-4" />
                    </MagneticButton>
                    <MagneticButton href="#projects" variant="secondary">
                      See My Work <MoveRight className="h-4 w-4" />
                    </MagneticButton>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[24rem]">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-black/25 px-4 py-4 transition hover:-translate-y-1 hover:border-[#D4AF37]/20 hover:bg-white/8"
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

      <footer className="border-t border-white/10 py-8">
        <div className="container-shell flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pooja Nandhini S.M. Freelance digital creative — social, web, app, video, design &amp; marketing.</p>
          <p className="text-white/40">Helping brands look great and grow online.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
