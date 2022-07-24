import { Button, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Listing from "../../components/Listing";
import fetchToJson from "../../functions/fetchToJSON";
import toListing from "../../functions/mapper/cardToListing";
import useCards from "../../hooks/useCards";

const Cards = () => {
  const [cards, setCards] = useCards();

  const cardEndpoint = `/api/card/`;

  const handleDelete = async (event: any, cardId: string) => {
    event.stopPropagation();
    event.preventDefault();

    const params = {
      method: "DELETE",
    };

    await fetchToJson(`${cardEndpoint}/${cardId}`, params);

    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" component="h2">
          Cards
        </Typography>

        <Link href="card/create" passHref>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Create new card
          </Button>
        </Link>

        <TextField
          name="filter"
          id="filter"
          label="Filter"
          variant="outlined"
          size="small"
          sx={{ my: 2 }}
          fullWidth
        />

        {!!cards && cards.length && (
          <Listing items={cards.map(toListing)} deleteHandler={handleDelete} />
        )}
      </Paper>
    </>
  );
};

export default Cards;
