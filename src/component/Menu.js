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
import {
  CollectionsOutlined,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

function Menu() {
  const menuObject = [
    {
      name: "Sčítání",
      elements: [
        { rend: "▯▯+▯▯", url: "p22" },
        { rend: "▯▯▯+▯▯▯", url: "p33" },
        { rend: "▯▯▯▯+▯▯▯▯", url: "p44" },
      ],
      icon: <AddIcon />,
      open: false,
    },
    {
      name: "Odečítání",
      elements: [
        { rend: "▯▯-▯▯", url: "m22" },
        { rend: "▯▯▯-▯▯▯", url: "m33" },
        { rend: "▯▯▯▯-▯▯▯▯", url: "m44" },
      ],
      icon: <RemoveIcon />,
      open: false,
    },
    {
      name: "Násobení",
      elements: [
        { rend: "▯*▯", url: "M11" },
        { rend: "▯▯*▯", url: "M21" },
        { rend: "▯▯▯*▯", url: "M31" },
        { rend: "▯▯^2", url: "P22" },
      ],
      icon: <ClearIcon />,
      open: false,
    },
    {
      name: "Dělení",
      elements: [
        { rend: "▯▯/▯", url: "d21" },
        { rend: "▯▯▯/▯", url: "d31" },
      ],
      icon: "/",
      open: false,
    },
  ];

  const [list, setList] = useState(menuObject);

  const handleClick = (name) => {
    const newList = list.map((item) => {
      if (item.name === name) {
        const updatedItem = {
          ...item,
          open: !item.open,
        };

        return updatedItem;
      }

      return item;
    });
    setList(newList);
  };
  return (
    <Stack direction="column" spacing={2}>
      {list.map((t) => (
        <div key={t.name}>
          {console.log(t)}
          <ListItemButton onClick={() => handleClick(t.name)}>
            <ListItemIcon>{t.icon}</ListItemIcon>
            <ListItemText primary={t.name} />
            {t.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={t.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {t.elements.map((elem) => (
                <ListItemButton key={elem} sx={{ pl: 4 }}>
                  <Button href={"/exp/" + elem.url}>{elem.rend}</Button>
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
