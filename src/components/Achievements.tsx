import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 animate-on-scroll">
          Some highlights
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-on-scroll">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold tracking-tight mb-1">$100M+</div>
            <p className="text-sm text-[var(--text-muted)]">Bridge volume</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold tracking-tight mb-1">100K+</div>
            <p className="text-sm text-[var(--text-muted)]">Testnet signups</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold tracking-tight mb-1">80K+</div>
            <p className="text-sm text-[var(--text-muted)]">Social followers</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold tracking-tight mb-1">10+</div>
            <p className="text-sm text-[var(--text-muted)]">Meetups organised</p>
          </div>
        </div>

        {/* Row 1: SEABW panel (large) + Global Talent card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
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
                On stage at SEABW 2025
              </h3>
              <p className="text-white/80 text-sm">
                Discussing interoperability alongside folks from Chainlink, Uniswap, and Manta Network
              </p>
            </div>
          </div>

          {/* Global Talent card - enhanced */}
          <div className="md:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 flex flex-col justify-center animate-on-scroll">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              Australian Permanent Residency
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Global Talent Visa
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
              One of Australia&apos;s most prestigious visa pathways, reserved for individuals with an internationally recognised record of exceptional achievement. Grants the right to live and work in Australia permanently as an Australian permanent resident.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Granted in the Health Industries sector for contributions to biophysics research featured in international media.
            </p>
          </div>
        </div>

        {/* Row 2: Chainlink meetup (prominent) + SEABW presenting + Unitour (prominent) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          {/* Chainlink community meetup - featured */}
          <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/chainlink-community-meetup-9-2025.jpeg"
              alt="Chainlink Community Meetup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">
                Chainlink Community Meetup
              </h3>
              <p className="text-white/80 text-sm">
                Presenting Concero&apos;s interoperability solutions and Chainlink 2.0 architecture to the developer community
              </p>
            </div>
          </div>

          {/* SEABW explaining */}
          <div className="md:col-span-3 relative aspect-[3/4] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/seabw-2025-2.jpg"
              alt="Presenting at SEABW 2025"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-base font-semibold">
                Explaining the hard stuff
              </h3>
              <p className="text-white/80 text-sm">
                Making technical concepts click for people
              </p>
            </div>
          </div>

          {/* Awards card */}
          <div className="md:col-span-4 bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 flex flex-col justify-center animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">Awards</h3>
            <ul className="space-y-3 text-[var(--text-muted)] text-sm">
              <li>
                <span className="text-[var(--fg)] font-medium">Full PhD Scholarship</span>
                <br />
                <span className="text-xs">ARC Research Hub, RMIT University</span>
              </li>
              <li>
                <span className="text-[var(--fg)] font-medium">Mitacs Globalink Research Award</span>
                <br />
                <span className="text-xs">Simon Fraser University, Canada</span>
              </li>
              <li>
                <span className="text-[var(--fg)] font-medium">2nd National Creative Idea Prize</span>
                <br />
                <span className="text-xs">Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: Unitour (large crowd) + PhD graduation + Research group + SEABW networking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Unitour with Chainlink - large, crypto-focused */}
          <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/unitour-11-2025.png"
              alt="Chainlink Unitour"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold">
                Chainlink Unitour
              </h3>
              <p className="text-white/80 text-sm">
                Organising blockchain education events to bring Web3 knowledge to universities and developer communities
              </p>
            </div>
          </div>

          {/* SEABW networking - tall */}
          <div className="md:col-span-3 relative aspect-[3/4] rounded-xl overflow-hidden group animate-on-scroll">
            <Image
              src="/images/seabw-2025-3.jpg"
              alt="Networking at SEABW 2025"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white text-base font-semibold">
                The people part
              </h3>
              <p className="text-white/80 text-sm">
                Conferences are really about the conversations between talks
              </p>
            </div>
          </div>

          {/* PhD credentials column - smaller to show credibility without dominating */}
          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            {/* PhD graduation on stage */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden group animate-on-scroll">
              <Image
                src="/images/phuc-graduation-2023.jpg"
                alt="PhD Graduation at RMIT University"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-sm font-semibold">
                  PhD Graduation - RMIT University
                </h3>
                <p className="text-white/70 text-xs">
                  Doctor of Philosophy in Applied Physics
                </p>
              </div>
            </div>

            {/* Research group */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden group animate-on-scroll">
              <Image
                src="/images/elena-research-group.jpg"
                alt="Research group at RMIT University"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-sm font-semibold">
                  Research Group
                </h3>
                <p className="text-white/70 text-xs">
                  Biophysics lab at RMIT - where it all started
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
