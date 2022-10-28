import axios from "axios";

// GET
const getAllNotifications = () => {
  axios
    .get("/notification")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//PUT

const upDateNotification = () => {
  axios
    .put("/notification/635862a32abbbc861a8c6d38", {
      userId: "123456",
      typeOfTreatment: "10:00",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// DELETE
const AddNotification = () => {
  axios
    .post("/notification", {
      userId: "BoB",
      typeOfTreatment: "bobi",
      date: "2020-10-09T22:00:00.000Z",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const deleteNotification = () => {
  axios
    .delete("/notification/635862a32abbbc861a8c6d38")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export {
  AddNotification,
  getAllNotifications,
  deleteNotification,
  upDateNotification,
};
