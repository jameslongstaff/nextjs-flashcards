import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Card = () => {
  const router = useRouter();
  const [card, setCard] = useState(undefined);

  const cardEndpoint = `/api/card/${router.query.cardId}`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.cardId) {
        const fetchParams = {
          method: "GET",
        };

        const packCardRes = await fetch(cardEndpoint, fetchParams);

        const packCardResponse = await packCardRes.json();

        setCard(packCardResponse.data);
      }
    };

    fetchData();
  }, [router.query.cardId]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      packId: card.packId,
    };

    const res = await fetch(cardEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setCard(response.data);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2">
        Update card
      </Typography>
      {!!card ? (
        <form onSubmit={(event) => handleUpdateSubmit(event)}>
          <FormControl margin="normal" fullWidth>
            <TextField
              name="title"
              id="title"
              label="title"
              variant="outlined"
              size="small"
              fullWidth
              defaultValue={card.title}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <TextField
              name="content"
              id="content"
              label="content"
              variant="outlined"
              size="small"
              fullWidth
              rows={3}
              multiline
              defaultValue={card.content}
            />
          </FormControl>

          <Button type="submit" variant="outlined">
            Update card
          </Button>
        </form>
      ) : null}
    </Paper>
  );
};

export default Card;
