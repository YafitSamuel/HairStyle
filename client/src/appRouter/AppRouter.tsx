import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBae from "../components/sidebar/SideBar";
import Profile from "../components/profile/Profile";
import Register from "../components/register/Register";
import CreateAppointment from "../components/createAppointment/CreateAppointment";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Appointment from "../components/myAppointment/Appointment";


function AppRouter() {
    return (
      <div className="App">
        <Router>
        <SideBae />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/appointments' element={<CreateAppointment />} />            
            <Route path='/register' element={<Register />} />    
            <Route path='/login' element={<Login />} />
            <Route path='/Appointment' element={<Appointment />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router> 
      
  
  
       
      </div>
    );
  }
  
  export default AppRouter;