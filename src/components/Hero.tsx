import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-[1200px] mx-auto w-[90%] py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-medium tracking-widest uppercase text-[var(--text-muted)] mb-4 block">
              Researcher &amp; Strategist
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Turning complex technical tradeoffs into clear decisions.
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-xl">
              Head of Research &amp; Content at Concero. PhD in Applied Physics.
              Building blockchain interoperability solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View My Journey
              </a>
              <a
                href="/phuc-le-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-[var(--border)] rounded-full text-sm font-medium hover:bg-[var(--card)] transition-colors"
              >
                Download CV
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
              >
                LinkedIn &nearr;
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/phuc-avatar.jpeg"
                alt="Dr. Phuc Le"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
