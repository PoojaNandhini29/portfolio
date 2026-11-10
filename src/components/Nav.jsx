import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../icons'
import { useTheme, useLockBodyScroll } from '../hooks'
import { PROFILE, NAV_LINKS } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleTheme = useTheme()

  useLockBodyScroll(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'dark:bg-bg/90 bg-light-bg/90 backdrop-blur-md border-b dark:border-border border-light-border'
          : 'bg-transparent border-b border-transparent'
        }`}
      role="banner"
    >
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo / wordmark */}
        <Link
          to="/"
          className="font-display text-xl font-light dark:text-text text-light-text hover:text-accent transition-colors"
          aria-label="Pooja Nandhini — home"
        >
          Pooja<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="w-9 h-9 flex items-center justify-center rounded-full dark:text-text-muted text-light-muted hover:text-accent transition-colors"
          >
            <Icons.Moon className="w-4 h-4 dark:block hidden" />
            <Icons.Sun className="w-4 h-4 dark:hidden block" />
          </button>

          <a
            href="/#contact"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Work with me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex items-center justify-center dark:text-text text-light-text"
          >
            {open ? <Icons.X className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 dark:bg-bg bg-light-bg z-40 flex flex-col px-5 pt-8 pb-10 gap-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light dark:text-text text-light-text hover:text-accent transition-colors border-b dark:border-border border-light-border pb-4"
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 self-start">
            Work with me
          </a>
        </div>
      )}
    </header>
  )
}
