import { Box, TextField, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

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
        alert(` ברוכה השבה  `);
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
      handleSubmit(values);
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        marginTop: 5,
        padding: 3,
       
      }}
    >
    
    <Avatar sx={{ m: 1, bgcolor: "rgb(184, 61, 81)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="body2" color="rgb(184, 61, 81)">
          כניסה לחשבון שלך
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
              height: "5",
              margin:3
            }}
            name="email"
            // helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="אימייל"
            type="text"
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
              height: "5",
              margin:3
            }}
            name="password"
            // helperText="Please enter your password "
            label="סיסמא"
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
           כניסה
          </Button>
        </form>
        <Grid item>
          <Link href="/register" variant="body2" color="rgb(184, 61, 81)">
            {"Don't have an account? Sign Up"  }
          </Link>
        </Grid>
      
    </Box>
  );
};

export default Login;
