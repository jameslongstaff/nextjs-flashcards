import React, { useState, useEffect } from "react";
import fetchToJson from "../utils/fetchToJson";

function useCard(cardId) {
  const cardEndpoint = `/api/card/${cardId}`;
  const [card, setCard] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (cardId) {
        const fetchParams = {
          method: "GET",
        };

        const response = await fetchToJson(cardEndpoint, fetchParams);

        setCard(response.data);
        setLoaded(true);
      }
    };

    fetchData();
  }, [cardId]);

  return [card, setCard, loaded];
}

export default useCard;
