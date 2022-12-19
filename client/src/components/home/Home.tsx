import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Home() {
  return (
  <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        padding: 10,
      }}
    >

      <Button
        className="Button"
        sx={{
          marginTop: 3,
          borderRadius: 3,
          padding: 1,
          width: 150,
          backgroundColor: "rgb(184, 61, 81)",
          border: 2,
          color:"white",
          textDecoration:"none"

        }}
      >       
        <Link to="/register"> Sign Up</Link>
      </Button>
      <Button
        className="Button"
        sx={{
          marginTop: 3,
          borderRadius: 3,
          padding: 1,
          textDecoration:"none",

          width: 150,
          backgroundColor: "rgb(184, 61, 81)",
          color:"white",
          border: 2,
        }}
      >
          <Link to="/login"> Log in </Link>
      </Button>
    </Box>
    </div>
  );
}
