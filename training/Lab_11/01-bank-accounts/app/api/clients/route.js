import * as clients from "@/repos/clients";

export async function GET() {
  try {
    return Response.json(await clients.read());
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch (e) { return Response.json({ error: "Empty body" }, { status: 400 }); }
  try {
    return Response.json(await clients.create(body), { status: 201 });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}
