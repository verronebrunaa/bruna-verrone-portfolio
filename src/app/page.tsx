import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}