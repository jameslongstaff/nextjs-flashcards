import { Pack } from "@prisma/client";
import getPrismaClient from "../../utils/getPrismaClient";

export const getPacks = async (): Promise<Pack[]> => {
  const prisma = getPrismaClient();

  return prisma.pack.findMany();
};

export const getPack = async (id: string): Promise<Pack> => {
  const prisma = getPrismaClient();

  return prisma.pack.findUnique({ where: { id } });
};

export const createPack = async (pack: Pack): Promise<Pack> => {
  const prisma = getPrismaClient();

  return prisma.pack.create({
    data: pack,
  });
};

export const updatePack = async (id: string, pack: Pack): Promise<Pack> => {
  const prisma = getPrismaClient();

  return prisma.pack.update({
    where: { id },
    data: pack,
  });
};

export const deletePack = async (id: string): Promise<Pack> => {
  const prisma = getPrismaClient();

  return prisma.pack.delete({ where: { id } });
};
