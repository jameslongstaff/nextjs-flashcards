import { NextApiRequest, NextApiResponse } from "next";
import { getCards } from "../../../functions/persistent/card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const card = await getCards();

    res.status(200).json({ status: "success", data: card });
  }
}
