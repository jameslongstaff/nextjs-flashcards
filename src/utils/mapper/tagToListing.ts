import { Tag } from "@prisma/client";
import ListingItemType from "../../components/Listing/ListingItemType";

const tagToListing = (tag: Tag): ListingItemType => ({
  id: tag.id,
  text: tag.title,
  href: `/tag/${tag.id}`,
});

export default tagToListing;
