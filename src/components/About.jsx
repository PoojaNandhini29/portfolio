import { ABOUT, WHO_I_WORK_WITH } from '../data'

export default function About() {
  return (
    <section id="about" className="section divider" aria-labelledby="about-heading">
      <div className="container-main">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">

          {/* Left — portrait + who I work with */}
          <div>
            {/* Portrait */}
            <div className="reveal mb-10">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden
                               dark:bg-bg-raised bg-light-raised">
                {ABOUT.portrait !== '/portrait.jpg' ? (
                  // Real portrait (or placeholder state)
                  <div className="w-full h-full flex items-center justify-center dark:bg-bg-raised bg-light-surface">
                    <div className="text-center px-6">
                      <div
                        className="w-24 h-24 rounded-full dark:bg-bg-surface bg-light-raised mx-auto mb-4
                                    flex items-center justify-center dark:border border-border"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="w-10 h-10 dark:text-text-faint text-light-muted" fill="none" stroke="currentColor" strokeWidth="1">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                      </div>
                      <p className="font-sans text-xs dark:text-text-faint text-light-muted">
                        Portrait photo to be added
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={ABOUT.portrait}
                    alt="Pooja Nandhini S.M — freelance digital creative"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* Who I work with */}
            <div className="reveal delay-100">
              <p className="label mb-5">
                <span className="accent-line" aria-hidden="true" />
                Who I work with
              </p>
              <ul className="space-y-4" aria-label="Types of clients">
                {WHO_I_WORK_WITH.map(item => (
                  <li
                    key={item.title}
                    className="border-b dark:border-border border-light-border pb-4 last:border-0"
                  >
                    <p className="font-sans font-medium text-sm dark:text-text text-light-text mb-1">
                      {item.title}
                    </p>
                    <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — bio + tools */}
          <div>
            <p className="label mb-3 reveal">
              <span className="accent-line" aria-hidden="true" />
              About
            </p>
            <h2
              id="about-heading"
              className="font-display font-light text-4xl md:text-5xl lg:text-[3.25rem]
                         dark:text-text text-light-text leading-tight mb-8 reveal delay-100"
            >
              One partner.{' '}
              <span className="italic text-accent">Design to deployment.</span>
            </h2>

            <div className="space-y-5 mb-10 reveal delay-200">
              <p className="font-sans text-base dark:text-text-muted text-light-muted leading-relaxed">
                {ABOUT.intro}
              </p>
              <p className="font-sans text-base dark:text-text-muted text-light-muted leading-relaxed">
                {ABOUT.body}
              </p>
            </div>

            {/* How I work */}
            <div className="dark:bg-bg-raised bg-light-raised rounded-2xl p-6 mb-10 reveal delay-300">
              <p className="label mb-3">How I work</p>
              <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed">
                {ABOUT.howIWork}
              </p>
            </div>

            {/* Tools */}
            <div className="reveal delay-400">
              <p className="label mb-4">Tools I use regularly</p>
              <ul className="flex flex-wrap gap-2" aria-label="Tools and technologies">
                {ABOUT.tools.map(tool => (
                  <li key={tool} className="tag text-xs">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
