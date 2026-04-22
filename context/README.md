# Your Context Pack

Drop files here that describe what you need to track this week. Claude Code will read them and populate your todo list.

## Good things to add

- Screenshots of your calendar (PNG / JPG)
- A `notes.txt` with everything on your mind
- A `reminders.txt` exported from your phone's Reminders app
- A `goals.md` with your priorities for the next 30 days
- A `meeting-notes.md` — paste a Granola transcript, Zoom summary, or typed meeting notes (any format works)
- Voice memos transcribed to text

## No context yet? Use the sample pack

Four `SAMPLE-*.md` / `SAMPLE-*.txt` files live in this folder (first-year Hogwarts). Rename each to drop the `SAMPLE-` prefix (e.g. `SAMPLE-goals.md` → `goals.md`) and the Sprint 2 prompts will pick them up like your own content.

## Pick your prompt flavor

Open a terminal in the repo root, type `claude`, then paste one of these. They all write to the `STARTER_TODOS` array in `app.js` — they just ask the AI to do a different kind of thinking.

**Create — generate new todos from your context (default):**

> Read every file in the `context/` folder. Extract 8–12 real, actionable todos from my actual life. Replace the `STARTER_TODOS` array in `app.js` with those todos. Keep the same data structure (id, text, done). Preserve the existing code style.

**Decide — rank what's already there:**

> Read every file in the `context/` folder. Rank the top 8 things I should focus on this week and write them as the `STARTER_TODOS` array — most important first. Keep the existing data structure (id, text, done) and code style.

**Act — turn decisions into concrete next steps:**

> Read every file in the `context/` folder. For every open question, decision, or vague goal I've been putting off, write the todo as the concrete next step I should take — not the question itself. Keep the same data structure (id, text, done) and code style.

## Don't commit real private data

If you're going to push to GitHub, keep sensitive context local:

```bash
echo "context/*" >> .gitignore
echo "!context/README.md" >> .gitignore
```
