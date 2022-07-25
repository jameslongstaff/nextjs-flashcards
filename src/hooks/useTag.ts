import { Tag } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { tagEndpoint } from "../utils/endpoints";
import fetchToJson from "../utils/fetchToJson";

function useTag(
  tagId: string
): [tag: Tag, setTag: React.Dispatch<any>, loaded: boolean] {
  const [tag, setTag] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const response = await fetchToJson(tagEndpoint(tagId), fetchParams);

      setTag(response.data);
    };
    fetchData();
  }, []);

  return [tag, setTag, loaded];
}

export default useTag;
