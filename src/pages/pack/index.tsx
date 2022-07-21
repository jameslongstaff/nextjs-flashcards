import { List, ListItem, ListItemText } from "@mui/material";
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
    <div>
      {!!packs && packs.length
        ? packs.map((pack) => {
            return (
              <List>
                <ListItem button key={pack.id}>
                  <Link href={`/pack/${pack.id}`}>
                    <ListItemText primary={`${pack.id} - ${pack.title}`} />
                  </Link>
                </ListItem>
              </List>
            );
          })
        : null}
    </div>
  );
};

export default Packs;
