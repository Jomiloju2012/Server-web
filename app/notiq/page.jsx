export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-sky-500/30 via-transparent to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300 ring-1 ring-sky-400/30">
                AI note intelligence
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Notiq turns your notes into clarity, action, and context.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Capture meeting notes, research, or ideas and get instant summaries, key points, and prioritized action items so your team can move faster.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Explore features
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-white">Fast results for your whole workflow</h2>
                <p className="text-slate-300">
                  Summary generation, action item extraction, and insight organization in one experience. Keep every note useful and easy to share.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10">
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Speed</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Instant</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/10">
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Clarity</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Actionable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-white/10 bg-slate-950/85 py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">1. Capture content</h3>
              <p className="text-slate-300">
                Add written notes, meeting transcripts, or document text and let Notiq prepare it for intelligent summarization.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">2. Generate insight</h3>
              <p className="text-slate-300">
                Our AI finds the key themes, decisions, and next steps and turns them into concise, ready-to-use output.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">3. Share results</h3>
              <p className="text-slate-300">
                Export summaries, share highlights, or save searchable records for easy team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sky-300 font-semibold uppercase tracking-[0.24em]">Features</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Everything you need for better notes and faster decisions.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:border-sky-500/30">
              <p className="text-sky-300 text-sm font-semibold uppercase tracking-[0.22em]">Auto summaries</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Short summaries</h3>
              <p className="mt-3 text-slate-300">
                Condense long notes into crisp summaries that capture what matters most.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:border-sky-500/30">
              <p className="text-sky-300 text-sm font-semibold uppercase tracking-[0.22em]">Action items</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Next steps</h3>
              <p className="mt-3 text-slate-300">
                Automatically extract tasks, follow-ups, and decisions so nothing gets lost.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:border-sky-500/30">
              <p className="text-sky-300 text-sm font-semibold uppercase tracking-[0.22em]">Smart organization</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Searchable notes</h3>
              <p className="mt-3 text-slate-300">
                Keep summaries and details organized so your knowledge base stays easy to navigate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/95 py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sky-300 font-semibold uppercase tracking-[0.24em]">Why Notiq</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Keep your team aligned with the right information at the right time.
              </h2>
              <p className="text-slate-300 leading-8">
                Notiq makes notes more useful by turning messy, scattered text into concise summaries, action items, and contextual highlights.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">✓</span>
                  Trusted structure for notes, summaries, and action items.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">✓</span>
                  Simple sharing across meetings, projects, and teams.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-slate-950">✓</span>
                  Faster decisions from clear takeaways and next steps.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sample output</p>
                <div className="rounded-3xl bg-slate-950/90 p-6 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Meeting summary</p>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li>• Finalize product messaging and update the launch deck.</li>
                    <li>• Assign follow-up actions to marketing, sales, and design.</li>
                    <li>• Review customer feedback before the next planning session.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}