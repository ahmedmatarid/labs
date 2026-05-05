import * as projects from "@/repos/projects";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const data = await projects.read(id);
    if (!data) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    return Response.json(await projects.update(id, body));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    return Response.json(await projects.remove(id));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}