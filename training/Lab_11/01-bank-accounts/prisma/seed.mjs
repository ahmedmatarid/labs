import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./client/client.js";

const prisma = new PrismaClient({
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL ?? "",
  }),
});

const seed = async () => {
  await prisma.client.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      accounts: {
        create: [
          {
            type: "checking",
            balance: 1000,
            transactions: {
              create: [
                { type: "deposit",    amount: 1000 },
                { type: "withdrawal", amount: 200  },
              ]
            }
          },
          { type: "savings", balance: 5000 }
        ]
      }
    }
  });
  console.log("Seeded successfully!");
};

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}