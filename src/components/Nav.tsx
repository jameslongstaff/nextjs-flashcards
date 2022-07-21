import { ListItemText, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <Link href="/pack">
            <ListItemText>Packs</ListItemText>
          </Link>
        </MenuItem>
      </MenuList>
    </nav>
  );
};

export default Nav;
