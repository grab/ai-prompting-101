"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Send,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { practiceScenarios, difficultyLabels } from "@/data";
import { analyzePrompt, getScoreLabel } from "@/lib";
import { Button, Card, Badge, ProgressBar } from "@/components/ui";
import {
  PracticeScenario,
  PracticeFeedback,
  RipeKey,
} from "@/types";

function ScenarioCard({
  scenario,
  isSelected,
  onClick,
}: {
  scenario: PracticeScenario;
  isSelected: boolean;
  onClick: () => void;
}) {
  const d = difficultyLabels[scenario.difficulty];
  const squadEmoji = {
    "life-admin": "🏠",
    learning: "📚",
    career: "💼",
  }[scenario.squad];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl border transition-all ${
        isSelected
          ? "border-rose-400 bg-rose-50"
          : "border-slate-200 bg-white hover:border-rose-300 hover:bg-rose-50/50"
      }`}
    >
      <div className="flex items-start justify-between mb-1 gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <span className="text-lg shrink-0">{squadEmoji}</span>
          <h3 className="font-medium text-slate-900 leading-snug">
            {scenario.title}
          </h3>
        </div>
        <Badge size="sm" className={d.color}>
          {d.label}
        </Badge>
      </div>
      <p className="text-xs text-slate-500 line-clamp-2 ml-7">
        {scenario.description}
      </p>
    </button>
  );
}

function RipeBar({
  label,
  present,
  quality,
}: {
  label: string;
  present: boolean;
  quality: string;
}) {
  const colors = {
    none: "bg-slate-200",
    weak: "bg-amber-400",
    good: "bg-rose-400",
    strong: "bg-gradient-to-r from-rose-500 to-violet-500",
  };
  const width = present
    ? quality === "strong"
      ? "100%"
      : quality === "good"
      ? "70%"
      : "40%"
    : "0%";
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-slate-600 w-6">{label}</span>
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[quality as keyof typeof colors] || colors.none} rounded-full transition-all`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

const ripeLabels: Record<RipeKey, string> = {
  role: "R",
  instructions: "I",
  parameters: "P",
  expected: "E",
};

export default function PracticePage() {
  const [selected, setSelected] = useState<PracticeScenario>(
    practiceScenarios[0]
  );
  const [userPrompt, setUserPrompt] = useState("");
  const [feedback, setFeedback] = useState<PracticeFeedback | null>(null);
  const [showHints, setShowHints] = useState(false);

  const handleSubmit = () => {
    if (!userPrompt.trim()) return;
    setFeedback(analyzePrompt(userPrompt));
  };

  const handleReset = () => {
    setUserPrompt("");
    setFeedback(null);
    setShowHints(false);
  };

  const scoreInfo = feedback ? getScoreLabel(feedback.score) : null;

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="amber" size="sm" className="mb-3">
            Practice
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Write your own. We'll score it.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pick a real-life scenario, write a prompt using RIPE, and get
            instant feedback on what's missing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Scenarios */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="font-semibold text-slate-900 mb-2">Pick a scenario</h2>
            {practiceScenarios.map((s) => (
              <ScenarioCard
                key={s.id}
                scenario={s}
                isSelected={selected.id === s.id}
                onClick={() => {
                  setSelected(s);
                  handleReset();
                }}
              />
            ))}
          </div>

          {/* Practice area */}
          <div className="lg:col-span-2 space-y-5">
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {selected.title}
              </h2>
              <p className="text-slate-600 mb-4">{selected.description}</p>
              <div className="p-4 bg-gradient-to-r from-rose-50 to-violet-50 rounded-xl border border-rose-100">
                <div className="text-xs font-semibold text-rose-700 mb-1 uppercase tracking-wide">
                  Your goal
                </div>
                <p className="text-sm text-slate-800">{selected.goal}</p>
              </div>

              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center gap-2 mt-4 text-sm text-slate-500 hover:text-rose-600"
              >
                <Lightbulb size={14} />
                {showHints ? "Hide hints" : "Show hints"}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${showHints ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {showHints && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-1">
                      {selected.hints.map((h, i) => (
                        <li key={i} className="text-sm text-amber-700">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-slate-900">Your prompt</h3>
                <span className="text-xs text-slate-400">
                  {userPrompt.length} chars
                </span>
              </div>
              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Write your prompt here — remember RIPE: Role, Instructions, Parameters, Expected."
                className="w-full h-40 p-4 border border-rose-100 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-slate-700"
                disabled={!!feedback}
              />
              <div className="flex gap-3 mt-4">
                {!feedback ? (
                  <Button onClick={handleSubmit} disabled={!userPrompt.trim()}>
                    <Send size={14} className="mr-2" />
                    Analyse
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={handleReset}>
                    <RefreshCw size={14} className="mr-2" />
                    Try again
                  </Button>
                )}
              </div>
            </Card>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card variant="warm" padding="lg">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="font-semibold text-slate-900">Feedback</h3>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-bold ${scoreInfo?.color}`}>
                          {feedback.score}
                        </span>
                        <span className="text-sm text-slate-500">
                          /100 · {scoreInfo?.label}
                        </span>
                      </div>
                    </div>

                    <ProgressBar
                      value={feedback.score}
                      variant={feedback.score >= 70 ? "gradient" : "warning"}
                      className="mb-6"
                    />

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {(["role", "instructions", "parameters", "expected"] as RipeKey[]).map(
                        (k) => (
                          <RipeBar
                            key={k}
                            label={ripeLabels[k]}
                            present={feedback.ripeAnalysis[k].present}
                            quality={feedback.ripeAnalysis[k].quality}
                          />
                        )
                      )}
                    </div>

                    {feedback.suggestions.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">
                          Suggestions
                        </h4>
                        <ul className="space-y-2">
                          {feedback.suggestions.map((s, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <AlertCircle
                                size={14}
                                className="text-amber-500 shrink-0 mt-0.5"
                              />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-rose-100">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        {feedback.tier === "excellent" ? (
                          <CheckCircle2 size={14} className="text-emerald-500" />
                        ) : (
                          <AlertCircle size={14} className="text-amber-500" />
                        )}
                        What AI might reply with ({feedback.tier})
                      </h4>
                      <div className="p-4 bg-white rounded-xl border border-rose-100 text-sm text-slate-700 max-h-64 overflow-y-auto whitespace-pre-wrap">
                        {selected.responses[feedback.tier]}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
