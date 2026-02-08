import Image from "next/image";
import { siteConfig } from "@/lib/constants";

const highlights = [
  {
    title: "Strategic Research",
    description:
      "Translating protocol analysis into decision-ready briefs for C-suite on market positioning and competitive differentiation.",
  },
  {
    title: "Grant Writing",
    description:
      "Led data analysis and drafting for grant applications (Avalanche, Base, OP, Pharos), structuring datasets to prove impact.",
  },
  {
    title: "Brand & Growth",
    description:
      "Managed brand presence across X, LinkedIn, and DeBank - growing combined audience to 80K+ followers with technical content.",
  },
  {
    title: "Partnerships & Sales",
    description:
      "Represented Concero at international conferences, initiating sales conversations and securing partnerships through technical deep-dives.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 animate-on-scroll">
          A bit about me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
              I started in a physics lab - studying{" "}
              <strong className="text-[var(--fg)] font-medium">
                nano-spiked surfaces
              </strong>{" "}
              that kill drug-resistant bacteria. That research ended up
              in ScienceDaily and IFLScience, which was surreal.{" "}
              <a
                href={siteConfig.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg)] font-medium underline underline-offset-2 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
              >
                See my publications
              </a>
              . But somewhere along the way, I got pulled into blockchain
              and never looked back.
            </p>
            <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
              Now I spend my days at{" "}
              <strong className="text-[var(--fg)] font-medium">Concero</strong>{" "}
              figuring out how to move value across blockchains without
              it being a nightmare. I co-design the protocol architecture
              with our engineering team, write the whitepapers, maintain
              the docs, and create the content that explains it all to
              the outside world.
            </p>
            <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
              What I enjoy most is taking something genuinely complicated
              and finding the clearest way to explain it - whether that&apos;s
              on stage at a conference in Bangkok, in a technical blog post,
              or in a whitepaper that developers will actually finish reading.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 bg-[var(--accent)] text-[var(--bg)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#achievements"
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
              >
                See my achievements &rarr;
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/ethereum-vietnam-2025.jpg"
                alt="Speaking at Ethereum Vietnam 2025"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm font-medium">
                  Ethereum Vietnam 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Business & Market Growth highlights */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold tracking-tight mb-6 animate-on-scroll">
            Beyond research, what I also bring to the table
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-on-scroll"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
