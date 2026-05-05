import * as tasks from "@/repos/tasks";

export async function PATCH(request, { params }) {
  try {
    const { taskId } = await params;
    const body = await request.json();
    return Response.json(await tasks.update(taskId, body));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { taskId } = await params;
    return Response.json(await tasks.remove(taskId));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}