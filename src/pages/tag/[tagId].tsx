import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import fetchToJson from "../../utils/fetchToJson";

const Tag = () => {
  const router = useRouter();
  const [tag, setTag] = useState(undefined);

  const tagEndpoint = `/api/tag/${router.query.tagId}`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.tagId) {
        const fetchParams = {
          method: "GET",
        };

        const response = await fetchToJson(tagEndpoint, fetchParams);

        setTag(response.data);
      }
    };
    fetchData();
  }, [router.query.tagId]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(tagEndpoint, {
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
          action={tagEndpoint}
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
