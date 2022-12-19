import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../../images/אדלה.png";

export default function MiniLogo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={logo}
        sx={{
          width: 55,
          height: 40,
          marginLeft: 4,
          color: "rgb(184, 61, 81)",
          
          border: 8,
        }}
      />
    </Stack>
  );
}
