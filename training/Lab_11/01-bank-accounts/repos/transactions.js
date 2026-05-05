import prisma from "@/repos/prisma";

export async function read(accountId) {
  return await prisma.transaction.findMany({
    where: { account: accountId },
    orderBy: { date: "desc" },
  });
}

export async function create(data) {
  return await prisma.transaction.create({ data });
}
