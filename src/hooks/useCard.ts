import React, { useState, useEffect } from "react";

function useCard(cardId) {
  const cardEndpoint = `/api/card/${cardId}`;
  const [card, setCard] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (cardId) {
        const fetchParams = {
          method: "GET",
        };

        const cardRes = await fetch(cardEndpoint, fetchParams);

        const cardResponse = await cardRes.json();

        setCard(cardResponse.data);
      }
    };

    fetchData();
  }, [cardId]);

  return [card, setCard];
}

export default useCard;
