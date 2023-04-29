import React, { useState } from "react";
import axios from "axios";
import "./create.css";
import Typography from "@mui/material/Typography";
import {  Button } from "@mui/material";

const CreateAppointment: React.FC = () => {
  const [value, setValue] = useState({
    userId: "",
    date: "",
    typeOfAppointment: "",
    time: "",
  });

  const handelChange = (e: any) => {
    console.log({ ...value });
    const newValue: any = { ...value };
    newValue[e.target.name] = e.target.value;
    setValue(newValue);
    console.log(newValue);
  };

  const handleSubmit = (e: any) => {
    axios
      .post("/appointments/", {
        userId: value.userId,
        date: value.date,
        typeOfAppointment: value.typeOfAppointment,
        time: value.time,
      })
      .then((res) =>{ 
        console.log("התור נקבע בהצלה ")
        alert("התור נקבע בהצלה ")
    
    })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
     
      <form className="form" onSubmit={handleSubmit}>
      <Typography component="h1" variant="body2"  color="rgb(184, 61, 81)">
         צור תור 
        </Typography>
        <input
          className="input"
          name="userId"
          placeholder="userId"
          type="text"
          value={value.userId}
          onChange={(e) => {
            handelChange(e);
          }}
          
        />
      
        <input
          className="input"
          name="date"
          placeholder="date"
          type="date"
          value={value.date}
          onChange={(e) => {
            handelChange(e);
          }}
        />
        <input
          className="input"
          name="time"
          placeholder="time"
          type="time"
          value={value.time}
          onChange={(e) => {
            handelChange(e);
          }}
        />
 
        <Button className="button"
            sx={{
              marginTop: 3,
              borderRadius: 3,
              padding: 1,
              width: 200,
              color: "rgb(184, 61, 81)",
              border: 2,
            }}
            type="submit"          
          >
            create
          </Button>
      </form>
    </div>
  );
};
export default CreateAppointment;
