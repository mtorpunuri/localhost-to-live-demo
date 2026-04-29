// Todos — edit this array by hand, or ask Claude Code to populate it from /context
const STARTER_TODOS = [
  { id: 1, text: "Finish 12-inch Potions essay on properties of moonstone (due Friday)", done: false, priority: "high" },
  { id: 2, text: "Return 'Great Wizards of the Twentieth Century' to Madam Pince", done: false, priority: "medium" },
  { id: 3, text: "Meet Hermione in the library at 4pm — Flamel research", done: false, priority: "high" },
  { id: 4, text: "Owl Charlie Weasley about smuggling Norbert to Romania", done: false, priority: "high" },
  { id: 5, text: "Smuggle Norbert to the tallest tower, Saturday midnight (bring cloak)", done: false, priority: "high" },
  { id: 6, text: "Quidditch practice with Wood — Tuesday & Thursday, 7am", done: false, priority: "medium" },
  { id: 7, text: "Practice Transfiguration: matchstick → needle until it stops being pointy wood", done: false, priority: "low" },
  { id: 8, text: "Write back to Hagrid (stop forgetting)", done: false, priority: "medium" },
  { id: 9, text: "Return Neville's Remembrall — it's been in the trunk for a month", done: true, priority: "low" },
  { id: 10, text: "Tell McGonagall you're staying at Hogwarts for Christmas", done: false, priority: "medium" },
  { id: 11, text: "Hide the invisibility cloak somewhere Seamus can't find it", done: false, priority: "low" },
  { id: 12, text: "Stop going back to the Mirror of Erised (Dumbledore was right)", done: false, priority: "medium" },
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

      const priority = todo.priority || "medium";
      const select = document.createElement("select");
      select.className = `priority priority-${priority}`;
      select.setAttribute("aria-label", "Priority");
      ["low", "medium", "high"].forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p[0].toUpperCase() + p.slice(1);
        if (p === priority) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener("change", () => setPriority(todo.id, select.value));

      const text = document.createElement("span");
      text.className = "text";
      text.textContent = todo.text;

      const del = document.createElement("button");
      del.className = "delete";
      del.type = "button";
      del.textContent = "×";
      del.setAttribute("aria-label", "Delete todo");
      del.addEventListener("click", () => remove(todo.id));

      li.append(checkbox, select, text, del);
      listEl.appendChild(li);
    });
  }

  countEl.textContent = `${todos.length} act${todos.length === 1 ? "" : "s"} in the show`;
  saveTodos(todos);
}

function add(text) {
  const id = Math.max(0, ...todos.map((t) => t.id)) + 1;
  todos.push({ id, text, done: false, priority: "medium" });
  render();
}

function setPriority(id, priority) {
  const t = todos.find((t) => t.id === id);
  if (t) t.priority = priority;
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
