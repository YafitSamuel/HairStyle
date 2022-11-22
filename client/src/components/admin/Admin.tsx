import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  ViewSwitcher,
  Toolbar,
  TodayButton,
  DateNavigator,
  AppointmentForm,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import axios from "axios";


const Admin = (props:any) => {


  const currentDate ="2022-11-01" ;

  const schedulerData = [
    {
      date: "2022-11-17T00:00:00.000Z",
      time: "02:43",
      typeOfAppointment: "sfdgr",
      updatedAt: "2022-11-18T23:43:44.676Z",
      userId: "yafit Samuel",

      _id: "637818b0546424550ab62595",
    },
  ];
  return (
    <div>
      <Paper>
        <Scheduler >
          <ViewState currentDate={currentDate} />
          <MonthView />
          <DayView />
          <WeekView startDayHour={9} endDayHour={15} />
          <Toolbar />
          <TodayButton />
          <DateNavigator  />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm readOnly />
        </Scheduler>
      </Paper>
    </div>
  );
};
export default Admin;
