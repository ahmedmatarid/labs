"use client";
import { useState, useEffect } from "react";
import Task from "@/components/Task";

export default function Tasks({ projectId, initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [stale, setStale] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function get() {
      const res = await fetch(`/api/projects/${projectId}/tasks`);
      const data = await res.json();
      setTasks(data);
      setStale(false);
    }
    if (stale) { get(); }
  }, [stale]);

  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(`/api/projects/${projectId}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    setStale(true);
  }

  const handleUpdate = (updatedTask) => {
    setTasks(prev =>
      prev.map(t => t.id === updatedTask.id ? updatedTask : t)
    );
  };

  const handleRemove = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div>
      <ul className="space-y-1 mb-2">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            projectId={projectId}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
          />
        ))}
      </ul>
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New task..."
          className="border p-1 rounded flex-1 text-sm"
        />
        <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
          Add
        </button>
      </form>
    </div>
  );
}