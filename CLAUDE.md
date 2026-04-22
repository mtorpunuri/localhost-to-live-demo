# Localhost to Live — Workshop Repo

You're being run by a workshop participant, not a developer. They're
here to learn how to go from localhost to a live URL by personalizing
this tiny todo app and deploying it to Vercel.

## The person in front of you

- Has vibe-coded something in ChatGPT or Claude before
- Can probably write a bit of code but has never deployed anything
- Is in a 90-minute live workshop right now
- Wants to end with a live URL they can share with a friend

## The workshop flow (Context → Logic → Interface)

1. **Sprint 1 — Context (15 min)**: They drop real files into
   `context/`. Calendar screenshots, notes.txt, reminders.txt, goals.md.

2. **Sprint 2 — Logic (15 min)**: They ask you to read `context/` and
   rewrite the `STARTER_TODOS` array in `app.js` with real todos.

3. **Sprint 3 — Interface (5 min)**: They ask you for ONE small UI
   change (dark mode, priority dots, grouped sections).

Then they push to GitHub and deploy on Vercel.

## How to help

- **First, figure out where they are.** Ask: "Welcome! Are you on
  Sprint 1 (context), 2 (logic), 3 (interface), or the deploy?"
- **Be conversational.** They're not reading docs. Keep responses short.
- **Ask before editing.** Confirm scope before changing files.
- **Flag ambiguity.** If context files are missing or sparse, say so.
- **Never invent data.** Only generate todos from real context files.
- **One small change at a time in Sprint 3.** Time is tight.

## Key files

- `app.js` — the logic. `STARTER_TODOS` array lives here.
- `index.html` — the page (opens directly in a browser, no build).
- `styles.css` — the look.
- `context/` — where they drop personal files.
- `context/TEMPLATE-goals.md` — a goals template they can copy and fill in.
- `context/SAMPLE-goals.md`, `SAMPLE-notes.txt`, `SAMPLE-meeting-notes.md`, `SAMPLE-reminders.txt` — first-year Hogwarts sample context. If a participant has nothing to drop in, they rename these (drop the `SAMPLE-` prefix) and run Sprint 2 against them.
- `README.md` — has the full workshop walkthrough and the exact prompts.

## Architecture reminders

- Static site. No build step. No framework.
- State persists via `localStorage`. No backend.
- Deploys to Vercel with zero config (it's already configured via `vercel.json`).
- Todo data structure: `{ id: number, text: string, done: boolean }`

## Prompts they'll likely paste

Sprint 2 populate prompt (they pick one mode — Create is the default on the follow-along page):

- **Create** (default) — generate new todos from context:
  > Read every file in the `context/` folder. Extract 8–12 real, actionable todos from my actual life. Replace the `STARTER_TODOS` array in `app.js` with those todos. Keep the same data structure. Preserve existing code style.

- **Decide** — rank what they already have:
  > Read every file in `context/`. Rank the top 8 things I should focus on this week and write them as `STARTER_TODOS` — most important first.

- **Act** — turn decisions into concrete next steps:
  > Read every file in `context/`. For every open question or vague goal I've been putting off, write the todo as the concrete next step I should take — not the question itself.

Sprint 3 UI change prompt (they pick a feature OR a theme):

Features:
> Add a dark mode toggle, saved to localStorage.
> Group todos into "Done" and "Not Done" sections with a header between.
> Add a colored priority dot (low / medium / high) with a dropdown.
> Add a "due this week" filter.

Themes (commit to the vibe — colors, fonts, shapes, copy):
> Jungle — greens, vines, organic shapes, playful header.
> Clown — circus colors, round buttons, playful fonts.
> Y2K — chrome, Comic Sans, early-2000s web vibe.
> Terminal green — monospace, black background, phosphor green text.

## What NOT to do

- Don't refactor things they didn't ask about.
- Don't rebuild the app in React. It's vanilla on purpose.
- Don't add dependencies. No `npm install` anything.
- Don't overwrite `CLAUDE.md` or the README.
- Don't commit or push for them — they need to do that part themselves.
