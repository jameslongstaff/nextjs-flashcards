import { Card, Tag } from "@prisma/client";

type CardWithTags = Card & { tags: Tag[] };

type CardFormPropsType = {
  card: CardWithTags;
  tags: Tag[];
  handleSubmit: (event: React.FormEvent, selectedTags: Tag[]) => void;
};

export default CardFormPropsType;
