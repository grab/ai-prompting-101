import { Badge, Card } from "@/components/ui";
import { Clock, MessageCircle, Wrench, Eye } from "lucide-react";
import { runOfShow, icebreakers, troubleshooting, watchFor } from "@/data";

export default function FacilitatorsPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="violet" size="sm" className="mb-3">
            For facilitators 🙌
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Workshop-day playbook.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            The 90-minute run of show, icebreakers, and the stuff that tends to
            trip people up. Skim this before the room opens.
          </p>
        </div>

        {/* Run of show */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
            <Clock size={20} className="text-rose-500" />
            Run of show (90 min)
          </h2>
          <div className="space-y-3">
            {runOfShow.map((item, i) => (
              <Card key={i} variant="bordered" padding="md">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-xs font-mono font-semibold text-rose-600 bg-rose-50 rounded-lg px-2 py-1">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-0.5">{item.notes}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Icebreakers */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
            <MessageCircle size={20} className="text-violet-500" />
            Icebreakers (pick one)
          </h2>
          <Card variant="warm" padding="lg">
            <ul className="space-y-3">
              {icebreakers.map((q, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-white border border-violet-200 flex items-center justify-center text-xs font-semibold text-violet-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-800">"{q}"</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
            <Wrench size={20} className="text-amber-500" />
            Troubleshooting
          </h2>
          <div className="space-y-3">
            {troubleshooting.map((t, i) => (
              <Card key={i} variant="bordered" padding="md">
                <div className="text-sm font-semibold text-slate-900 mb-1">
                  ⚠️ {t.issue}
                </div>
                <div className="text-sm text-slate-600">→ {t.fix}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Watch for */}
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
            <Eye size={20} className="text-rose-500" />
            Watch for these in the room
          </h2>
          <Card variant="bordered" padding="lg">
            <ul className="space-y-3">
              {watchFor.map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-rose-500 font-bold shrink-0">·</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <Card variant="warm" padding="lg" className="text-center">
          <p className="text-slate-700">
            <strong className="text-rose-700">Reminder:</strong> this workshop
            is about giving them confidence, not filling their heads. If someone
            leaves having copied <em>one</em> prompt they'll actually use next
            week — that's a win.
          </p>
        </Card>
      </div>
    </div>
  );
}
