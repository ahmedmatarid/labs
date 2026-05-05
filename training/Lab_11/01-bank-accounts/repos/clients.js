import prisma from "@/repos/prisma";

export async function read(id) {
  if (id) {
    return await prisma.client.findUnique({
      where: { id },
      include: { accounts: true },
    });
  }
  return await prisma.client.findMany({ include: { accounts: true } });
}

export async function create(data) {
  try {
    return await prisma.client.create({ data });
  } catch (e) {
    throw new Error("Email must be unique");
  }
}

export async function remove(id) {
  try {
    return await prisma.client.delete({ where: { id } });
  } catch (e) {
    throw new Error("Client not found");
  }
}
