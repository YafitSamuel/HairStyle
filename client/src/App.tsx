import React from "react";
import "./App.css";
import Appointment from "./components/myAppointment/Appointment";
import CreateAppointment from "./components/createAppointment/CreateAppointment";
import SideBae from "./components/sidebar/SideBar";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import CareerPortfolio from "./components/portfolio/CareerPortfolio";
import Home from "./components/home/Home"
import Login from "./components/login/Login";


function App() {
  return (
    <div className="App">
        <SideBae />
        {/* <Home/> */}
        {/* <Register /> */}
        <Login/>
        {/* <Appointment />      */}
        {/* <CreateAppointment /> */}
        {/* <Profile /> */}
        {/* <CareerPortfolio /> */}
    </div>
  );
}

export default App;
