import axios from "axios";

// GET
const getAllProfile = () => {
  axios
    .get("/notification")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};


const getByIdProfile = () => {
    axios
      .get("/notification/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//PUT

const upDateProfile= () => {
  axios
    .put("/profile/635862a32abbbc861a8c6d38", {
      userId: "123456",
      typeOfTreatment: "10:00",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// DELETE
const AddProfile = () => {
  axios
    .post("/profile", {
      userId: "BoB",
      typeOfTreatment: "bobi",
      date: "2020-10-09T22:00:00.000Z",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const deleteProfile = () => {
  axios
    .delete("/profile/635862a32abbbc861a8c6d38")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export {
  AddProfile,
  getAllProfile,
  deleteProfile,
  upDateProfile,
  getByIdProfile
};
