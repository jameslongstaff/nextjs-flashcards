import { Tag } from "@prisma/client";
import { CardWithTags } from "../../types/CardWithTags";

type CardFormPropsType = {
  tags: Tag[];
  handleSubmit: (event: React.FormEvent, selectedTags: Tag[]) => void;
  card?: CardWithTags;
};

export default CardFormPropsType;
