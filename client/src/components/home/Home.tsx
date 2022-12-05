import * as React from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
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
        boxShadow: "5px 5px 10px #ccc",
        padding: 10,
      }}
    >
      <Logo />

      <Button
        className="Button"
        sx={{
          marginTop: 3,
          borderRadius: 3,
          padding: 1,
          width: 200,
          color: "rgb(240, 119, 139)",
          border: 2,
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
          width: 200,
          color: "rgb(240, 119, 139)",
          border: 2,
        }}
      >
            <Link to="/login"> Log in </Link>
      </Button>
    </Box>
    </div>
  );
}
