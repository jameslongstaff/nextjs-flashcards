import { NextApiRequest, NextApiResponse } from "next";
import { getCardsByPackId } from "../../../../functions/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { packId } = req.query;

  if (req.method === "GET") {
    const cards = await getCardsByPackId(packId as string);

    res.status(200).json({ status: "success", data: cards });
  }
}
