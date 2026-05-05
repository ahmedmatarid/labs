import * as tasks from "@/repos/tasks";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    return Response.json(await tasks.read(id));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    return Response.json(await tasks.create({ ...body, project: id }), { status: 201 });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}