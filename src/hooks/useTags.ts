import { Tag } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { tagEndpoint } from "../utils/endpoints";
import fetchToJson from "../utils/fetchToJson";

function useTags(): [tags: Tag[], loaded: boolean] {
  const [tags, setTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const response = await fetchToJson(tagEndpoint(), fetchParams);

      setTags(response.data);
      setLoaded(true);
    };

    fetchData();
  }, []);

  return [tags, loaded];
}

export default useTags;
