import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Packs = () => {
  const [cards, setCards] = useState([]);

  const cardEndpoint = `/api/card/`;

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

  return (
    <>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" component="h2">
          Cards
        </Typography>
        <List>
          {!!cards && cards.length
            ? cards.map((card) => {
                return (
                  <Link href={`/card/${card.id}`} passHref key={card.id}>
                    <ListItem button key={card.id} component="a">
                      <ListItemText primary={`${card.title}`} />
                    </ListItem>
                  </Link>
                );
              })
            : null}
        </List>
      </Paper>
    </>
  );
};

export default Packs;
