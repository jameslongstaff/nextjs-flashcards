import { NextApiRequest, NextApiResponse } from "next";
import {
  getCard,
  updateCard,
  deleteCard,
} from "../../../utils/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cardId } = req.query;

  if (req.method === "GET") {
    const card = await getCard(cardId as string);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const card = {
      title: body.title,
      content: body.content,
      tags: {
        set: body.tags.map((tagId) => {
          return {
            id: tagId,
          };
        }),
      },
    };

    const cardRes = await updateCard(cardId as string, card);

    res.status(200).json({ status: "success", data: cardRes });
  }

  if (req.method === "DELETE") {
    await deleteCard(cardId as string);
    res.status(200).json({ status: "success" });
  }
}
