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
  const { id } = req.query;

  if (req.method === "GET") {
    const card = await getCard(id as string);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const card = { ...body, id };

    await updateCard(id as string, card);

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "DELETE") {
    await deleteCard(id as string);
    res.status(200).json({ status: "success" });
  }
}
