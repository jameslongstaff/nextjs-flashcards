import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import { createCard, getCard } from "../../../../functions/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { packId } = req.query;

  if (req.method === "GET") {
    const pack = await getCard(packId as string);

    res.status(200).json({ status: "success", data: pack });
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
}
