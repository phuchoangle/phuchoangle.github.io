import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 animate-on-scroll">
          The Mindset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
              I thrive at the intersection of deep technical research and
              strategic communication. My background spans from{" "}
              <strong className="text-[var(--fg)] font-medium">
                Biophysics and Nano-material science
              </strong>{" "}
              to{" "}
              <strong className="text-[var(--fg)] font-medium">
                Blockchain Interoperability
              </strong>
              .
            </p>
            <p className="text-lg leading-relaxed text-[var(--text-muted)]">
              Currently, I lead protocol research and technical content at{" "}
              <strong className="text-[var(--fg)] font-medium">Concero</strong>,
              working across product and engineering to translate complex code
              logic into clear, partner-facing resources. I believe in growth
              through continuous learning &mdash; transitioning from a PhD in
              Applied Physics to defining cross-chain messaging frameworks.
            </p>
          </div>
          <div className="animate-on-scroll">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/ethereum-vietnam-2025.jpg"
                alt="Speaking at Ethereum Vietnam"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm font-medium">
                  Research &amp; Strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
