# AI Prompting — Best Practice

A short, warm, beginner-friendly workshop site that teaches young adults (18–25)
how to get real value out of AI in daily life, studies, and early career.

Built for a 3-week workshop sprint across three squads:

- 🏠 **Life Admin** — mental-load hacks, budgeting, planning
- 📚 **Learning** — AI as a personal tutor, study habits, research
- 💼 **Career** — resumes, LinkedIn, interview prep
- 🙌 **Facilitators** — on-the-ground guides who run the workshop

## The framework: CARE

We teach one mnemonic and stick to it.

- **C** — Context: tell AI about you and your situation
- **A** — Ask: say exactly what you want done
- **R** — Role: tell AI who to be
- **E** — Expected output: describe the shape of what you want back

## Pages

- `/` — pick your squad, 60-second starter
- `/care` — the CARE framework with an inline mini-builder
- `/playbooks` — copy-paste prompts grouped by squad
- `/practice` — write a prompt, get instant CARE feedback
- `/quiz` — 10-question knowledge check
- `/safety` — privacy, hallucinations, academic-integrity rules
- `/facilitators` — run-of-show, icebreakers, troubleshooting

## Run locally

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `master`. GitLab CI will build the Next.js static export and publish to
GitLab Pages automatically via `.gitlab-ci.yml`.
