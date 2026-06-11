import DocLayout from '../components/DocLayout'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

function Table({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-2 pr-4 text-white/40 font-medium">Data</th>
            <th className="text-left py-2 pr-4 text-white/40 font-medium">Purpose</th>
            <th className="text-left py-2 text-white/40 font-medium">Retention</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([data, purpose, retention]) => (
            <tr key={data} className="border-b border-white/[0.04]">
              <td className="py-2 pr-4 text-white/70 font-mono text-xs">{data}</td>
              <td className="py-2 pr-4 text-white/50">{purpose}</td>
              <td className="py-2 text-white/50">{retention}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Privacy() {
  return (
    <DocLayout title="Privacy Policy" lastUpdated="June 11, 2026">
      <Section title="1. Overview">
        <p>
          This Privacy Policy explains what data Mhoo Bot collects, how it is used, and how it is
          protected. We are committed to minimal data collection — we only store what is strictly
          necessary for the bot to function.
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <p>The following data is stored per Discord server in our database:</p>
        <Table
          rows={[
            ['Guild (Server) ID', 'Identify which server settings belong to', 'Until /reset or bot removed'],
            ['Welcome Channel ID', 'Send welcome images to the correct channel', 'Until changed or reset'],
            ['Background Image', 'Display custom background in welcome images', 'Until changed or reset'],
            ['Word List', 'Randomize words shown in welcome images', 'Until cleared or reset'],
            ['Word Mode / Fixed Word', 'Determine which word appears in welcome images', 'Until changed or reset'],
            ['Main Text / After Text', 'Customize text in welcome images', 'Until changed or reset'],
            ['Anti-spam Config', 'Rate-limit and threat detection settings', 'Until changed or reset'],
          ]}
        />
        <p className="mt-4">
          We do <strong className="text-white">not</strong> collect or store: message content (beyond
          real-time threat scanning), user IDs, usernames, DMs, voice data, or any personal
          information.
        </p>
      </Section>

      <Section title="3. Message Content Scanning">
        <p>
          If the server administrator enables threat detection, Mhoo Bot reads message content
          in real time solely to check for phishing links, IP grabbers, and scam patterns.
          Message content is <strong className="text-white">never stored</strong> — it is scanned
          in memory and immediately discarded.
        </p>
      </Section>

      <Section title="4. Music Playback">
        <p>
          When using music commands, Mhoo Bot queries YouTube, Spotify, and SoundCloud APIs to
          resolve and stream audio. Search queries and URLs are processed in real time and not
          stored. We do not collect listening history or preferences.
        </p>
      </Section>

      <Section title="5. File Uploads">
        <p>
          Background images uploaded via <code className="text-pink-400">/set</code> are stored in
          a self-hosted S3-compatible object storage (MinIO). Images are associated with a server ID
          only, not with any individual user. Images are deleted when <code className="text-pink-400">/reset</code> is run.
        </p>
      </Section>

      <Section title="6. Data Sharing">
        <p>
          We do <strong className="text-white">not</strong> sell, share, or transfer any collected
          data to third parties. Data is used exclusively to operate Mhoo Bot features.
        </p>
      </Section>

      <Section title="7. Data Security">
        <p>
          All data is stored on self-hosted infrastructure. Database access is restricted and
          protected by authentication. We take reasonable measures to protect stored data against
          unauthorized access.
        </p>
      </Section>

      <Section title="8. Data Deletion">
        <p>
          Server administrators can delete all server data at any time by running{' '}
          <code className="text-pink-400">/reset</code>, which removes the server's document from
          the database and deletes the uploaded background image from storage. Removing the bot
          from your server does not automatically delete stored data — please run{' '}
          <code className="text-pink-400">/reset</code> first if you wish to erase all data.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          Mhoo Bot is not directed at children under the age of 13. We do not knowingly collect
          data from children. Discord itself requires users to be at least 13 years old.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy at any time. The "last updated" date at the top of
          this page will reflect the most recent revision.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          For privacy-related questions or data deletion requests, please contact us via the{' '}
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
