document.addEventListener("DOMContentLoaded", () => {
  // const tasks = [
  //   { title: "Task 1", complete: false },
  //   { title: "Task 2", complete: true },
  // ];
  // JSON.stringify(obj) -> string (JSON)
  // JSON.parse(string) -> obj (POJO)
  const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  // function addTask(task) {}

  const form = document.querySelector("#task-creation");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // event.stopPropagation();

    const input = document.querySelector("#new-task-title");
    const title = input.value.trim();
    if (title !== "" && !tasks.find((task) => task.title === title)) {
      tasks.push({ title: input.value, complete: false });
      input.value = "";
      renderTasks();
    }
  });

  function renderTask(task) {
    function completeTask() {
      task.complete = !task.complete;
      renderTasks();
    }

    function deleteTask() {
      const index = tasks.findIndex((t) => t.title === task.title);
      tasks.splice(index, 1);
      renderTasks();
    }

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    if (task.complete) {
      taskContainer.classList.add("complete");
    }

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = task.title;
    taskContainer.appendChild(taskTitle);

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    const completeImage = document.createElement("img");
    completeImage.src = `icons/${task.complete ? "check-" : ""}square.svg`;
    completeImage.alt = "un/complete task";
    completeButton.appendChild(completeImage);
    taskContainer.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.disabled = !task.complete;
    const deleteImage = document.createElement("img");
    deleteImage.src = "icons/x-circle.svg";
    deleteImage.alt = "delete task";
    deleteButton.appendChild(deleteImage);
    taskContainer.appendChild(deleteButton);

    completeButton.addEventListener("click", completeTask);
    deleteButton.addEventListener("click", deleteTask);

    return taskContainer;
  }

  const resetButton = document.querySelector("#task-reset");
  resetButton.addEventListener("click", () => {
    tasks.splice(0);
    renderTasks();
  });

  function renderTasks() {
    const container = document.querySelector("#tasks");
    container.replaceChildren(...tasks.map((task) => renderTask(task)));
    if (tasks.length) {
      resetButton.classList.remove("hidden");
    } else {
      resetButton.classList.add("hidden");
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  renderTasks();

  // function renderTask(task) {
  //   return `<div class="task ${task.complete ? "complete" : ""}">
  //   <div class="task-title">${task.title}</div>
  //   <button type="button">
  //     <img src="icons/${task.complete ? "check-" : ""}square.svg" alt="un/complete task" />
  //   </button>
  //   <button type="button" ${!task.complete ? "disabled" : ""}>
  //     <img src="icons/x-circle.svg" alt="delete task" />
  //   </button>
  // </div>
  // `;
  // }

  // function renderTasks() {
  //   const container = document.querySelector("#tasks");
  //   container.innerHTML = tasks.map((task) => renderTask(task)).join("");
  // }
});

// document.addEventListener("DOMContentLoaded", () => {
// console.log("loaded");
// console.error("error");
// console.log("done");
// let clicks = 0;
// document.addEventListener("click", (event) => {
//   console.log(event);
//   clicks++;
//   // if (clicks === 3) {
//   //   document.removeEventListener("click", ?);
//   // }
// });
// document.addEventListener("click", () => {
//   console.log(clicks);
// });
// console.log(document.getElementById("task-creation"));
// document.getElementsByClassName(classNames)
// document.getElementsByName()
// console.log(document.querySelector("#task-creation"));
// console.log(document.querySelector(".task"));
// console.log(document.querySelectorAll(".task"));
// });

// stuff that don't depends on the dom
