// Selec DOM
const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#newitem");

function markDone(todoLi) {
  todoLi.classList.toggle("done")
}
function removeTask(todoLi) {
  todoLi.classList.add("fall");
  todoLi.addEventListener("transitionend", () => todoLi.remove());
}

function filterTask(hideCompleteTasks) {
  todoList.querySelectorAll("li").forEach((todoLi) => {
    if(todoLi.classList.contains("done")) {
      todoLi.style.display =hideCompleteTasks ? "none" : "flex"
    }
  })
}
// Mark done and Remove a task
todoList.addEventListener("click", (e)=> {
  const element = e.target
  if (element.classList.contains("btn-action-done")) {
    markDone(element.parentNode.parentNode)
  } else if(element.classList.contains("btn-action-delete"))  {
    removeTask(element.parentNode.parentNode)
  }
})
// Filter tasks
filterOption.addEventListener("click", (e)=> {
  filterTask(e.target.checked);
})
// Add a new task

function addTask(taskLabel) {
  const todoLi = document.createElement("li");
  
  const divActions = document.createElement("div");
  divActions.className ="actions";
  divActions.innerHTML = `<input type="checkbox" class="btn-action btn-action-done">
        <button class="btn-action btn-action-delete">✖</button>`;
  todoLi.appendChild(divActions);
  
  
  const labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = taskLabel;
 todoLi.appendChild(labelSpan);
  todoList.appendChild(todoLi);
}

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  const taskLabel = taskInput.value.trim();
  if (taskLabel){
    addTask(taskLabel);
    taskInput.value = "";
  }
})