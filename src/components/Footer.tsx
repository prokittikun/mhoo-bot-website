import { Link } from 'react-router-dom'
import { INVITE_URL } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/mhoo-bot.png" alt="Mhoo Bot" className="w-8 h-8 rounded-full" />
          <span className="text-white/60 text-sm">Mhoo Bot — Made with 💖</span>
        </div>

        <div className="flex items-center gap-6 text-white/40 text-sm">
          <a href="#features" className="hover:text-white/70 transition-colors">Features</a>
          <a href="#commands" className="hover:text-white/70 transition-colors">Commands</a>
          <a href={INVITE_URL} target="_blank" rel="noreferrer" className="hover:text-white/70 transition-colors">
            Invite
          </a>
          <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
        </div>

        <p className="text-white/20 text-xs">Not affiliated with Discord Inc.</p>
      </div>
    </footer>
  )
}
