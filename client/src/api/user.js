import axios from "axios";
// import { idText } from "typescript";


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
    .get(`/users/GHJKL`)
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
