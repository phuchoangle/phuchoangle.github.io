import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 animate-on-scroll">
          Impact &amp; Moments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large photo - SEABW panel */}
          <div className="md:col-span-8 relative aspect-[16/10] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/seabw-2025-1.jpg"
              alt="SEABW 2025 Panel"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">
                Conference Speaker
              </h3>
              <p className="text-white/80 text-sm">
                Panelist at SEABW 2025 (Bangkok) &amp; Ethereum Vietnam
              </p>
            </div>
          </div>

          {/* Stat card */}
          <div className="md:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 flex flex-col justify-center animate-on-scroll">
            <h3 className="text-4xl font-bold tracking-tight mb-2">
              Global Talent
            </h3>
            <p className="text-[var(--text-muted)]">
              Visa granted for exceptional achievement in Health Industries.
            </p>
          </div>

          {/* Tall photo */}
          <div className="md:col-span-4 md:row-span-2 relative aspect-[3/4] md:aspect-auto rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/seabw-2025-3.jpg"
              alt="Networking Event"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">
                Community Building
              </h3>
              <p className="text-white/80 text-sm">
                Connecting with Web3 builders.
              </p>
            </div>
          </div>

          {/* Medium photo */}
          <div className="md:col-span-4 relative aspect-[4/3] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/seabw-2025-2.jpg"
              alt="Presentation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">
                Technical Advocacy
              </h3>
              <p className="text-white/80 text-sm">
                Bridging complex tech to users.
              </p>
            </div>
          </div>

          {/* Awards text card */}
          <div className="md:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 flex flex-col justify-center animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">Awards</h3>
            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
              <li>Full PhD Scholarship (ARC Research Hub)</li>
              <li>Mitacs Globalink Research Award (Canada)</li>
              <li>
                2nd National Prize, &quot;Hanh Trinh Vi Khat Vong Viet&quot;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
