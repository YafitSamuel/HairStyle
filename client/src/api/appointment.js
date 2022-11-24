import axios from "axios";

// GET APPOINTMENT
const getAllAppointments = () => {
  axios
    .get("/appointments")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
// GET ById APPOINTMENT
const getByIdAppointments= () => {
  axios
    .get(`/appointments/632bc2a2ab8c9308e4cc7463`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//PUT APPOINTMENT

const upDateAppointment = () => {
  axios
    .put("/appointments/632bc2a2ab8c9308e4cc7463", {
      userId: "yafitSamuel",
      typeOfTreatment: "hairStyle",
      date: "2020-10-09T22:00:00.000Z",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// DELETE APPOINTMENT
// const AddAppointment = () => {
//   axios
//     .post("/appointments", {})
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// };

const deleteAppointment = () => {
  axios
    .delete("/appointments/632bc295ab8c9308e4cc7461")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export {
  getAllAppointment,
  getAllAppointments,
  deleteAppointment,
  upDateAppointment,
  getByIdAppointments
};
