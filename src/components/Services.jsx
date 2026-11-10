import { useState } from 'react'
import { SERVICES } from '../data'
import { serviceIcon, Icons } from '../icons'

// Group services by their 'group' field
const GROUPS = ['Design', 'Build', 'Build', '']
const GROUP_LABELS = {
  Design: 'Plan the experience',
  Build: 'Develop the website',
}

export default function Services() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section id="services" className="section divider" aria-labelledby="services-heading">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="label mb-3 reveal">
            <span className="accent-line" aria-hidden="true" />
            Services
          </p>
          <h2
            id="services-heading"
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl
                       dark:text-text text-light-text leading-tight mb-6 reveal delay-100"
          >
            Websites built to look great and perform well
          </h2>
          <p className="font-sans text-sm dark:text-text-muted text-light-muted max-w-[56ch] leading-relaxed reveal delay-200">
            
          </p>
        </div>

        {/* Service connection flow */}
        <div className="hidden md:flex items-center gap-0 mb-16 overflow-x-auto no-scrollbar reveal delay-300">
          {GROUPS.map((group, i) => (
            <div key={group} className="flex items-center shrink-0">
              <div className="text-center px-6">
                <p className="label mb-1">{group}</p>
                <p className="font-sans text-xs dark:text-text-muted text-light-muted">{GROUP_LABELS[group]}</p>
              </div>
              {i < GROUPS.length - 1 && (
                <Icons.ArrowRight
                  className="w-5 h-5 dark:text-text-faint text-light-muted shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Services accordion */}
        <div
          className="border dark:border-border border-light-border rounded-2xl overflow-hidden reveal delay-200"
          role="list"
          aria-label="Service list"
        >
          {SERVICES.map(service => {
            const Icon = serviceIcon(service.icon)
            const isOpen = activeId === service.id
            return (
              <div
                key={service.id}
                className={`border-b dark:border-border border-light-border last:border-0
                             transition-colors duration-300
                             ${isOpen ? 'dark:bg-bg-raised bg-light-raised' : ''}`}
                role="listitem"
              >
                <button
                  onClick={() => setActiveId(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-body-${service.id}`}
                  id={`service-btn-${service.id}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                             hover:dark:bg-bg-raised hover:bg-light-raised transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                                  ${isOpen ? 'bg-accent text-bg' : 'dark:bg-bg-raised bg-light-raised dark:text-text-muted text-light-muted'}`}
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-sans font-medium text-sm dark:text-text text-light-text block">
                        {service.title}
                      </span>
                      <span className="label mt-0.5">{service.group}</span>
                    </div>
                  </div>
                  <Icons.ChevronDown
                    className={`w-4 h-4 dark:text-text-muted text-light-muted shrink-0 transition-transform duration-300
                                ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Expanded body */}
                <div
                  id={`service-body-${service.id}`}
                  role="region"
                  aria-labelledby={`service-btn-${service.id}`}
                  className={`overflow-hidden transition-all duration-400 ease-smooth
                              ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-2 grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="label mb-2">For</p>
                      <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed">
                        {service.forWho}
                      </p>
                    </div>
                    <div>
                      <p className="label mb-2">Includes</p>
                      <ul className="space-y-1.5">
                        {service.included.map(item => (
                          <li key={item} className="flex items-start gap-2 font-sans text-sm dark:text-text-muted text-light-muted">
                            <Icons.Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label mb-2">You receive</p>
                      <p className="font-sans text-sm dark:text-text text-light-text leading-relaxed font-medium">
                        {service.deliverable}
                      </p>
                      <a
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-sans hover:underline"
                      >
                        Enquire about this service
                        <Icons.ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
