import React, { useState } from "react";
import axios from "axios";
import "./create.css";


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
      <h4>Create:</h4>
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
        <input
          className="input"
          name="typeOfAppointment"
          placeholder="typeOfAppointment"
          type="text"
          value={value.typeOfAppointment}
          onChange={(e) => {
            handelChange(e);
          }}
        />
        <button className="button" type="submit"> Submit</button>
      </form>
    </div>
  );
};
export default CreateAppointment;
