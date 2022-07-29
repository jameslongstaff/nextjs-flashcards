import { Card } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { CardWithTags } from "../types/CardWithTags";
import { cardEndpoint } from "../utils/endpoints";
import fetchToJson from "../utils/fetchToJson";

type useCardReturnType = [
  card: CardWithTags,
  setCard: React.Dispatch<Card>,
  loaded: boolean
];

function useCard(cardId: string): useCardReturnType {
  const [card, setCard] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (cardId) {
        const fetchParams = {
          method: "GET",
        };

        const response = await fetchToJson(cardEndpoint(cardId), fetchParams);

        setCard(response.data);
        setLoaded(true);
      }
    };

    fetchData();
  }, [cardId]);

  return [card, setCard, loaded];
}

export default useCard;
