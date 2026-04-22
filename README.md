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
- A `goals.md` with priorities for the next 30 days
- A `meeting-notes.md` — paste a Granola transcript, Zoom summary, or typed meeting notes (any format)
- Voice memos transcribed to text

**Nothing to drop in yet?** Four `SAMPLE-*` files live in `context/` (first-year Hogwarts). Rename each to drop the `SAMPLE-` prefix and the Sprint 2 prompts will treat them like your own content.

### Sprint 2 — Logic
Open this folder in Cursor / VS Code and run Claude Code in the terminal:

```
claude
```

Pick one prompt based on what you want the AI to do:

**Create — generate new todos from your context (default):**

> Read every file in the `context/` folder. Extract 8–12 real, actionable todos from my actual life. Replace the `STARTER_TODOS` array in `app.js` with those todos. Keep the same data structure (id, text, done). Preserve the existing code style.

**Decide — rank what you already have:**

> Read every file in the `context/` folder. Rank the top 8 things I should focus on this week and write them as the `STARTER_TODOS` array — most important first. Keep the existing data structure (id, text, done) and code style.

**Act — turn decisions into concrete next steps:**

> Read every file in the `context/` folder. For every open question, decision, or vague goal I've been putting off, write the todo as the concrete next step I should take — not the question itself. Keep the same data structure (id, text, done) and code style.

### Sprint 3 — Interface
Ask Claude Code for one small UI change. Pick a feature or a theme.

**Features:**
- Add a dark mode toggle, saved to localStorage
- Group todos into "Done" / "Not Done" sections
- Add a colored priority dot (low / medium / high)
- Add a "due this week" filter

**Themes (commit to the vibe — colors, fonts, shapes, and copy):**
- Jungle — greens, vines, organic shapes
- Clown — circus colors, round buttons, playful fonts
- Y2K — chrome, Comic Sans, early-2000s web
- Terminal green — monospace, black bg, phosphor text

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
