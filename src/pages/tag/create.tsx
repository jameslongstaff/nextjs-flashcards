import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { tagEndpoint } from "../../utils/endpoints";

const CreateTag = () => {
  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(tagEndpoint(), {
      method: "POST",
      body: JSON.stringify(data),
    });

    await res.json();
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2">
        Create Tag
      </Typography>

      <form
        method="PUT"
        action={tagEndpoint()}
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
        <Button type="submit" variant="outlined" sx={{ my: 2 }}>
          Create tag
        </Button>
      </form>
    </Paper>
  );
};

export default CreateTag;
