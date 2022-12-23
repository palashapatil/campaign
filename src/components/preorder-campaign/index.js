import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import "./styles.css";
import { Card, Checkbox } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
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
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function preorderCampaign() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        gap: 2,
      }}
    >
      <FormControl variant="standard"></FormControl>
      <br />
      <br />
      <div className="container">
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="title">
            CAMPAIGN TITLE
          </InputLabel>
          <BootstrapInput placeholder="please enter title" id="campaignTitle" />
        </FormControl>
        <div className="campaign_container">
          <div className="title">Campaign Status</div>
          <div className="row">
            <Card variant="outlined" className="card">
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <div>All</div>
            </Card>
            <Card variant="outlined" className="card">
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <div>Active</div>

            </Card>
            <Card variant="outlined" className="card">
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <div>Scheduled</div>

            </Card>
            <Card variant="outlined" className="card">
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <div>Inactive</div>

            </Card>
          </div>
        </div>
      </div>
      <br />
    </Box>
  );
}
