import { NextApiRequest, NextApiResponse } from "next";
import {
  deletePack,
  getPack,
  updatePack,
} from "../../../../functions/persistent/pack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { packId } = req.query;

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const pack = { ...body, packId };

    await updatePack(packId as string, pack);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "GET") {
    const pack = await getPack(packId as string);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "DELETE") {
    await deletePack(packId as string);
    res.status(200).json({ status: "success" });
  }
}
