import { experiences } from "@/lib/constants";

export default function ExperienceTimeline() {
  return (
    <section id="journey" className="py-24 bg-[var(--card)]">
      <div className="max-w-[1200px] mx-auto w-[90%]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 animate-on-scroll">
          The Journey
        </h2>
        <div className="relative">
          {/* Vertical line - mobile left, desktop center */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="relative animate-on-scroll">
                {/* Dot marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-[15px] h-[15px] bg-[var(--accent)] rounded-full z-10 ring-4 ring-[var(--card)]" />

                {/* Mobile layout: stacked, all left-aligned */}
                <div className="pl-8 md:hidden">
                  <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    {exp.date}
                  </span>
                  <div className="bg-[var(--bg)] rounded-xl p-5 mt-2 border border-[var(--border)] hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-base font-semibold mb-0.5">
                      {exp.title}
                    </h3>
                    <h4 className="text-sm text-[var(--text-muted)] mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--fg)] px-3 py-1 rounded-full">
                      {exp.tag}
                    </span>
                  </div>
                </div>

                {/* Desktop layout: alternating */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                  {i % 2 === 0 ? (
                    <>
                      {/* Date on left */}
                      <div className="text-right pr-8 pt-1">
                        <span className="text-sm font-medium text-[var(--text-muted)]">
                          {exp.date}
                        </span>
                      </div>
                      {/* Card on right */}
                      <div className="pl-8">
                        <div className="bg-[var(--bg)] rounded-xl p-6 border border-[var(--border)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          <h3 className="text-lg font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                            {exp.company}
                          </h4>
                          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--fg)] px-3 py-1 rounded-full">
                            {exp.tag}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Card on left */}
                      <div className="pr-8">
                        <div className="bg-[var(--bg)] rounded-xl p-6 border border-[var(--border)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          <h3 className="text-lg font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                            {exp.company}
                          </h4>
                          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--fg)] px-3 py-1 rounded-full">
                            {exp.tag}
                          </span>
                        </div>
                      </div>
                      {/* Date on right */}
                      <div className="pl-8 pt-1">
                        <span className="text-sm font-medium text-[var(--text-muted)]">
                          {exp.date}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
