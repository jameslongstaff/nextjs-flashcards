import { Card, PrismaClient } from "@prisma/client";

export const getCard = async (id: string): Promise<Card> => {
  const prisma = new PrismaClient();

  const card = await prisma.card.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });

  prisma.$disconnect();

  return card;
};

export const getCards = async (): Promise<Card[]> => {
  const prisma = new PrismaClient();

  const cards = await prisma.card.findMany();

  prisma.$disconnect;

  return cards;
};

// export const getCardsByPackId = async (packId: string) => {
//   const prisma = new PrismaClient();

//   const cards = await prisma.card.findMany({ where: { packId } });

//   prisma.$disconnect;

//   return cards;
// };

export const createCard = async (card: Card): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.card.create({
    data: card,
  });

  prisma.$disconnect();
};

export const updateCard = async (id: string, card: any): Promise<Card> => {
  const prisma = new PrismaClient();

  const response = await prisma.card.update({
    where: { id },
    data: card,
    include: {
      tags: true,
    },
  });

  await prisma.$disconnect();

  return response;
};

export const deleteCard = async (id: string): Promise<void> => {
  const prisma = new PrismaClient();

  await prisma.card.delete({ where: { id } });

  prisma.$disconnect();
};
