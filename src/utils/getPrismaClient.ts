import { PrismaClient } from "@prisma/client";

const getPrismaClient = (): PrismaClient => {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
};

export default getPrismaClient;
