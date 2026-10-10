export default function Page() {
  return (
    <main className="min-h-screen bg-[#0c1020] text-white">
      <section className="relative overflow-hidden bg-[#da020e] px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                Arsenal FC
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The Gunners’ spirit is built on passion, pace, and precision.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/90">
                A page dedicated to Arsenal: club history, recent form, top players, and what makes this team a force in English football.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#highlights"
                  className="inline-flex items-center justify-center rounded-full bg-[#fffffe] px-6 py-3 text-sm font-semibold text-[#da020e] transition hover:bg-[#f0f0f0]"
                >
                  Club highlights
                </a>
                <a
                  href="#style"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Playing style
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-white">Arsenal at a glance</h2>
                <p className="text-white/80">
                  Founded in 1886, Arsenal is one of the most successful clubs in English football. Known for attacking play and a proud Arsenal Way.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#ffce00]">Stadium</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Emirates</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#ffce00]">Manager</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Mikel Arteta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="style" className="border-t border-white/10 bg-[#070b16] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
              <h3 className="text-xl font-semibold text-white">High energy</h3>
              <p className="text-white/70">
                Arsenal prioritizes quick transitions, intelligent movement, and a relentless focus on attack.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
              <h3 className="text-xl font-semibold text-white">Creative midfield</h3>
              <p className="text-white/70">
                The midfield blends control and creativity, allowing Arsenal to dominate possession and create chances from every angle.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
              <h3 className="text-xl font-semibold text-white">Youth and legacy</h3>
              <p className="text-white/70">
                With a strong academy and a history of iconic players, Arsenal balances tradition with the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#da020e] font-semibold uppercase tracking-[0.24em]">Recent highlights</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Arsenal's recent moments that matter.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#da020e]/40">
              <p className="text-[#ffce00] text-sm font-semibold uppercase tracking-[0.22em]">Title chase</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Premier League push</h3>
              <p className="mt-3 text-white/70">
                Arsenal continues to challenge at the top of the table with attacking form and strong squad depth.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#da020e]/40">
              <p className="text-[#ffce00] text-sm font-semibold uppercase tracking-[0.22em]">Iconic players</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Saka, Odegaard, and Saliba</h3>
              <p className="mt-3 text-white/70">
                Young stars and defensive leaders power the team with skill, leadership, and consistency.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#da020e]/40">
              <p className="text-[#ffce00] text-sm font-semibold uppercase tracking-[0.22em]">Club spirit</p>
              <h3 className="mt-4 text-xl font-semibold text-white">The Arsenal way</h3>
              <p className="mt-3 text-white/70">
                Pride, resilience, and elegant football define the club’s identity on and off the pitch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#070b16] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-[#da020e] font-semibold uppercase tracking-[0.24em]">Arsenal facts</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                The history and ambition behind the cannon.
              </h2>
              <ul className="space-y-4 text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ffce00] text-sm font-bold text-[#0c1020]">1</span>
                  Arsenal won their first league title in 1931 and remain one of England’s most decorated clubs.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ffce00] text-sm font-bold text-[#0c1020]">2</span>
                  The 2003-04 “Invincibles” season is one of the most famous unbeaten runs in Premier League history.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ffce00] text-sm font-bold text-[#0c1020]">3</span>
                  Arsenal’s tradition blends attacking football, youth development, and a powerful fanbase.
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/25">
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">Team snapshot</p>
              <div className="mt-6 space-y-5 rounded-3xl bg-[#0c1020]/90 p-6 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Top scorer</span>
                  <span className="font-semibold text-white">Bukayo Saka</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Clean sheets</span>
                  <span className="font-semibold text-white">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Possession</span>
                  <span className="font-semibold text-white">63%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}