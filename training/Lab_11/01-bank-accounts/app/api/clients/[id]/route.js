import * as clients from "@/repos/clients";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const data = await clients.read(id);
    if (!data) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    return Response.json(await clients.remove(id));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
