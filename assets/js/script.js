let tasks = [
  { id: 1648, description: "Practicar inputs", completed: true },
  { id: 6013, description: "Rankear con Ken", completed: false },
  { id: 2420, description: "Aprender combos óptimos", completed: false },
];

const taskList = document.getElementById("task-list");
const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

function generateRandomId() {
  return Math.floor(Math.random() * 10000); 
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>ID: ${task.id}</strong> - <span class="${
      task.completed ? "completed" : ""
    }">${task.description}</span>
            <input type="checkbox" ${
              task.completed ? "checked" : ""
            } onclick="toggleTask(${task.id})">
            <button onclick="deleteTask(${task.id})">❌</button>
        `;
    taskList.appendChild(li);
  });

  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter((task) => task.completed).length;
}

addTaskButton.addEventListener("click", () => {
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== "") {
    const newTask = {
      id: generateRandomId(),
      description: newTaskDescription,
      completed: false,
    };
    tasks.push(newTask);
    renderTasks();
    newTaskInput.value = "";
  }
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  renderTasks();
}

renderTasks();
