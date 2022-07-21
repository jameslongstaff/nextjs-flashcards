import { ListItemText, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <MenuList>
        <Link href="/pack" passHref>
          <MenuItem LinkComponent={"a"}>
            <ListItemText>Packs</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </nav>
  );
};

export default Nav;
