'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CERTIFICATIONS } from '@/data/portfolio'
import { COLOR_MAP, STATUS_CONFIG } from '@/lib/utils'
import { IconCheck, IconRefresh, IconClock, IconExternalLink } from '@tabler/icons-react'

type Filter = 'all' | 'done' | 'prog' | 'upcoming'

const STATUS_ICONS = {
  done:     <IconCheck size={11} />,
  prog:     <IconRefresh size={11} />,
  upcoming: <IconClock size={11} />,
}

export function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState<Filter>('all')

  const visible = CERTIFICATIONS.filter(c => filter === 'all' || c.status === filter)

  return (
    <section id="certifications" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">Credentials</div>
          <h2 className="section-title">
            CERTIFICATIONS<br />
            <span className="gradient-text-blue">& LEARNING.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {(['all', 'done', 'prog', 'upcoming'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ cursor: 'none' }}
              className={`px-4 py-2 rounded-lg text-[12px] font-mono tracking-[.06em] border transition-all duration-200 ${
                filter === f
                  ? 'bg-white/8 border-white/15 text-white'
                  : 'bg-transparent border-white/6 text-[var(--txt3)] hover:border-white/12 hover:text-[var(--txt2)]'
              }`}
            >
              {{
                all:      'All',
                done:     'Completed',
                prog:     'In Progress',
                upcoming: 'Upcoming',
              }[f]}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {visible.map((c, i) => {
              const col = COLOR_MAP[c.color]
              const st  = STATUS_CONFIG[c.status]
              return (
                <motion.div
                  key={c.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="card glass-hover relative overflow-hidden group"
                  style={{
                    borderColor: c.status === 'done' ? `${col}20` : c.status === 'prog' ? `${col}20` : 'var(--line)',
                    opacity: c.status === 'upcoming' ? 0.65 : 1,
                  }}
                >
                  {/* Top glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${col}60, transparent)` }}
                  />

                  <div
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono tracking-[.06em] mb-3 ${st.colorClass}`}
                  >
                    {STATUS_ICONS[c.status as keyof typeof STATUS_ICONS]}
                    {st.label}
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.06em', color: 'var(--txt3)', marginBottom: '4px' }}>
                    {c.issuer}
                  </div>

                  <div style={{ fontSize: '14px', color: 'var(--txt)', fontWeight: 500, lineHeight: 1.4, marginBottom: '8px' }}>
                    {c.name}
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--txt3)' }}>
                    {c.year}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Learning roadmap teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 rounded-xl p-6"
          style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.18em', color: 'var(--txt3)', marginBottom: '16px', textTransform: 'uppercase' }}>
            Upcoming Learning Roadmap — 2025
          </div>
          <div className="flex flex-wrap gap-3">
            {['Advanced Django & React', 'AWS Solutions Architect', 'CCNA', 'Cloud Engineering', 'REST API Specialization'].map(item => (
              <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}>
                <IconClock size={12} style={{ color: 'var(--violet)' }} />
                <span style={{ fontSize: '12px', color: 'var(--txt2)' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
