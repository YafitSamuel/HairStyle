import { Box, TextField, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";

interface ILogin {
  password: string;
  email: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Password is Required"),
});
const handleSubmit: (values: ILogin) => void = (values) => {
    axios
      .post("/login", values)
      .then((res) => {
        console.log(res.status);
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data));
          localStorage.setItem("email", JSON.stringify(values.email));
          alert(` Welcome Back:  ${values.email} `);
        }
      })
      .catch((err) => console.log(err));
  };
const Login: React.FC = () => {
  const [LoggedIn, setIsLoggedIn] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);},
  });
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        boxShadow: "5px 5px 10px #ccc",
        marginTop: 5,
        padding: 3,
      }}
    >
    
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          helperText="Please enter your email"
          id="demo-helper-text-aligned"
          label="Email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        /> 
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <TextField
          name="password"
          helperText="Please enter your password "
          label="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
        <Button
          sx={{
            marginTop: 3,
            borderRadius: 3,
            padding: 1,
            width: 200,
            color: "rgb(240, 119, 139)",
            border: 2,
          }}
          type="submit"
          endIcon={<SendIcon />}
        >
          Signin
        </Button>
      </form>
      {/* <button onClick={}>Logout</button> */}
    </Box>
  );
};

export default Login;
