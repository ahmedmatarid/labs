import Project from "@/components/Project";

export default function Projects({ projects }) {
  return (
    <ul className="space-y-3">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
}