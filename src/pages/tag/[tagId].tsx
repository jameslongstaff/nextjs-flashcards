import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import useTag from "../../hooks/useTag";
import { tagEndpoint } from "../../utils/endpoints";

const Tag = () => {
  const router = useRouter();
  const [tag, setTag] = useTag(router.query.tagId as string);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(tagEndpoint(router.query.tagId as string), {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setTag(response.data);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2">
        Update tag
      </Typography>
      {!!tag ? (
        <form
          method="PUT"
          action={tagEndpoint(router.query.tagId as string)}
          onSubmit={(event) => handleUpdateSubmit(event)}
        >
          <FormControl margin="normal" fullWidth>
            <TextField
              name="title"
              id="title"
              label="title"
              variant="outlined"
              size="small"
              fullWidth
              defaultValue={tag.title}
            />
          </FormControl>

          <Button type="submit" variant="outlined">
            Update tag
          </Button>
        </form>
      ) : null}
    </Paper>
  );
};

export default Tag;
