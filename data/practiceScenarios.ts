import { PracticeScenario } from "@/types";

export const practiceScenarios: PracticeScenario[] = [
  {
    id: "study-plan",
    squad: "learning",
    title: "Study plan for finals week",
    description:
      "You have 4 subjects, 10 days, and a part-time job. You need a realistic study plan that won't burn you out.",
    goal: "Write a prompt that gets you a plan you'd actually follow — not a fantasy one.",
    difficulty: "beginner",
    hints: [
      "What does AI need to know about YOUR schedule?",
      "What vibe do you want — strict coach or chill guide?",
      "Do you want a table, a list, or a day-by-day chat?",
      "Tell it what you DON'T want (e.g., 'no 6am starts, I won't do it').",
    ],
    responses: {
      generic: `Here's a general 10-day study plan:

**Days 1–3:** Subject 1 & 2
**Days 4–6:** Subject 3 & 4
**Days 7–8:** Review
**Day 9:** Practice questions
**Day 10:** Light revision and rest

Study 3–4 hours per day. Take breaks. Get enough sleep.

Good luck with your exams!`,

      adequate: `Here's a 10-day plan based on 4 subjects with work days:

**Week 1 — Learn the material**
- Mon/Wed/Fri (work days, lighter): Subject 1 (easiest) — 2 hrs each
- Tue/Thu: Subject 2 — 3 hrs each
- Sat: Subject 3 — deep-dive morning session
- Sun: Subject 4 — afternoon

**Week 2 — Practice**
- Mon/Tue: past papers for Subjects 1 & 2
- Wed/Thu: past papers for Subjects 3 & 4
- Fri: weakest topic sweep
- Sat: rest
- Sun: quick review, early night

Add 10-min breaks every 50 min. Don't skip meals.`,

      excellent: `Before I build this, a few quick questions:

1. Which of the 4 subjects feels scariest right now?
2. Which days are your work days?
3. When are you actually sharpest — morning, afternoon, or late night?

Based on what you've shared, here's a plan that respects your work schedule and your energy:

**The 10-Day Realistic Plan**

Week 1 is "make friends with the material":
- Work days → 1.5 hrs of lighter revision (the subject you already half-know)
- Non-work days → 2 sharper blocks of 90 min on the scary one

Week 2 is "test yourself":
- Past papers become the main food — not re-reading notes
- Pair the scariest subject with your sharpest time slot

**Your non-negotiables (write these on a sticky note):**
- One full rest day (probably Saturday)
- No study after 9pm — you don't retain it
- If you miss a block, skip it — don't "make it up tomorrow"

**The ONE thing that actually matters:**
Do the scariest subject's past paper first, on Day 3. You'll panic, you'll realise it's doable, and the rest of the week stops feeling impossible.

Want me to turn this into a printable day-by-day table?`,
    },
  },
  {
    id: "awkward-text",
    squad: "life-admin",
    title: "Reply to a stressful text from mum",
    description:
      "Mum just texted: \"Can you send money home this month? Things are tight.\" You genuinely can't — rent just went up. You need to reply today.",
    goal: "Write a prompt that helps you reply honestly without hurting her or yourself.",
    difficulty: "intermediate",
    hints: [
      "What role should AI play here — friend? therapist? writer?",
      "What do you actually want to say beneath the awkwardness?",
      "What tone do you NOT want? (Preachy? Fake-chirpy? Too formal?)",
      "Length matters — a 5-paragraph reply will feel weird.",
    ],
    responses: {
      generic: `Here's a template for your reply:

"Hi Mum, I really appreciate you reaching out. I understand things are difficult right now, and I wish I could help more. Unfortunately, my own financial situation is a bit challenging this month due to increased expenses. I hope we can talk soon and figure something out together. Love you."

Feel free to customize based on your relationship.`,

      adequate: `Here's a reply option:

"Hi Ma, I hear you — I'm sorry things are tight. My rent just went up this month so I genuinely can't send anything right now. I don't want to say 'next month' if I'm not sure. Can we talk this weekend about what's going on your end? Love you."

This acknowledges her, is honest about your limits, and opens a real conversation instead of a yes/no answer.`,

      excellent: `Quick questions first:

1. Is this a one-off ask, or has it been happening more often?
2. What's your actual relationship vibe — are you close, or do you mostly stick to logistics?
3. Do you want this to open a bigger conversation or close it gently for now?

Assuming you're close-ish and this is a recurring thing, here are 2 options:

**Option 1 — Soft but clear (if you want to keep the door open)**
"Hi Ma, I hear you. Honestly my rent went up this month and I'm stretched — I can't send anything right now, and I don't want to promise next month if I'm not sure. Can we talk this weekend? I want to understand what's going on there, not just the money part."

**Option 2 — Firmer (if this pattern is draining you)**
"Mum, I'm sorry things are hard. I genuinely can't send money this month — I'd be putting myself short. I love you, but I think we need to talk about this properly instead of through texts about specific months. Can we call Sunday?"

**What I'd avoid:**
- "I wish I could" with no plan — it invites a guilt reply
- "Maybe next month" unless you actually mean it
- Over-explaining your own expenses — she doesn't need the spreadsheet

Pick one and send it before you overthink it. You're allowed to have limits AND love her.`,
    },
  },
  {
    id: "internship-dm",
    squad: "career",
    title: "Cold DM for an internship referral",
    description:
      "You spotted an alum from your uni working at a company you'd love to intern at. You want to DM them for advice — not ask directly for the job.",
    goal: "Write a prompt that gets you a DM that actually gets a reply.",
    difficulty: "intermediate",
    hints: [
      "What does AI need to know about YOU to make it sound like you?",
      "What's the specific, small ask — not 'can you help me get a job'?",
      "How do you give them an easy out if they can't reply?",
      "What's the tone — eager? casual? professional?",
    ],
    responses: {
      generic: `Here's a cold DM template:

"Hi [Name], I hope this message finds you well. My name is [Your Name] and I'm a student at [University]. I noticed you work at [Company] and I'm very interested in your field. I would love to hear more about your experience and career journey. Would you be open to a brief conversation? Looking forward to hearing from you. Best regards, [Your Name]"`,

      adequate: `Here's a cold DM draft:

"Hi [Name] — saw you also went to [Uni] and now work at [Company]. I'm a third-year [course] interested in [specific team/area].

I'm not asking for a referral — just 10 minutes of your time. Would love to hear how you found the shift from [Uni] to [Company] and anything you wish you'd known earlier.

Totally cool if you're swamped. Either way, thanks for the inspiration."

This is short, specific, and gives them an easy way out without awkwardness.`,

      excellent: `Quick check first:

1. Have you actually looked at their LinkedIn? Anything specific about their path that stood out?
2. Is there a reason you're messaging them vs. someone else — same degree? Same hometown? Similar career pivot?
3. Do you want a 10-min chat, or just written advice?

Assuming you want a short call and there's a real reason you picked them, here's a DM that reads like a human:

---

**Subject line / opener:** "Fellow [Uni] grad — quick question if you have 30 sec?"

**Body:**

"Hi [Name] — I'm [Your name], third-year [course] at [Uni]. Saw on your profile you moved from [thing A] to [Company] — that's the exact pivot I'm trying to figure out how to make.

Not asking for a referral, promise. I'd just love 10 minutes to hear how you navigated it. Happy to work around your calendar, or ask over DM if that's easier.

If you're slammed right now, no stress at all — wishing you well either way."

---

**Why this works:**
- Specific reason you picked them (the pivot) → not generic
- Explicitly says "not asking for a referral" → lowers the stakes instantly
- Offers DM as a fallback → they don't have to commit to a call
- "If you're slammed… wishing you well either way" → easy out with warmth

**What to NOT do:**
- "I'd love to pick your brain" → universally hated phrase
- "Would you mind connecting me with..." in the first message
- Send the same message to 20 alumni and hope

Send it between Tuesday–Thursday, 10am–4pm their time. Weekends die in the inbox.`,
    },
  },
  {
    id: "budget-help",
    squad: "life-admin",
    title: "Budget on a student allowance",
    description:
      "You get $800/month. Rent + bills eat $500. You want to save a bit, eat well, and still have a social life. Current strategy: panic.",
    goal: "Write a prompt that gets you a realistic money plan you'd actually follow.",
    difficulty: "beginner",
    hints: [
      "What's the context AI needs — income, fixed costs, goals?",
      "What tone? Preachy financial gurus don't help.",
      "What specific output would you want to stick on your fridge?",
      "What's your ONE 'don't tell me to quit coffee' rule?",
    ],
    responses: {
      generic: `Here's a budget breakdown:

**Income:** $800
**Rent/bills:** $500 (63%)
**Remaining:** $300

Suggested split:
- Food: $200
- Transport: $50
- Savings: $30
- Fun money: $20

Track your spending using a free app like Mint or YNAB. Reduce unnecessary expenses. Good luck!`,

      adequate: `Here's a $300-after-essentials plan:

**Food (~$180)**
- Groceries 4 weeks × $40 = $160
- Eat out once a week buffer = $20

**Transport (~$40)**
- Monthly pass covers most trips
- Walk/bike when possible

**Savings (~$40)**
- Automate it: move $10/week to a separate account on payday

**Fun (~$40)**
- One bigger thing (dinner, gig, date) + small stuff

**Tip:** Keep fun money in a separate wallet/app. When it's gone, it's gone — no raiding savings.`,

      excellent: `Before I give you numbers, tell me:

1. Is $500 for rent+bills fixed or flexible (could you share/downgrade)?
2. Is saving pressure mostly from you, or your family?
3. What's your ONE non-negotiable — the thing you WILL spend money on no matter what?

Assuming rent is fixed and you want to save because future-you will thank you:

---

**Your $300-after-essentials plan**

- Groceries: **$140** (~$35/week — batch cook twice, you'll eat better than takeaway)
- Transport: **$40** (monthly pass or top-up)
- Savings: **$50** → move it to a separate account the day you get paid. You won't miss what you don't see.
- "Life" (social + non-negotiable): **$60** → your joy budget. Don't touch savings for this.
- Buffer: **$10** → for the "oh crap I forgot" week

**Fridge version (write this down):**
> Pay day → $50 to savings, $140 groceries, $40 transport. Then $70 is yours.

**The single rule that matters:**
When the $70 is gone, it's gone. Don't borrow from savings. Next payday is only X days away.

**Two things people get wrong:**
- Setting savings too high ($100+) → you break the rule in week 2 and give up.
- Zero fun budget → you end up overspending anyway, and feeling guilty.

**Small win this week:**
Open a separate "savings" account today (most banks do it in-app in 2 min). Move $10 in right now. Done. That's the hardest part finished.`,
    },
  },
  {
    id: "interview-prep",
    squad: "career",
    title: "Prep for your dream-job interview",
    description:
      "Interview in 3 days for a role you actually want. You're nervous and keep re-reading the JD without getting anywhere.",
    goal: "Write a prompt that turns AI into a useful mock-interview partner, not a Wikipedia article.",
    difficulty: "advanced",
    hints: [
      "What role should AI play — a friend, a hiring manager, a coach?",
      "What context — the JD? Your CV? Your weak spots?",
      "What's the interaction style — one question at a time, or a full list?",
      "What feedback do you want after each answer?",
    ],
    responses: {
      generic: `Here are some common interview questions:

1. Tell me about yourself
2. What are your strengths and weaknesses?
3. Why do you want this job?
4. Where do you see yourself in 5 years?
5. Tell me about a time you solved a problem

Practice your answers out loud. Use the STAR method (Situation, Task, Action, Result) for behavioural questions. Research the company. Prepare your own questions to ask. Good luck!`,

      adequate: `Here's a mock prep based on your JD:

**Question 1 (behavioural):**
"Tell me about a time you had to learn something quickly under pressure."
*Answer using STAR. Aim for 2 minutes max.*

**Question 2 (role-specific):**
"How would you approach [a task from the JD]?"
*Use a framework: understand, plan, execute, review.*

**Question 3 (culture fit):**
"Why us, specifically?"
*Avoid "I love your mission" — reference a real thing (product, value, team) with one specific reason.*

Want me to drill down on any of these?`,

      excellent: `Before we start, 3 quick things:

1. Paste the JD (just the top bullet points is fine).
2. Tell me your 1–2 biggest worries: is it "behavioural questions freeze me" or "I can't explain what I did technically" or "I ramble"?
3. What's the interview format — panel, 1-on-1, take-home, case study?

---

Assuming a 1-on-1 behavioural + role-specific round, here's how we'll work:

**Round 1 — Diagnostic (5 min)**
I'll ask you ONE opener: "Walk me through your CV." You answer, I'll flag if you're rambling or selling yourself short. That's my baseline read.

**Round 2 — The three questions that will almost definitely come up (15 min)**
I'll pick three based on your JD. You answer. After each:
- ✅ One thing you nailed
- 🟡 One thing to tighten
- Redo it in 60 seconds

**Round 3 — The curveball (5 min)**
I throw the weird one — "what's something you believe that most people in your field don't?" or a case study relevant to the role. This is the one that separates "fine candidate" from "memorable candidate".

**Round 4 — Your questions (5 min)**
We practice the questions YOU'LL ask them. Because those are half the impression.

**Before we start, the rules:**
- I will NOT write your answers for you — you have to say them out loud, even typing it.
- If you get it wrong I won't sugarcoat it — we have 3 days, not 3 weeks.
- Every answer gets a time target. Rambling is the #1 killer.

Paste the JD and the 1–2 worries. Then I'll ask the opener.`,
    },
  },
];

export const difficultyLabels: Record<
  PracticeScenario["difficulty"],
  { label: string; color: string }
> = {
  beginner: { label: "Beginner", color: "bg-emerald-100 text-emerald-700" },
  intermediate: { label: "Intermediate", color: "bg-amber-100 text-amber-700" },
  advanced: { label: "Advanced", color: "bg-rose-100 text-rose-700" },
};
