import * as projects from "@/repos/projects";
import { createProject } from "@/app/actions";
import Projects from "@/components/Projects";

export default async function Home() {
  const data = await projects.read();

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Tracker</h1>
      <Projects projects={data} />
      <form action={createProject} className="flex gap-2 mt-4">
        <input
          name="title"
          placeholder="New project..."
          className="border p-2 rounded flex-1"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </main>
  );
}