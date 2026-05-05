import prisma from "@/repos/prisma";

export async function read(id) {
  if (id) {
    return await prisma.project.findUnique({
      where: { id },
      include: { tasks: { orderBy: { title: "asc" } } },
    });
  }
  return await prisma.project.findMany({
    include: { tasks: { orderBy: { title: "asc" } } },
    orderBy: { title: "asc" },
  });
}

export async function create(data) {
  try {
    return await prisma.project.create({ data });
  } catch (e) {
    throw new Error("Project title must be unique");
  }
}

export async function update(id, data) {
  try {
    return await prisma.project.update({ where: { id }, data });
  } catch (e) {
    throw new Error("Project not found");
  }
}

export async function remove(id) {
  try {
    return await prisma.project.delete({ where: { id } });
  } catch (e) {
    throw new Error("Project not found");
  }
}
