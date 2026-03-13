const html = ({ title, completed }) => `
<div class="task ${completed ? "complete" : ""}">
  <div class="task-title">${title}</div>
  <button type="button">
    <img src="icons/${completed ? "check-" : ""}square.svg" alt="un/complete task" />
  </button>
  <button type="button" ${completed ? "" : "disabled"}>
    <img src="icons/x-circle.svg" alt="delete task" />
  </button>
</div>`;

const text = ({ title, completed }) =>
  `Title: ${title} - ${completed ? "Completed" : "Not Completed"}`;

// window.toggle = (title) => {
//   const task = tasks.find((task) => task.title === title);
//   if (task) {
//     task.completed = !task.completed;
//     renderTasks();
//   }
// };

document.addEventListener("DOMContentLoaded", () => {
  // console.log(document.getElementById("task-creation"));
  // console.log(document.querySelector("#task-creation"));
  // console.log("dom loaded");
  // document.querySelector("#tasks");
  // document.querySelectorAll(".task");
  // document.querySelector("#task-creation").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   // e.stopPropagation();
  //   console.log(e);
  // });
  // document.querySelector("#add-task").addEventListener("click", (e) => {
  //   console.log(e);
  // });
  // let clicks = 0;
  // const handler = (e) => {
  //   clicks++;
  //   console.log(clicks);
  //   if (clicks === 4) {
  //     document.removeEventListener("click", handler);
  //   }
  // };
  // document.addEventListener("click", handler);

  // innerHTML <- template(task) for every task in a list of tasks
  // const tasks = [
  // {
  //   title: "Task 1",
  //   completed: false,
  // },
  // {
  //   title: "Task 2",
  //   completed: true,
  // },
  // {
  //   title: "Task 3",
  //   completed: false,
  // },
  // {
  //   title: "Task 4",
  //   completed: true,
  // },
  // ];

  const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

  // view = render(state);
  const renderTask = (task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    if (task.completed) {
      taskElement.classList.add("complete");
    }

    const titleElement = document.createElement("div");
    titleElement.classList.add("task-title");
    titleElement.textContent = task.title;

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    const toggleIcon = document.createElement("img");
    toggleIcon.src = `icons/${task.completed ? "check-" : ""}square.svg`;
    toggleIcon.alt = "un/complete task";
    toggleButton.appendChild(toggleIcon);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.disabled = !task.completed;
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "icons/x-circle.svg";
    deleteIcon.alt = "delete task";
    deleteButton.appendChild(deleteIcon);

    toggleButton.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    deleteButton.addEventListener("click", () => {
      tasks.splice(tasks.indexOf(task), 1);
      renderTasks();
    });

    taskElement.appendChild(titleElement);
    taskElement.appendChild(toggleButton);
    taskElement.appendChild(deleteButton);
    return taskElement;
  };

  const renderTasks = () => {
    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.replaceChildren(...tasks.map(renderTask));

    if (tasks.length) {
      document.querySelector("#task-reset").classList.remove("hidden");
    } else {
      document.querySelector("#task-reset").classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  document.querySelector("#task-reset").addEventListener("click", (e) => {
    tasks.splice(0);
    renderTasks();
  });

  // const renderTasks = () => {
  //   document.querySelector("#tasks").innerHTML = tasks
  //     .map((task) => html(task))
  //     .join("");
  // };

  // const addRenderTask = (task) => {
  //   document.querySelector("#tasks").innerHTML += html(task);
  // };

  document.querySelector("#task-creation").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#new-task-title").value.trim();
    if (title && tasks.every((task) => task.title !== title)) {
      tasks.push({ title, completed: false }); // update the state
      renderTasks(); // render the view: view = render(state)
      document.querySelector("#new-task-title").value = "";
    }
  });

  renderTasks();
});

// stuff that don't rely on the dom being loaded can be outside of the event listener

// console.log(document.getElementById("task-creation"));
// console.log(document.querySelector("#task-creation"));
