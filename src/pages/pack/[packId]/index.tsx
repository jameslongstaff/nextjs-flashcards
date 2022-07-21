import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const Pack = () => {
  const router = useRouter();
  const [pack, setPack] = useState(undefined);
  const [cards, setCards] = useState([]);

  const packEndpoint = `/api/pack/${router.query.packId}`;
  const packCardsEndpoint = `${packEndpoint}/cards`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.packId) {
        const fetchParams = {
          method: "Get",
        };

        const packRes = await fetch(packEndpoint, fetchParams);
        const packCardsRes = await fetch(packCardsEndpoint, fetchParams);

        const packResponse = await packRes.json();
        const packCardsResponse = await packCardsRes.json();

        setPack(packResponse.data);
        setCards(packCardsResponse.data);
      }
    };

    fetchData();
  }, [router.query.packId]);

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="h2">
          Pack - {pack?.title}
        </Typography>

        <Link href={`/pack/${router.query?.packId}/createCard`} passHref>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Add card to pack
          </Button>
        </Link>
      </Box>

      {!!pack && cards.length
        ? cards.map((card) => {
            return (
              <List>
                <Link href={`/card/${card.id}`} passHref>
                  <ListItem button key={card.id} component="a">
                    <ListItemText primary={`${card.title} - ${card.content}`} />
                  </ListItem>
                </Link>
              </List>
            );
          })
        : null}
    </Paper>
  );
};

export default Pack;
