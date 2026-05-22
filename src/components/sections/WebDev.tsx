'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS, ACADEMIC_MODULES } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'
import {
  IconArrowUpRight, IconBrandGithub, IconExternalLink,
  IconChevronRight, IconCheck,
} from '@tabler/icons-react'

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const c = COLOR_MAP[project.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`card glass-hover relative overflow-hidden ${project.featured ? 'md:col-span-2' : ''}`}
      style={{
        borderColor: hovered ? `${c}30` : 'var(--line)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${c}0c 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className={`relative ${project.featured ? 'md:flex gap-10' : ''}`}>
        {/* Left */}
        <div className={project.featured ? 'flex-1' : ''}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div
              className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest"
              style={{
                background: `${c}12`,
                border: `1px solid ${c}25`,
                color: c,
              }}
            >
              {project.badge}
            </div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: project.featured ? '32px' : '24px',
              letterSpacing: '.03em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '10px',
            }}
          >
            {project.title}
          </h3>

          <p style={{ fontSize: '14px', color: 'var(--txt2)', lineHeight: 1.7, marginBottom: '16px' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <a href="#" className="btn-ghost text-[13px] py-2 px-4" style={{ cursor: 'none' }}>
              <IconBrandGithub size={14} /> GitHub
            </a>
            <a href="#" className="btn-ghost text-[13px] py-2 px-4" style={{ cursor: 'none', color: c, borderColor: `${c}30` }}>
              Case Study <IconArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Right — featured metrics & features */}
        {project.featured && (
          <div className="md:w-64 mt-6 md:mt-0 flex flex-col gap-4">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map(m => (
                <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', color: c, letterSpacing: '.02em' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', color: 'var(--txt3)', textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Features */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.12em', color: 'var(--txt3)', marginBottom: '10px', textTransform: 'uppercase' }}>
                Core Features
              </div>
              <ul className="space-y-2">
                {project.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--txt2)' }}>
                    <IconCheck size={12} className="mt-0.5 flex-shrink-0" style={{ color: c }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Simulated Django dashboard
function DashboardPreview() {
  return (
    <div className="terminal mt-12">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#ff6b8a' }} />
        <div className="terminal-dot" style={{ background: '#ffaa00' }} />
        <div className="terminal-dot" style={{ background: '#00e599' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--txt3)', marginLeft: '8px' }}>
          donation_system / admin / dashboard.py
        </span>
      </div>
      <div className="p-5 space-y-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
        {[
          ['keyword', 'from'],  ['normal', ' django.contrib '],  ['keyword', 'import'],  ['normal', ' admin'],
          ['comment', ''],
          ['keyword', '@admin.register'],  ['normal', '(Donation)'],
          ['keyword', 'class'],  ['normal', ' DonationAdmin(admin.ModelAdmin):'],
          ['indent', '    '],  ['attr', 'list_display'],  ['normal', ' = ['],  ['string', "'id', 'donor', 'amount', 'status', 'date'"],  ['normal', ']'],
          ['indent', '    '],  ['attr', 'list_filter'],   ['normal', ' = ['],  ['string', "'status', 'date'"],  ['normal', ']'],
          ['indent', '    '],  ['attr', 'search_fields'], ['normal', ' = ['],  ['string', "'donor__email', 'reference'"],  ['normal', ']'],
        ].reduce((acc, _, i, arr) => {
          if (i % 4 === 0) {
            acc.push(arr.slice(i, i + 4))
          }
          return acc
        }, [] as (typeof _)[][]).map((line, li) => (
          <div key={li} className="flex flex-wrap">
            {line.map(([type, text], ti) => (
              <span key={ti} style={{ color: type === 'keyword' ? 'var(--violet)' : type === 'string' ? 'var(--green)' : type === 'attr' ? 'var(--cyan)' : type === 'comment' ? 'var(--txt3)' : 'var(--txt2)' }}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function WebDev() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="webdev" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">Full Stack Development</div>
          <h2 className="section-title">
            SELECTED<br />
            <span className="gradient-text-blue">PROJECTS.</span>
          </h2>
          <p className="section-desc">
            Production-grade applications spanning full-stack development, network architecture,
            and immersive spatial design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <DashboardPreview />
      </div>
    </section>
  )
}
