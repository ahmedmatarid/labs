import prisma from "@/repos/prisma";

export async function read(projectId) {
  return await prisma.task.findMany({
    where: { project: projectId },
    orderBy: { title: "asc" },
  });
}

export async function create(data) {
  try {
    return await prisma.task.create({ data });
  } catch (e) {
    throw new Error("Task title must be unique within project");
  }
}

export async function update(id, data) {
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