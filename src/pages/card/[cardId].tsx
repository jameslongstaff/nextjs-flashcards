import React from "react";
import Chip from "@mui/material/Chip";
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

const Card = () => {
  const router = useRouter();
  const [card, setCard] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const cardEndpoint = `/api/card/${router.query.cardId}`;
  const tagsEndpoint = `/api/tag`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.cardId) {
        const fetchParams = {
          method: "GET",
        };

        const cardRes = await fetch(cardEndpoint, fetchParams);

        const cardResponse = await cardRes.json();

        setCard(cardResponse.data);
        setSelectedTags(cardResponse.data.tags);
      }
    };

    fetchData();
  }, [router.query.cardId]);

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.cardId) {
        const fetchParams = {
          method: "GET",
        };

        const tagsRes = await fetch(tagsEndpoint, fetchParams);

        const tagsResponse = await tagsRes.json();

        setTags(tagsResponse.data);
      }
    };

    fetchData();
  }, [router.query.cardId]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      tags: selectedTags.map((tag) => tag.id),
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

          <Divider sx={{ my: 2 }} light />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              px: 0,
            }}
            component="ul"
          >
            <Autocomplete
              value={selectedTags}
              onChange={(event, value) => setSelectedTags(value)}
              multiple
              options={tags}
              sx={{ my: 2 }}
              fullWidth
              // defaultValue={card.tags}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  id="tags"
                  name="tags"
                  {...params}
                  label="Add a tag"
                  size="small"
                  variant="outlined"
                />
              )}
            />
          </Box>

          <Divider sx={{ my: 2 }} light />

          <Button type="submit" variant="outlined">
            Update card
          </Button>
        </form>
      ) : null}
    </Paper>
  );
};

export default Card;
