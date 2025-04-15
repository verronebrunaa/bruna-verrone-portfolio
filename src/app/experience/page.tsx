import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Experience from '@/components/sections/Experience'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Experience />
      </main>
      
      <Footer />
    </div>
  )
}