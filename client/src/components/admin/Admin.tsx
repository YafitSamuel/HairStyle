import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  AppointmentModel,
  ViewState,
  SchedulerDateTime,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  Appointments,
  MonthView,
  Toolbar,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import axios from "axios";
import { array } from "yup";
// import './admin.css'

const getAllAppointment = async () => {
  const response = await axios("/appointments");
  const appointments = response.data.map(
    (item: any) => {
      return {
        startDate: item.date,
        endDate: item.date,
        title: item.typeOfAppointment,
        type: item.userId,
      };
    }
  );
  return appointments;
};

const appointments: Array<AppointmentModel> = [
  {
    startDate: "2022-11-31T10:00",
    endDate: "2022-11-31T11:15",
    title: "Meeting",
    type: "private",
  },
  {
    startDate: "2018-10-31T07:30",
    endDate: "2018-10-31T09:00",
    title: "Go to a gym",
    type: "work",
  },
];
const Admin:React.FC= () => {
  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2018-10-31");

  // const [appointments, setAppointment] = React.useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAppointment();
      // setAppointment(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />
        <MonthView />
        <Appointments />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
      </Scheduler>
    </Paper>
  );
};

export default Admin;
