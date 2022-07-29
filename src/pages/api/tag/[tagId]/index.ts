import { NextApiRequest, NextApiResponse } from "next";
import { deleteTag, getTag, updateTag } from "../../../../utils/persistent/tag";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tagId } = req.query;

  if (req.method === "GET") {
    const tag = await getTag(tagId as string);

    res.status(200).json({ status: "success", data: tag });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const tag = { ...body };

    await updateTag(tagId as string, tag);

    res.status(200).json({ status: "success", data: tag });
  }

  if (req.method === "DELETE") {
    await deleteTag(tagId as string);
    res.status(200).json({ status: "success" });
  }
}
