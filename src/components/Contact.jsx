import { createElement, useState } from 'react'
import { PROFILE } from '../data'
import { Icons } from '../icons'

const SERVICES_LIST = [
  'Web Design',
  'Web Development',
  'Web Applications',
  "Not sure yet — let's talk",
]

const BUDGETS = [
  'Under ₹10,000',
  '₹10,000 – ₹30,000',
  '₹30,000 – ₹75,000',
  '₹75,000+',
  'Not sure yet',
]

const TIMELINES = [
  'ASAP (1–2 weeks)',
  '3–4 weeks',
  '1–2 months',
  '3+ months',
  'Flexible',
]

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${PROFILE.email}`, Icon: Icons.Mail, display: PROFILE.email },
  { label: 'WhatsApp', href: PROFILE.whatsapp, Icon: Icons.MessageCircle, display: 'WhatsApp' },
  { label: 'Instagram', href: PROFILE.instagram, Icon: Icons.Instagram, display: '@poojanandhini' },
  { label: 'LinkedIn', href: PROFILE.linkedin, Icon: Icons.Linkedin, display: 'LinkedIn' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({
    name: '', email: '', service: '', budget: '', timeline: '', message: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section divider" aria-labelledby="contact-heading">
      <div className="container-main">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

          {/* Left — text + social links */}
          <div>
            <p className="label mb-3 reveal">
              <span className="accent-line" aria-hidden="true" />
              Contact
            </p>
            <h2
              id="contact-heading"
              className="font-display font-light text-4xl md:text-5xl
                         dark:text-text text-light-text leading-tight mb-6 reveal delay-100"
            >
              Let's build your website.
            </h2>
            <p className="font-sans text-sm dark:text-text-muted text-light-muted leading-relaxed mb-10 reveal delay-200">
              Tell me about your project and I'll reply with a clear plan and next steps.
            </p>

            {/* Social / contact links */}
            <ul className="space-y-4 reveal delay-300" aria-label="Contact methods">
              {SOCIAL_LINKS.map(({ label, href, Icon, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-9 h-9 rounded-xl dark:bg-bg-raised bg-light-raised
                                     flex items-center justify-center dark:text-text-muted text-light-muted
                                     group-hover:bg-accent group-hover:text-bg transition-all duration-300"
                          aria-hidden="true">
                      {createElement(Icon, { className: 'w-4 h-4' })}
                    </span>
                    <span className="font-sans text-sm dark:text-text-muted text-light-muted
                                     group-hover:text-accent transition-colors duration-200">
                      {display}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Location */}
            <div className="flex items-center gap-2 mt-8 reveal delay-400">
              <Icons.MapPin className="w-4 h-4 dark:text-text-faint text-light-muted" aria-hidden="true" />
              <span className="font-sans text-xs dark:text-text-muted text-light-muted">{PROFILE.location}</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-200">
            {status === 'success' ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center
                           dark:bg-bg-raised bg-light-raised rounded-2xl p-12"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icons.Check className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-light text-2xl dark:text-text text-light-text mb-2">
                  Got it — thank you.
                </h3>
                <p className="font-sans text-sm dark:text-text-muted text-light-muted">
                  I'll read your brief and reply with next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                aria-label="Project brief form"
              >
                {/* Row: name + email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="label block mb-2">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="label block mb-2">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="contact-service" className="label block mb-2">Service needed</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    className="input appearance-none"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {SERVICES_LIST.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Budget + timeline */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-budget" className="label block mb-2">Budget range</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      className="input appearance-none"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range</option>
                      {BUDGETS.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-timeline" className="label block mb-2">Timeline</label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      className="input appearance-none"
                      value={form.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select a timeline</option>
                      {TIMELINES.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="label block mb-2">Tell me about your project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="input resize-none"
                    placeholder="What do you need? What's the goal? Any details that will help me understand the brief."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send brief'}
                    {status !== 'submitting' && (
                      <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                  {status === 'error' && (
                    <p role="alert" className="text-red-400 text-sm font-sans">
                      Something went wrong. Try emailing me directly.
                    </p>
                  )}
                </div>

                <p className="font-sans text-xs dark:text-text-faint text-light-muted">
                  No spam. Your details are only used to reply to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
