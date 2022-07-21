import { Card, PrismaClient } from "@prisma/client";

export const getCard = async (id: string): Promise<Card> => {
  const prisma = new PrismaClient();

  const card = await prisma.card.findUnique({ where: { id } });

  prisma.$disconnect();

  return card;
};

export const createCard = async (card: Card): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.card.create({
    data: card,
  });

  prisma.$disconnect();
};

export const getCardsByPackId = async (packId: string) => {
  const prisma = new PrismaClient();

  const cards = await prisma.card.findMany({ where: { packId } });

  prisma.$disconnect;

  return cards;
};

export const updateCard = async (id: string, card: Card): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.card.update({
    where: { id },
    data: card,
  });

  await prisma.$disconnect();
};

export const deleteCard = async (id: string): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.card.delete({ where: { id } });

  prisma.$disconnect();
};
