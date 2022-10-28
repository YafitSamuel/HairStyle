
import * as React from "react";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Box } from "@mui/material";

export default function NoHaveAppointment() {
  return (
   
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "& > :not(style)": { m: 1 },
          boxShadow: "5px 5px 10px #ccc",
          marginTop: 5,
          padding: 3,
          borderRadius: 100,
          width: 230,
          color:"rgb(240, 119, 139)",
          border:2
        }}
      >
        <p>לא קיימים תורים</p>
        <p> במערכת</p>
      </Box>
  
  );
}
