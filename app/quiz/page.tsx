"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Sparkles,
} from "lucide-react";
import { quizQuestions, quizConfig } from "@/data";
import { Button, Card, Badge, ProgressBar } from "@/components/ui";
import { QuizResult } from "@/types";

function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const questions = useMemo(() => {
    if (!started) return [];
    return shuffle(quizQuestions).slice(0, quizConfig.questionsPerQuiz);
  }, [started]);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (id: string) => {
    if (showExplanation) return;
    setSelected(id);
  };

  const handleSubmit = () => {
    if (!selected || !currentQuestion) return;
    setAnswers({ ...answers, [currentQuestion.id]: selected });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setAnswers({});
    setCompleted(false);
  };

  const results = useMemo((): QuizResult | null => {
    if (!completed || questions.length === 0) return null;

    let correct = 0;
    const conceptScores: Record<string, { correct: number; total: number }> = {};
    questions.forEach((q) => {
      const ua = answers[q.id];
      const ok = ua === q.correctAnswer;
      if (!conceptScores[q.concept])
        conceptScores[q.concept] = { correct: 0, total: 0 };
      conceptScores[q.concept].total++;
      if (ok) {
        correct++;
        conceptScores[q.concept].correct++;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    const conceptNames: Record<string, string> = {
      role: "Role — telling AI who to be",
      instructions: "Instructions — saying exactly what you want",
      parameters: "Parameters — giving AI your details",
      expected: "Expected — describing the output",
      safety: "Safety — being careful with AI",
      "invention-ratio": "Letting AI invent less",
    };

    const recommendations: string[] = [];
    Object.entries(conceptScores).forEach(([concept, stats]) => {
      if (stats.correct / stats.total < 0.5) {
        recommendations.push(conceptNames[concept] || concept);
      }
    });

    return {
      totalQuestions: questions.length,
      correctAnswers: correct,
      score,
      conceptScores,
      recommendations,
    };
  }, [completed, questions, answers]);

  if (!started) {
    return (
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-400 to-violet-500 flex items-center justify-center shadow-sm">
            <Brain size={30} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Test your RIPE.
          </h1>
          <p className="text-slate-600 mb-8">
            10 questions. No pressure. Passing is {quizConfig.passingScore}%, but
            honestly — coming back to review is the win.
          </p>

          <Card variant="warm" padding="lg" className="text-left mb-8">
            <h3 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-rose-500" />
              What's covered
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "R — Role",
                "I — Instructions",
                "P — Parameters",
                "E — Expected output",
                "Plus a few safety calls",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-rose-500" />
                  {t}
                </li>
              ))}
            </ul>
          </Card>

          <Button size="lg" onClick={() => setStarted(true)}>
            Start quiz
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  if (completed && results) {
    const passed = results.score >= quizConfig.passingScore;
    return (
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed
                ? "bg-gradient-to-br from-rose-400 to-violet-500"
                : "bg-amber-100"
            }`}
          >
            {passed ? (
              <Trophy size={40} className="text-white" />
            ) : (
              <Brain size={40} className="text-amber-600" />
            )}
          </motion.div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {passed ? "You've got RIPE." : "Keep going — you're close."}
          </h1>
          <p className="text-slate-600 mb-6">
            {passed
              ? "Go use it. The world of prompts is yours."
              : "The stuff you missed is the same stuff everyone misses. Review and try again."}
          </p>

          <Card variant="bordered" padding="lg" className="mb-8">
            <div className="text-center mb-6">
              <div
                className={`text-5xl font-bold ${
                  passed ? "text-rose-600" : "text-amber-600"
                }`}
              >
                {results.score}%
              </div>
              <div className="text-sm text-slate-500">
                {results.correctAnswers} of {results.totalQuestions} correct
              </div>
            </div>

            <ProgressBar
              value={results.score}
              variant={passed ? "gradient" : "warning"}
              size="lg"
              className="mb-6"
            />

            {results.recommendations.length > 0 && (
              <div className="p-4 bg-amber-50 rounded-xl text-left">
                <h3 className="text-sm font-medium text-amber-800 mb-2">
                  Go back and peek at:
                </h3>
                <ul className="space-y-1">
                  {results.recommendations.map((rec, i) => (
                    <li key={i} className="text-sm text-amber-700">
                      • {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="secondary" onClick={handleRestart}>
              <RotateCcw size={14} className="mr-2" />
              Retake
            </Button>
            <Link href="/ripe">
              <Button variant="ghost">Review RIPE</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;
  const isCorrect = selected === currentQuestion.correctAnswer;

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm text-slate-500 shrink-0">
            {currentIndex + 1} / {questions.length}
          </span>
          <ProgressBar
            value={currentIndex + 1}
            max={questions.length}
            variant="gradient"
            className="flex-1"
          />
        </div>

        <Card variant="bordered" padding="lg">
          <div className="mb-5">
            <Badge size="sm" variant="rose" className="mb-3 capitalize">
              {currentQuestion.concept.replace("-", " ")}
            </Badge>
            <h2 className="text-xl font-semibold text-slate-900">
              {currentQuestion.question}
            </h2>
          </div>

          {currentQuestion.context && (
            <div className="p-4 bg-slate-50 rounded-xl mb-5 font-mono text-sm text-slate-700">
              {currentQuestion.context}
            </div>
          )}

          <div className="space-y-2 mb-5">
            {currentQuestion.options.map((opt) => {
              const isSelected = selected === opt.id;
              const isCorrectOpt = opt.id === currentQuestion.correctAnswer;
              let style = "border-slate-200 hover:border-rose-300";
              if (showExplanation) {
                if (isCorrectOpt) style = "border-emerald-400 bg-emerald-50";
                else if (isSelected) style = "border-rose-400 bg-rose-50";
              } else if (isSelected) {
                style = "border-rose-400 bg-rose-50";
              }
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left border-2 rounded-xl transition-all ${style}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 shrink-0">
                      {opt.id.toUpperCase()}
                    </span>
                    <span className="text-slate-700 flex-1">{opt.text}</span>
                    {showExplanation && isCorrectOpt && (
                      <CheckCircle2
                        size={18}
                        className="text-emerald-500 shrink-0"
                      />
                    )}
                    {showExplanation && isSelected && !isCorrectOpt && (
                      <XCircle size={18} className="text-rose-500 shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className={`p-4 rounded-xl mb-5 ${
                    isCorrect ? "bg-emerald-50" : "bg-amber-50"
                  }`}
                >
                  <div
                    className={`font-medium mb-1 ${
                      isCorrect ? "text-emerald-800" : "text-amber-800"
                    }`}
                  >
                    {isCorrect ? "Yes!" : "Not quite"}
                  </div>
                  <p
                    className={`text-sm ${
                      isCorrect ? "text-emerald-700" : "text-amber-700"
                    }`}
                  >
                    {currentQuestion.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end">
            {!showExplanation ? (
              <Button onClick={handleSubmit} disabled={!selected}>
                Check
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentIndex < questions.length - 1 ? (
                  <>
                    Next
                    <ArrowRight size={14} className="ml-2" />
                  </>
                ) : (
                  "See results"
                )}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
