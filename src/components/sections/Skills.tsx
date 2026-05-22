'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILLS_MATRIX, MARQUEE_ITEMS } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'

function SkillBar({
  name, level, color, inView, delay,
}: { name: string; level: number; color: string; inView: boolean; delay: number }) {
  const c = COLOR_MAP[color]
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ fontSize: '13px', color: 'var(--txt2)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: c }}>{level}%</span>
      </div>
      <div className="metric-bar">
        <motion.div
          className="metric-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${c}90, ${c})`, height: '3px', borderRadius: '999px' }}
        />
      </div>
    </div>
  )
}

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div
      className="overflow-hidden py-5 my-10 border-y"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3"
            style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '.1em', color: 'var(--txt3)' }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: i % 3 === 0 ? 'var(--cyan)' : i % 3 === 1 ? 'var(--blue)' : 'var(--green)', flexShrink: 0 }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [active, setActive] = useState<string | null>(null)

  const visible = active
    ? SKILLS_MATRIX.filter(g => g.category === active)
    : SKILLS_MATRIX

  return (
    <section id="skills" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">
            SKILLS &amp;<br />
            <span className="gradient-text-blue">TECHNOLOGIES.</span>
          </h2>
        </motion.div>

        <MarqueeStrip />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            onClick={() => setActive(null)}
            style={{ cursor: 'none' }}
            className={`px-4 py-2 rounded-lg text-[12px] font-mono tracking-[.06em] border transition-all ${
              !active ? 'bg-white/8 border-white/15 text-white' : 'bg-transparent border-white/6 text-[var(--txt3)] hover:border-white/12 hover:text-[var(--txt2)]'
            }`}
          >
            All
          </button>
          {SKILLS_MATRIX.map(g => (
            <button
              key={g.category}
              onClick={() => setActive(active === g.category ? null : g.category)}
              style={{ cursor: 'none' }}
              className={`px-4 py-2 rounded-lg text-[12px] font-mono tracking-[.06em] border transition-all ${
                active === g.category
                  ? 'bg-white/8 border-white/15 text-white'
                  : 'bg-transparent border-white/6 text-[var(--txt3)] hover:border-white/12 hover:text-[var(--txt2)]'
              }`}
            >
              {g.category}
            </button>
          ))}
        </motion.div>

        {/* Skill groups */}
        <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <AnimatePresence>
            {visible.map((group, gi) => {
              const c = COLOR_MAP[group.color]
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: gi * 0.06 }}
                  className="card glass-hover"
                  style={{ borderColor: `${c}20` }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-5"
                    style={{
                      background: `${c}10`,
                      border: `1px solid ${c}25`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      color: c,
                      textTransform: 'uppercase',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                    {group.category}
                  </div>

                  <div className="space-y-4">
                    {group.items.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={group.color}
                        inView={inView}
                        delay={0.3 + gi * 0.06 + si * 0.07}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
