import { Tag } from "@prisma/client";
import React, { useState, useEffect } from "react";
import fetchToJson from "../utils/fetchToJson";

function useTags(): [tags: Tag[], loaded: boolean] {
  const [tags, setTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const tagsEndpoint = `/api/tag`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const response = await fetchToJson(tagsEndpoint, fetchParams);

      setTags(response.data);
      setLoaded(true);
    };

    fetchData();
  }, []);

  return [tags, loaded];
}

export default useTags;
