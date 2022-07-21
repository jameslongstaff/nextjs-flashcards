import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import { createCard, getCard } from "../../../../functions/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const pack = await getCard(id as string);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const card = {
      id: v4(),
      title: body.title,
      content: body.content,
      packId: id as string,
    };

    await createCard(card);

    res.status(200).json({ status: "success", data: card });
  }
}
