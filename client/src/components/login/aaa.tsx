import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
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
        console.log("dfvfgsrhtfv");
      }
    })
    .catch((err) => console.log(err));
};


const login: React.FC = () => {
//   const [LoggedIn, setIsLoggedIn] = useState(false);
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
        <Grid container component="main" sx={{ width: "600px", height: "100" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                width: "200px",
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box component="form" sx={{ mt: 1 }}>
              <form onSubmit={formik.handleSubmit}>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoFocus
                />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p>{formik.errors.password}</p>
                ) : null}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                </form>
                <Grid item xs>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      
  );
};