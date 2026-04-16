import * as tasks from "@/repos/tasks";
import Likes from "./likes";

export default async function Page({ params, searchParams }) {
  const { likeId } = await searchParams;
  if (likeId) {
    await tasks.like(likeId);
  }

  const data = await tasks.read();

  return data.map((task) => (
    <div key={task.id}>
      <ul>
        <li>Title: {task.title}</li>
        <li>Completed: {task.completed ? "Yes" : "No"}</li>
        <li>Created: {task.date.toDateString()}</li>
        <Likes task={task} />
      </ul>
    </div>
  ));
}
