import prisma from "@/repos/prisma";

export async function get(id) {
    if (id) {
        return await prisma.tasks.findUnique({where: {id} });
    }
  return await prisma.task.findMany();
}

export async function add(data) {
  if (!data?.title) throw new Error("Title is required");
  return await prisma.task.create({ data });
}

export async function set(id, data) {
  try {
    return await prisma.task.update({ where: { id }, data });
  } catch (e) {
    throw new Error("Task not found");
  }
}

export async function remove(id) {
  try {
    return await prisma.task.delete({ where: { id } });
  } catch (e) {
    throw new Error("Task not found");
  }
}
