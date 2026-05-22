import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { WebDev } from '@/components/sections/WebDev'
import { Networking } from '@/components/sections/Networking'
import { InteriorDesign } from '@/components/sections/InteriorDesign'
import { Certifications } from '@/components/sections/Certifications'
import { Volunteer } from '@/components/sections/Volunteer'
import { Fitness } from '@/components/sections/Fitness'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <WebDev />
      <Networking />
      <InteriorDesign />
      <Certifications />
      <Volunteer />
      <Fitness />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
