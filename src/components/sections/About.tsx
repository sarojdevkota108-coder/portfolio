'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILL_GROUPS, ACADEMIC_MODULES } from '@/data/portfolio'
import { COLOR_MAP } from '@/lib/utils'
import { IconBuildingSkyscraper, IconCode, IconNetwork, IconUsers, IconDumbbell } from '@tabler/icons-react'

const DOMAINS = [
  { icon: <IconCode size={18} />,              label: 'Web Dev',      color: 'cyan'   },
  { icon: <IconNetwork size={18} />,           label: 'Networks',     color: 'blue'   },
  { icon: <IconBuildingSkyscraper size={18} />, label: 'Design',      color: 'green'  },
  { icon: <IconUsers size={18} />,             label: 'Community',    color: 'amber'  },
  { icon: <IconDumbbell size={18} />,          label: 'Fitness',      color: 'violet' },
]

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            MULTIDISCIPLINARY<br />
            <span className="gradient-text-blue">BY DESIGN.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div style={{ fontSize: '16px', color: 'var(--txt2)', lineHeight: 1.9 }}>
              <p>
                I graduated from <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>Herald College Kathmandu</strong>,
                affiliated with the <strong style={{ color: 'var(--txt)', fontWeight: 600 }}>University of Wolverhampton</strong>,
                with a programme spanning software engineering, full-stack development, cloud technologies,
                artificial intelligence, networking, and modern computing systems.
              </p>

              {/* Pull quote */}
              <div
                className="my-8 px-6 py-5 rounded-r-xl"
                style={{
                  borderLeft: '2px solid var(--cyan)',
                  background: 'rgba(0,212,255,0.04)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '28px',
                    letterSpacing: '.03em',
                    color: 'var(--cyan)',
                    lineHeight: 1.3,
                  }}
                >
                  "I do not specialise. I synthesise."
                </p>
              </div>

              <p>
                I build enterprise networks and write production code. I design physical spaces and
                architect digital systems. I train communities and train my body. Every domain feeds
                every other — this is not distraction, it is compound interest on curiosity.
              </p>
            </div>

            {/* Domain pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {DOMAINS.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{
                    background: `rgba(${d.color === 'cyan' ? '0,212,255' : d.color === 'blue' ? '79,127,255' : d.color === 'green' ? '0,229,153' : d.color === 'amber' ? '255,170,0' : '167,139,250'},0.08)`,
                    border: `1px solid ${COLOR_MAP[d.color]}30`,
                    color: COLOR_MAP[d.color],
                  }}
                >
                  {d.icon} {d.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {SKILL_GROUPS.map((g, i) => (
              <div key={i} className="card">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '.14em',
                    color: COLOR_MAP[g.color],
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map(t => (
                    <span key={t} className={`tag tag-${g.color}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Academic modules */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20"
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '.2em',
              color: 'var(--txt3)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Academic Modules — Herald College · University of Wolverhampton
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {ACADEMIC_MODULES.map((yr, i) => (
              <div key={i} className="card glass-hover">
                <div
                  className="mb-4 text-sm font-bold tracking-wide"
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '20px',
                    letterSpacing: '.04em',
                    color: ['var(--cyan)', 'var(--blue)', 'var(--violet)'][i],
                  }}
                >
                  {yr.year}
                </div>
                <ul className="space-y-2">
                  {yr.modules.map(m => (
                    <li
                      key={m}
                      className="text-[13px] flex items-start gap-2"
                      style={{ color: 'var(--txt2)', lineHeight: 1.55 }}
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: ['var(--cyan)', 'var(--blue)', 'var(--violet)'][i] }}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
