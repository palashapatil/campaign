import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

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


export default function MobileAppSetup() {
    const [file, setFile] = React.useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
     <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
    
        <FormControl variant="standard">
        <InputLabel shrink htmlFor="swimlane">
        <h3>SwimLane Information Details</h3>
        </InputLabel>
      </FormControl><br/>
      <br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="title">
          Campaign Title
        </InputLabel>
        <BootstrapInput placeholder="please enter title" id="campaignTitle" />
      </FormControl><br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="Description">
          Description
        </InputLabel>
        <BootstrapInput placeholder="Write a short description for your campaign" id="Description" />
      </FormControl>
      <br/>
      <hr />
    
    </Box>

    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
    
        <FormControl variant="standard">
        <InputLabel shrink htmlFor="swimlane">
        <h3>Onboarding Screen</h3>
        </InputLabel>
      </FormControl><br/>
      <br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="title">
          Campaign Title
        </InputLabel>
        <BootstrapInput placeholder="please enter title" id="campaignTitle" />
      </FormControl><br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="Description">
          Description
        </InputLabel>
        <BootstrapInput placeholder="Write a short description for your campaign" id="Description" />
      </FormControl>

      <br/>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="Description">
          Onboarding Image
        </InputLabel>
        <br/>
            <img src={file} />
            <input type="file" onChange={handleChange} />
      </FormControl>
      <hr />
    
    </Box>
    </>
   
  );
}