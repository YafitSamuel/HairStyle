import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ad from "../../images/ad.png";


export default function Logo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={ad}
        sx={{
          width: 300,
          height: 300,
          marginBottom: 2,
          backgroundColor:"rgb(184, 61, 81)",
        }}
      />
    </Stack>
  );
}
