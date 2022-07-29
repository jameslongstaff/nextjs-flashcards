import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import { getCards, createCard } from "../../../utils/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const card = await getCards({
      tags: req.query?.tags,
    });

    res.status(200).json({ status: "success", data: card });
  }

  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const card = {
      id: v4(),
      title: body.title,
      content: body.content,
      tags: body.tags,
    };

    await createCard(card);

    res.status(200).json({ status: "success", data: card });
  }
}
