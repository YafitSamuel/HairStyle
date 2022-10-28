import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import  {useEffect}  from "react";



export default function CreateAppointment() {

  useEffect(() => {
   alert("הפגישה נקבעה בהצלחה");
  }, [])

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
      <p>קיבעי תור</p>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="day"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ width: 220 }}
        />
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          sx={{ width: 220, color: "rgb(240, 119, 139)" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button sx={{ width: 220, color: "rgb(240, 119, 139)", border: 2 }}>
          Create
        </Button>
      </Stack>
    </Box>
  );
}
