import { Button, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export type ListingItemType = {
  id: string;
  title: string;
};

const Listing = (props: any) => {
  const { items } = props;

  return (
    <List>
      {!!items && items.length
        ? items.map((item) => {
            return (
              <Link href={item.href} passHref key={item.id}>
                <ListItem button key={item.id} component="a">
                  <ListItemText primary={`${item.text}`} />
                  {props.deleteHandler && (
                    <Button
                      onClick={(event) => props.deleteHandler(event, item.id)}
                    >
                      Delete
                    </Button>
                  )}
                </ListItem>
              </Link>
            );
          })
        : null}
    </List>
  );
};

export default Listing;
