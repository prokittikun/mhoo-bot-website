import DocLayout from '../components/DocLayout'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export default function Terms() {
  return (
    <DocLayout title="Terms of Service" lastUpdated="June 11, 2026">
      <Section title="1. Acceptance of Terms">
        <p>
          By adding Mhoo Bot to your Discord server or using any of its features, you agree to these
          Terms of Service. If you do not agree, please remove the bot from your server.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          Mhoo Bot is a Discord bot that provides welcome image generation, music playback, word
          list management, and server moderation tools (anti-spam, threat detection). The service is
          provided free of charge.
        </p>
      </Section>

      <Section title="3. Acceptable Use">
        <p>You agree not to use Mhoo Bot to:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Violate Discord's Terms of Service or Community Guidelines</li>
          <li>Harass, threaten, or harm other users</li>
          <li>Distribute illegal, harmful, or malicious content</li>
          <li>Attempt to exploit, abuse, or reverse-engineer the bot</li>
          <li>Use the bot for commercial purposes without prior permission</li>
          <li>Spam commands or attempt to degrade service quality for other users</li>
        </ul>
      </Section>

      <Section title="4. Administrator Responsibilities">
        <p>
          Server administrators who configure Mhoo Bot are responsible for ensuring its use
          complies with Discord's guidelines and applicable laws. This includes proper configuration
          of moderation features and ensuring the bot is used appropriately within their community.
        </p>
      </Section>

      <Section title="5. Music Playback">
        <p>
          Mhoo Bot streams audio from third-party platforms including YouTube, Spotify, and
          SoundCloud. You are responsible for ensuring your use of music playback complies with
          applicable copyright laws and the terms of service of those platforms. We do not host or
          store any audio content.
        </p>
      </Section>

      <Section title="6. Moderation Features">
        <p>
          Anti-spam and threat detection features act automatically based on configured thresholds.
          Server administrators are responsible for configuring these features appropriately. We are
          not liable for actions taken by automated moderation on your server.
        </p>
      </Section>

      <Section title="7. Service Availability">
        <p>
          We strive to keep Mhoo Bot available at all times but do not guarantee uninterrupted
          service. We reserve the right to suspend, modify, or discontinue the service at any time
          without prior notice.
        </p>
      </Section>

      <Section title="8. Termination">
        <p>
          We reserve the right to restrict or terminate access to Mhoo Bot for any server or user
          that violates these terms. You may remove the bot from your server at any time.
        </p>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>
          Mhoo Bot is provided "as is" without warranties of any kind. We are not responsible for
          any damages, data loss, or issues arising from the use or inability to use the service.
        </p>
      </Section>

      <Section title="10. Changes to Terms">
        <p>
          We may update these Terms of Service at any time. Continued use of Mhoo Bot after changes
          constitutes acceptance of the updated terms.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          For questions about these terms, please reach out via the{' '}
          <a
            href="https://mhoo-bot.kittikun.dev"
            className="text-pink-400 hover:text-pink-300 underline"
          >
            Mhoo Bot website
          </a>
          .
        </p>
      </Section>
    </DocLayout>
  )
}
