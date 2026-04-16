# Localhost to Live — Demo Repo

A tiny todo list app. Your job today: take it from localhost to a real live URL.

**Workshop:** [Localhost to Live](https://buildfirst.ai) — April 29, 2026 · Facilitated by Megha Torpunuri

---

## Run it locally

No build step. Just open the file:

```bash
open index.html
```

Or, for hot reload, use any static server:

```bash
npx serve .
# → http://localhost:3000
```

## What's in here

```
localhost-to-live-demo/
├── index.html     ← the page
├── styles.css     ← the look
├── app.js         ← the logic (todos live in STARTER_TODOS)
├── context/       ← drop your personal context files here
└── README.md      ← you're reading it
```

---

## Make It Yours (the workshop flow)

### Sprint 1 — Context
Drop files into `context/` that describe what you actually need to track this week:
- Screenshot of your calendar
- A `notes.txt` with things on your mind
- A `reminders.txt` exported from your phone
- Voice memos transcribed to text
- Anything else that paints a picture of your week

### Sprint 2 — Logic
Open this folder in Cursor / VS Code and run Claude Code in the terminal:

```
claude
```

Then paste this prompt:

> Read every file in the `context/` folder. Extract 8–12 real, actionable todos from my actual life. Replace the `STARTER_TODOS` array in `app.js` with those todos. Keep the same data structure (id, text, done). Preserve the existing code style.

### Sprint 3 — Interface
Ask Claude Code to make one UI change. Examples:
- "Add a dark mode toggle"
- "Group todos by done/not done"
- "Add a priority field with a colored dot"

### Ship it
```bash
git add .
git commit -m "Personalize my Personal OS"
git push
```

Then go to [vercel.com](https://vercel.com/new), import the repo, and watch it build. You'll get a live URL. Share it.

---

## Why this repo

This is the smallest possible "real app" — static HTML, no build step, no framework. Vercel deploys it with zero config. That's on purpose: the workshop is about the **deploy pipeline**, not the framework. Once you understand the loop (code → commit → push → deploy → live URL), you can apply it to anything.
