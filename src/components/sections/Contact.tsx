'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  IconBrandGithub, IconBrandLinkedin, IconBrandTwitter,
  IconMail, IconMapPin, IconSend, IconCheck,
} from '@tabler/icons-react'

const SOCIALS = [
  { icon: <IconBrandGithub size={18} />,   label: 'GitHub',   href: 'https://github.com/sarojdevkota',           color: '#fff'     },
  { icon: <IconBrandLinkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/sarojdevkota',      color: '#0a66c2'  },
  { icon: <IconMail size={18} />,          label: 'Email',    href: 'mailto:saroj@example.com',                  color: '#00d4ff'  },
]

type Status = 'idle' | 'sending' | 'done' | 'error'

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Replace with your API endpoint (e.g., Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1400))
    setStatus('done')
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = [
    'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200',
    'text-white placeholder:text-[var(--txt3)]',
    'border border-white/6 bg-[var(--bg3)]',
    'focus:border-[rgba(0,212,255,0.4)] focus:ring-2 focus:ring-[rgba(0,212,255,0.08)]',
  ].join(' ')

  return (
    <section id="contact" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow justify-center">Contact</div>
          <h2 className="section-title">
            LET'S BUILD<br />
            <span className="gradient-text-blue">TOGETHER.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--txt2)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            Open to collaborations, freelance work, internship opportunities, and interesting conversations
            about technology, design or infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Left info */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Location */}
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,229,153,0.08)', color: 'var(--green)' }}
                >
                  <IconMapPin size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--txt)', fontWeight: 500 }}>Location</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--txt3)' }}>
                    Kathmandu, Nepal
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="status-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)', letterSpacing: '.06em' }}>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Socials */}
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'none' }}
                className="card glass-hover flex items-center gap-3 no-underline"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.icon}
                </div>
                <span style={{ fontSize: '14px', color: 'var(--txt)', fontWeight: 500 }}>
                  {s.label}
                </span>
              </a>
            ))}

            {/* Response time */}
            <div
              className="card"
              style={{ borderColor: 'rgba(79,127,255,0.2)', background: 'rgba(79,127,255,0.04)' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '.1em', color: 'var(--blue)',
                marginBottom: '6px', textTransform: 'uppercase',
              }}>
                Response Time
              </div>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '28px', letterSpacing: '.04em', color: '#fff' }}>
                &lt; 24 HRS
              </div>
              <div style={{ fontSize: '12px', color: 'var(--txt3)', marginTop: '4px' }}>
                Typically respond within one business day.
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
              <div
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  letterSpacing: '.18em', color: 'var(--txt3)',
                  textTransform: 'uppercase', marginBottom: '4px',
                }}
              >
                Send a Message
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={inputClass}
                  required
                  style={{ fontFamily: 'var(--font-jakarta)', cursor: 'none' }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                  required
                  style={{ fontFamily: 'var(--font-jakarta)', cursor: 'none' }}
                />
              </div>

              <textarea
                rows={5}
                placeholder="Your message — project idea, opportunity, question..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className={inputClass}
                required
                style={{ fontFamily: 'var(--font-jakarta)', resize: 'none', cursor: 'none' }}
              />

              <button
                type="submit"
                disabled={status === 'sending' || status === 'done'}
                className="btn-primary self-start"
                style={{ cursor: 'none', minWidth: '160px', justifyContent: 'center' }}
              >
                {status === 'idle'    && <><IconSend size={15} /> Send Message</>}
                {status === 'sending' && <>Sending…</>}
                {status === 'done'    && <><IconCheck size={15} /> Sent!</>}
                {status === 'error'   && <>Try again</>}
              </button>

              {status === 'done' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--green)', letterSpacing: '.06em' }}
                >
                  ✓ Message received. I'll get back to you shortly!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
