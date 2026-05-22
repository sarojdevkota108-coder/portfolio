'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { IconBrandGithub, IconBrandLinkedin, IconArrowDown, IconMapPin } from '@tabler/icons-react'
import { METRICS } from '@/data/portfolio'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { ref: metricsRef, inView } = useInView({ triggerOnce: true })

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 80
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   -Math.random() * 0.6 - 0.2,
      r:    Math.random() * 1.5 + 0.4,
      life: Math.random(),
      maxLife: Math.random() * 0.6 + 0.4,
    }))

    let mouse = { x: -1000, y: -1000 }
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.life += 0.004
        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width
          p.y = canvas.height + 10
          p.life = 0
          p.maxLife = Math.random() * 0.6 + 0.4
          p.vx = (Math.random() - 0.5) * 0.4
          p.vy = -Math.random() * 0.6 - 0.2
        }

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80) {
          p.vx += (dx / dist) * 0.05
          p.vy += (dy / dist) * 0.05
        }

        p.x += p.vx
        p.y += p.vy

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${alpha})`
        ctx.fill()
      })

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(79,127,255,${(1 - dist / 100) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show:   (delay: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }
    }),
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '80px' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-grid opacity-100"
          style={{ maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)' }}
        />
        <div
          className="absolute"
          style={{
            top: '-10%', right: '-5%', width: '55%', height: '70%',
            background: 'radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '0', left: '-5%', width: '40%', height: '50%',
            background: 'radial-gradient(ellipse, rgba(0,229,153,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6, pointerEvents: 'none' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full text-[11px] font-mono tracking-[.04em]"
          style={{
            background: 'rgba(0,229,153,0.06)',
            border: '1px solid rgba(0,229,153,0.2)',
            color: 'var(--green)',
          }}
        >
          <span className="status-dot" />
          Available for opportunities · Kathmandu, Nepal
          <IconMapPin size={12} />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.35}
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(72px, 12vw, 160px)',
            lineHeight: 0.88,
            letterSpacing: '.03em',
            color: '#fff',
            marginBottom: '8px',
          }}
        >
          SAROJ{' '}
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px var(--cyan)',
              position: 'relative',
            }}
          >
            DEVKOTA
            <span
              style={{
                position: 'absolute',
                left: 0, top: 0,
                color: 'var(--cyan)',
                opacity: 0.12,
                filter: 'blur(10px)',
                WebkitTextStroke: '0',
              }}
            >
              DEVKOTA
            </span>
          </span>
        </motion.h1>

        {/* Role switcher */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
          className="mb-8"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(13px,1.8vw,18px)',
            color: 'var(--cyan)',
            letterSpacing: '.04em',
          }}
        >
          {'> '}
          <TypeAnimation
            sequence={[
              'Web Developer & Full-Stack Engineer',  2400,
              'Network Engineer & Cloud Enthusiast',  2400,
              'Interior Designer & Space Planner',    2400,
              'Community Leader & Cyber Trainer',     2400,
              'Lifelong Learner & Creator',           2400,
            ]}
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
          />
          <span style={{ opacity: 0.5 }}>_</span>
        </motion.div>

        {/* Desc */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.65}
          variants={fadeUp}
          className="mb-10 text-base md:text-lg leading-relaxed"
          style={{ maxWidth: '560px', color: 'var(--txt2)' }}
        >
          Multidisciplinary professional passionate about technology, design, infrastructure, and
          continuous learning — building digital experiences, enterprise networks and creative spaces
          from Kathmandu.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.8}
          variants={fadeUp}
          className="flex flex-wrap gap-3 mb-16"
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('webdev')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'none' }}
          >
            Explore Portfolio
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'none' }}
          >
            Contact Me
          </button>
          <a
            href="https://github.com/sarojdevkota"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ cursor: 'none' }}
          >
            <IconBrandGithub size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarojdevkota"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ cursor: 'none' }}
          >
            <IconBrandLinkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          ref={metricsRef}
          initial="hidden"
          animate="show"
          custom={0.95}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/6 rounded-xl overflow-hidden"
          style={{ maxWidth: '680px' }}
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="px-6 py-5 border-r border-b border-white/6 last:border-r-0"
              style={{ background: 'var(--bg2)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '44px',
                  lineHeight: 1,
                  color: '#fff',
                  letterSpacing: '.03em',
                  marginBottom: '4px',
                }}
              >
                {inView ? (
                  <CountUp
                    end={parseInt(m.num)}
                    duration={2}
                    suffix={m.suffix}
                    useEasing
                  />
                ) : (
                  `0${m.suffix}`
                )}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '.14em',
                  color: 'var(--txt3)',
                  textTransform: 'uppercase',
                }}
              >
                {m.lbl || m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '.15em',
            color: 'var(--txt3)',
          }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{ background: 'var(--line)' }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1/2"
            style={{
              background: 'linear-gradient(to bottom, var(--cyan), transparent)',
              animation: 'scrollHint 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollHint {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}
