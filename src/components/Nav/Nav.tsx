import { ListItemText, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <MenuList>
        <Link href={`/card`}>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Cards</ListItemText>
          </MenuItem>
        </Link>

        <Link href={`/tag`}>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Tags</ListItemText>
          </MenuItem>
        </Link>

        <Link href={`/preview`}>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Preview</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </nav>
  );
};

export default Nav;
