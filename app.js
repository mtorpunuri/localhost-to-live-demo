// Todos — edit this array by hand, or ask Claude Code to populate it from /context
const STARTER_TODOS = [
  { id: 1, text: "Clone this repo to your laptop", done: true },
  { id: 2, text: "Open the folder in Cursor or VS Code", done: true },
  { id: 3, text: "Ask Claude Code to read your /context folder", done: false },
  { id: 4, text: "Push your branch to GitHub", done: false },
  { id: 5, text: "Deploy it to Vercel and share the URL", done: false },
];

const STORAGE_KEY = "localhost-to-live-todos";

function loadTodos() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [...STARTER_TODOS];
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

let todos = loadTodos();

const listEl = document.getElementById("todo-list");
const emptyEl = document.getElementById("empty-state");
const countEl = document.getElementById("count");
const formEl = document.getElementById("todo-form");
const inputEl = document.getElementById("todo-input");
const clearBtn = document.getElementById("clear-completed");

function render() {
  listEl.innerHTML = "";

  if (todos.length === 0) {
    emptyEl.style.display = "block";
  } else {
    emptyEl.style.display = "none";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      if (todo.done) li.classList.add("done");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.done;
      checkbox.addEventListener("change", () => toggle(todo.id));

      const text = document.createElement("span");
      text.className = "text";
      text.textContent = todo.text;

      const del = document.createElement("button");
      del.className = "delete";
      del.type = "button";
      del.textContent = "×";
      del.setAttribute("aria-label", "Delete todo");
      del.addEventListener("click", () => remove(todo.id));

      li.append(checkbox, text, del);
      listEl.appendChild(li);
    });
  }

  countEl.textContent = `${todos.length} item${todos.length === 1 ? "" : "s"}`;
  saveTodos(todos);
}

function add(text) {
  const id = Math.max(0, ...todos.map((t) => t.id)) + 1;
  todos.push({ id, text, done: false });
  render();
}

function toggle(id) {
  const t = todos.find((t) => t.id === id);
  if (t) t.done = !t.done;
  render();
}

function remove(id) {
  todos = todos.filter((t) => t.id !== id);
  render();
}

function clearCompleted() {
  todos = todos.filter((t) => !t.done);
  render();
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;
  add(text);
  inputEl.value = "";
});

clearBtn.addEventListener("click", clearCompleted);

render();
