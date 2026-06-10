import { motion } from 'framer-motion'
import { INVITE_URL } from '../config'

export default function InviteCTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative"
      >
        <div className="relative rounded-3xl overflow-hidden p-px bg-gradient-to-br from-pink-500/40 via-purple-600/30 to-blue-500/20">
          <div className="relative rounded-3xl bg-[#0f0f1e] p-12 md:p-16 text-center overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 to-transparent pointer-events-none" />

            <motion.div
              className="animate-float inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
            >
              <img src="/mhoo-bot.png" alt="Mhoo Bot" className="w-24 h-24 rounded-full mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to add <span className="text-gradient">Mhoo Bot</span>?
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
              Free forever. Add to your server in seconds and start welcoming members in style.
            </p>

            <a
              href={INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-pink-500/25"
            >
              ✨ Invite Mhoo Bot — It's Free!
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
