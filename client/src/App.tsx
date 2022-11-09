import React from "react";
import "./App.css";
import Appointment from "./components/myAppointment/Appointment";
import CreateAppointment from "./components/createAppointment/CreateAppointment";

import AppRouter from'../src/appRouter/AppRouter'

function App() {
  return (
    <div className="App">
   <AppRouter/>
    


     
    </div>
  );
}

export default App;
