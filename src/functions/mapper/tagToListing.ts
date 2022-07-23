import { Tag } from "@prisma/client";

const tagToListing = (tag: Tag) => ({
  id: tag.id,
  text: tag.title,
  href: `/tag/${tag.id}`,
});

export default tagToListing;
