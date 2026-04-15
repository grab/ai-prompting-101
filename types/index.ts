// RIPE framework
export type RipeKey = "role" | "instructions" | "parameters" | "expected";

export interface RipePrompt {
  role: string;
  instructions: string;
  parameters: string;
  expected: string;
}

export interface RipeSection {
  key: RipeKey;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  placeholder: string;
  examples: string[];
  tips: string[];
}

// Playbooks
export type SquadId = "life-admin" | "learning" | "career";

export interface Squad {
  id: SquadId;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  accent: string; // tailwind color key, e.g. "rose"
}

export interface PlaybookPrompt {
  id: string;
  title: string;
  useCase: string;
  prompt: string;
  ripeNotes: Partial<Record<RipeKey, string>>;
}

export interface Playbook {
  squad: SquadId;
  prompts: PlaybookPrompt[];
}

// Practice sandbox
export interface PracticeScenario {
  id: string;
  squad: SquadId;
  title: string;
  description: string;
  goal: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  hints: string[];
  responses: {
    generic: string;
    adequate: string;
    excellent: string;
  };
}

export interface RipeAnalysis {
  present: boolean;
  quality: "none" | "weak" | "good" | "strong";
  snippet?: string;
}

export interface PracticeFeedback {
  score: number;
  ripeAnalysis: Record<RipeKey, RipeAnalysis>;
  suggestions: string[];
  tier: "generic" | "adequate" | "excellent";
}

// Quiz
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "identify-issue" | "improve-prompt";
  question: string;
  context?: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  concept: RipeKey | "invention-ratio" | "safety";
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  conceptScores: Record<string, { correct: number; total: number }>;
  recommendations: string[];
}

// Safety & Facilitators
export interface SafetyRule {
  id: string;
  title: string;
  body: string;
  icon: string;
}

export interface RunOfShowItem {
  time: string;
  title: string;
  notes: string;
}

export interface FacilitatorSection {
  title: string;
  body: string[];
}
