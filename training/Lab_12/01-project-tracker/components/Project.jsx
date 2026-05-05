import Tasks from "@/components/Tasks";

export default function Project({ project }) {
  return (
    <li className="border rounded p-3">
      <div className="flex justify-between items-center mb-2">
        <strong className={project.completed ? "line-through text-gray-400" : ""}>
          {project.title}
        </strong>
        <span className="text-sm text-gray-500">
          {project.tasks.filter(t => t.completed).length}/{project.tasks.length}
        </span>
      </div>
      <Tasks projectId={project.id} initialTasks={project.tasks} />
    </li>
  );
}