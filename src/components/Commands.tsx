import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const categories = [
  {
    id: 'music',
    label: '🎵 Music',
    commands: [
      { name: '/music play [query]', desc: 'Play a song or playlist from YouTube, Spotify, or SoundCloud' },
      { name: '/music skip', desc: 'Skip the current track' },
      { name: '/music stop', desc: 'Stop playback, clear queue, and disconnect' },
      { name: '/music pause / resume', desc: 'Pause or resume the current track' },
      { name: '/music queue', desc: 'View the current queue' },
      { name: '/music np', desc: 'Show the now-playing embed with button controls' },
      { name: '/music loop [mode]', desc: 'Set loop mode: off / song / queue' },
      { name: '/music shuffle', desc: 'Shuffle the queue' },
      { name: '/music volume [1–100]', desc: 'Adjust playback volume' },
      { name: '/music remove [position]', desc: 'Remove a specific track from the queue' },
      { name: '/music clear', desc: 'Clear the entire queue (keeps current playing)' },
    ],
  },
  {
    id: 'welcome',
    label: '👋 Welcome',
    commands: [
      { name: '/set [channel] [background]', desc: 'Set the welcome channel and upload a custom background image' },
      { name: '/settext [before] [after]', desc: 'Configure the text shown before and after the word in welcome images' },
      { name: '/setwordmode [mode]', desc: 'Set word mode to random or fixed' },
      { name: '/example', desc: 'Preview the welcome image with your current settings' },
    ],
  },
  {
    id: 'words',
    label: '🔤 Word List',
    commands: [
      { name: '/addword [word]', desc: 'Add a word to the server word list' },
      { name: '/removeword', desc: 'Remove a word via interactive dropdown and confirm button' },
      { name: '/editword', desc: 'Edit an existing word via dropdown and modal' },
      { name: '/listwords', desc: 'View all words in the server list' },
    ],
  },
  {
    id: 'antispam',
    label: '🛡️ Anti-Spam',
    commands: [
      { name: '/antispam enable', desc: 'Enable rate-limit spam protection for this server' },
      { name: '/antispam disable', desc: 'Disable spam protection' },
      { name: '/antispam config', desc: 'Configure threshold (msgs), window (seconds), action (warn/timeout/kick), and timeout duration' },
      { name: '/antispam threat enabled:True', desc: 'Enable content-based threat detection (phishing, IP grabbers, scam links)' },
      { name: '/antispam threat action:delete_warn', desc: 'Set action when threat is detected: delete / delete+warn / delete+timeout' },
      { name: '/antispam threat block-invites:True', desc: 'Block Discord invite links posted by non-admins' },
      { name: '/antispam threat timeout-duration:10', desc: 'Set timeout duration (minutes) for delete_timeout action' },
      { name: '/antispam status', desc: 'Show all current anti-spam and threat detection settings' },
    ],
  },
  {
    id: 'general',
    label: '⚙️ General',
    commands: [
      { name: '/help [language]', desc: 'Show the full command guide in English or Thai' },
      { name: '/invite', desc: 'Get the invite link to add Mhoo Bot to another server' },
      { name: '/ping', desc: 'Check if the bot is alive and responding' },
      { name: '/reset', desc: 'Wipe all server configuration and the uploaded background image' },
    ],
  },
]

export default function Commands() {
  const [active, setActive] = useState('music')
  const [expanded, setExpanded] = useState<string | null>(null)

  const current = categories.find((c) => c.id === active)!

  return (
    <section id="commands" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">Slash Commands</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            All <span className="text-gradient">Commands</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Everything accessible via Discord slash commands — just type <code className="text-pink-400">/</code> to get started.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => { setActive(c.id); setExpanded(null) }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === c.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20'
                  : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Command list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            {current.commands.map((cmd) => (
              <motion.div
                key={cmd.name}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setExpanded(expanded === cmd.name ? null : cmd.name)}
                >
                  <code className="text-pink-300 font-mono text-sm font-semibold">{cmd.name}</code>
                  <ChevronDown
                    size={16}
                    className={`text-white/30 transition-transform duration-200 ${expanded === cmd.name ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === cmd.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-white/50 text-sm leading-relaxed">{cmd.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
