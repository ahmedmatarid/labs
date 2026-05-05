import * as tasks from "@/repos/tasks";

export async function GET() {
  try {
    return Response.json(await tasks.get());
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json(await tasks.add(body), { status: 201 });
  } catch (e) {
    console.error(e);

    if (e.name === "PrismaClientValidationError" || e.code === "P2002") {
      return Response.json({ error: "Client error." }, { status: 400 });
    }

    return Response.json({ error: "Server error." }, { status: 500 });
  }
}
