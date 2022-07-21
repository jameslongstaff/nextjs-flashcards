import { NextApiRequest, NextApiResponse } from "next";
import {
  deleteCard,
  getCard,
  updateCard,
} from "../../../functions/persistent/card";

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

    const card = { ...body, cardId };

    await updateCard(cardId as string, card);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "DELETE") {
    await deleteCard(cardId as string);
    res.status(200).json({ status: "success" });
  }
}
