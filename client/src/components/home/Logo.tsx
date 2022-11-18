import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../../images/Salon Logo.png";

export default function Logo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={logo}
        sx={{
          width: 300,
          height: 300,
          marginBottom: 2,
          backgroundColor:'black',
        }}
      />
    </Stack>
  );
}
