import React from "react";
import { useRouter } from "next/router";
import { Paper, Typography } from "@mui/material";
import useTags from "../../hooks/useTags";
import useCard from "../../hooks/useCard";
import CardForm from "../../components/CardForm/CardForm";
import { cardEndpoint } from "../../utils/endpoints";
import fetchToJson from "../../utils/fetchToJson";

const Card = () => {
  const router = useRouter();
  const [tags, tagsLoaded] = useTags();
  const [card, setCard, cardLoaded] = useCard(router.query.cardId as string);

  const handleUpdateSubmit = async (event: any, selectedTags: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      tags: selectedTags.map((tag) => tag.id),
    };

    const params = {
      method: "PUT",
      body: JSON.stringify(data),
    };

    const response = await fetchToJson(
      cardEndpoint(router.query.cardId as string),
      params
    );

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
