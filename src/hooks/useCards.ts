import React, { useState, useEffect } from "react";
import { CardWithTags } from "../types/CardWithTags";
import fetchToJson from "../utils/fetchToJson";

type useCardsReturnType = [
  cards: CardWithTags[],
  setCards: React.Dispatch<any>,
  setOptions: React.Dispatch<any>,
  setCards: React.Dispatch<any>
];

const buildQueryString = (items: { id: string }[], key: string): string => {
  return items.reduce((acc, item) => {
    return `${acc}&${key}=${item.id}`;
  }, "");
};

function useCards(opts?: any): useCardsReturnType {
  const cardEndpoint = `/api/card`;
  const [cards, setCards] = useState(undefined);
  const [options, setOptions] = useState(opts);

  // useMemo?
  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      let queryString = "";

      if (options?.tags.length) {
        queryString += buildQueryString(options.tags, "tags");
      }

      const response = await fetchToJson(
        `${cardEndpoint}${queryString ? `?${queryString}` : ""}`,
        fetchParams
      );

      setCards(response.data);
    };

    fetchData();
  }, [options]);

  return [cards, setCards, setOptions, setCards];
}

export default useCards;
