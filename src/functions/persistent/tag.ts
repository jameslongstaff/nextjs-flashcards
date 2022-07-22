import { Tag, PrismaClient } from "@prisma/client";

export const getTag = async (id: string): Promise<Tag> => {
  const prisma = new PrismaClient();

  const tag = await prisma.tag.findUnique({ where: { id } });

  prisma.$disconnect();

  return tag;
};

export const getTags = async (): Promise<Tag[]> => {
  const prisma = new PrismaClient();

  const tags = await prisma.tag.findMany();

  prisma.$disconnect;

  return tags;
};

export const createTag = async (tag: Tag): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.tag.create({
    data: tag,
  });

  prisma.$disconnect();
};

export const updateTag = async (id: string, tag: Tag): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.tag.update({
    where: { id },
    data: tag,
  });

  await prisma.$disconnect();
};

export const deleteTag = async (id: string): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.tag.delete({ where: { id } });

  prisma.$disconnect();
};
