import * as React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button, Stack } from "@mui/material";

function Menu() {
  return (
    <div>
      <Stack direction="column" spacing={2}>
        <Button startIcon={<ClearIcon />} href="/multiply">
          Násobení
        </Button>
        <Button startIcon={<RemoveIcon />} href="/sub">
          Odečítánní
        </Button>
        <Button startIcon={<AddIcon />} href="/add">
          Sčítání
        </Button>
      </Stack>
    </div>
  );
}

export default Menu;
