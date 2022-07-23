import { Tag } from "@prisma/client";

const mapTagsToListings = (tags: Tag[]) => {
  return tags.map((tag) => {
    return {
      id: tag.id,
      text: tag.title,
      href: `/tag/${tag.id}`,
    };
  });
};

export default mapTagsToListings;
