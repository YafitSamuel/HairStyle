import * as React from "react";
import { Box } from "@mui/material";
import  {Card}  from "@mui/material";
import Cards from "./Card";

import t from "../../../src/images/000.jpg"




export default function CareerPortfolio() {
  return (
 
    <Box
    
      sx={{
        backgroundColor: "#282c34",
        display: "flex",
        // flexDirection: "column",
        // wrap:"wrap",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        boxShadow: "5px 5px 10px #ccc",
        marginTop: 5,
        padding: 3,
        maxWidth:"100vw",
        maxHeight:"100vh"
      }}
    >
     
      <Cards image={t}/>
      <Cards image={t}/>

      <Cards image={t}/>

      <Cards image={t}/>

      <Cards image={t}/>
      <Cards image={t}/>

 

    </Box>
    // </div>
  );
}
