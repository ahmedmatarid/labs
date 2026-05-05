import prisma from "@/repos/prisma";

export async function read(id) {
  if (id) {
    return await prisma.account.findUnique({
      where: { id },
      include: { transactions: true },
    });
  }
  return await prisma.account.findMany();
}

export async function create(data) {
  return await prisma.account.create({ data });
}

export async function remove(id) {
  try {
    return await prisma.account.delete({ where: { id } });
  } catch (e) {
    throw new Error("Account not found");
  }
}
