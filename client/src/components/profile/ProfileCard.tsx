import * as React from "react";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";

export default function ProfileCard(props: any) {
  return (
    <Card
    sx={{
      display: "flex",
      backgroundColor: "wheat",
      color: "black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& > :not(style)": { m: 1 },
      boxShadow: "5px 5px 10px #ccc",
      marginTop: 5,
      padding: 3,
    }}
    >
      <CardActionArea>
      
        <FaUserAlt className="Icon" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Yafit Samuel
          </Typography>
          <hr></hr>
          <Typography variant="body2" color="text.secondary">
            Email: Yafitl@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: 0533407289
          </Typography>
          <Button
            sx={{
              width: 100,
              padding: 0.2,
              margin: 2,
              color: "rgb(240, 119, 139)",
              border: 1,
            }}
          >
            עריכה
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
