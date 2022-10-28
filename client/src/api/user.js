import axios from "axios";

//BASE_URL
const api = axios.create({
  baseURL: `http://localhost:8001`,
});

//GET USERS
const getAllUsers = () => {
  axios
    .get("/users/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//GET USER BY ID
const getUserById = () => {
  axios
    .get("/users/632bc2a2ab8c9308e4cc7463")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST USERS
const AddUsers = () => {
  axios
    .post("/users", {
      name: "name",
      email: "name@gmail.com",
      password: "123456",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};



export { getAllUsers, AddUsers, getUserById };
