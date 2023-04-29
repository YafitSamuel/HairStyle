import React from "react";
import "./App.css";
import AppRouter from "../src/appRouter/AppRouter"; 
import Calendar from "./components/calendar/Calendar";
function App() {
  return (
    <div className="App">
      <AppRouter />      
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
