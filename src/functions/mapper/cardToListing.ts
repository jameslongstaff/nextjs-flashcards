import { Card } from "@prisma/client";

const cardToListing = (card: Card) => ({
  id: card.id,
  text: card.title,
  href: `/card/${card.id}`,
});

export default cardToListing;
