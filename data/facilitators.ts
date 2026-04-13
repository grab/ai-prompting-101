import { RunOfShowItem } from "@/types";

export const runOfShow: RunOfShowItem[] = [
  {
    time: "0:00 – 0:10",
    title: "Welcome + vibe-setting",
    notes:
      "One-liner icebreaker: 'In one sentence — what's the chore AI would do for you right now?' Keep it light. Do not lecture.",
  },
  {
    time: "0:10 – 0:20",
    title: "The CARE framework (walkthrough)",
    notes:
      "Open /care on the screen. Walk through Context → Ask → Role → Expected. Use one live example (pick one from /playbooks). Keep it under 10 min.",
  },
  {
    time: "0:20 – 0:35",
    title: "Squad breakouts — pick your playbook",
    notes:
      "Participants open /playbooks, pick one prompt from their squad, and run it on a free AI tool. Facilitators roam and help anyone who gets stuck or scared.",
  },
  {
    time: "0:35 – 0:55",
    title: "Practice round",
    notes:
      "Open /practice. Everyone picks a scenario and writes their own prompt. Submit → see feedback → share a good one aloud. Bonus: invite one volunteer to show theirs on screen.",
  },
  {
    time: "0:55 – 1:10",
    title: "Safety chat + common fears",
    notes:
      "Walk /safety. Normalise the anxieties — privacy, 'am I cheating?', hallucinations. Make room for questions. This bit tends to be the one people remember.",
  },
  {
    time: "1:10 – 1:25",
    title: "Quiz + share-out",
    notes:
      "Run /quiz as a friendly competition (pairs or small groups). Share highest score out loud, but prize everyone for something.",
  },
  {
    time: "1:25 – 1:30",
    title: "Close",
    notes:
      "Ask each person: 'One prompt you'll try this week?' Send them home with the playbook bookmarked. Circulate the feedback form.",
  },
];

export const icebreakers = [
  "In one sentence: what's the chore AI would take off your plate today?",
  "What's the last thing you Googled that you could have asked AI instead?",
  "Pick a squad emoji (🏠 📚 💼) and say one thing you want to get better at in that area.",
];

export const troubleshooting: { issue: string; fix: string }[] = [
  {
    issue: "A participant is scared they'll 'break it' or 'look stupid'.",
    fix: "Remind them: the worst AI does is give a bad answer. You can always say 'that's not what I meant, try again'. Start them on a low-stakes prompt (a recipe, a to-do list).",
  },
  {
    issue: "Someone pastes something private (name, ID, bank info) without thinking.",
    fix: "Step in gently, scrub it, show them /safety rule #1. Don't shame — a lot of people don't know. Moment of learning, not embarrassment.",
  },
  {
    issue: "AI gives a really bad answer and the participant looks defeated.",
    fix: "Good! That's the best teaching moment. Sit with them, look at their prompt, spot which CARE letter is missing, and let them rewrite it. The 'aha' is here.",
  },
  {
    issue: "A participant won't stop asking 'but is this allowed for my uni assignment?'",
    fix: "Direct them to their course's academic integrity page. Our job is to teach the tool, not to rule on their specific course. /safety rule #3 covers it.",
  },
  {
    issue: "Someone wants to use AI for a real, sensitive problem (mental health, a family conflict).",
    fix: "Acknowledge it warmly. Point them at /safety rule #5. Give them a small AI use case (e.g., 'organise your thoughts before talking to someone'), but don't let AI be the endpoint.",
  },
];

export const watchFor = [
  "The quietest person in the squad — their prompt is usually the most thoughtful once coaxed out.",
  "Anyone copy-pasting without reading the output. Ask them what AI actually said.",
  "The over-confident 'I already use AI for everything' person — give them the advanced practice scenario early so they don't coast.",
  "Participants who finish early — pair them up to run the practice scenario for a different squad.",
];
