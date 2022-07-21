import {
  Box,
  Button,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
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
  const packCardCreateEndpoint = `${packEndpoint}/card`;
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

  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    const res = await fetch(packCardCreateEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setCards([...cards, { ...response.data }]);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="h2">
          Pack - {pack?.title}
        </Typography>
        <form
          method="POST"
          action={packCardCreateEndpoint}
          onSubmit={(event) => handleCreateSubmit(event)}
        >
          <FormControl margin="normal" fullWidth>
            <TextField
              name="title"
              id="title"
              label="title"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>

          <TextField
            name="content"
            id="content"
            label="content"
            variant="outlined"
            size="small"
            fullWidth
          />

          <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
            Create new card
          </Button>
        </form>
      </Box>

      {!!pack && cards.length
        ? cards.map((card) => {
            return (
              <List>
                <Link href={`/card/${card.id}`} passHref>
                  <ListItem button key={card.id} component="a">
                    <ListItemText
                      primary={`${card.id} - ${card.title} - ${card.content}`}
                    />
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
