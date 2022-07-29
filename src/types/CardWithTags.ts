import { Card, Tag } from "@prisma/client";

export type CardWithTags = Card & { tags: Tag[] };
