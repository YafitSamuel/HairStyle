import * as React from "react";
import { Box } from "@mui/material";
import NoHaveAppointment from "./NoHaveAppointment";
import {getAllUsers}  from "../../api/user"; 
import axios from "axios";
 


export default function Appointment() {
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
        color: "rgb(220, 220, 250)",
      }}
    >
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
          color: "rgb(240, 119, 139)",
          border: 2,
        }}
      >
        <button>{ }</button>
        <p> נקבע תור במערכת</p>
        <p> ליום א' בשעה 14:00</p>
      </Box>
      <NoHaveAppointment />
    </Box>
  );
}
