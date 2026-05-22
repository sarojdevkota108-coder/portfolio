'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      const r = 4 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.03
      ref.current.rotation.y -= delta * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#4f7fff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.12
      meshRef.current.rotation.y = clock.elapsedTime * 0.08
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.15
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 4]} />
      <meshStandardMaterial
        color="#4f7fff"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

function InnerGlow() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.04
      meshRef.current.scale.setScalar(s)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshStandardMaterial
        color="#00d4ff"
        transparent
        opacity={0.04}
        emissive="#00d4ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} color="#4f7fff" intensity={1.5} />
        <pointLight position={[-2, -1, 1]} color="#00d4ff" intensity={0.8} />
        <StarField />
        <FloatingOrb />
        <InnerGlow />
      </Canvas>
    </div>
  )
}
