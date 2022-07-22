import { Button, FormControl, Paper, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const Pack = () => {
  const router = useRouter();
  const [pack, setPack] = useState(undefined);

  const packEndpoint = `/api/pack/${router.query.packId}`;
  const packCardsEndpoint = `${packEndpoint}/cards`;

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.packId) {
        const fetchParams = {
          method: "Get",
        };

        const packRes = await fetch(packEndpoint, fetchParams);
        const packCardsRes = await fetch(packCardsEndpoint, fetchParams);

        const packResponse = await packRes.json();
        const packCardsResponse = await packCardsRes.json();

        setPack(packResponse.data);
      }
    };

    fetchData();
  }, [router.query.packId]);

  const handleUpdateSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
    };

    const res = await fetch(packEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    setPack(response.data);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      {!!pack ? (
        <form
          method="PUT"
          action={packEndpoint}
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
              defaultValue={pack.title}
            />
          </FormControl>
          <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
            Create new pack
          </Button>
        </form>
      ) : null}
    </Paper>
  );
};

export default Pack;
