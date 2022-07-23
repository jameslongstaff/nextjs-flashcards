import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useTags from "../../hooks/useTags";
import useCard from "../../hooks/useCard";
import { cardEndpoint } from "../../functions/endpoints";
import CardForm from "../../components/CardForm";

const Card = () => {
  const router = useRouter();
  const [tags, tagsLoaded] = useTags();
  const [card, setCard, cardLoaded] = useCard(router.query.cardId);

  const handleUpdateSubmit = async (event: any, selectedTags: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      tags: selectedTags.map((tag) => tag.id),
    };

    const res = await fetch(cardEndpoint(router.query.cardId as string), {
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

      {tagsLoaded && cardLoaded && (
        <CardForm card={card} handleSubmit={handleUpdateSubmit} tags={tags} />
      )}
    </Paper>
  );
};

export default Card;
