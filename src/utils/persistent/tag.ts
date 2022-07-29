import { Tag } from "@prisma/client";
import getPrismaClient from "../../utils/getPrismaClient";

export const getTag = async (id: string): Promise<Tag> => {
  const prisma = getPrismaClient();

  return prisma.tag.findUnique({ where: { id } });
};

export const getTags = async (): Promise<Tag[]> => {
  const prisma = getPrismaClient();

  return prisma.tag.findMany();
};

export const createTag = async (tag: Tag): Promise<Tag> => {
  const prisma = getPrismaClient();

  return prisma.tag.create({
    data: tag,
  });
};

export const updateTag = async (id: string, tag: Tag): Promise<Tag> => {
  const prisma = getPrismaClient();

  return prisma.tag.update({
    where: { id },
    data: tag,
  });
};

export const deleteTag = async (id: string): Promise<Tag> => {
  const prisma = getPrismaClient();

  return prisma.tag.delete({ where: { id } });
};
