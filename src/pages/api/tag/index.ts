import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import {
  getTags,
  updateTag,
  createTag,
  deleteTag,
} from "../../../utils/persistent/tag";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tagId } = req.query;

  if (req.method === "GET") {
    const tags = await getTags();

    res.status(200).json({ status: "success", data: tags });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);

    const tag = { ...body };

    await updateTag(tagId as string, tag);

    res.status(200).json({ status: "success", data: tag });
  }

  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const tag = {
      id: v4(),
      title: body.title,
    };

    await createTag(tag);

    res.status(200).json({ status: "success", data: tag });
  }

  if (req.method === "DELETE") {
    await deleteTag(tagId as string);
    res.status(200).json({ status: "success" });
  }
}
