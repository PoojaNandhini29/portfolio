/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import heroPreview from './assets/hero.png';
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Camera,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  GitFork,
  Globe2,
  Hexagon,
  Image,
  LayoutGrid,
  Mail,
  Maximize2,
  Menu,
  Orbit,
  Palette,
  Play,
  ScanSearch,
  ShieldCheck,
  Star,
  TimerReset,
  Triangle,
  Workflow,
  X,
  Zap,
  MoveRight,
} from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const expertise = [
  {
    title: 'Frontend Engineering',
    icon: LayoutGrid,
    items: ['React', 'React Native', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI Systems'],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    items: ['Laravel', 'Python', 'REST APIs', 'Authentication Systems', 'Backend Architecture'],
  },
  {
    title: 'Database & Infrastructure',
    icon: Database,
    items: ['MySQL', 'Firebase', 'Supabase', 'Database Design', 'Cloud Integrations'],
  },
  {
    title: 'AI Engineering',
    icon: Bot,
    items: ['OpenAI APIs', 'AI Chatbots', 'Voice Assistants', 'Prompt Engineering', 'Workflow Automation', 'AI Agents'],
  },
  {
    title: 'Creative & Product Design',
    icon: Palette,
    items: ['UI/UX Design', 'Graphic Design', 'Design Systems', 'Branding', 'User-Centered Design'],
  },
];

const timeline = [
  {
    date: '2025 - Present',
    title: 'Production-focused development',
    text: 'Focused on building production-ready applications through AI-assisted workflows, scalable architecture, and design-led engineering practices.',
  },
  {
    date: 'Delivery',
    title: 'Web, mobile, and automation',
    text: 'Experienced in developing web applications, mobile interfaces, intelligent systems, and automation solutions with clean implementation standards.',
  },
  {
    date: 'Experience',
    title: 'AI-assisted execution',
    text: 'Uses AI tools to shorten iteration cycles, refine prompts, accelerate debugging, and support rapid feature delivery without losing quality.',
  },
];

const services = [
  {
    title: 'Full-stack application development',
    text: 'Modern web and mobile builds that balance performance, clarity, and maintainable code.',
  },
  {
    title: 'AI integration and automation',
    text: 'OpenAI-powered features, workflow systems, prompt engineering, chatbots, and AI assistants.',
  },
  {
    title: 'Product and brand design',
    text: 'Interfaces, design systems, brand assets, and marketing creatives with a premium visual language.',
  },
  {
    title: 'Technical consulting',
    text: 'Architecture decisions, implementation strategy, and execution guidance for teams that need speed.',
  },
];

const certifications = [
  'OpenAI API Integration',
  'Responsive Web Design',
  'Prompt Engineering Foundations',
  'UI/UX & Design Systems',
];

const projects = [
  {
    category: 'Web Applications',
    title: 'Operations Command Center',
    description:
      'A premium admin dashboard for high-density data, quick decisions, and fast visual scanning across operational workflows.',
    challenge:
      'Dense data views were redesigned with stronger hierarchy, clear affordances, and refined motion to make action paths obvious.',
    solution:
      'Introduced structured panels, visual connectors, and a layered interface that keeps the system readable and executive-friendly.',
    metrics: ['38% faster review', '12 modules', '99.9% layout consistency'],
    stack: ['React', 'Tailwind CSS', 'REST APIs', 'MySQL'],
    image: heroPreview,
    accent: 'from-amber-400/25 via-white/8 to-zinc-950',
    github: '#',
    demo: '#',
  },
  {
    category: 'AI Applications',
    title: 'AI Support Copilot',
    description:
      'A guidance-first assistant for drafting responses, summarizing requests, and improving support turnaround with AI.',
    challenge:
      'AI interactions needed to feel focused, safe, and reliable rather than generic or overly open-ended.',
    solution:
      'Designed constrained prompt flows, clear states, and structured outputs that help the assistant behave like a product tool.',
    metrics: ['Faster replies', 'Reusable prompts', 'Low-friction handoff'],
    stack: ['OpenAI API', 'Python', 'React', 'Workflow Automation'],
    image: heroPreview,
    accent: 'from-[#D4AF37]/25 via-white/8 to-stone-950',
    github: '#',
    demo: '#',
  },
  {
    category: 'Mobile Applications',
    title: 'Field Service Companion',
    description:
      'A mobile-first field utility for job updates, fast notes, and operational actions without unnecessary clutter.',
    challenge:
      'The UI needed to stay efficient on smaller screens while keeping important actions large, tactile, and obvious.',
    solution:
      'Used compact navigation, touch-friendly controls, and a prioritized layout that favors speed and legibility.',
    metrics: ['Touch-optimized', 'Offline-ready UI', 'Compact flow'],
    stack: ['React Native', 'Firebase', 'Supabase', 'Responsive Design'],
    image: heroPreview,
    accent: 'from-cyan-400/22 via-white/8 to-zinc-950',
    github: '#',
    demo: '#',
  },
  {
    category: 'Automation Systems',
    title: 'Workflow Orchestrator',
    description:
      'A chained automation system for tasks, notifications, and content generation powered by AI and deterministic steps.',
    challenge:
      'Automation had to remain transparent and editable so users could trust the outcome and understand the flow.',
    solution:
      'Created step-based orchestration with checkpoints, configurable triggers, and explainable AI-assisted actions.',
    metrics: ['Reduced manual work', 'Reusable flows', 'Checkpointed actions'],
    stack: ['OpenAI API', 'Python', 'Supabase', 'Codex CLI'],
    image: heroPreview,
    accent: 'from-emerald-400/22 via-white/8 to-zinc-950',
    github: '#',
    demo: '#',
  },
  {
    category: 'UI/UX Projects',
    title: 'Luxury Brand Identity Kit',
    description:
      'A visual system for brand assets, social creatives, and presentation layouts with a polished premium feel.',
    challenge:
      'Maintaining consistency across campaign assets while still leaving room for flexible content and formats.',
    solution:
      'Built a reusable design direction with controlled spacing, restrained gold accents, and a cohesive visual language.',
    metrics: ['Reusable system', 'Premium assets', 'Brand-consistent'],
    stack: ['Canva', 'Canva AI', 'Design Systems', 'Marketing Creatives'],
    image: heroPreview,
    accent: 'from-fuchsia-400/20 via-white/8 to-zinc-950',
    github: '#',
    demo: '#',
  },
];

const socials = [
  { label: 'GitHub', icon: GitFork, href: '#' },
  { label: 'LinkedIn', icon: BriefcaseBusiness, href: '#' },
  { label: 'Instagram', icon: Camera, href: '#' },
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

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const value = Math.min(100, Math.floor((elapsed / 1800) * 100));
      setProgress(value);
      if (value < 100) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-hidden bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)] bg-[length:240px_100%] animate-[loaderSweep_2.4s_ease-in-out_infinite]" />

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <div className="mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.42em] text-white/50">Loading premium portfolio</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[11px] uppercase tracking-[0.38em] text-[#FFD700]/80"
              >
                Pooja Nandhini
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mt-4 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl"
              >
                AI-Assisted Full-Stack Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base"
              >
                Creative Technologist portfolio initializing with cinematic motion, premium interactions, and a luxury black-and-gold visual system.
              </motion.p>

              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <div className="h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
                <span className="font-display text-sm text-white/70">{String(progress).padStart(3, '0')}%</span>
              </div>
            </div>

            <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56">
              <motion.div
                className="absolute inset-0 rounded-full border border-[#D4AF37]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-5 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-12 rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 backdrop-blur-xl"
                animate={{ rotate: 8, scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.45em] text-white/50">PN</p>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#FFD700]">
                      <Play className="h-3.5 w-3.5" />
                      Launch system
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -left-2 top-14 rounded-2xl border border-white/10 bg-white/5 p-2 text-[#FFD700]"
                animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Hexagon className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute -right-2 bottom-14 rounded-2xl border border-white/10 bg-white/5 p-2 text-[#FFD700]"
                animate={{ y: [0, 5, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Triangle className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute right-10 top-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-white/60"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ScanSearch className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-white/40">
            <motion.div
              className="h-3 w-3 rounded-full border border-[#FFD700]/50"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-[11px] uppercase tracking-[0.42em]">Initializing motion layers</span>
          </div>
        </div>
      </div>
    </motion.div>
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
    { title: 'Frontend', icon: LayoutGrid, items: ['React', 'React Native', 'CSS3'] },
    { title: 'Backend', icon: Code2, items: ['Laravel', 'Python', 'REST APIs'] },
    { title: 'AI', icon: Bot, items: ['OpenAI APIs', 'Chatbots', 'Agents'] },
    { title: 'Design', icon: Palette, items: ['UI/UX', 'Branding', 'Systems'] },
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
          <p className="mt-2 text-sm text-[#FFD700]">Creative Tech</p>
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
            <MagneticButton href={project.github} variant="secondary">
              GitHub <GitFork className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={project.demo}>
              Live Demo <ExternalLink className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.4 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.4 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1850);
    return () => clearTimeout(timer);
  }, []);

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
    document.body.style.overflow = loading || mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading, mobileOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <AnimatePresence>{loading ? <Loader /> : null}</AnimatePresence>

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
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Portfolio</p>
              <p className="text-sm font-medium text-white">Pooja Nandhini</p>
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
                className="max-w-3xl"
              >
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#FFD700]"
                >
                  <Star className="h-3.5 w-3.5" />
                  AI-Assisted development · premium design · recruiter-ready
                </motion.p>

                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Full Stack Developer, Ai-assisted Full Stack developer & Graphic designer
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I am a Full-Stack Developer and AI-Assisted Full-Stack Developer who builds scalable applications, intelligent workflows, and user-focused digital experiences by combining full-stack engineering, AI-assisted development workflows, and design-first thinking. My work focuses on creating performant, accessible, and production-ready solutions with modern technologies.
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
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-[#D4AF37]/12 blur-[100px]" />
                <div className="relative min-h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]/90 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                  <div className="hero-grid absolute inset-0 opacity-35" />
                  <div className="absolute left-10 top-12 h-28 w-28 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 blur-[1px] animate-[float_7s_ease-in-out_infinite]" />
                  <div className="absolute right-10 top-24 h-20 w-20 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl animate-[float_8s_ease-in-out_infinite]" />
                  <div className="absolute bottom-24 left-16 h-36 w-36 rounded-full border border-white/8 bg-gradient-to-br from-white/6 to-transparent animate-[pulseGlow_5.5s_ease-in-out_infinite]" />
                  <div className="absolute -right-10 bottom-10 h-52 w-52 rotate-12 rounded-[42px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/20 via-white/5 to-transparent shadow-[0_0_80px_rgba(212,175,55,0.12)] animate-[orbitFloat_9s_ease-in-out_infinite]" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-white/45 backdrop-blur-xl">
                    Cinematic Motion
                  </div>
                  <div className="absolute right-6 top-6 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-[#FFD700] backdrop-blur-xl">
                    Premium UI
                  </div>

                  <div className="relative z-10 flex h-full min-h-[520px] items-center justify-center">
                    <div className="relative h-72 w-72 sm:h-80 sm:w-80">
                      <motion.div
                        className="absolute inset-0 rounded-full border border-white/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute inset-8 rounded-full border border-[#D4AF37]/20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute inset-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-white/5 to-transparent blur-2xl"
                        animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.55, 0.85, 0.55] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/6 backdrop-blur-2xl"
                          animate={{ rotate: [0, 5, 0, -5, 0], y: [0, -6, 0] }}
                          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                          className="absolute inset-4 rounded-[34px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/15 via-white/6 to-transparent"
                          animate={{ rotate: [0, -4, 0, 4, 0] }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-[10px] uppercase tracking-[0.5em] text-white/45">P N</p>
                            <p className="mt-3 text-sm text-[#FFD700]">Creative Technologist</p>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="absolute left-0 top-10 flex items-center gap-3 rounded-[22px] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-white/65">Motion layers</span>
                      </motion.div>

                      <motion.div
                        className="absolute -right-2 bottom-12 flex items-center gap-3 rounded-[22px] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl"
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                        <span className="text-xs uppercase tracking-[0.3em] text-white/65">Luxury system</span>
                      </motion.div>
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
                title="A premium portfolio designed to communicate technical depth quickly."
                description="The goal is to feel like a premium product launch while still staying readable for recruiters, clients, and technical leads."
              />
              <GlassCard className="p-6 sm:p-8">
                <p className="text-base leading-8 text-zinc-300">
                  I am an AI-Assisted Full-Stack Developer with hands-on experience building scalable web and mobile applications using modern frontend, backend, database, and AI technologies. My expertise combines software engineering, AI-assisted development workflows, and UI/UX design principles to deliver efficient, maintainable, and user-focused solutions. Alongside development, I specialize in graphic design and digital branding, enabling me to bridge technical implementation with creative problem-solving.
                </p>
              </GlassCard>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item, index) => {
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

        <RevealSection id="skills" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.014),rgba(255,255,255,0))]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Technical Expertise"
              title="Categorized skills presented with depth and breathing room."
              description="A recruiter can scan this section quickly, but the layered presentation still makes the profile feel premium and intentional."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {expertise.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/20">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#FFD700]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
              <GlassCard className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">Tech stack visualization</p>
                  <Orbit className="h-4 w-4 text-[#FFD700]" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {['React', 'Laravel', 'Python', 'OpenAI', 'Supabase', 'Firebase', 'Canva', 'GitHub Copilot'].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-black/25 p-4 text-center text-sm text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">Tooling focus</p>
                  <Zap className="h-4 w-4 text-[#FFD700]" />
                </div>
                <div className="mt-5 space-y-3">
                  {['Claude', 'Cursor', 'Windsurf', 'Codex CLI', 'Gemini', 'Antigravity'].map((tool) => (
                    <div key={tool} className="flex items-center justify-between rounded-[20px] border border-white/10 bg-black/25 px-4 py-3">
                      <span className="text-sm text-white/80">{tool}</span>
                      <span className="text-xs uppercase tracking-[0.28em] text-[#FFD700]/75">AI tool</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="experience">
          <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-6 sm:p-8">
              <p className="section-eyebrow">Experience</p>
              <h2 className="section-title">AI-Assisted Full-Stack Developer</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                Focused on building production-ready applications through AI-assisted workflows, scalable architecture, and design-led engineering practices. Experienced in developing web applications, mobile interfaces, intelligent systems, and automation solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Production-ready', 'AI-assisted', 'Scalable', 'Maintainable'].map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>

            <div className="relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#D4AF37]/60 via-white/10 to-transparent" />
              <div className="grid gap-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-[16px] top-8 h-4 w-4 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/20 shadow-[0_0_0_10px_rgba(212,175,55,0.06)]" />
                    <GlassCard className="p-5 sm:p-6">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFD700]/80">{item.date}</p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-300">{item.text}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="projects" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.014),rgba(255,255,255,0))]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Projects"
              title="Premium case-study cards with image depth and interactive detail."
              description="Cards are built to support problem-solution storytelling, measurable outcomes, and polished demo actions."
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
              eyebrow="Development Workflow"
              title="A clean delivery process that reads like a product team, not a hobby page."
              description="The layout reinforces the strategy behind the work: discover, architect, build, refine, and launch with clarity."
            />

            <div className="grid gap-4 lg:grid-cols-5">
              {[
                ['Discover', 'Clarify objectives, users, constraints, and the metrics that define success.'],
                ['Architect', 'Plan data flow, interfaces, state ownership, and integration points before building.'],
                ['Build', 'Develop the app with reusable systems and production-minded implementation.'],
                ['Refine', 'Tune motion, copy, accessibility, and hierarchy until the experience feels premium.'],
                ['Launch', 'Finalize QA, performance, and handoff artifacts for a clean release.'],
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
                        Production ready
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
              title="A concise service set aligned with client and recruiter expectations."
              description="The emphasis stays on execution, product quality, and clear technical value."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#FFD700]">
                      <Workflow className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">{service.text}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="certifications">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Certifications"
              title="A formal credential area that can expand with your real achievements."
              description="Use this section for verified courses, professional credentials, and training milestones."
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
                  <h2 className="section-title">Let’s build something premium and production-ready.</h2>
                  <p className="section-copy">
                    This section is intentionally minimal and recruiter-friendly. Swap in your real links and email address when you’re ready.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <MagneticButton href="mailto:your.email@example.com">
                      Send Email <Mail className="h-4 w-4" />
                    </MagneticButton>
                    <MagneticButton href="#projects" variant="secondary">
                      Browse Projects <MoveRight className="h-4 w-4" />
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
          <p>Copyright 2026 Pooja Nandhini. Built with React, Framer Motion, and a luxury black-and-gold system.</p>
          <p className="text-white/40">Designed for premium storytelling, fast scanning, and modern product expectations.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
