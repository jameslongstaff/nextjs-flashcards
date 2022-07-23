import React, { useState, useEffect } from "react";

function useTags() {
  const [tags, setTags] = useState([]);
  const tagsEndpoint = `/api/tag`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const tagsRes = await fetch(tagsEndpoint, fetchParams);

      const tagsResponse = await tagsRes.json();

      setTags(tagsResponse.data);
    };

    fetchData();
  }, []);

  return tags;
}

export default useTags;
