import * as React from "react";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import  oo from "../../../src/images/000.jpg"

export default function Profile() {
  return (
    
    <Box
      sx={{
        backgroundColor: "rgb(244, 237, 225)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        boxShadow: "5px 5px 10px #ccc",
        marginTop: 5,
        padding: 3,
        maxWidth: "100vw",
        maxHeight: "100vh",
       
      }}
    >
      <ProfileCard img={oo} />
    </Box>
    
  );
}
