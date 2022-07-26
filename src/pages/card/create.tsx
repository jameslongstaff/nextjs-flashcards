import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import useTags from "../../hooks/useTags";
import CardForm from "../../components/CardForm/CardForm";
import { cardEndpoint } from "../../utils/endpoints";

const Card = () => {
  const router = useRouter();
  const [tags, tagsLoaded] = useTags();
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCreateSubmit = async (event: any) => {
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

    await res.json();
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2">
        Create Card
      </Typography>

      {tagsLoaded && <CardForm handleSubmit={handleCreateSubmit} tags={tags} />}
    </Paper>
  );
};

export default Card;
