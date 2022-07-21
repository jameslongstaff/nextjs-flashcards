import { v4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { createPack, getPacks } from "../../../functions/persistent/pack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const pack = {
      id: v4(),
      title: body.title,
    };

    await createPack(pack);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "GET") {
    const packs = await getPacks();

    res.status(200).json({ data: { packs }, status: "success" });
  }
}
