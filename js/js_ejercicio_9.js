const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");
const taskMessage = document.querySelector("#taskMessage");
const deleteCompletedButton = document.querySelector("#deleteCompletedButton");

const storageKey = "practiceTasks";
let tasks = JSON.parse(localStorage.getItem(storageKey)) || [];

function saveTasks() {
  // localStorage solo guarda texto, por eso convertimos el array a JSON.
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskMessage.textContent = "No hay tareas pendientes.";
    return;
  }

  taskMessage.textContent = `${tasks.length} tarea(s) guardada(s).`;

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const taskText = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    taskText.textContent = task.text;

    if (task.completed) {
      listItem.classList.add("is-completed");
    }

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    label.append(checkbox, taskText);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    taskMessage.textContent = "Escribe una tarea antes de agregar.";
    return;
  }

  tasks.push({
    id: Date.now(),
    text: taskText,
    completed: false
  });

  taskInput.value = "";
  taskInput.focus();
  saveTasks();
  renderTasks();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

deleteCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

renderTasks();
