import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const CardForm = (props: any) => {
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (props.card) {
      setSelectedTags(props.card.tags);
    }
  }, []);

  return (
    <form onSubmit={(event) => props.handleSubmit(event, selectedTags)}>
      <FormControl margin="normal" fullWidth>
        <TextField
          name="title"
          id="title"
          label="title"
          variant="outlined"
          size="small"
          fullWidth
          defaultValue={props?.card?.title}
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
          rows={4}
          multiline
          defaultValue={props?.card?.content}
        />
      </FormControl>

      <Divider sx={{ my: 2 }} light />

      {props.tags && (
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
            options={props.tags}
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
      )}

      <Divider sx={{ my: 2 }} light />

      <Button type="submit" variant="outlined">
        {props?.card ? "Update" : "Create"} card
      </Button>
    </form>
  );
};

export default CardForm;
