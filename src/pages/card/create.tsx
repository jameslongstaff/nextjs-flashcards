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

const Card = () => {
  const router = useRouter();
  const tags = useTags();
  const [selectedTags, setSelectedTags] = useState([]);

  const cardEndpoint = `/api/card/${router.query.cardId}`;

  const handleCreateSubmit = async (event: any) => {
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

    await res.json();
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2">
        Create Card
      </Typography>
      <form onSubmit={(event) => handleCreateSubmit(event)}>
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
          Create card
        </Button>
      </form>
    </Paper>
  );
};

export default Card;
