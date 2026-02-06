import { siteConfig } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--card)]">
      <div className="max-w-[1200px] mx-auto w-[90%] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 animate-on-scroll">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-[var(--text-muted)] mb-8 animate-on-scroll">
          Open to discussing research, blockchain architecture, and content
          strategy.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center px-8 py-3.5 bg-[var(--accent)] text-[var(--bg)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity mb-10 animate-on-scroll"
        >
          {siteConfig.email}
        </a>
        <div className="flex items-center justify-center gap-8 animate-on-scroll">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
          >
            X (Twitter)
          </a>
          <a
            href={siteConfig.social.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}
