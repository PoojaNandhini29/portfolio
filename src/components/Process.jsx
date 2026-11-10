import { PROCESS } from '../data'

export default function Process() {
  return (
    <section id="process" className="section divider" aria-labelledby="process-heading">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="label mb-3 reveal">
            <span className="accent-line" aria-hidden="true" />
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl
                       dark:text-text text-light-text leading-tight reveal delay-100"
          >
            From brief to launch in five steps
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative" aria-label="Project process">
          {/* Vertical connector line — desktop */}
          <div
            className="hidden lg:block absolute left-[3.25rem] top-10 bottom-10 w-px dark:bg-border bg-light-border"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {PROCESS.map((item, i) => (
              <li
                key={item.step}
                className="reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-6 lg:gap-12 py-8 border-b dark:border-border border-light-border last:border-0">
                  {/* Step number */}
                  <div className="shrink-0 relative">
                    <span
                      className="step-num block w-16 text-right lg:text-right"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    {/* Circle on the line */}
                    <div
                      className="hidden lg:block absolute top-3 left-[3.25rem] w-2.5 h-2.5 -ml-[1.25rem]
                                  rounded-full dark:bg-bg-surface bg-light-surface border-2 dark:border-border border-light-border
                                  group-hover:border-accent transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 grid lg:grid-cols-2 gap-4 lg:gap-12 pt-2">
                    <div>
                      <h3 className="font-display font-light text-2xl md:text-3xl dark:text-text text-light-text mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="label mb-2">You receive</p>
                      <p className="font-sans text-sm dark:text-text text-light-text leading-relaxed">
                        {item.clientGets}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ol>

        {/* CTA */}
        <div className="mt-12 flex gap-4 reveal">
          <a href="/#contact" className="btn-primary">
            Start the conversation
          </a>
        </div>
      </div>
    </section>
  )
}
