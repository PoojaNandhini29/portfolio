import { createElement } from 'react'
import { PROFILE } from '../data'
import { Icons } from '../icons'

const FOOTER_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const SOCIAL = [
  { label: 'GitHub', href: PROFILE.github, Icon: Icons.Github },
  { label: 'LinkedIn', href: PROFILE.linkedin, Icon: Icons.Linkedin },
  { label: 'Instagram', href: PROFILE.instagram, Icon: Icons.Instagram },
]

export default function Footer() {
  const year = 2026

  return (
    <footer
      className="py-12 border-t dark:border-border border-light-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Brand + tagline */}
          <div>
            <a
              href="/"
              className="font-display text-xl font-light dark:text-text text-light-text hover:text-accent transition-colors"
              aria-label="Pooja Nandhini — home"
            >
              Pooja<span className="text-accent">.</span>
            </a>
            <p className="font-sans text-xs dark:text-text-faint text-light-muted mt-1">
              Freelance web designer and developer.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-5">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link text-xs">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <ul className="flex items-center gap-3" aria-label="Social links">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full
                             dark:text-text-faint text-light-muted
                             hover:text-accent hover:dark:bg-bg-raised hover:bg-light-raised
                             transition-all duration-200"
                >
                  {createElement(Icon, { className: 'w-4 h-4', 'aria-hidden': true })}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t dark:border-border border-light-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-sans text-xs dark:text-text-faint text-light-muted">
            &copy; {year} Pooja Nandhini S.M. Freelance web designer and developer.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-sans text-xs dark:text-text-muted text-light-muted hover:text-accent transition-colors"
          >
            {PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
