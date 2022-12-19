import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBae from "../components/sidebar/SideBar";
import Register from "../components/register/Register";
import CreateAppointment from "../components/createAppointment/CreateAppointment";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Appointment from "../components/myAppointment/Appointment";
import Admin from "../components/admin/Admin";

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <SideBae />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<CreateAppointment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
