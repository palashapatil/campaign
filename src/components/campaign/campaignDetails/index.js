// import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



// export default function CampaignDetails() {
//   return (<>
//   <Box
//       component="form"
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr 1fr' },
//         gap: 2,
//       }}
//     >
//          <FormControl variant="standard">
//         <InputLabel shrink htmlFor="details">
//         <h3>Details</h3>
//         </InputLabel>
//       </FormControl><br/>
//       <br/>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="title">
//           Campaign Title
//         </InputLabel>
//         <BootstrapInput placeholder="please enter title" id="campaignTitle" />
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//           Type
//         </InputLabel>
//         <BootstrapInput placeholder="select type" id="type" />
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//           Store
//         </InputLabel>
//         <BootstrapInput placeholder="select type" id="type" />
//       </FormControl>
//       <br/>
    
     
    
//     </Box>
//     <hr/>
//     <Box
//       component="form"
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr 1fr' },
//         gap: 2,
//       }}
//     >
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="swimlane">
//         <h3>Onboarding Screen</h3>
//         </InputLabel>
//       </FormControl><br/>   <br/>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//           Valid Order Date 
//         </InputLabel>
//         <BootstrapInput placeholder="select Date" id="type" />
//         {/* <DatePicker id="order"/> */}
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//        To
//         </InputLabel>
//         {/* <DatePicker id="Collection" /> */}
//         <BootstrapInput placeholder="select Date" id="type" />
//       </FormControl>
      
//       <br/>
//       <br/>
    
//     </Box>

//     <Box
//       component="form"
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr 1fr' },
//         gap: 2,
//       }}
//     >
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//           Valid Collection Date 
//         </InputLabel>
//         <BootstrapInput placeholder="select Date" id="type" />
//         {/* <DatePicker id="order"/> */}
//       </FormControl>
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="type">
//        To
//         </InputLabel>
//         {/* <DatePicker id="Collection" /> */}
//         <BootstrapInput placeholder="select Date" id="type" />
//       </FormControl>
//       <br/>
//       <br/>
    
//     </Box>
//   </>
    
//   );
// }

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { __createCampaign } from "../../../service/CampainService";
import { toast } from 'react-toastify';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
const CampaignDetails = () => {
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  // const [value, setValue] = React.useState(null);
  const [campainDetails, setCampaignDetails] = React.useState({
    ID: null,
    title: "",
    type: "",
    status: "InActive",
    order_start_date: "",
    order_end_date: "",
    collection_start_date: "",
    collection_end_date: "",
  });

  const handleChange = (e) => {
    debugger
    const { name, value } = e.target;
    console.log(e.target.value);
    setCampaignDetails({
      ...campainDetails,
      [name]: value,
    });
  };

  const save = () =>{
    console.log(campainDetails);
    __createCampaign(campainDetails).then(
      (res)=>{
        if(res.status==200)
        toast.success("Campaign Saved Successfully!")
        console.log(res.status);
      }
    )
  }

  return (
    <div className="m-5 p-5">
          {/* <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
         <FormControl variant="standard">
        <InputLabel shrink htmlFor="details">
        <h3>Details</h3>
        </InputLabel>
      </FormControl><br/>
      <br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="title">
          Campaign Title
        </InputLabel>
        <BootstrapInput 
        placeholder="please enter title" 
        id="title"  
        name="title"
         value={campainDetails.title}
            onChange={handleChange}/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="type">
          Type
        </InputLabel>
          <Select
            className="w-100"
            size="small"
            name="type"
            id="demo-simple-select"
            value={campainDetails.type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"10"}>x</MenuItem>
            <MenuItem value={"20"}>Y</MenuItem>
            <MenuItem value={"30"}>Z</MenuItem>
          </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="type">
          Store
        </InputLabel>
        <BootstrapInput placeholder="select type" id="type" />
      </FormControl>
      <br/>
    
     
    
    </Box>
   */}
      <div className="row m-1">
        <h5>Details</h5>
        <div className="col-md-6">
          <InputLabel>Campain Title</InputLabel>
          <TextField
            id="outlined-basic"
            name="title"
            variant="outlined"
            size="small"
            value={campainDetails.title}
            className="w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            className="w-100"
            size="small"
            name="type"
            id="demo-simple-select"
            value={campainDetails.type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"10"}>x</MenuItem>
            <MenuItem value={"20"}>Y</MenuItem>
            <MenuItem value={"30"}>Z</MenuItem>
          </Select>
        </div>
        <div>STORE</div>
        <div>
          <InputLabel id="demo-simple-select-label">Select Store</InputLabel>
          <Select
            className="w-100"
            size="small"
            id="demo-simple-select"
            name="store"
            value={campainDetails.store}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"10"}>x</MenuItem>
            <MenuItem value={"20"}>Y</MenuItem>
            <MenuItem value={"30"}>Z</MenuItem>
          </Select>
        </div>
        <div>
          <h5>Date And Time</h5>
          <div className="row">
            <div className="col-md-3">
              <InputLabel id="date">Valid Order Date</InputLabel>
              <TextField
                id="datetime-local"
                name="order_start_date"
                type="date"
                // defaultValue="2017-05-24T10:30"
                value={campainDetails.order_start_date}
                onChange={handleChange}
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-md-3">
              <InputLabel id="date-time">To</InputLabel>
              <TextField
                id="date"
                name="order_end_date"
                type="date"
                // defaultValue="2017-05-24T10:30"
                value={campainDetails.order_end_date}
                onChange={handleChange}
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <InputLabel id="date">Valid Collection Date</InputLabel>
              <TextField
                id="datetime-local"
                name="collection_start_date"
                type="date"
                // defaultValue="2017-05-24T10:30"
                value={campainDetails.collection_start_date}
                onChange={handleChange}
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-md-3">
              <InputLabel id="date-time">To</InputLabel>
              <TextField
                id="datetime-local"
                name="collection_end_date"
                type="date"
                // defaultValue="2017-05-24T10:30"
                value={campainDetails.collection_end_date}
                onChange={handleChange}
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-md-6">
          <button className="btn btn-outline-primary"
          onClick={save}
          >
            Save Campaign</button>
        </div>
        <div
          className="col-md-6"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button className="btn btn-outline-primary">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
