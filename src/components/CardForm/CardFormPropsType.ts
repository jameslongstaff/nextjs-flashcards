import { Tag } from "@prisma/client";
import { CardWithTags } from "../../types/CardWithTags";

type CardFormPropsType = {
  card: CardWithTags;
  tags: Tag[];
  handleSubmit: (event: React.FormEvent, selectedTags: Tag[]) => void;
};

export default CardFormPropsType;
