'use client'
import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    setActive(href)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(4,4,10,0.85)] backdrop-blur-2xl border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3"
            style={{ cursor: 'none' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
              style={{
                background: 'linear-gradient(135deg,#4f7fff,#00d4ff)',
                boxShadow: '0 0 20px rgba(0,212,255,0.35)',
              }}
            >
              SD
            </div>
            <span
              className="hidden sm:block text-sm font-bold tracking-tight"
              style={{ color: 'var(--txt)', fontFamily: 'var(--font-jakarta)' }}
            >
              Saroj Devkota
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={cn(
                  'px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200',
                  active === l.href
                    ? 'text-white bg-white/8'
                    : 'text-[var(--txt2)] hover:text-white hover:bg-white/5'
                )}
                style={{ cursor: 'none' }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden md:flex btn-primary text-xs px-5 py-2.5"
              style={{ cursor: 'none' }}
            >
              Get in touch
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-[var(--txt2)] hover:text-white transition"
              onClick={() => setOpen(!open)}
              style={{ cursor: 'none' }}
            >
              {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 pt-16"
          style={{ background: 'rgba(4,4,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-2xl font-bold text-[var(--txt2)] hover:text-white transition"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '.08em', cursor: 'none' }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary mt-4"
              style={{ cursor: 'none' }}
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </>
  )
}
