import { Link } from 'react-router-dom'
import { PROJECTS } from '../data'
import { Icons } from '../icons'

// Category → accent text colour mapping
const ACCENT_MAP = {
  'Web Development': 'text-emerald-400',
  'Graphic Design': 'text-amber-400',
}

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container-main">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-3 reveal">
              <span className="accent-line" aria-hidden="true" />
              Selected Work
            </p>
            <h2
              id="work-heading"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl dark:text-text text-light-text leading-tight reveal delay-100"
            >
              Websites and web applications I've built
            </h2>
          </div>
          <p className="font-sans text-sm dark:text-text-muted text-light-muted max-w-[36ch] leading-relaxed reveal delay-200">
            
          </p>
        </div>

        {/* Project grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px dark:bg-border bg-light-border rounded-2xl overflow-hidden">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const isLarge = index === 0 // first card spans wider on desktop
  const accent = ACCENT_MAP[project.category] || 'text-accent'

  return (
    <article
      className={`group relative dark:bg-bg-surface bg-light-surface
                  hover:dark:bg-bg-raised hover:bg-light-raised
                  transition-colors duration-500 overflow-hidden
                  ${isLarge ? 'md:col-span-2' : ''}`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden
          ${isLarge ? 'h-64 md:h-80 lg:h-96' : 'h-56 md:h-64'}`}
      >
        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.tagline}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top
                     transition-transform duration-700 ease-out
                     group-hover:scale-[1.03]"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0 dark:bg-gradient-to-t dark:from-bg-surface/80 bg-gradient-to-t from-light-surface/60 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className={`label ${accent} mb-2 block`}>{project.category}</span>
            <h3 className="font-display font-light text-2xl md:text-3xl dark:text-text text-light-text">
              {project.title}
            </h3>
          </div>
          <Link
            to={`/work/${project.id}`}
            className="shrink-0 w-10 h-10 rounded-full border dark:border-border border-light-border
                       flex items-center justify-center dark:text-text-muted text-light-muted
                       group-hover:border-accent group-hover:text-accent
                       transition-all duration-300"
            aria-label={`View case study: ${project.title}`}
          >
            <Icons.ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Stack tags */}
        <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
          {project.tags.map(tag => (
            <li key={tag} className="tag text-xs">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
