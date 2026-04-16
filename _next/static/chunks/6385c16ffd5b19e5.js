(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98640,27446,62642,89416,35203,76525,5050,89890,83342,4121,e=>{"use strict";e.s(["ripeOrder",0,["role","instructions","parameters","expected"],"ripeSections",0,[{key:"role",label:"Role",shortLabel:"R",tagline:"Tell AI who to be.",description:"Giving AI a role changes its voice, depth, and what it focuses on. A 'patient tutor' sounds different from a 'blunt recruiter'.",placeholder:"e.g., Act like a supportive tutor who explains things without being condescending.",examples:["Act like a budget coach who's realistic, not preachy.","Be a recruiter at a top tech company reviewing my CV.","Play a friend who's blunt but kind about my first draft."],tips:["Pick a role that matches the vibe you need — supportive, honest, playful.","Mention style: 'no jargon', 'keep it short', 'be kind'.","You can switch roles mid-chat — it's not locked in."]},{key:"instructions",label:"Instructions",shortLabel:"I",tagline:"Say what you actually want.",description:'Be specific about the thing you want done. "Help me with my resume" is a wish. "Rewrite this bullet to show impact" is an instruction.',placeholder:"e.g., Rewrite this bullet so it sounds like I actually made an impact: 'Helped organise events for the club.'",examples:["Turn this brain dump into a ranked to-do list for today.","Quiz me on photosynthesis until I can explain it in my own words.","Write me a 3-line DM I can send to this alum on LinkedIn."],tips:["Replace 'help me' with a verb — rewrite, quiz, plan, draft, compare.","One instruction at a time beats a giant list.","If you want options, say so: 'Give me 3 versions.'"]},{key:"parameters",label:"Parameters",shortLabel:"P",tagline:"Give AI your details.",description:"Share who you are, your situation, and what you care about. The more AI knows, the less it guesses.",placeholder:"e.g., I'm a second-year uni student, I have ADHD, exams are in 3 weeks and I've barely started studying Biology...",examples:["I'm a 22-year-old starting my first full-time job next month — first in my family to work in tech.","I'm a third-year Psych major trying to balance 4 courses, a part-time cafe job, and my mental health.","I live at home, I help pay some bills, and I want to save $200/month on a $1,800 salary."],tips:["Include what's actually going on — constraints, feelings, deadlines.","Mention anything that would change the answer (budget, time, background).","You don't have to be formal — talk to it like a friend."]},{key:"expected",label:"Expected output",shortLabel:"E",tagline:"Describe what you want back.",description:"Say the format, length, and vibe. Otherwise AI will default to a wall of text that you'll have to reformat anyway.",placeholder:"e.g., Give me 5 bullet points, each under 15 words, no corporate fluff.",examples:["A 3-day study plan as a table — day, topic, hours, technique.","One paragraph I can paste into my LinkedIn About section (under 80 words).","A list of 5 interview questions, ranked easy to hard, with sample answers."],tips:["Specify format: bullets, table, email, paragraph.","Always add a length constraint — 'under 100 words', '3 items'.","Say how you'll use it — 'something I can send as-is'."]}]],27446);let t=[{squad:"life-admin",prompts:[{id:"la-1",title:"Turn a brain dump into a to-do list",useCase:"When your brain is a tab explosion and you don't know where to start.",prompt:`Act like a calm productivity coach who doesn't judge.

Here's my brain dump — everything swirling in my head right now:
"[paste your messy thoughts here — uni stuff, errands, that thing you keep forgetting]"

Please:
- Sort it into 3 buckets: Do today / Do this week / Someday
- Flag anything that's actually urgent (due in 48 hours)
- Pick the ONE thing I should start with in the next 30 minutes

Keep it short and kind. No motivational fluff.`,ripeNotes:{role:"calm productivity coach, no judgement",parameters:"user's real brain dump",instructions:"sort into 3 buckets + pick one starting task",expected:"short, 3 buckets, no fluff"}},{id:"la-2",title:"Plan a realistic week",useCase:"For when your calendar pretends you have more energy than you do.",prompt:`You're a planner who actually believes in rest.

My context: I'm a [student/working] with [X hours] of class/work per day. I feel most focused [morning/afternoon/evening]. I have a [project/exam/deadline] on [date].

Build me a 7-day plan that:
- Works with my real energy — not a fantasy version of me
- Includes at least 2 rest blocks I'm allowed to actually take
- Has one "non-negotiable" task per day (not ten)

Format as a table: Day / Must-do / Nice-to-do / Rest block.`,ripeNotes:{role:"rest-friendly planner",parameters:"schedule + energy pattern",instructions:"weekly plan respecting real energy",expected:"table with 4 columns"}},{id:"la-3",title:"Budget on what you actually earn",useCase:"For the end-of-month 'where did my money go' spiral.",prompt:`Act like a budget coach who's realistic — not preachy.

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

No shaming about takeaway coffee, please.`,ripeNotes:{role:"realistic budget coach",parameters:"income + fixed costs + savings goal",instructions:"monthly split + 2 cuts + 1 small win",expected:"numbered, practical, no shaming"}},{id:"la-4",title:"Reply to a message you've been dodging",useCase:"Awkward texts from parents, landlords, or group chats.",prompt:`Be a friend who's good with words but doesn't sugarcoat.

Here's a message I need to reply to — I'm feeling [anxious / annoyed / guilty]:
"[paste the message]"

What I actually want to say is: [your honest feelings / the boundary / the plan]

Write me 2 reply options:
1. Soft version — kind but clear
2. Direct version — still respectful but firmer

Both under 80 words. Don't add guilt-trippy lines.`,ripeNotes:{role:"friend who's good with words",parameters:"the original message + your real feelings",instructions:"two reply versions",expected:"2 options, under 80 words each"}},{id:"la-5",title:"Grocery + meal plan on a tight budget",useCase:"When cooking feels like a chore and money is tight.",prompt:`Play a friend who cooks cheap but good.

I have [amount] for groceries this week. I'm cooking for [1 person / 2 people]. I don't eat [allergies or dislikes]. I have basic kitchen stuff — no fancy appliances.

Give me:
- A shopping list (group by supermarket aisle)
- 4 easy dinners I can make with those ingredients (reuse leftovers)
- Prep time per meal (max 25 min each)

Keep it chill — no 12-ingredient recipes.`,ripeNotes:{role:"friend who cooks cheap",parameters:"budget + diet + equipment",instructions:"shopping list + 4 dinners + prep time",expected:"grouped list + 4 meals, ≤25 min each"}}]},{squad:"learning",prompts:[{id:"ln-1",title:"Explain it like I'm 15",useCase:"When the textbook reads like a legal document.",prompt:`Act like a patient tutor who uses analogies, not jargon.

Explain [topic] to me like I'm 15 and have the attention span of TikTok.

Then:
- Give me 1 real-world example I'd actually see in daily life
- Ask me 2 quick questions to check I understood

Keep the whole thing under 200 words. If I say "nope, still confused", try a different analogy.`,ripeNotes:{role:"patient tutor, analogies not jargon",parameters:"short attention, no prior expertise",instructions:"explain + example + 2 check questions",expected:"under 200 words, offer to retry"}},{id:"ln-2",title:"Turn a PDF into a study guide",useCase:"When you have 3 days and a 40-page reading.",prompt:`Be a study buddy who helps me revise — not one who just regurgitates.

I'll paste a reading/article below. I need to understand it well enough to [write an essay / answer exam questions / explain in a tutorial].

Do this:
1. Give me a 5-bullet TL;DR (what a smart friend would tell me over coffee)
2. List the 3 most important concepts to remember, in plain English
3. Give me 5 quiz questions (mix of definitions and "what would happen if...")

Text to work with:
"""
[paste your reading here]
"""`,ripeNotes:{role:"active study buddy",parameters:"what you need to use the reading for",instructions:"TL;DR + concepts + quiz",expected:"5 bullets + 3 concepts + 5 questions"}},{id:"ln-3",title:"Quiz me until I get it",useCase:"Active recall without flashcards.",prompt:`Act like a tutor running a quick-fire quiz.

Topic: [what you're studying]
My current level: [beginner / know the basics / trying to get top marks]

Rules:
- Ask me one question at a time and wait for my answer.
- If I get it wrong, don't just give the answer — give me a hint first.
- If I get it right, level up the next question slightly.
- After 5 questions, tell me what I'm shaky on and what to revise.

Start with question 1.`,ripeNotes:{role:"tutor running adaptive quiz",parameters:"topic + current level",instructions:"one question at a time, 5 total, then feedback",expected:"interactive, with hints not handouts"}},{id:"ln-4",title:"Get honest essay feedback",useCase:"Before you submit, get a second set of eyes.",prompt:`Be the toughest-but-fairest tutor I've ever had.

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
"""`,ripeNotes:{role:"tough-but-fair tutor",parameters:"course criteria + target grade",instructions:"strongest + weakest + fix + grade check",expected:"4 honest points"}},{id:"ln-5",title:"Plan a 4-week self-taught skill",useCase:"Learning something your degree doesn't teach.",prompt:`You're a coach who's helped lots of self-taught beginners.

I want to learn [skill — e.g., Excel / basic Python / public speaking / graphic design] in 4 weeks. I can spend [X hours/week]. I'm a complete beginner.

Build me a plan that:
- Has weekly milestones ("by end of week 2 I can ___")
- Suggests 1 free resource per week (YouTube / free course / article)
- Includes 1 "make something real" project by week 4

No 12-hour-a-day hustle culture vibes.`,ripeNotes:{role:"coach for self-taught beginners",parameters:"skill, time per week, beginner",instructions:"4-week plan with milestones + resources + project",expected:"chill pace, weekly structure"}}]},{squad:"career",prompts:[{id:"cr-1",title:"Tailor your resume to a job",useCase:"Stop sending the same CV to 40 roles.",prompt:`Act like a recruiter at the kind of company I'm applying to.

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

Give me the rewritten bullets only, in the same order. Flag any bullet that needs actual data from me to be honest.`,ripeNotes:{role:"recruiter at target company",parameters:"job ad + current bullets",instructions:"rewrite bullets, flag honesty gaps",expected:"ordered rewritten list"}},{id:"cr-2",title:"Fix your LinkedIn About section",useCase:"Your headline says 'Student at Uni' and nothing else.",prompt:`Be a personal branding coach who hates corporate fluff.

Here's what I do / want to do: [short honest description]
I'm aiming to work in: [industry / role type]
Things I've done that I'm quietly proud of: [list 2-3]

Write me a LinkedIn About section that:
- Sounds like me — not a LinkedIn robot
- Is under 100 words
- Has a clear 'here's what I'm looking for' at the end

No buzzwords like "passionate", "synergy", "results-driven".`,ripeNotes:{role:"branding coach, no fluff",parameters:"what you do, aim, proud moments",instructions:"About section draft",expected:"under 100 words, buzzword-free"}},{id:"cr-3",title:"Cold DM someone for advice",useCase:"Networking without sounding like a spam bot.",prompt:`You're a mentor who's replied to a lot of DMs — both good and bad.

I want to message [name + what they do] to ask for [specific thing: 15-min chat / advice / referral]. A few things about me: [1-2 lines].

Draft a DM that:
- Starts with a specific reason I reached out (not 'hi I love your work')
- Makes a small ask — not a lifetime commitment
- Gives them an easy out if they can't reply

Under 80 words. No "I hope this finds you well" openers.`,ripeNotes:{role:"experienced DM reviewer",parameters:"target person + specific ask + your angle",instructions:"draft a DM",expected:"under 80 words, specific, easy out"}},{id:"cr-4",title:"Mock interview me",useCase:"Practice before the real thing.",prompt:`Act like a hiring manager for [role] at [company or type of company].

Ground rules:
- Ask me one interview question at a time.
- Wait for my answer before the next one.
- After I answer, give me 1 thing I did well and 1 thing to tighten.
- Mix behavioural ("tell me about a time...") and role-specific questions.
- Stop after 5 questions and give me an overall verdict: would you move me to the next round? Why / why not?

Start with question 1.`,ripeNotes:{role:"hiring manager for target role",parameters:"role + company type",instructions:"5 mock questions with feedback",expected:"one at a time, verdict at end"}},{id:"cr-5",title:"Salary negotiation script",useCase:"For when they say 'what are your expectations?'",prompt:`Be a negotiation coach who's calm and data-driven.

Situation: I've been offered [role] at [company]. The offer is [amount + benefits]. My research on the market range is [your range]. I have [or don't have] another offer.

Help me:
1. Draft the exact line I'll say to ask for more (polite, confident, short)
2. Predict their most likely 2 responses
3. Give me a reply for each response

No pushy "demand what you're worth" energy — I want to keep the relationship good.`,ripeNotes:{role:"calm negotiation coach",parameters:"offer + market research + leverage",instructions:"opening line + predicted responses + replies",expected:"short, polite, 3 parts"}}]}];e.s(["playbooks",0,t,"squads",0,[{id:"life-admin",emoji:"🏠",name:"Life Admin",tagline:"Mental-load hacks.",description:"Budgets, plans, messages you've been avoiding — let AI do the thinking parts so you can do the living parts.",accent:"rose"},{id:"learning",emoji:"📚",name:"Learning",tagline:"Your personal tutor.",description:"Study smarter — not harder. Turn dense PDFs into notes, quiz yourself, and learn new skills at your pace.",accent:"violet"},{id:"career",emoji:"💼",name:"Career",tagline:"Your professional edge.",description:"Resumes, LinkedIn, interviews, cold outreach — craft the kind of applications that actually get replies.",accent:"amber"}]],62642);let a=[{id:"study-plan",squad:"learning",title:"Study plan for finals week",description:"You have 4 subjects, 10 days, and a part-time job. You need a realistic study plan that won't burn you out.",goal:"Write a prompt that gets you a plan you'd actually follow — not a fantasy one.",difficulty:"beginner",hints:["What does AI need to know about YOUR schedule?","What vibe do you want — strict coach or chill guide?","Do you want a table, a list, or a day-by-day chat?","Tell it what you DON'T want (e.g., 'no 6am starts, I won't do it')."],responses:{generic:`Here's a general 10-day study plan:

**Days 1–3:** Subject 1 & 2
**Days 4–6:** Subject 3 & 4
**Days 7–8:** Review
**Day 9:** Practice questions
**Day 10:** Light revision and rest

Study 3–4 hours per day. Take breaks. Get enough sleep.

Good luck with your exams!`,adequate:`Here's a 10-day plan based on 4 subjects with work days:

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

Add 10-min breaks every 50 min. Don't skip meals.`,excellent:`Before I build this, a few quick questions:

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

Want me to turn this into a printable day-by-day table?`}},{id:"awkward-text",squad:"life-admin",title:"Reply to a stressful text from mum",description:'Mum just texted: "Can you send money home this month? Things are tight." You genuinely can\'t — rent just went up. You need to reply today.',goal:"Write a prompt that helps you reply honestly without hurting her or yourself.",difficulty:"intermediate",hints:["What role should AI play here — friend? therapist? writer?","What do you actually want to say beneath the awkwardness?","What tone do you NOT want? (Preachy? Fake-chirpy? Too formal?)","Length matters — a 5-paragraph reply will feel weird."],responses:{generic:`Here's a template for your reply:

"Hi Mum, I really appreciate you reaching out. I understand things are difficult right now, and I wish I could help more. Unfortunately, my own financial situation is a bit challenging this month due to increased expenses. I hope we can talk soon and figure something out together. Love you."

Feel free to customize based on your relationship.`,adequate:`Here's a reply option:

"Hi Ma, I hear you — I'm sorry things are tight. My rent just went up this month so I genuinely can't send anything right now. I don't want to say 'next month' if I'm not sure. Can we talk this weekend about what's going on your end? Love you."

This acknowledges her, is honest about your limits, and opens a real conversation instead of a yes/no answer.`,excellent:`Quick questions first:

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

Pick one and send it before you overthink it. You're allowed to have limits AND love her.`}},{id:"internship-dm",squad:"career",title:"Cold DM for an internship referral",description:"You spotted an alum from your uni working at a company you'd love to intern at. You want to DM them for advice — not ask directly for the job.",goal:"Write a prompt that gets you a DM that actually gets a reply.",difficulty:"intermediate",hints:["What does AI need to know about YOU to make it sound like you?","What's the specific, small ask — not 'can you help me get a job'?","How do you give them an easy out if they can't reply?","What's the tone — eager? casual? professional?"],responses:{generic:`Here's a cold DM template:

"Hi [Name], I hope this message finds you well. My name is [Your Name] and I'm a student at [University]. I noticed you work at [Company] and I'm very interested in your field. I would love to hear more about your experience and career journey. Would you be open to a brief conversation? Looking forward to hearing from you. Best regards, [Your Name]"`,adequate:`Here's a cold DM draft:

"Hi [Name] — saw you also went to [Uni] and now work at [Company]. I'm a third-year [course] interested in [specific team/area].

I'm not asking for a referral — just 10 minutes of your time. Would love to hear how you found the shift from [Uni] to [Company] and anything you wish you'd known earlier.

Totally cool if you're swamped. Either way, thanks for the inspiration."

This is short, specific, and gives them an easy way out without awkwardness.`,excellent:`Quick check first:

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

Send it between Tuesday–Thursday, 10am–4pm their time. Weekends die in the inbox.`}},{id:"budget-help",squad:"life-admin",title:"Budget on a student allowance",description:"You get $800/month. Rent + bills eat $500. You want to save a bit, eat well, and still have a social life. Current strategy: panic.",goal:"Write a prompt that gets you a realistic money plan you'd actually follow.",difficulty:"beginner",hints:["What's the context AI needs — income, fixed costs, goals?","What tone? Preachy financial gurus don't help.","What specific output would you want to stick on your fridge?","What's your ONE 'don't tell me to quit coffee' rule?"],responses:{generic:`Here's a budget breakdown:

**Income:** $800
**Rent/bills:** $500 (63%)
**Remaining:** $300

Suggested split:
- Food: $200
- Transport: $50
- Savings: $30
- Fun money: $20

Track your spending using a free app like Mint or YNAB. Reduce unnecessary expenses. Good luck!`,adequate:`Here's a $300-after-essentials plan:

**Food (~$180)**
- Groceries 4 weeks \xd7 $40 = $160
- Eat out once a week buffer = $20

**Transport (~$40)**
- Monthly pass covers most trips
- Walk/bike when possible

**Savings (~$40)**
- Automate it: move $10/week to a separate account on payday

**Fun (~$40)**
- One bigger thing (dinner, gig, date) + small stuff

**Tip:** Keep fun money in a separate wallet/app. When it's gone, it's gone — no raiding savings.`,excellent:`Before I give you numbers, tell me:

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
Open a separate "savings" account today (most banks do it in-app in 2 min). Move $10 in right now. Done. That's the hardest part finished.`}},{id:"interview-prep",squad:"career",title:"Prep for your dream-job interview",description:"Interview in 3 days for a role you actually want. You're nervous and keep re-reading the JD without getting anywhere.",goal:"Write a prompt that turns AI into a useful mock-interview partner, not a Wikipedia article.",difficulty:"advanced",hints:["What role should AI play — a friend, a hiring manager, a coach?","What context — the JD? Your CV? Your weak spots?","What's the interaction style — one question at a time, or a full list?","What feedback do you want after each answer?"],responses:{generic:`Here are some common interview questions:

1. Tell me about yourself
2. What are your strengths and weaknesses?
3. Why do you want this job?
4. Where do you see yourself in 5 years?
5. Tell me about a time you solved a problem

Practice your answers out loud. Use the STAR method (Situation, Task, Action, Result) for behavioural questions. Research the company. Prepare your own questions to ask. Good luck!`,adequate:`Here's a mock prep based on your JD:

**Question 1 (behavioural):**
"Tell me about a time you had to learn something quickly under pressure."
*Answer using STAR. Aim for 2 minutes max.*

**Question 2 (role-specific):**
"How would you approach [a task from the JD]?"
*Use a framework: understand, plan, execute, review.*

**Question 3 (culture fit):**
"Why us, specifically?"
*Avoid "I love your mission" — reference a real thing (product, value, team) with one specific reason.*

Want me to drill down on any of these?`,excellent:`Before we start, 3 quick things:

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

Paste the JD and the 1–2 worries. Then I'll ask the opener.`}}];e.s(["difficultyLabels",0,{beginner:{label:"Beginner",color:"bg-emerald-100 text-emerald-700"},intermediate:{label:"Intermediate",color:"bg-amber-100 text-amber-700"},advanced:{label:"Advanced",color:"bg-rose-100 text-rose-700"}},"practiceScenarios",0,a],89416),e.s(["quizConfig",0,{passingScore:70,questionsPerQuiz:10},"quizQuestions",0,[{id:"p-1",type:"multiple-choice",question:"Why does giving AI more Parameters usually help?",options:[{id:"a",text:"It makes the prompt look more impressive."},{id:"b",text:"Without parameters, AI guesses — and often guesses wrong about you."},{id:"c",text:"AI charges less when the prompt is longer."},{id:"d",text:"It's polite."}],correctAnswer:"b",explanation:"When AI doesn't know your situation, it fills gaps with generic patterns from training data. Real parameters = less guessing, more useful answers.",concept:"parameters"},{id:"p-2",type:"identify-issue",question:"What's the main issue with this prompt?",context:"Give me advice on managing money.",options:[{id:"a",text:"It's missing who the AI should be."},{id:"b",text:"It has no parameters — income, goals, situation."},{id:"c",text:"The output format isn't specified."},{id:"d",text:"All of the above, but no parameters is the biggest."}],correctAnswer:"d",explanation:"All four RIPE letters are missing. Parameters (income, costs, goals) is the biggest gap — without it, you'll get generic 'make a budget' advice.",concept:"parameters"},{id:"p-3",type:"multiple-choice",question:"Which kind of parameters are MOST useful to include?",options:[{id:"a",text:"Your complete life story."},{id:"b",text:"Constraints, feelings, and the 1–2 things that would change the answer."},{id:"c",text:"Everything you know about the topic."},{id:"d",text:"Nothing — AI should just know."}],correctAnswer:"b",explanation:"Useful parameters aren't quantity — it's relevance. The stuff that would change the answer: your budget, your time, your constraints, your feelings.",concept:"parameters"},{id:"i-1",type:"multiple-choice",question:"Which of these is a proper Instruction?",options:[{id:"a",text:"Help me with my resume."},{id:"b",text:"Can you look at my resume please."},{id:"c",text:"Rewrite this bullet to show impact instead of activity."},{id:"d",text:"Tell me about resumes."}],correctAnswer:"c",explanation:"Option C uses a specific verb (rewrite) and a specific goal (impact vs activity). That's a real instruction — the others are wishes.",concept:"instructions"},{id:"i-2",type:"identify-issue",question:"How would you improve this prompt's Instructions?",context:"You're a career coach. Help me.",options:[{id:"a",text:"Remove the role."},{id:"b",text:"Replace 'Help me' with a specific verb and one deliverable."},{id:"c",text:"Add more roles."},{id:"d",text:"Add a please."}],correctAnswer:"b",explanation:"'Help me' is vague — AI will guess. 'Rewrite my LinkedIn headline in 10 words' is an actual instruction.",concept:"instructions"},{id:"r-1",type:"multiple-choice",question:"Which role is most useful for getting honest essay feedback?",options:[{id:"a",text:"Be helpful."},{id:"b",text:"You are an AI assistant."},{id:"c",text:"Act like the toughest-but-fairest tutor I've ever had."},{id:"d",text:"Be nice."}],correctAnswer:"c",explanation:"A specific role with a specific vibe (tough-but-fair) activates a certain voice. 'Be helpful' is the default — and it's why feedback often feels soft.",concept:"role"},{id:"r-2",type:"multiple-choice",question:"What does giving AI a Role actually change?",options:[{id:"a",text:"Nothing — it's just roleplay."},{id:"b",text:"Its voice, focus, and the kind of details it volunteers."},{id:"c",text:"The length of the response."},{id:"d",text:"It makes AI cost more."}],correctAnswer:"b",explanation:"Role shifts what AI prioritises. A recruiter notices different things than a friend — same content, different lens.",concept:"role"},{id:"e-1",type:"multiple-choice",question:"Which expected output will give you the most usable answer?",options:[{id:"a",text:"Make it good."},{id:"b",text:"Keep it short."},{id:"c",text:"Give me 3 bullets, each under 15 words, written like a friend."},{id:"d",text:"Whatever you think."}],correctAnswer:"c",explanation:"'Short' is subjective. '3 bullets, under 15 words, like a friend' is concrete — you'll get something you can actually use.",concept:"expected"},{id:"e-2",type:"identify-issue",question:"What's missing from this prompt's Expected output?",context:"Act as a budget coach. I earn $800/month. Give me tips.",options:[{id:"a",text:"Format, length, and vibe."},{id:"b",text:"The role."},{id:"c",text:"The parameters."},{id:"d",text:"Nothing — it's fine."}],correctAnswer:"a",explanation:"AI will default to a wall of generic tips. Ask for a table, a top-3 list, or a specific word count — whatever you can actually use.",concept:"expected"},{id:"s-1",type:"multiple-choice",question:"Which of these should you NOT paste into a free AI tool?",options:[{id:"a",text:"A rough draft of your personal statement."},{id:"b",text:"A lecture slide to summarise."},{id:"c",text:"Your bank statement with your full account number."},{id:"d",text:"A recipe you're trying to halve."}],correctAnswer:"c",explanation:"Treat AI like a stranger on public transport. Don't paste passwords, full IDs, account numbers, or anything you wouldn't say out loud.",concept:"safety"}]],35203),e.s([],98640);var o=e.i(43476),s=e.i(71645);let i=(0,s.forwardRef)(({className:e="",variant:t="primary",size:a="md",children:s,...i},r)=>(0,o.jsx)("button",{ref:r,className:`inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${{primary:"bg-gradient-to-r from-rose-500 to-violet-500 text-white hover:from-rose-600 hover:to-violet-600 focus:ring-rose-400 shadow-sm",secondary:"bg-white text-slate-900 border border-slate-200 hover:border-rose-300 hover:text-rose-600 focus:ring-rose-400",ghost:"bg-transparent text-slate-600 hover:bg-rose-50 hover:text-rose-700 focus:ring-rose-400",outline:"border-2 border-rose-300 text-rose-700 hover:bg-rose-50 focus:ring-rose-400"}[t]} ${{sm:"px-3 py-1.5 text-sm",md:"px-5 py-2 text-base",lg:"px-6 py-3 text-lg"}[a]} ${e}`,...i,children:s}));i.displayName="Button",e.s(["Button",()=>i],76525);let r=(0,s.forwardRef)(({className:e="",variant:t="default",padding:a="md",children:s,...i},r)=>(0,o.jsx)("div",{ref:r,className:`rounded-2xl ${{default:"bg-white",bordered:"bg-white border border-slate-200",elevated:"bg-white shadow-lg shadow-rose-100/40",warm:"bg-gradient-to-br from-rose-50 via-white to-violet-50 border border-white"}[t]} ${{none:"",sm:"p-4",md:"p-6",lg:"p-8"}[a]} ${e}`,...i,children:s}));function n({className:e="",variant:t="default",size:a="md",children:s,...i}){return(0,o.jsx)("span",{className:`inline-flex items-center font-medium rounded-full ${{default:"bg-slate-100 text-slate-700",rose:"bg-rose-100 text-rose-700",violet:"bg-violet-100 text-violet-700",amber:"bg-amber-100 text-amber-700",emerald:"bg-emerald-100 text-emerald-700"}[t]} ${{sm:"px-2 py-0.5 text-xs",md:"px-3 py-1 text-sm"}[a]} ${e}`,...i,children:s})}function l({value:e,max:t=100,variant:a="default",size:s="md",className:i=""}){let r=Math.min(100,Math.max(0,e/t*100)),n={sm:"h-1.5",md:"h-2.5",lg:"h-4"};return(0,o.jsx)("div",{className:`w-full ${i}`,children:(0,o.jsx)("div",{className:`w-full bg-slate-100 rounded-full overflow-hidden ${n[s]}`,children:(0,o.jsx)("div",{className:`${n[s]} ${{default:"bg-rose-500",success:"bg-emerald-500",warning:"bg-amber-500",gradient:"bg-gradient-to-r from-rose-500 via-violet-500 to-amber-400"}[a]} rounded-full transition-all duration-500 ease-out`,style:{width:`${r}%`}})})})}r.displayName="Card",e.s(["Card",()=>r],5050),e.s(["Badge",()=>n],89890),e.s(["ProgressBar",()=>l],83342),e.s([],4121)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],72520)},79799,e=>{"use strict";var t=e.i(43476),a=e.i(71645),o=e.i(22016),s=e.i(46932),i=e.i(88653),r=e.i(55711),n=e.i(95468),l=e.i(75254);let u=(0,l.default)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var d=e.i(72520);let c=(0,l.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),h=(0,l.default)("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]);var m=e.i(83086);e.i(98640);var p=e.i(35203);e.i(4121);var y=e.i(76525),g=e.i(5050),f=e.i(89890),w=e.i(83342);function b(){let[e,l]=(0,a.useState)(!1),[b,x]=(0,a.useState)(0),[k,v]=(0,a.useState)(null),[I,j]=(0,a.useState)(!1),[A,N]=(0,a.useState)({}),[q,T]=(0,a.useState)(!1),W=(0,a.useMemo)(()=>e?(function(e){let t=[...e];for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t})(p.quizQuestions).slice(0,p.quizConfig.questionsPerQuiz):[],[e]),S=W[b],M=(0,a.useMemo)(()=>{if(!q||0===W.length)return null;let e=0,t={};W.forEach(a=>{let o=A[a.id]===a.correctAnswer;t[a.concept]||(t[a.concept]={correct:0,total:0}),t[a.concept].total++,o&&(e++,t[a.concept].correct++)});let a=Math.round(e/W.length*100),o={role:"Role — telling AI who to be",instructions:"Instructions — saying exactly what you want",parameters:"Parameters — giving AI your details",expected:"Expected — describing the output",safety:"Safety — being careful with AI","invention-ratio":"Letting AI invent less"},s=[];return Object.entries(t).forEach(([e,t])=>{t.correct/t.total<.5&&s.push(o[e]||e)}),{totalQuestions:W.length,correctAnswers:e,score:a,conceptScores:t,recommendations:s}},[q,W,A]);if(!e)return(0,t.jsx)("div",{className:"py-12 px-4 sm:px-6",children:(0,t.jsxs)("div",{className:"max-w-xl mx-auto text-center",children:[(0,t.jsx)("div",{className:"w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-400 to-violet-500 flex items-center justify-center shadow-sm",children:(0,t.jsx)(r.Brain,{size:30,className:"text-white"})}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-slate-900 mb-3",children:"Test your RIPE."}),(0,t.jsxs)("p",{className:"text-slate-600 mb-8",children:["10 questions. No pressure. Passing is ",p.quizConfig.passingScore,"%, but honestly — coming back to review is the win."]}),(0,t.jsxs)(g.Card,{variant:"warm",padding:"lg",className:"text-left mb-8",children:[(0,t.jsxs)("h3",{className:"font-medium text-slate-900 mb-3 flex items-center gap-2",children:[(0,t.jsx)(m.Sparkles,{size:16,className:"text-rose-500"}),"What's covered"]}),(0,t.jsx)("ul",{className:"space-y-2 text-sm text-slate-700",children:["R — Role","I — Instructions","P — Parameters","E — Expected output","Plus a few safety calls"].map(e=>(0,t.jsxs)("li",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.CheckCircle2,{size:14,className:"text-rose-500"}),e]},e))})]}),(0,t.jsxs)(y.Button,{size:"lg",onClick:()=>l(!0),children:["Start quiz",(0,t.jsx)(d.ArrowRight,{size:18,className:"ml-2"})]})]})});if(q&&M){let e=M.score>=p.quizConfig.passingScore;return(0,t.jsx)("div",{className:"py-12 px-4 sm:px-6",children:(0,t.jsxs)("div",{className:"max-w-xl mx-auto text-center",children:[(0,t.jsx)(s.motion.div,{initial:{scale:0},animate:{scale:1},className:`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${e?"bg-gradient-to-br from-rose-400 to-violet-500":"bg-amber-100"}`,children:e?(0,t.jsx)(h,{size:40,className:"text-white"}):(0,t.jsx)(r.Brain,{size:40,className:"text-amber-600"})}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-slate-900 mb-2",children:e?"You've got RIPE.":"Keep going — you're close."}),(0,t.jsx)("p",{className:"text-slate-600 mb-6",children:e?"Go use it. The world of prompts is yours.":"The stuff you missed is the same stuff everyone misses. Review and try again."}),(0,t.jsxs)(g.Card,{variant:"bordered",padding:"lg",className:"mb-8",children:[(0,t.jsxs)("div",{className:"text-center mb-6",children:[(0,t.jsxs)("div",{className:`text-5xl font-bold ${e?"text-rose-600":"text-amber-600"}`,children:[M.score,"%"]}),(0,t.jsxs)("div",{className:"text-sm text-slate-500",children:[M.correctAnswers," of ",M.totalQuestions," correct"]})]}),(0,t.jsx)(w.ProgressBar,{value:M.score,variant:e?"gradient":"warning",size:"lg",className:"mb-6"}),M.recommendations.length>0&&(0,t.jsxs)("div",{className:"p-4 bg-amber-50 rounded-xl text-left",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-amber-800 mb-2",children:"Go back and peek at:"}),(0,t.jsx)("ul",{className:"space-y-1",children:M.recommendations.map((e,a)=>(0,t.jsxs)("li",{className:"text-sm text-amber-700",children:["• ",e]},a))})]})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[(0,t.jsxs)(y.Button,{variant:"secondary",onClick:()=>{l(!1),x(0),v(null),j(!1),N({}),T(!1)},children:[(0,t.jsx)(c,{size:14,className:"mr-2"}),"Retake"]}),(0,t.jsx)(o.default,{href:"/ripe",children:(0,t.jsx)(y.Button,{variant:"ghost",children:"Review RIPE"})})]})]})})}if(!S)return null;let C=k===S.correctAnswer;return(0,t.jsx)("div",{className:"py-12 px-4 sm:px-6",children:(0,t.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-8",children:[(0,t.jsxs)("span",{className:"text-sm text-slate-500 shrink-0",children:[b+1," / ",W.length]}),(0,t.jsx)(w.ProgressBar,{value:b+1,max:W.length,variant:"gradient",className:"flex-1"})]}),(0,t.jsxs)(g.Card,{variant:"bordered",padding:"lg",children:[(0,t.jsxs)("div",{className:"mb-5",children:[(0,t.jsx)(f.Badge,{size:"sm",variant:"rose",className:"mb-3 capitalize",children:S.concept.replace("-"," ")}),(0,t.jsx)("h2",{className:"text-xl font-semibold text-slate-900",children:S.question})]}),S.context&&(0,t.jsx)("div",{className:"p-4 bg-slate-50 rounded-xl mb-5 font-mono text-sm text-slate-700",children:S.context}),(0,t.jsx)("div",{className:"space-y-2 mb-5",children:S.options.map(e=>{let a=k===e.id,o=e.id===S.correctAnswer,s="border-slate-200 hover:border-rose-300";return I&&o?s="border-emerald-400 bg-emerald-50":a&&(s="border-rose-400 bg-rose-50"),(0,t.jsx)("button",{onClick:()=>{var t;return t=e.id,void(!I&&v(t))},disabled:I,className:`w-full p-4 text-left border-2 rounded-xl transition-all ${s}`,children:(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 shrink-0",children:e.id.toUpperCase()}),(0,t.jsx)("span",{className:"text-slate-700 flex-1",children:e.text}),I&&o&&(0,t.jsx)(n.CheckCircle2,{size:18,className:"text-emerald-500 shrink-0"}),I&&a&&!o&&(0,t.jsx)(u,{size:18,className:"text-rose-500 shrink-0"})]})},e.id)})}),(0,t.jsx)(i.AnimatePresence,{children:I&&(0,t.jsx)(s.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"overflow-hidden",children:(0,t.jsxs)("div",{className:`p-4 rounded-xl mb-5 ${C?"bg-emerald-50":"bg-amber-50"}`,children:[(0,t.jsx)("div",{className:`font-medium mb-1 ${C?"text-emerald-800":"text-amber-800"}`,children:C?"Yes!":"Not quite"}),(0,t.jsx)("p",{className:`text-sm ${C?"text-emerald-700":"text-amber-700"}`,children:S.explanation})]})})}),(0,t.jsx)("div",{className:"flex justify-end",children:I?(0,t.jsx)(y.Button,{onClick:()=>{b<W.length-1?(x(b+1),v(null),j(!1)):T(!0)},children:b<W.length-1?(0,t.jsxs)(t.Fragment,{children:["Next",(0,t.jsx)(d.ArrowRight,{size:14,className:"ml-2"})]}):"See results"}):(0,t.jsx)(y.Button,{onClick:()=>{k&&S&&(N({...A,[S.id]:k}),j(!0))},disabled:!k,children:"Check"})})]})]})})}e.s(["default",()=>b],79799)}]);