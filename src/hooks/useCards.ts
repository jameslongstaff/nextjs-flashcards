import React, { useState, useEffect } from "react";
import fetchToJson from "../functions/fetchToJSON";

function useCards(opts?: any) {
  const cardEndpoint = `/api/card`;
  const [cards, setCards] = useState(undefined);
  const [options, setOptions] = useState(opts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      let queryString = "";

      const buildQueryString = (items: any[], key: string) => {
        return items.reduce((acc, item) => {
          return `${acc}&${key}=${item.id}`;
        }, "?");
      };

      if (options?.tags.length) {
        queryString += buildQueryString(options.tags, "tags");
      }

      const response = await fetchToJson(
        `${cardEndpoint}${queryString}`,
        fetchParams
      );

      setCards(response.data);
    };

    fetchData();
  }, [options]);

  return [cards, setCards, setOptions];
}

export default useCards;
