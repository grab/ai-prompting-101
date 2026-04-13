import { CareKey, CareSection } from "@/types";

export const careSections: CareSection[] = [
  {
    key: "context",
    label: "Context",
    shortLabel: "C",
    tagline: "Tell AI about you.",
    description:
      "Share who you are, your situation, and what you care about. The more AI knows, the less it guesses.",
    placeholder:
      "e.g., I'm a second-year uni student, I have ADHD, exams are in 3 weeks and I've barely started studying Biology...",
    examples: [
      "I'm a 22-year-old starting my first full-time job next month — first in my family to work in tech.",
      "I'm a third-year Psych major trying to balance 4 courses, a part-time cafe job, and my mental health.",
      "I live at home, I help pay some bills, and I want to save $200/month on a $1,800 salary.",
    ],
    tips: [
      "Include what's actually going on — constraints, feelings, deadlines.",
      "Mention anything that would change the answer (budget, time, background).",
      "You don't have to be formal — talk to it like a friend.",
    ],
  },
  {
    key: "ask",
    label: "Ask",
    shortLabel: "A",
    tagline: "Say what you actually want.",
    description:
      "Be specific about the thing you want done. \"Help me with my resume\" is a wish. \"Rewrite this bullet to show impact\" is an ask.",
    placeholder:
      "e.g., Rewrite this bullet so it sounds like I actually made an impact: 'Helped organise events for the club.'",
    examples: [
      "Turn this brain dump into a ranked to-do list for today.",
      "Quiz me on photosynthesis until I can explain it in my own words.",
      "Write me a 3-line DM I can send to this alum on LinkedIn.",
    ],
    tips: [
      "Replace 'help me' with a verb — rewrite, quiz, plan, draft, compare.",
      "One ask at a time beats a giant list.",
      "If you want options, say so: 'Give me 3 versions.'",
    ],
  },
  {
    key: "role",
    label: "Role",
    shortLabel: "R",
    tagline: "Tell AI who to be.",
    description:
      "Giving AI a role changes its voice, depth, and what it focuses on. A 'patient tutor' sounds different from a 'blunt recruiter'.",
    placeholder:
      "e.g., Act like a supportive tutor who explains things without being condescending.",
    examples: [
      "Act like a budget coach who's realistic, not preachy.",
      "Be a recruiter at a top tech company reviewing my CV.",
      "Play a friend who's blunt but kind about my first draft.",
    ],
    tips: [
      "Pick a role that matches the vibe you need — supportive, honest, playful.",
      "Mention style: 'no jargon', 'keep it short', 'be kind'.",
      "You can switch roles mid-chat — it's not locked in.",
    ],
  },
  {
    key: "expected",
    label: "Expected output",
    shortLabel: "E",
    tagline: "Describe what you want back.",
    description:
      "Say the format, length, and vibe. Otherwise AI will default to a wall of text that you'll have to reformat anyway.",
    placeholder:
      "e.g., Give me 5 bullet points, each under 15 words, no corporate fluff.",
    examples: [
      "A 3-day study plan as a table — day, topic, hours, technique.",
      "One paragraph I can paste into my LinkedIn About section (under 80 words).",
      "A list of 5 interview questions, ranked easy to hard, with sample answers.",
    ],
    tips: [
      "Specify format: bullets, table, email, paragraph.",
      "Always add a length constraint — 'under 100 words', '3 items'.",
      "Say how you'll use it — 'something I can send as-is'.",
    ],
  },
];

export const careOrder: CareKey[] = ["context", "ask", "role", "expected"];
