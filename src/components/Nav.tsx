import { ListItemText, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <MenuList>
        {/* <Link href="/pack" passHref>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Packs</ListItemText>
          </MenuItem>
        </Link>

        <Link href={`/pack/create`}>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Create pack</ListItemText>
          </MenuItem>
        </Link> */}

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
      </MenuList>
    </nav>
  );
};

export default Nav;
