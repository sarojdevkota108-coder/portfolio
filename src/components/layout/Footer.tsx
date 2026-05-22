'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUp } from '@tabler/icons-react'
import { NAV_LINKS } from '@/data/portfolio'

const SOCIALS = [
  { icon: <IconBrandGithub size={16} />,   href: 'https://github.com/sarojdevkota',      label: 'GitHub'   },
  { icon: <IconBrandLinkedin size={16} />, href: 'https://linkedin.com/in/sarojdevkota', label: 'LinkedIn' },
  { icon: <IconMail size={16} />,          href: 'mailto:saroj@example.com',             label: 'Email'    },
]

export function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      ref={ref}
      className="relative border-t overflow-hidden"
      style={{ borderColor: 'var(--line)', background: 'var(--bg2)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(79,127,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black text-white"
                style={{
                  background: 'linear-gradient(135deg,#4f7fff,#00d4ff)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                }}
              >
                SD
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '20px',
                  letterSpacing: '.05em',
                  color: '#fff',
                }}
              >
                Saroj Devkota
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--txt3)', lineHeight: 1.7, maxWidth: '260px' }}>
              Multidisciplinary engineer, designer, and community builder from Kathmandu, Nepal.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="status-dot" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)', letterSpacing: '.08em' }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '.18em',
                color: 'var(--txt3)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    fontFamily: 'var(--font-jakarta)',
                    fontSize: '13px',
                    color: 'var(--txt3)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'none',
                    padding: '2px 0',
                    transition: 'color .2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--txt)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--txt3)')}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '.18em',
                color: 'var(--txt3)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Connect
            </div>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: 'none', textDecoration: 'none' }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-white/10"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--line)', color: 'var(--txt3)' }}
                  >
                    {s.icon}
                  </div>
                  <span
                    style={{ fontSize: '13px', color: 'var(--txt3)', transition: 'color .2s' }}
                    className="group-hover:text-white"
                  >
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="line-sep mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--txt3)', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} Saroj Devkota · Kathmandu, Nepal
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--txt3)', letterSpacing: '.06em' }}>
            Built with Next.js · Framer Motion · Three.js
          </div>

          <button
            onClick={scrollTop}
            style={{ cursor: 'none' }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6 text-[var(--txt3)] hover:text-white hover:border-white/12 transition-all duration-200"
          >
            <IconArrowUp size={13} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.06em' }}>
              BACK TO TOP
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
