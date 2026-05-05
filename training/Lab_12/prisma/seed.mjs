import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./client/client.js";

const prisma = new PrismaClient({
  adapter: new PrismaLibSql({ url: process.env.DATABASE_URL ?? "" }),
});

const seed = async () => {
  await prisma.project.create({
    data: {
      title: "Website Redesign",
      tasks: {
        create: [
          { title: "Design mockups" },
          { title: "Build components" },
          { title: "Write tests" },
        ]
      }
    }
  });
  await prisma.project.create({
    data: {
      title: "Mobile App",
      tasks: {
        create: [
          { title: "Setup project" },
          { title: "Build login screen" },
          { title: "Connect API" },
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
