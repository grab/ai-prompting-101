import { Playbook, Squad } from "@/types";

export const squads: Squad[] = [
  {
    id: "life-admin",
    emoji: "🏠",
    name: "Life Admin",
    tagline: "Mental-load hacks.",
    description:
      "Budgets, plans, messages you've been avoiding — let AI do the thinking parts so you can do the living parts.",
    accent: "rose",
  },
  {
    id: "learning",
    emoji: "📚",
    name: "Learning",
    tagline: "Your personal tutor.",
    description:
      "Study smarter — not harder. Turn dense PDFs into notes, quiz yourself, and learn new skills at your pace.",
    accent: "violet",
  },
  {
    id: "career",
    emoji: "💼",
    name: "Career",
    tagline: "Your professional edge.",
    description:
      "Resumes, LinkedIn, interviews, cold outreach — craft the kind of applications that actually get replies.",
    accent: "amber",
  },
];

export const playbooks: Playbook[] = [
  {
    squad: "life-admin",
    prompts: [
      {
        id: "la-1",
        title: "Turn a brain dump into a to-do list",
        useCase: "When your brain is a tab explosion and you don't know where to start.",
        prompt: `Act like a calm productivity coach who doesn't judge.

Here's my brain dump — everything swirling in my head right now:
"[paste your messy thoughts here — uni stuff, errands, that thing you keep forgetting]"

Please:
- Sort it into 3 buckets: Do today / Do this week / Someday
- Flag anything that's actually urgent (due in 48 hours)
- Pick the ONE thing I should start with in the next 30 minutes

Keep it short and kind. No motivational fluff.`,
        careNotes: {
          role: "calm productivity coach, no judgement",
          context: "user's real brain dump",
          ask: "sort into 3 buckets + pick one starting task",
          expected: "short, 3 buckets, no fluff",
        },
      },
      {
        id: "la-2",
        title: "Plan a realistic week",
        useCase: "For when your calendar pretends you have more energy than you do.",
        prompt: `You're a planner who actually believes in rest.

My context: I'm a [student/working] with [X hours] of class/work per day. I feel most focused [morning/afternoon/evening]. I have a [project/exam/deadline] on [date].

Build me a 7-day plan that:
- Works with my real energy — not a fantasy version of me
- Includes at least 2 rest blocks I'm allowed to actually take
- Has one "non-negotiable" task per day (not ten)

Format as a table: Day / Must-do / Nice-to-do / Rest block.`,
        careNotes: {
          role: "rest-friendly planner",
          context: "schedule + energy pattern",
          ask: "weekly plan respecting real energy",
          expected: "table with 4 columns",
        },
      },
      {
        id: "la-3",
        title: "Budget on what you actually earn",
        useCase: "For the end-of-month 'where did my money go' spiral.",
        prompt: `Act like a budget coach who's realistic — not preachy.

I earn [amount]/month. My fixed costs are roughly:
- Rent/home: [amount]
- Transport: [amount]
- Phone/data: [amount]
- Subscriptions: [amount]

I want to save [amount] each month and still have fun.

Give me:
1. A simple monthly split (needs / wants / savings) in round numbers
2. Two realistic cuts I could make without feeling miserable
3. One "small win" I could try this week

No shaming about takeaway coffee, please.`,
        careNotes: {
          role: "realistic budget coach",
          context: "income + fixed costs + savings goal",
          ask: "monthly split + 2 cuts + 1 small win",
          expected: "numbered, practical, no shaming",
        },
      },
      {
        id: "la-4",
        title: "Reply to a message you've been dodging",
        useCase: "Awkward texts from parents, landlords, or group chats.",
        prompt: `Be a friend who's good with words but doesn't sugarcoat.

Here's a message I need to reply to — I'm feeling [anxious / annoyed / guilty]:
"[paste the message]"

What I actually want to say is: [your honest feelings / the boundary / the plan]

Write me 2 reply options:
1. Soft version — kind but clear
2. Direct version — still respectful but firmer

Both under 80 words. Don't add guilt-trippy lines.`,
        careNotes: {
          role: "friend who's good with words",
          context: "the original message + your real feelings",
          ask: "two reply versions",
          expected: "2 options, under 80 words each",
        },
      },
      {
        id: "la-5",
        title: "Grocery + meal plan on a tight budget",
        useCase: "When cooking feels like a chore and money is tight.",
        prompt: `Play a friend who cooks cheap but good.

I have [amount] for groceries this week. I'm cooking for [1 person / 2 people]. I don't eat [allergies or dislikes]. I have basic kitchen stuff — no fancy appliances.

Give me:
- A shopping list (group by supermarket aisle)
- 4 easy dinners I can make with those ingredients (reuse leftovers)
- Prep time per meal (max 25 min each)

Keep it chill — no 12-ingredient recipes.`,
        careNotes: {
          role: "friend who cooks cheap",
          context: "budget + diet + equipment",
          ask: "shopping list + 4 dinners + prep time",
          expected: "grouped list + 4 meals, ≤25 min each",
        },
      },
    ],
  },
  {
    squad: "learning",
    prompts: [
      {
        id: "ln-1",
        title: "Explain it like I'm 15",
        useCase: "When the textbook reads like a legal document.",
        prompt: `Act like a patient tutor who uses analogies, not jargon.

Explain [topic] to me like I'm 15 and have the attention span of TikTok.

Then:
- Give me 1 real-world example I'd actually see in daily life
- Ask me 2 quick questions to check I understood

Keep the whole thing under 200 words. If I say "nope, still confused", try a different analogy.`,
        careNotes: {
          role: "patient tutor, analogies not jargon",
          context: "short attention, no prior expertise",
          ask: "explain + example + 2 check questions",
          expected: "under 200 words, offer to retry",
        },
      },
      {
        id: "ln-2",
        title: "Turn a PDF into a study guide",
        useCase: "When you have 3 days and a 40-page reading.",
        prompt: `Be a study buddy who helps me revise — not one who just regurgitates.

I'll paste a reading/article below. I need to understand it well enough to [write an essay / answer exam questions / explain in a tutorial].

Do this:
1. Give me a 5-bullet TL;DR (what a smart friend would tell me over coffee)
2. List the 3 most important concepts to remember, in plain English
3. Give me 5 quiz questions (mix of definitions and "what would happen if...")

Text to work with:
"""
[paste your reading here]
"""`,
        careNotes: {
          role: "active study buddy",
          context: "what you need to use the reading for",
          ask: "TL;DR + concepts + quiz",
          expected: "5 bullets + 3 concepts + 5 questions",
        },
      },
      {
        id: "ln-3",
        title: "Quiz me until I get it",
        useCase: "Active recall without flashcards.",
        prompt: `Act like a tutor running a quick-fire quiz.

Topic: [what you're studying]
My current level: [beginner / know the basics / trying to get top marks]

Rules:
- Ask me one question at a time and wait for my answer.
- If I get it wrong, don't just give the answer — give me a hint first.
- If I get it right, level up the next question slightly.
- After 5 questions, tell me what I'm shaky on and what to revise.

Start with question 1.`,
        careNotes: {
          role: "tutor running adaptive quiz",
          context: "topic + current level",
          ask: "one question at a time, 5 total, then feedback",
          expected: "interactive, with hints not handouts",
        },
      },
      {
        id: "ln-4",
        title: "Get honest essay feedback",
        useCase: "Before you submit, get a second set of eyes.",
        prompt: `Be the toughest-but-fairest tutor I've ever had.

Here's my essay draft for [course name / topic]. The marking criteria are: [paste or summarise].

Tell me:
1. The strongest argument I've made (in one line)
2. The weakest link — and why it's weak
3. One fix I should do before submitting
4. Am I close to a [target grade], or still a way off?

Be honest. I'd rather cry now than cry after marks.

Essay:
"""
[paste draft here]
"""`,
        careNotes: {
          role: "tough-but-fair tutor",
          context: "course criteria + target grade",
          ask: "strongest + weakest + fix + grade check",
          expected: "4 honest points",
        },
      },
      {
        id: "ln-5",
        title: "Plan a 4-week self-taught skill",
        useCase: "Learning something your degree doesn't teach.",
        prompt: `You're a coach who's helped lots of self-taught beginners.

I want to learn [skill — e.g., Excel / basic Python / public speaking / graphic design] in 4 weeks. I can spend [X hours/week]. I'm a complete beginner.

Build me a plan that:
- Has weekly milestones ("by end of week 2 I can ___")
- Suggests 1 free resource per week (YouTube / free course / article)
- Includes 1 "make something real" project by week 4

No 12-hour-a-day hustle culture vibes.`,
        careNotes: {
          role: "coach for self-taught beginners",
          context: "skill, time per week, beginner",
          ask: "4-week plan with milestones + resources + project",
          expected: "chill pace, weekly structure",
        },
      },
    ],
  },
  {
    squad: "career",
    prompts: [
      {
        id: "cr-1",
        title: "Tailor your resume to a job",
        useCase: "Stop sending the same CV to 40 roles.",
        prompt: `Act like a recruiter at the kind of company I'm applying to.

Job posting:
"""
[paste the job ad here]
"""

My current resume bullets:
"""
[paste yours here]
"""

Rewrite my bullets so they:
- Match the language of the job ad (without making stuff up)
- Lead with impact — numbers if possible
- Cut anything that doesn't matter for this role

Give me the rewritten bullets only, in the same order. Flag any bullet that needs actual data from me to be honest.`,
        careNotes: {
          role: "recruiter at target company",
          context: "job ad + current bullets",
          ask: "rewrite bullets, flag honesty gaps",
          expected: "ordered rewritten list",
        },
      },
      {
        id: "cr-2",
        title: "Fix your LinkedIn About section",
        useCase: "Your headline says 'Student at Uni' and nothing else.",
        prompt: `Be a personal branding coach who hates corporate fluff.

Here's what I do / want to do: [short honest description]
I'm aiming to work in: [industry / role type]
Things I've done that I'm quietly proud of: [list 2-3]

Write me a LinkedIn About section that:
- Sounds like me — not a LinkedIn robot
- Is under 100 words
- Has a clear 'here's what I'm looking for' at the end

No buzzwords like "passionate", "synergy", "results-driven".`,
        careNotes: {
          role: "branding coach, no fluff",
          context: "what you do, aim, proud moments",
          ask: "About section draft",
          expected: "under 100 words, buzzword-free",
        },
      },
      {
        id: "cr-3",
        title: "Cold DM someone for advice",
        useCase: "Networking without sounding like a spam bot.",
        prompt: `You're a mentor who's replied to a lot of DMs — both good and bad.

I want to message [name + what they do] to ask for [specific thing: 15-min chat / advice / referral]. A few things about me: [1-2 lines].

Draft a DM that:
- Starts with a specific reason I reached out (not 'hi I love your work')
- Makes a small ask — not a lifetime commitment
- Gives them an easy out if they can't reply

Under 80 words. No "I hope this finds you well" openers.`,
        careNotes: {
          role: "experienced DM reviewer",
          context: "target person + specific ask + your angle",
          ask: "draft a DM",
          expected: "under 80 words, specific, easy out",
        },
      },
      {
        id: "cr-4",
        title: "Mock interview me",
        useCase: "Practice before the real thing.",
        prompt: `Act like a hiring manager for [role] at [company or type of company].

Ground rules:
- Ask me one interview question at a time.
- Wait for my answer before the next one.
- After I answer, give me 1 thing I did well and 1 thing to tighten.
- Mix behavioural ("tell me about a time...") and role-specific questions.
- Stop after 5 questions and give me an overall verdict: would you move me to the next round? Why / why not?

Start with question 1.`,
        careNotes: {
          role: "hiring manager for target role",
          context: "role + company type",
          ask: "5 mock questions with feedback",
          expected: "one at a time, verdict at end",
        },
      },
      {
        id: "cr-5",
        title: "Salary negotiation script",
        useCase: "For when they say 'what are your expectations?'",
        prompt: `Be a negotiation coach who's calm and data-driven.

Situation: I've been offered [role] at [company]. The offer is [amount + benefits]. My research on the market range is [your range]. I have [or don't have] another offer.

Help me:
1. Draft the exact line I'll say to ask for more (polite, confident, short)
2. Predict their most likely 2 responses
3. Give me a reply for each response

No pushy "demand what you're worth" energy — I want to keep the relationship good.`,
        careNotes: {
          role: "calm negotiation coach",
          context: "offer + market research + leverage",
          ask: "opening line + predicted responses + replies",
          expected: "short, polite, 3 parts",
        },
      },
    ],
  },
];
