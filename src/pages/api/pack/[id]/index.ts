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
  const { id } = req.query;

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const pack = { ...body, id };

    await updatePack(id as string, pack);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "GET") {
    const pack = await getPack(id as string);

    res.status(200).json({ status: "success", data: pack });
  }

  if (req.method === "DELETE") {
    await deletePack(id as string);
    res.status(200).json({ status: "success" });
  }
}
