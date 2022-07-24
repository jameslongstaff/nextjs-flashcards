import React, { useState, useEffect } from "react";
import fetchToJson from "../functions/fetchToJSON";

function useTags() {
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
