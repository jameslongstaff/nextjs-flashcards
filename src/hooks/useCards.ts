import React, { useState, useEffect } from "react";

function useCards() {
  const cardEndpoint = `/api/card`;
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const cardRes = await fetch(cardEndpoint, fetchParams);

      const cardResponse = await cardRes.json();

      setCards(cardResponse.data);
    };

    fetchData();
  }, []);

  return [cards, setCards];
}

export default useCards;
