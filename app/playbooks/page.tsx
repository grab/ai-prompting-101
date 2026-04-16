"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { squads, playbooks } from "@/data";
import { Card, Badge, Button } from "@/components/ui";
import { PlaybookPrompt, SquadId } from "@/types";

const accentMap: Record<string, { badge: "rose" | "violet" | "amber"; border: string; chip: string }> = {
  rose: {
    badge: "rose",
    border: "border-rose-200",
    chip: "bg-rose-100 text-rose-800",
  },
  violet: {
    badge: "violet",
    border: "border-violet-200",
    chip: "bg-violet-100 text-violet-800",
  },
  amber: {
    badge: "amber",
    border: "border-amber-200",
    chip: "bg-amber-100 text-amber-800",
  },
};

function PromptCard({
  prompt,
  accent,
}: {
  prompt: PlaybookPrompt;
  accent: { badge: "rose" | "violet" | "amber"; border: string; chip: string };
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card variant="bordered" className={`${accent.border}`} padding="lg">
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{prompt.title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{prompt.useCase}</p>
        </div>
        <Button size="sm" variant="secondary" onClick={handleCopy}>
          {copied ? (
            <>
              <Check size={14} className="mr-1.5" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} className="mr-1.5" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="text-sm text-slate-700 bg-slate-50 rounded-xl p-4 whitespace-pre-wrap font-mono border border-slate-100 mt-2 leading-relaxed">
        {prompt.prompt}
      </pre>
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(prompt.ripeNotes).map(([key, note]) => (
          <span
            key={key}
            className={`text-xs px-2.5 py-1 rounded-full ${accent.chip}`}
          >
            <strong className="uppercase mr-1">{key[0]}</strong>
            {note}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default function PlaybooksPage() {
  const [activeSquad, setActiveSquad] = useState<SquadId>("life-admin");
  const squad = squads.find((s) => s.id === activeSquad)!;
  const playbook = playbooks.find((p) => p.squad === activeSquad);
  const accent = accentMap[squad.accent];

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="violet" size="sm" className="mb-3">
            Playbooks
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Ready prompts, by squad.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Copy, paste, and tweak. Replace the bits in [brackets] with your
            actual situation before sending.
          </p>
        </div>

        {/* Squad tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {squads.map((s) => {
            const isActive = s.id === activeSquad;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSquad(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 to-violet-500 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-rose-300"
                }`}
              >
                <span className="text-lg">{s.emoji}</span>
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Squad intro */}
        <div id={squad.id} className="mb-8 scroll-mt-20">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-3xl">{squad.emoji}</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{squad.name}</h2>
              <p className="text-sm text-rose-600 font-medium">{squad.tagline}</p>
            </div>
          </div>
          <p className="text-slate-600">{squad.description}</p>
        </div>

        {/* Prompts */}
        <div className="space-y-4">
          {playbook?.prompts.map((p) => (
            <PromptCard key={p.id} prompt={p} accent={accent} />
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-gradient-to-br from-rose-50 via-white to-violet-50 rounded-2xl border border-rose-100">
          <h3 className="font-semibold text-slate-900 mb-2">
            Want to try writing your own?
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Head to Practice — pick a scenario and get instant RIPE feedback.
          </p>
          <Link
            href="/practice"
            className="inline-flex items-center gap-1 text-rose-600 font-medium hover:text-rose-800"
          >
            Go to practice →
          </Link>
        </div>
      </div>
    </div>
  );
}
