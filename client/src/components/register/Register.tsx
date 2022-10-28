import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

interface ISignup {
  password: string;
  name: string;
  email: string;
}

const Register: React.FC = () => {
  const handleSubmit: (values: ISignup) => void = (values) => {
    axios
      .post("/register", values)
      .then((res) => {
        console.log(values);
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Password is Required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  // console.log(formik.errors);
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
          className="textField"
          name="name"
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <TextField
          name="email"
          helperText="Please enter your email "
          id="demo-helper-text-aligned-no-helper"
          label="Email"
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          type="password"
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
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Register;
