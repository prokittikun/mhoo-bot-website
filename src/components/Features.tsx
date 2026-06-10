import { motion } from 'framer-motion'
import { Music, Image, List, Shuffle, Mic2, Bell, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Bell,
    title: 'Welcome Images',
    description: 'Greet new members with beautiful custom-designed images featuring their avatar, display name, and a fun random word.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    icon: Music,
    title: 'Music Player',
    description: 'Play music from YouTube, Spotify, and SoundCloud with full queue management, loop modes, shuffle, and interactive button controls.',
    gradient: 'from-purple-500 to-violet-500',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    icon: List,
    title: 'Word Lists',
    description: 'Each server has its own word list used in welcome images. Add, remove, and edit words through easy slash commands.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    icon: Shuffle,
    title: 'Word Modes',
    description: 'Choose between random mode (picks a surprise word each time) or fixed mode (always shows the same word).',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: Image,
    title: 'Custom Backgrounds',
    description: 'Upload your own background image for welcome cards. Each server gets its own unique look stored securely in the cloud.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-amber-500/20',
  },
  {
    icon: Mic2,
    title: 'Multi-Platform Audio',
    description: 'Supports YouTube playlists, Spotify tracks & playlists, SoundCloud, and plain search queries — all from one command.',
    gradient: 'from-fuchsia-500 to-pink-500',
    glow: 'group-hover:shadow-fuchsia-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Spam & Threat Detection',
    description: 'Detects phishing links, IP grabbers, fake Nitro/Steam scams, crypto bait, and @everyone clickbait. Auto-deletes and times out offenders.',
    gradient: 'from-red-500 to-orange-500',
    glow: 'group-hover:shadow-red-500/20',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-3">What can Mhoo do?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Packed with <span className="text-gradient">Features</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything your server needs, wrapped in the cutest bot you've ever seen.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all duration-300 card-glow hover:scale-[1.02] cursor-default ${f.glow}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
