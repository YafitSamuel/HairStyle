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

  // form
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
      <Box
      sx={{
      
        display: "flex",
        backgroundColor:'wheat',
        color:'black',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1 },
        boxShadow: "5px 5px 10px #ccc",
        marginTop: 5,
        padding: 3,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            height: "5",
          }}
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
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            height: "5",
          }}
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
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            height: "5",
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
            color: "rgb(240, 119, 139)",
            border: 2,
          }}
          type="submit"
          endIcon={<SendIcon />}
        >
          create
        </Button>
      </form>
      <Grid item>
        <Link href="/Login" variant="body2">
          {"Don't have an account? Sign in"}
        </Link>
      </Grid>
      </Box>
    </Box>
  );
};

export default Register;

// import * as Yup from "yup";
// import { useFormik } from "formik";
// import axios from "axios";

// interface ISignup {
//     password: string;
//     name: string;
//     email: string;
//   }
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Name is Required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is Required"),
//     password: Yup.string()
//       .min(6, "Must be 6 characters or more")
//       .required("Password is Required"),
//   });

//   const Register: React.FC = () => {
//     const handleSubmit: (values: ISignup) => void = (values) => {
//       axios
//         .post("/register", values)
//         .then((res) => {
//           console.log(values);
//         })
//         .catch((err) => console.log(err));
//     };
//     const formik = useFormik({
//       initialValues: {
//         name: "",
//         email: "",
//         password: "",
//       },
//       onSubmit: (values) => {
//         handleSubmit(values);
//       },
//     });

//     // form
//     return (
//         <Grid container component="main" sx={{ width: "600px", height: "100" }}>
//           <CssBaseline />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <Box
//               sx={{
//                 width: "200px",
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//               Sign Up
//               </Typography>

//               <Box component="form" sx={{ mt: 1 }}>
//               <form onSubmit={formik.handleSubmit}>
//               <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="name"
//                   label="name"
//                   type="text"
//                   id="name"
//                   autoComplete="current-name"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                 />
//                 {formik.touched.name && formik.errors.name ? (
//                   <p>{formik.errors.name}</p>
//                 ) : null}
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                   autoFocus
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <p>{formik.errors.email}</p>
//                 ) : null}
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                 />
//                 {formik.touched.password && formik.errors.password ? (
//                   <p>{formik.errors.password}</p>
//                 ) : null}

//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign UP
//                 </Button>
//                 </form>
//                 <Grid item xs>
//                   <Grid item>
//                     <Link href="/Login" variant="body2">
//                       {"Don't have an account? Sign in"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//   );
// };

//  export default Register;
