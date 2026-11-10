import { PROFILE } from '../data'
import { Icons } from '../icons'

// The six services as short strings for the hero ticker
const TICKER_ITEMS = [
  'React',
  'Shopify',
  'Responsive Design',
  'Landing Pages',
  'E-Commerce',
  '',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
      aria-label="Introduction"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(dark:rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8 reveal">
          <span className="label">{PROFILE.role}</span>
          {PROFILE.available && (
            <span className="inline-flex items-center gap-1.5 text-xs font-sans text-emerald-400 ml-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Available for projects
            </span>
          )}
        </div>

        {/* Main headline — large display type */}
        <h1
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl xl:text-9xl
                     dark:text-text text-light-text leading-[1.05] tracking-tight
                     max-w-[15ch] mb-8 reveal delay-100"
        >
          Websites That Look{' '}
          <span className="italic text-accent">Sharp and Work Hard</span>
        </h1>

        {/* Supporting copy */}
        <p
          className="font-sans text-base md:text-lg dark:text-text-muted text-light-muted
                     max-w-[52ch] leading-relaxed mb-12 reveal delay-200"
        >
          {PROFILE.heroSubline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 reveal delay-300">
          <a href="/#contact" className="btn-primary">
            Start a project
            <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="/#work" className="btn-outline">
            See my work
          </a>
        </div>

        {/* Services ticker */}
        <div className="reveal delay-400">
          <p className="label mb-4">Design to deployment. One point of contact.</p>
          <div
            className="overflow-hidden relative"
            aria-label="Services offered"
          >
            {/* Fade edges */}
            <div
              className="absolute inset-y-0 left-0 w-12 z-10
                         dark:bg-gradient-to-r dark:from-bg bg-gradient-to-r from-light-bg to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-12 z-10
                         dark:bg-gradient-to-l dark:from-bg bg-gradient-to-l from-light-bg to-transparent"
              aria-hidden="true"
            />
            <ul
              className="flex gap-6 animate-marquee w-max"
              aria-hidden="true" // decorative duplicate — real list in Services section
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <li
                  key={i}
                  className="tag shrink-0 whitespace-nowrap py-2 px-5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="/#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-1 dark:text-text-faint text-light-muted
                   hover:text-accent transition-colors duration-300"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
        <Icons.ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
