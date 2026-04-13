// CARE framework
export type CareKey = "context" | "ask" | "role" | "expected";

export interface CarePrompt {
  context: string;
  ask: string;
  role: string;
  expected: string;
}

export interface CareSection {
  key: CareKey;
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
  careNotes: Partial<Record<CareKey, string>>;
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

export interface CareAnalysis {
  present: boolean;
  quality: "none" | "weak" | "good" | "strong";
  snippet?: string;
}

export interface PracticeFeedback {
  score: number;
  careAnalysis: Record<CareKey, CareAnalysis>;
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
  concept: CareKey | "invention-ratio" | "safety";
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
