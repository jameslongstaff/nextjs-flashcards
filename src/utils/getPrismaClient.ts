import { PrismaClient } from "@prisma/client";

const getPrismaClient = () => {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
};

export default getPrismaClient;
