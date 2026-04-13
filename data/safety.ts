import { SafetyRule } from "@/types";

export const safetyRules: SafetyRule[] = [
  {
    id: "private",
    title: "Don't paste anything private.",
    body: "No passwords, ID numbers, bank details, medical records, or other people's personal info. Treat AI like a stranger on public transport — if you wouldn't say it out loud, don't paste it.",
    icon: "Lock",
  },
  {
    id: "hallucinate",
    title: "AI makes stuff up — confidently.",
    body: "Especially with numbers, quotes, dates, legal info, medical info, and very recent events. Always double-check anything that matters. A smooth answer isn't a correct one.",
    icon: "AlertTriangle",
  },
  {
    id: "integrity",
    title: "Check your course rules before submitting.",
    body: "Some assignments allow AI, some don't. Use AI to learn and draft — not to hand in work as your own when your course says no. If in doubt, ask your tutor.",
    icon: "GraduationCap",
  },
  {
    id: "bias",
    title: "AI can reflect bias.",
    body: "If an answer feels off — about gender, race, culture, class, or your own identity — it probably is. You're allowed to push back, ask for another angle, or just move on.",
    icon: "Scale",
  },
  {
    id: "human",
    title: "Some things need a human.",
    body: "Real mental-health stuff, relationship crises, medical symptoms, legal issues — AI is a tool, not your therapist or your doctor. Use it to organise thoughts, then talk to a real person.",
    icon: "Heart",
  },
];
