import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Commands from './components/Commands'
import InviteCTA from './components/InviteCTA'
import Footer from './components/Footer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}
