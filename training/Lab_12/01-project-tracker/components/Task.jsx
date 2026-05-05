"use client";

export default function Task({ task, projectId, onUpdate, onRemove }) {

  async function handleToggle(e) {
    e.preventDefault();
    const res = await fetch(`/api/projects/${projectId}/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    const updated = await res.json();
    onUpdate(updated);
  }

  async function handleDelete(e) {
    e.preventDefault();
    await fetch(`/api/projects/${projectId}/tasks/${task.id}`, {
      method: "DELETE",
    });
    onRemove(task.id);
  }

  return (
    <li className="flex justify-between items-center text-sm">
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <form onSubmit={handleToggle}>
          <button className="text-blue-500 hover:underline">
            {task.completed ? "Undo" : "Complete"}
          </button>
        </form>
        <form onSubmit={handleDelete}>
          <button
            disabled={!task.completed}
            className="text-red-500 hover:underline disabled:opacity-30"
          >
            Delete
          </button>
        </form>
      </div>
    </li>
  );
}