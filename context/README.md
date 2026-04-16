# Your Context Pack

Drop files here that describe what you need to track this week. Claude Code will read them and populate your todo list.

## Good things to add

- Screenshots of your calendar (PNG / JPG)
- A `notes.txt` with everything on your mind
- A `reminders.txt` exported from your phone's Reminders app
- A `goals.md` with your priorities for the next 30 days
- Voice memos transcribed to text

## The prompt to run

Open a terminal in the repo root and type `claude`, then paste:

> Read every file in `context/`. Extract 8–12 real, actionable todos from my actual life. Replace the `STARTER_TODOS` array in `app.js` with those todos, preserving the data structure.

## Don't commit real private data

If you're going to push to GitHub, keep sensitive context local:

```bash
echo "context/*" >> .gitignore
echo "!context/README.md" >> .gitignore
```
