import { motion } from 'framer-motion'
import { INVITE_URL } from '../config'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Floating logo */}
        <motion.div
          className="animate-float mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        >
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-600/30 blur-xl scale-110" />
            <img
              src="/mhoo-bot.png"
              alt="Mhoo Bot"
              className="relative w-40 h-40 rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-gradient">Mhoo Bot</span>
          </h1>
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">
            Your Cutest Discord Companion
          </p>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Welcome new members with beautiful custom images, play music from YouTube &amp; Spotify,
            and keep your server fun with customizable word lists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-pink-500/20"
          >
            <span className="relative z-10">✨ Add to Discord</span>
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold text-base hover:border-white/30 hover:text-white transition-all hover:scale-105"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex gap-12 text-center"
        >
          {[
            { label: 'Commands', value: '15+' },
            { label: 'Platforms', value: '3' },
            { label: 'Free', value: '100%' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-white/40 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a14] to-transparent pointer-events-none" />
    </section>
  )
}
