import { Card } from "@prisma/client";
import ListingItemType from "../../components/Listing/ListingItemType";

const cardToListing = (card: Card): ListingItemType => ({
  id: card.id,
  text: card.title,
  href: `/card/${card.id}`,
});

export default cardToListing;
