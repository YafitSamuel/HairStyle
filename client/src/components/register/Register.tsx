import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

interface ISignup {
  password: string;
  name: string;
  email: string;
}
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Password is Required"),
});

const handleSubmit: (values: ISignup) => void = (values) => {
  axios
    .post("/register", values)
    .then((res) => {
      console.log(values);
      alert("ברוכה הבאה! נרשמת בהצלחה ");
    })
    .catch((err) => console.log(err));
};

const Register: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  
  return (
    <Box
      sx={{
        backgroundColor:"white",
        color: "rgb(184, 61, 81)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        marginTop: 1,
        padding: 3,
      }}
    >
   
        <Avatar sx={{ m: 1, bgcolor: "rgb(184, 61, 81)" }}>
          <LockOutlinedIcon />
        </Avatar >
        <Typography component="h1" variant="body2"  color="rgb(184, 61, 81)">
         צור חשבון
        </Typography>

        <form onSubmit={formik.handleSubmit}>
        
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
            }}
            className="textField"
            name="name"
            helperText="Please enter your name"
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
            }}
            name="email"
            helperText="Please enter your email "
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}

          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
            }}
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
              color: "rgb(184, 61, 81)",

              border: 2,
            }}
            type="submit"
            endIcon={<SendIcon />}
          >
            create
          </Button>
        </form>
       
          <Link href="/Login" variant="body2"  color="rgb(184, 61, 81)">
            {"Don't have an account? Sign in"}
          </Link>
        
      </Box>
   
  );
};

export default Register;
