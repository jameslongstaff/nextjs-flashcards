import React, { useState, useEffect } from "react";

function useTags() {
  const [tags, setTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const tagsEndpoint = `/api/tag`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const tagsRes = await fetch(tagsEndpoint, fetchParams);

      const tagsResponse = await tagsRes.json();

      setTags(tagsResponse.data);
      setLoaded(true);
    };

    fetchData();
  }, []);

  return [tags, loaded];
}

export default useTags;
