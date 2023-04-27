import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const menuObject = [
  {
    name: "Sčítání",
    elements: [
      { text: "▯▯+▯▯", url: "p22" },
      { text: "▯▯▯+▯▯▯", url: "p33" },
      { text: "▯▯▯▯+▯▯▯▯", url: "p44" },
    ],
    icon: <AddIcon />,
    open: false,
  },
  {
    name: "Odečítání",
    elements: [
      { text: "▯▯-▯▯", url: "m22" },
      { text: "▯▯▯-▯▯▯", url: "m33" },
      { text: "▯▯▯▯-▯▯▯▯", url: "m44" },
    ],
    icon: <RemoveIcon />,
    open: false,
  },
  {
    name: "Násobení",
    elements: [
      { text: "▯*▯", url: "M11" },
      { text: "▯▯*▯", url: "M21" },
      { text: "▯▯▯*▯", url: "M31" },
      { text: "▯▯^2", url: "P22" },
    ],
    icon: <ClearIcon />,
    open: false,
  },
  {
    name: "Dělení",
    elements: [
      { text: "▯▯/▯", url: "d21" },
      { text: "▯▯▯/▯", url: "d31" },
      { text: "√▯▯", url: "s22" },
    ],
    icon: "/",
    open: false,
  },
];
function Menu() {
  const [menuList, setMenuList] = useState(menuObject);

  const handleClick = (name) => {
    const newList = menuList.map((item) => {
      if (item.name === name) {
        const updatedItem = {
          ...item,
          open: !item.open,
        };

        return updatedItem;
      }

      return item;
    });
    setMenuList(newList);
  };
  return (
    <Stack direction="column" spacing={2}>
      {menuList.map((menuItem) => (
        <div key={menuItem.name} onClick={() => handleClick(menuItem.name)}>
          <ListItemButton>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.name} />
            {menuItem.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={menuItem.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem.elements.map((elem) => (
                <ListItemButton key={elem} sx={{ pl: 4 }}>
                  <Button href={"/exp/" + elem.url}>{elem.text}</Button>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </Stack>
  );
}

export default Menu;
