import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Commands from './components/Commands'
import InviteCTA from './components/InviteCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a14] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Commands />
        <InviteCTA />
      </main>
      <Footer />
    </div>
  )
}
