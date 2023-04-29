import React, {useState, useEffect }from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from "@fullcalendar/core/locales-all";

// import interactionPlugin from "@fullcalendar/interaction"
// import momentPlugin from '@fullcalendar/moment'

const Calendar: React.FC = () => {

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-01-01" },
          { title: "event 2", date: "2023-01-04" },
        ]}
        headerToolbar={{
          left: "prev,next today btn",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay btn",
        }}      
        buttonText={{
          day: "Day",
          prev: "<",
          next: ">",
          month: "month",
          today: "Todya",
          week: "Week",
        }}
        locale={"il"}
        
        // weekends={true}
       
      />
    </>
  );
};

export default Calendar;
