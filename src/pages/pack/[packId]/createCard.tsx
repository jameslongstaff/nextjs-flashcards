import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Pack = () => {
  const router = useRouter();

  const packEndpoint = `/api/pack/${router.query.packId}`;
  const packCardCreateEndpoint = `${packEndpoint}/card`;

  const handleCreateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    const res = await fetch(packCardCreateEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    await res.json();
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="h2">
          Create card
        </Typography>

        <form
          method="POST"
          action={packCardCreateEndpoint}
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

          <TextField
            name="content"
            id="content"
            label="content"
            variant="outlined"
            size="small"
            fullWidth
          />

          <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
            Create new card
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Pack;
