import { useParams, Link, Navigate } from 'react-router-dom'
import { PROJECTS } from '../data'
import { Icons } from '../icons'
import { useEffect } from 'react'

export default function CaseStudy() {
  const { id } = useParams()
  const project = PROJECTS.find(p => p.id === id)

  // Scroll to top on mount
  useEffect(() => window.scrollTo(0, 0), [id])

  if (!project) return <Navigate to="/" replace />

  return (
    <main id="main-content" className="pt-24 pb-20">
      {/* Back link */}
      <div className="container-main mb-10">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-sans text-sm dark:text-text-muted text-light-muted
                     hover:text-accent transition-colors duration-200"
        >
          <Icons.ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
          Back to work
        </Link>
      </div>

      {/* Hero */}
      <div className="container-main mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="tag">{project.category}</span>
          {project.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <h1
          className="font-display font-light text-4xl md:text-6xl lg:text-7xl
                     dark:text-text text-light-text leading-tight max-w-[22ch] mb-6"
        >
          {project.title}
        </h1>

        <p className="font-sans text-lg dark:text-text-muted text-light-muted max-w-[52ch] leading-relaxed mb-10">
          {project.tagline}
        </p>

        {/* Action links */}
        <div className="flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live demo
              <Icons.ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Icons.Github className="w-4 h-4" aria-hidden="true" />
              View code
            </a>
          )}
        </div>
      </div>

      {/* Cover image */}
      <div className="container-main mb-16">
        <div className="w-full rounded-2xl overflow-hidden aspect-video">
          <img
            src={project.coverImage}
            alt={`${project.title} — screenshot`}
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Case study body */}
      <div className="container-main">
        <div className="grid lg:grid-cols-[1fr_2.4fr] gap-12 lg:gap-20">

          {/* Sidebar — stack */}
          <aside aria-label="Project details">
            <div className="lg:sticky lg:top-24 space-y-8">
              <div>
                <p className="label mb-3">Stack</p>
                <ul className="space-y-2">
                  {project.stack.map(s => (
                    <li
                      key={s}
                      className="font-sans text-sm dark:text-text-muted text-light-muted
                                 border-b dark:border-border border-light-border pb-2 last:border-0"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <div>
                  <p className="label mb-3">Links</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm text-accent hover:underline"
                  >
                    <Icons.Github className="w-4 h-4" aria-hidden="true" />
                    GitHub repository
                  </a>
                </div>
              )}

              <div>
                <p className="label mb-3">Interested?</p>
                <a
                  href="/#contact"
                  className="btn-primary text-sm py-2.5 px-5 w-full justify-center"
                >
                  Start a similar project
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="space-y-12" aria-label="Case study">
            {/* Problem */}
            <section aria-labelledby="problem-heading">
              <p className="label mb-3" id="problem-heading">
                <span className="accent-line" aria-hidden="true" />
                The problem
              </p>
              <p className="font-sans text-base dark:text-text-muted text-light-muted leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* My role */}
            <section aria-labelledby="role-heading">
              <p className="label mb-3" id="role-heading">
                <span className="accent-line" aria-hidden="true" />
                My role
              </p>
              <p className="font-sans text-base dark:text-text-muted text-light-muted leading-relaxed">
                {project.myRole}
              </p>
            </section>

            {/* Process */}
            <section aria-labelledby="process-heading">
              <p className="label mb-5" id="process-heading">
                <span className="accent-line" aria-hidden="true" />
                Process
              </p>
              <ol className="space-y-4">
                {project.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="font-display text-2xl font-light text-text-faint w-7 shrink-0 leading-none mt-0.5"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Result */}
            <section
              aria-labelledby="result-heading"
              className="dark:bg-bg-raised bg-light-raised rounded-2xl p-6 md:p-8"
            >
              <p className="label mb-3" id="result-heading">
                <span className="accent-line" aria-hidden="true" />
                Result
              </p>
              <p className="font-sans text-base dark:text-text text-light-text leading-relaxed">
                {project.result}
              </p>
            </section>
          </article>
        </div>
      </div>

      {/* Next project nav */}
      <div className="container-main mt-20 pt-10 border-t dark:border-border border-light-border">
        <NextProjectNav currentId={project.id} />
      </div>
    </main>
  )
}

function NextProjectNav({ currentId }) {
  const idx = PROJECTS.findIndex(p => p.id === currentId)
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <div className="flex items-center justify-between">
      <p className="label">Next project</p>
      <Link
        to={`/work/${next.id}`}
        className="group flex items-center gap-3 font-display font-light text-2xl dark:text-text text-light-text hover:text-accent transition-colors"
      >
        {next.title}
        <Icons.ArrowRight
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
}
