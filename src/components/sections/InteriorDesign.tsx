'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { INTERIOR_FLOORS } from '@/data/portfolio'
import { IconChevronLeft, IconChevronRight, IconBuildingSkyscraper } from '@tabler/icons-react'

export function InteriorDesign() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFloor, setActiveFloor] = useState(0)

  const floor = INTERIOR_FLOORS[activeFloor]

  return (
    <section id="design" className="section max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">Interior Design</div>
          <h2 className="section-title">
            SPATIAL<br />
            <span className="gradient-text-green">ARCHITECTURE.</span>
          </h2>
          <p className="section-desc">
            Contemporary luxury residential project spanning three floors — 3D visualization workflow,
            material palette curation, and smart space planning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-5 gap-5"
        >
          {/* Floor navigator */}
          <div className="md:col-span-1 flex md:flex-col gap-3">
            {INTERIOR_FLOORS.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFloor(i)}
                style={{ cursor: 'none' }}
                className={`flex flex-col items-start gap-1 p-4 rounded-xl text-left transition-all duration-300 flex-1 md:flex-none border ${
                  i === activeFloor
                    ? 'border-[#00e599]/40 bg-[rgba(0,229,153,0.06)]'
                    : 'border-white/5 bg-[var(--bg2)] hover:border-white/10'
                }`}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '28px',
                    letterSpacing: '.03em',
                    color: i === activeFloor ? '#00e599' : 'var(--txt3)',
                    lineHeight: 1,
                    transition: 'color .3s',
                  }}
                >
                  F{f.floor}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '.1em',
                    color: i === activeFloor ? '#00e599' : 'var(--txt3)',
                    textTransform: 'uppercase',
                    transition: 'color .3s',
                  }}
                >
                  {f.label}
                </span>
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFloor}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Render placeholder (in prod replace with actual renders) */}
                <div
                  className="rounded-xl mb-5 relative overflow-hidden"
                  style={{
                    height: '300px',
                    background: `linear-gradient(135deg, ${floor.palette[2]}20, ${floor.palette[0]}30)`,
                    border: '1px solid var(--line)',
                  }}
                >
                  {/* Architectural grid overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <IconBuildingSkyscraper
                      size={64}
                      style={{ color: floor.palette[0], opacity: 0.4 }}
                    />
                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '32px', letterSpacing: '.06em', color: 'rgba(255,255,255,0.15)' }}>
                      {floor.label.toUpperCase()} · 3D RENDER
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.2em', color: 'rgba(255,255,255,0.1)' }}>
                      PRODUCTION RENDER · REPLACE WITH ACTUAL IMAGES
                    </div>
                  </div>
                  {/* Floor badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#00e599',
                      letterSpacing: '.06em',
                    }}
                  >
                    Floor {floor.floor} of 3
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Description */}
                  <div className="card">
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.14em', color: 'var(--txt3)', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Space Brief
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--txt2)', lineHeight: 1.75, marginBottom: '16px' }}>
                      {floor.description}
                    </p>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.12em', color: 'var(--txt3)', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Rooms
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {floor.rooms.map(r => (
                        <span key={r} className="tag tag-green">{r}</span>
                      ))}
                    </div>
                  </div>

                  {/* Palette */}
                  <div className="card">
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.14em', color: 'var(--txt3)', marginBottom: '14px', textTransform: 'uppercase' }}>
                      Material Palette
                    </div>
                    <div className="flex gap-3 mb-4">
                      {floor.palette.map((c, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div
                            className="w-12 h-12 rounded-lg border"
                            style={{ background: c, borderColor: 'rgba(255,255,255,0.1)' }}
                          />
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--txt3)', letterSpacing: '.06em' }}>
                            {c.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', color: 'var(--txt3)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Project Highlights
                    </div>
                    <ul className="space-y-1">
                      {['3D Visualization Workflow', 'AutoCAD Space Planning', 'Smart Lighting Design', 'Contemporary Luxury Style'].map(h => (
                        <li key={h} className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--txt2)' }}>
                          <span className="w-1 h-1 rounded-full" style={{ background: '#00e599', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
