import { CareAnalysis, CareKey, PracticeFeedback } from "@/types";

// Indicators for each CARE component
const contextIndicators = [
  "my",
  "our",
  "i have",
  "i'm",
  "i am",
  "we have",
  "currently",
  "situation",
  "context",
  "background",
  "budget",
  "timeline",
  "earning",
  "earn",
  "rent",
  "income",
  "student",
  "job",
  "uni",
  "university",
  "course",
  "deadline",
  "week",
  "month",
  "constraint",
  "goal",
];

const askIndicators = [
  "rewrite",
  "draft",
  "write",
  "plan",
  "list",
  "quiz",
  "explain",
  "compare",
  "summarise",
  "summarize",
  "suggest",
  "give me",
  "show me",
  "turn this",
  "help me with",
  "build",
  "create",
  "review",
  "fix",
  "improve",
  "tailor",
];

const roleIndicators = [
  "you are",
  "act as",
  "act like",
  "be a",
  "be an",
  "be my",
  "play a",
  "pretend",
  "imagine you",
  "as a",
  "coach",
  "tutor",
  "friend",
  "mentor",
  "recruiter",
  "advisor",
  "teacher",
  "assistant",
  "expert",
  "role of",
];

const expectedIndicators = [
  "bullet",
  "bullets",
  "list",
  "table",
  "paragraph",
  "word",
  "words",
  "characters",
  "under",
  "max",
  "maximum",
  "minimum",
  "format",
  "structure",
  "items",
  "points",
  "summary",
  "length",
  "lines",
  "keep it",
  "make it",
  "no longer than",
];

function analyzeComponent(text: string, indicators: string[]): CareAnalysis {
  const lowerText = text.toLowerCase();
  const found = indicators.filter((i) => lowerText.includes(i.toLowerCase()));

  if (found.length === 0) {
    return { present: false, quality: "none" };
  }

  const firstIndicator = found[0];
  const index = lowerText.indexOf(firstIndicator.toLowerCase());
  const start = Math.max(0, index - 20);
  const end = Math.min(text.length, index + firstIndicator.length + 50);
  const snippet = text.slice(start, end).trim();

  let quality: CareAnalysis["quality"] = "weak";
  if (found.length >= 3) {
    quality = "strong";
  } else {
    const hasNumbers = /\d+/.test(snippet);
    const hasSpecificTerms = /\$|%|years?|months?|weeks?|days?|hours?/.test(
      snippet
    );
    if (hasNumbers || hasSpecificTerms) quality = "good";
  }

  return {
    present: true,
    quality,
    snippet: snippet.length > 80 ? snippet.slice(0, 80) + "..." : snippet,
  };
}

const qualityScore: Record<CareAnalysis["quality"], number> = {
  none: 0,
  weak: 10,
  good: 18,
  strong: 25,
};

export function analyzePrompt(prompt: string): PracticeFeedback {
  const context = analyzeComponent(prompt, contextIndicators);
  const ask = analyzeComponent(prompt, askIndicators);
  const role = analyzeComponent(prompt, roleIndicators);
  const expected = analyzeComponent(prompt, expectedIndicators);

  const score =
    qualityScore[context.quality] +
    qualityScore[ask.quality] +
    qualityScore[role.quality] +
    qualityScore[expected.quality];

  const suggestions: string[] = [];
  if (!context.present) {
    suggestions.push(
      "Add some Context — who are you, what's your situation, what's the deadline?"
    );
  } else if (context.quality === "weak") {
    suggestions.push("Make Context more concrete — add numbers, dates, or a real constraint.");
  }

  if (!ask.present) {
    suggestions.push(
      "Your Ask is vague — start with a verb (rewrite, plan, quiz, draft)."
    );
  }

  if (!role.present) {
    suggestions.push(
      "Give AI a Role — e.g., 'Act like a budget coach who's realistic not preachy'."
    );
  } else if (role.quality === "weak") {
    suggestions.push("Add a vibe to the Role — honest, gentle, blunt, playful.");
  }

  if (!expected.present) {
    suggestions.push(
      "Say what you want back — format, length, tone. 'Under 80 words, as a list.'"
    );
  } else if (expected.quality === "weak") {
    suggestions.push("Be more specific about Expected — how many items? How many words?");
  }

  let tier: PracticeFeedback["tier"] = "generic";
  if (score >= 70) tier = "excellent";
  else if (score >= 40) tier = "adequate";

  const careAnalysis: Record<CareKey, CareAnalysis> = {
    context,
    ask,
    role,
    expected,
  };

  return { score, careAnalysis, suggestions, tier };
}

export function getScoreLabel(score: number): { label: string; color: string } {
  if (score >= 70) return { label: "Excellent", color: "text-rose-600" };
  if (score >= 50) return { label: "Good", color: "text-violet-600" };
  if (score >= 30) return { label: "Needs work", color: "text-amber-600" };
  return { label: "Just getting started", color: "text-slate-500" };
}
