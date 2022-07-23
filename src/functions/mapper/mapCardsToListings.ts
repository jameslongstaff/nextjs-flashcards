import { Card } from "@prisma/client";

const mapCardsToListings = (cards: Card[]) => {
  return cards.map((card) => {
    return {
      id: card.id,
      text: card.title,
      href: `/card/${card.id}`,
    };
  });
};

export default mapCardsToListings;
