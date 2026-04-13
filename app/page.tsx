import Link from "next/link";
import { ArrowRight, Sparkles, BookHeart, FlaskConical, ShieldCheck, Brain } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { squads } from "@/data";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-rose-100 text-rose-700 text-xs font-medium mb-6">
            <Sparkles size={12} />
            Made for the AI Workshop for Young Women
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            AI, your everyday{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-amber-500">
              superpower
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Use AI for the stuff that actually matters — planning, studying,
            applying for jobs. We'll teach you <strong>one simple framework</strong>{" "}
            and the prompts that go with it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/care">
              <Button size="lg">
                Learn the CARE framework
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/playbooks">
              <Button variant="secondary" size="lg">
                Skip to ready prompts
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            No coding required. Works with ChatGPT, Claude, Gemini — any of them.
          </p>
        </div>
      </section>

      {/* CARE preview */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              One idea. Four letters. <span className="text-rose-600">CARE.</span>
            </h2>
            <p className="text-slate-600">
              Every good prompt has these. You'll learn them in under 5 minutes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { letter: "C", word: "Context", tagline: "Tell AI about you." },
              { letter: "A", word: "Ask", tagline: "Say what you want." },
              { letter: "R", word: "Role", tagline: "Who should AI be?" },
              { letter: "E", word: "Expected", tagline: "What you want back." },
            ].map(({ letter, word, tagline }, index) => {
              const gradients = [
                "from-rose-400 to-rose-600",
                "from-violet-400 to-violet-600",
                "from-amber-400 to-amber-600",
                "from-pink-400 to-rose-500",
              ];
              return (
                <Card
                  key={letter}
                  variant="bordered"
                  className="text-center hover:shadow-md transition-shadow"
                  padding="md"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-sm`}
                  >
                    <span className="text-white font-bold text-xl">{letter}</span>
                  </div>
                  <div className="font-semibold text-slate-900">{word}</div>
                  <div className="text-xs text-slate-500 mt-1">{tagline}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Squads */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Pick your squad
            </h2>
            <p className="text-slate-600">
              Each squad has a playbook of ready prompts. Start wherever you need help today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {squads.map((squad) => {
              const accentClass = {
                rose: "from-rose-100 to-rose-50 border-rose-200 hover:border-rose-400",
                violet:
                  "from-violet-100 to-violet-50 border-violet-200 hover:border-violet-400",
                amber: "from-amber-100 to-amber-50 border-amber-200 hover:border-amber-400",
              }[squad.accent]!;

              return (
                <Link
                  key={squad.id}
                  href={`/playbooks#${squad.id}`}
                  className="block group"
                >
                  <Card
                    variant="bordered"
                    className={`bg-gradient-to-br ${accentClass} transition-all group-hover:shadow-lg h-full`}
                    padding="lg"
                  >
                    <div className="text-4xl mb-3">{squad.emoji}</div>
                    <div className="font-semibold text-slate-900 text-lg">
                      {squad.name}
                    </div>
                    <div className="text-sm text-rose-700/80 font-medium mb-2">
                      {squad.tagline}
                    </div>
                    <p className="text-sm text-slate-600">{squad.description}</p>
                    <div className="mt-4 text-sm font-medium text-slate-700 group-hover:text-rose-700 transition-colors inline-flex items-center gap-1">
                      See prompts
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
            A 5-minute tour
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Skim this in order and you'll be set.
          </p>
          <div className="space-y-3">
            {[
              {
                href: "/care",
                icon: Sparkles,
                title: "Learn CARE",
                desc: "The one framework that runs the show.",
              },
              {
                href: "/playbooks",
                icon: BookHeart,
                title: "Grab a playbook prompt",
                desc: "Copy-paste ready, grouped by squad.",
              },
              {
                href: "/practice",
                icon: FlaskConical,
                title: "Practice & get feedback",
                desc: "Write your own prompt — we'll score it.",
              },
              {
                href: "/quiz",
                icon: Brain,
                title: "Test yourself",
                desc: "10 friendly questions. Passing is 70%.",
              },
              {
                href: "/safety",
                icon: ShieldCheck,
                title: "Read the 5 safety rules",
                desc: "Privacy, hallucinations, and when to use a human.",
              },
            ].map(({ href, icon: Icon, title, desc }, index) => (
              <Link key={href} href={href} className="block group">
                <Card
                  variant="bordered"
                  className="flex items-center gap-4 hover:border-rose-300 hover:shadow-md transition-all"
                  padding="sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-violet-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-rose-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400 font-medium">
                      Step {index + 1}
                    </div>
                    <div className="font-medium text-slate-900 group-hover:text-rose-600 transition-colors">
                      {title}
                    </div>
                    <div className="text-sm text-slate-500">{desc}</div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-300 group-hover:text-rose-500 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 sm:px-6 border-t border-rose-100 mt-10">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          Built with CARE for the AI Workshop for Young Women.
        </div>
      </footer>
    </div>
  );
}
