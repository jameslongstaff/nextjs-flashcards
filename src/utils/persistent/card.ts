import { Card, Prisma } from "@prisma/client";
import getPrismaClient from "../../utils/getPrismaClient";

export const getCard = async (id: string): Promise<Card> => {
  const prisma = getPrismaClient();

  return prisma.card.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });
};

export const getCards = async (options?: any): Promise<Card[]> => {
  const prisma = getPrismaClient();

  let args: Prisma.CardFindManyArgs = undefined;

  if (options?.tags) {
    args = {
      where: {
        tags: {
          some: {
            id: {
              in: options.tags,
            },
          },
        },
      },
    };
  }

  return prisma.card.findMany(args);
};

export const createCard = async (card: Card): Promise<Card> => {
  const prisma = getPrismaClient();

  return prisma.card.create({
    data: card,
  });
};

export const updateCard = async (id: string, card: any): Promise<Card> => {
  const prisma = getPrismaClient();

  return prisma.card.update({
    where: { id },
    data: card,
    include: {
      tags: true,
    },
  });
};

export const deleteCard = async (id: string): Promise<Card> => {
  const prisma = getPrismaClient();

  return prisma.card.delete({ where: { id } });
};
