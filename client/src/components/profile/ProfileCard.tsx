import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { getUserById } from "../../api/user";
import axios from "axios";

export default function ProfileCard(props: any) {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    axios(`/users/6372d8e4b742e81f18aefbbe`).then((response) => {
      const data = response.data;
      console.log(data);
      setUsers(data);
    });
  });

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
          
          {
          
          
          users.map((item: any) => (
            <div>
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </div>
          ))}

        
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
