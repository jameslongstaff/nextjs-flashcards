import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import {
  createCard,
  getCard,
  updateCard,
} from "../../../../functions/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { packId } = req.query;

  if (req.method === "GET") {
    const card = await getCard(packId as string);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const card = {
      id: v4(),
      title: body.title,
      content: body.content,
      packId: packId as string,
    };

    await createCard(card);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const card = {
      id: body.id,
      title: body.title,
      content: body.content,
      packId: packId as string,
    };

    await updateCard(packId as string, card);

    res.status(200).json({ status: "success", data: card });
  }
}
