import { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  // Parameters
  {
    id: "p-1",
    type: "multiple-choice",
    question: "Why does giving AI more Parameters usually help?",
    options: [
      { id: "a", text: "It makes the prompt look more impressive." },
      { id: "b", text: "Without parameters, AI guesses — and often guesses wrong about you." },
      { id: "c", text: "AI charges less when the prompt is longer." },
      { id: "d", text: "It's polite." },
    ],
    correctAnswer: "b",
    explanation:
      "When AI doesn't know your situation, it fills gaps with generic patterns from training data. Real parameters = less guessing, more useful answers.",
    concept: "parameters",
  },
  {
    id: "p-2",
    type: "identify-issue",
    question: "What's the main issue with this prompt?",
    context: "Give me advice on managing money.",
    options: [
      { id: "a", text: "It's missing who the AI should be." },
      { id: "b", text: "It has no parameters — income, goals, situation." },
      { id: "c", text: "The output format isn't specified." },
      { id: "d", text: "All of the above, but no parameters is the biggest." },
    ],
    correctAnswer: "d",
    explanation:
      "All four RIPE letters are missing. Parameters (income, costs, goals) is the biggest gap — without it, you'll get generic 'make a budget' advice.",
    concept: "parameters",
  },
  {
    id: "p-3",
    type: "multiple-choice",
    question: "Which kind of parameters are MOST useful to include?",
    options: [
      { id: "a", text: "Your complete life story." },
      { id: "b", text: "Constraints, feelings, and the 1–2 things that would change the answer." },
      { id: "c", text: "Everything you know about the topic." },
      { id: "d", text: "Nothing — AI should just know." },
    ],
    correctAnswer: "b",
    explanation:
      "Useful parameters aren't quantity — it's relevance. The stuff that would change the answer: your budget, your time, your constraints, your feelings.",
    concept: "parameters",
  },

  // Instructions
  {
    id: "i-1",
    type: "multiple-choice",
    question: "Which of these is a proper Instruction?",
    options: [
      { id: "a", text: "Help me with my resume." },
      { id: "b", text: "Can you look at my resume please." },
      { id: "c", text: "Rewrite this bullet to show impact instead of activity." },
      { id: "d", text: "Tell me about resumes." },
    ],
    correctAnswer: "c",
    explanation:
      "Option C uses a specific verb (rewrite) and a specific goal (impact vs activity). That's a real instruction — the others are wishes.",
    concept: "instructions",
  },
  {
    id: "i-2",
    type: "identify-issue",
    question: "How would you improve this prompt's Instructions?",
    context: "You're a career coach. Help me.",
    options: [
      { id: "a", text: "Remove the role." },
      { id: "b", text: "Replace 'Help me' with a specific verb and one deliverable." },
      { id: "c", text: "Add more roles." },
      { id: "d", text: "Add a please." },
    ],
    correctAnswer: "b",
    explanation:
      "'Help me' is vague — AI will guess. 'Rewrite my LinkedIn headline in 10 words' is an actual instruction.",
    concept: "instructions",
  },

  // Role
  {
    id: "r-1",
    type: "multiple-choice",
    question: "Which role is most useful for getting honest essay feedback?",
    options: [
      { id: "a", text: "Be helpful." },
      { id: "b", text: "You are an AI assistant." },
      { id: "c", text: "Act like the toughest-but-fairest tutor I've ever had." },
      { id: "d", text: "Be nice." },
    ],
    correctAnswer: "c",
    explanation:
      "A specific role with a specific vibe (tough-but-fair) activates a certain voice. 'Be helpful' is the default — and it's why feedback often feels soft.",
    concept: "role",
  },
  {
    id: "r-2",
    type: "multiple-choice",
    question: "What does giving AI a Role actually change?",
    options: [
      { id: "a", text: "Nothing — it's just roleplay." },
      { id: "b", text: "Its voice, focus, and the kind of details it volunteers." },
      { id: "c", text: "The length of the response." },
      { id: "d", text: "It makes AI cost more." },
    ],
    correctAnswer: "b",
    explanation:
      "Role shifts what AI prioritises. A recruiter notices different things than a friend — same content, different lens.",
    concept: "role",
  },

  // Expected output
  {
    id: "e-1",
    type: "multiple-choice",
    question: "Which expected output will give you the most usable answer?",
    options: [
      { id: "a", text: "Make it good." },
      { id: "b", text: "Keep it short." },
      { id: "c", text: "Give me 3 bullets, each under 15 words, written like a friend." },
      { id: "d", text: "Whatever you think." },
    ],
    correctAnswer: "c",
    explanation:
      "'Short' is subjective. '3 bullets, under 15 words, like a friend' is concrete — you'll get something you can actually use.",
    concept: "expected",
  },
  {
    id: "e-2",
    type: "identify-issue",
    question: "What's missing from this prompt's Expected output?",
    context: "Act as a budget coach. I earn $800/month. Give me tips.",
    options: [
      { id: "a", text: "Format, length, and vibe." },
      { id: "b", text: "The role." },
      { id: "c", text: "The parameters." },
      { id: "d", text: "Nothing — it's fine." },
    ],
    correctAnswer: "a",
    explanation:
      "AI will default to a wall of generic tips. Ask for a table, a top-3 list, or a specific word count — whatever you can actually use.",
    concept: "expected",
  },

  // Safety / judgment
  {
    id: "s-1",
    type: "multiple-choice",
    question: "Which of these should you NOT paste into a free AI tool?",
    options: [
      { id: "a", text: "A rough draft of your personal statement." },
      { id: "b", text: "A lecture slide to summarise." },
      { id: "c", text: "Your bank statement with your full account number." },
      { id: "d", text: "A recipe you're trying to halve." },
    ],
    correctAnswer: "c",
    explanation:
      "Treat AI like a stranger on public transport. Don't paste passwords, full IDs, account numbers, or anything you wouldn't say out loud.",
    concept: "safety",
  },
];

export const quizConfig = {
  passingScore: 70,
  questionsPerQuiz: 10,
};
