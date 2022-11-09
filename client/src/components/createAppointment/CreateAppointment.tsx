import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import SendIcon from "@mui/icons-material/Send";
import { Box, TextField, Button } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface ICreateApp {
  userId: string;
  typeOfTreatment: string;
  date: string;
}

const handleSubmit: (values: ICreateApp) => void = (values) => {
  axios
    .post("/appointments", values)
    .then((res) => {
      console.log(values);
    })
    .catch((err) => console.log(err));
};

const validationSchema = yup.object().shape({
  date: yup.date().nullable(),
});


const CreateAppointment: React.FC = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const formik = useFormik({
    initialValues: {userId: "",typeOfTreatment: "",date: ""},
       onSubmit: (values) => {
      handleSubmit(values);
    },
  });
      
  return (
    <div>
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="userId"
              value={value}
              onChange={(newValue) =>setValue(newValue)}
              minDate={new Date()}
              renderInput={(params) => (
                <TextField
                  name="date"
                  onChange={formik.handleChange}
                  // value={formik.values.date}
                  onBlur={formik.handleBlur}
                  helperText="Please enter your Day "
                  {...params}
                />
              )}
            />
          </LocalizationProvider>

          <TextField
            name="userId"
            helperText="Please enter your userId "
            label="userId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userId}
            type="text"
          />

          <TextField
            name="typeOfTreatment"
            helperText="Please enter your typeOfTreatment "
            label="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.typeOfTreatment}
            type="text"
          />
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
            Create
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CreateAppointment;
