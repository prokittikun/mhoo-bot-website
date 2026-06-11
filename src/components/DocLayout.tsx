import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function DocLayout({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/mhoo-bot.png" alt="Mhoo Bot" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-white">Mhoo Bot</span>
          </Link>
          <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gradient mb-2">{title}</h1>
          <p className="text-white/40 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose-doc space-y-8">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-between items-center text-white/30 text-sm">
          <span>© {new Date().getFullYear()} Mhoo Bot</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
