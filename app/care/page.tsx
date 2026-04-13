"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { careSections, careOrder } from "@/data";
import { Button, Card, Badge } from "@/components/ui";
import { CareKey, CarePrompt } from "@/types";

const letterGradient: Record<CareKey, string> = {
  context: "from-rose-400 to-rose-600",
  ask: "from-violet-400 to-violet-600",
  role: "from-amber-400 to-amber-600",
  expected: "from-pink-400 to-rose-500",
};

const letterBg: Record<CareKey, string> = {
  context: "bg-rose-100 text-rose-900",
  ask: "bg-violet-100 text-violet-900",
  role: "bg-amber-100 text-amber-900",
  expected: "bg-pink-100 text-pink-900",
};

export default function CarePage() {
  const [prompt, setPrompt] = useState<CarePrompt>({
    context: "",
    ask: "",
    role: "",
    expected: "",
  });
  const [copied, setCopied] = useState(false);

  const fullPrompt = [prompt.role, prompt.context, prompt.ask, prompt.expected]
    .filter(Boolean)
    .join("\n\n");

  const completed = careOrder.filter((k) => prompt[k].trim().length > 0).length;

  const handleCopy = async () => {
    if (!fullPrompt) return;
    await navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="rose" size="sm" className="mb-3">
            The framework
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Every good prompt has <span className="text-rose-600">CARE</span>.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Four pieces. Skip one and AI starts guessing. Include all four and
            you'll get answers that actually sound like they're for you.
          </p>
        </div>

        {/* The 4 sections */}
        <div className="space-y-4 mb-12">
          {careSections.map((section) => (
            <Card
              key={section.key}
              variant="bordered"
              className="overflow-hidden"
              padding="none"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${letterGradient[section.key]} flex items-center justify-center shadow-sm shrink-0`}
                  >
                    <span className="text-white font-bold text-xl">
                      {section.shortLabel}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h2 className="text-xl font-semibold text-slate-900">
                        {section.label}
                      </h2>
                      <span className="text-sm text-rose-600 font-medium">
                        {section.tagline}
                      </span>
                    </div>
                    <p className="text-slate-600 mt-1">{section.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Examples
                    </div>
                    <ul className="space-y-2">
                      {section.examples.map((ex, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-700 p-3 bg-slate-50 rounded-lg"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Tips
                    </div>
                    <ul className="space-y-2">
                      {section.tips.map((tip, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex items-start gap-2"
                        >
                          <span className="text-rose-500 shrink-0 mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mini inline builder */}
        <Card variant="warm" padding="lg" className="mb-10">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Try it — mini builder
            </h2>
            <Badge variant={completed === 4 ? "rose" : "default"} size="sm">
              {completed}/4 filled
            </Badge>
          </div>
          <p className="text-slate-600 mb-6">
            Fill any of these (even one!) and we'll stitch them into one prompt
            you can copy.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {careSections.map((section) => (
              <div key={section.key}>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                  <span
                    className={`inline-flex w-6 h-6 rounded-md ${letterBg[section.key]} items-center justify-center text-xs font-bold`}
                  >
                    {section.shortLabel}
                  </span>
                  {section.label}
                </label>
                <textarea
                  value={prompt[section.key]}
                  onChange={(e) =>
                    setPrompt({ ...prompt, [section.key]: e.target.value })
                  }
                  placeholder={section.placeholder}
                  className="w-full h-28 p-3 text-sm border border-rose-100 rounded-xl bg-white/60 backdrop-blur resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-slate-700"
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Your prompt
              </div>
              <Button
                size="sm"
                onClick={handleCopy}
                disabled={!fullPrompt}
                variant={fullPrompt ? "primary" : "secondary"}
              >
                {copied ? (
                  <>
                    <Check size={14} className="mr-1.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} className="mr-1.5" />
                    Copy prompt
                  </>
                )}
              </Button>
            </div>
            <div className="bg-white rounded-xl border border-rose-100 p-4 min-h-[140px] text-sm font-mono text-slate-700 whitespace-pre-wrap">
              {fullPrompt || (
                <span className="text-slate-400">
                  Start filling the boxes above — your prompt will appear here.
                </span>
              )}
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Link href="/playbooks">
            <Button size="lg">
              Now grab a ready prompt
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
