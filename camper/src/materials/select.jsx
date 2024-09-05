import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    // marginTop:'-10px',
    borderRadius: 4,
    // position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "5px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function CustomizedSelects() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 0 }} variant="standard">
        {/* <InputLabel htmlFor="demo-customized-textbox"></InputLabel> */}
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl
        sx={{ m: 0, marginLeft: 3, marginRight: 2, marginBottom: 2 }}
        variant="standart"
      >
        {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}

        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Number}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1-10</MenuItem>
          <MenuItem value={20}>10-20</MenuItem>
          <MenuItem value={30}>20-30</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
