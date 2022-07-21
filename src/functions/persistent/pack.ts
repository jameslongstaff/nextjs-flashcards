import { Pack, PrismaClient } from "@prisma/client";

export const getPacks = async (): Promise<Pack[]> => {
  const prisma = new PrismaClient();

  const packs = await prisma.pack.findMany();

  await prisma.$disconnect();

  return packs;
};

export const getPack = async (id: string): Promise<Pack> => {
  const prisma = new PrismaClient();

  const pack = await prisma.pack.findUnique({ where: { id } });

  prisma.$disconnect();

  return pack;
};

export const createPack = async (pack: Pack): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.pack.create({
    data: pack,
  });

  await prisma.$disconnect();
};

export const updatePack = async (id: string, pack: Pack): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.pack.update({
    where: { id },
    data: pack,
  });

  await prisma.$disconnect();
};

export const deletePack = async (id: string): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.pack.delete({ where: { id } });

  prisma.$disconnect();
};
