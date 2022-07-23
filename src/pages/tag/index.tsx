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
import Listing from "../../components/Listing";
import mapTagsToListings from "../../functions/mapper/mapTagsToListings";

const Packs = () => {
  const [tags, setTags] = useState([]);

  const tagEndpoint = `/api/tag/`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchParams = {
        method: "GET",
      };

      const tagRes = await fetch(tagEndpoint, fetchParams);

      const tagResponse = await tagRes.json();

      setTags(tagResponse.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" component="h2">
          Tags
        </Typography>

        <Link href="tag/create" passHref>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Create new tag
          </Button>
        </Link>

        {!!tags && tags.length && <Listing items={mapTagsToListings(tags)} />}
      </Paper>
    </>
  );
};

export default Packs;
