import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Packs = () => {
  const [packs, setPacks] = useState([]);

  const packEndpoint = `/api/pack/`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const packRes = await fetch(packEndpoint, fetchParams);

      const packResponse = await packRes.json();

      setPacks(packResponse.data.packs);
    };

    fetchData();
  }, []);

  return (
    <>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" component="h2">
          Packs
        </Typography>

        {!!packs && packs.length
          ? packs.map((pack) => {
              return (
                <List>
                  <Link href={`/pack/${pack.id}`} passHref>
                    <ListItem button key={pack.id} component="a">
                      <ListItemText primary={`${pack.title}`} />
                    </ListItem>
                  </Link>
                </List>
              );
            })
          : null}
      </Paper>
    </>
  );
};

export default Packs;
