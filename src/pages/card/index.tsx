import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import useCards from "../../hooks/useCards";

const Packs = () => {
  const [cards, setCards] = useCards();

  const cardEndpoint = `/api/card/`;

  const handleDelete = async (event: any, cardId: string) => {
    event.stopPropagation();
    event.preventDefault();

    console.log("delete", cardId);

    const res = await fetch(`${cardEndpoint}/${cardId}`, {
      method: "DELETE",
    });

    await res.json();

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

        <List>
          {!!cards && cards.length
            ? cards.map((card) => {
                return (
                  <Link href={`/card/${card.id}`} passHref key={card.id}>
                    <ListItem button key={card.id} component="a">
                      <ListItemText primary={`${card.title}`} />
                      <Button onClick={(event) => handleDelete(event, card.id)}>
                        Delete
                      </Button>
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
