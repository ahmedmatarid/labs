// console.log(document.querySelector("#tasks"));

document.addEventListener("DOMContentLoaded", () => {
  // const tasks = document.getElementById("tasks");
  // document.getElementByName()
  // document.getElementsByClassName()
  // tasks.innerHTML = template;
  // tasks.innerText = template;

  // const a = 1;
  // console.log(a)

  // const b = await downloadDocument(callback);
  /* callback is called when download is done, and the value of b is set to the result of the download */
  // const callback = () => console.log(b);

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //   const renderTask = (
  //     task,
  //   ) => `<div class="task ${task.completed ? "complete" : ""}">
  //   <div class="task-title">${task.title}</div>
  //   <button type="button">
  //     <img src="icons/square.svg" alt="un/complete task" />
  //   </button>
  //   <button type="button" ${!task.completed ? "disabled" : ""}>
  //     <img src="icons/x-circle.svg" alt="delete task" />
  //   </button>
  // </div>`;

  //   const renderTasks = (tasks) => {
  //     //
  //     return tasks.map(renderTask).join("");
  //   };

  const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  // const tasks = [
  //   // { title: "Task 1", completed: false },
  //   // { title: "Task 2", completed: false },
  //   // { title: "Task 3", completed: true },
  // ];

  const renderTask = (task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    if (task.completed) {
      taskContainer.classList.add("complete");
    }
    const title = document.createElement("div");
    title.classList.add("task-title");
    title.innerText = task.title;

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    const completeIcon = document.createElement("img");
    completeIcon.src = `icons/${task.completed ? "check-" : ""}square.svg`;
    completeIcon.alt = "un/complete task";
    completeButton.appendChild(completeIcon);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    if (!task.completed) {
      deleteButton.disabled = true;
    }
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "icons/x-circle.svg";
    deleteIcon.alt = "delete task";
    deleteButton.appendChild(deleteIcon);

    completeButton.addEventListener("click", () => {
      task.completed = !task.completed;
      // completeIcon.src = `icons/${task.completed ? "check-" : ""}square.svg`;
      // deleteButton.disabled = !task.completed;
      // deleteIcon.src = `icons/${task.completed ? "" : "x-"}circle.svg`;
      // taskContainer.classList.toggle("complete");
      renderTasks();
    });

    deleteButton.addEventListener("click", () => {
      tasks.splice(tasks.indexOf(task), 1);
      renderTasks();
    });

    taskContainer.appendChild(title);
    taskContainer.appendChild(completeButton);
    taskContainer.appendChild(deleteButton);

    return taskContainer;
  };

  const renderTasks = () => {
    const tasksDiv = document.querySelector("#tasks");
    tasksDiv.replaceChildren(...tasks.map(renderTask));

    if (tasks.length) {
      document.querySelector("#task-reset").classList.remove("hidden");
    } else {
      document.querySelector("#task-reset").classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  document.querySelector("#task-reset").addEventListener("click", () => {
    tasks.splice(0);
    renderTasks();
  });

  const form = document.querySelector("#task-creation");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // event.stopPropagation()

    const title = document.querySelector("#new-task-title").value.trim();

    if (title && !tasks.some((task) => task.title === title)) {
      tasks.push({ title, completed: false });
      // tasksDiv.innerHTML += renderTask(task);
      // tasksDiv.innerHTML = renderTasks(tasks);
      renderTasks();
      document.querySelector("#new-task-title").value = "";
    }
  });

  renderTasks();
});

// eventLoop(
//   - fire event
//   - handle mouse click
//   - pause/wait for download. start download and call back when done
//   - handle keyboard input
//   - render animation
// )

// stuff that don't depend on the DOM can be put outside of the event listener

// let clicks = 0;
// const handler = (event) => {
//   console.log(event);
//   clicks += 1;
//   if (clicks >= 5) {
//     document.removeEventListener("click", handler);
//   }
// };

// const handler2 = (event) => {
//   console.log(event);
// };

// document.addEventListener("click", handler);
// document.addEventListener("click", handler2);
// document.removeEventListener("click", handler);
