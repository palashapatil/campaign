import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CampaignDetails from '../campaign/campaignDetails';
import MobileAppSetup from '../campaign/mobileAppSetup';
import { Switch } from '@mui/material';
import './styles.css'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [active, setActive] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (e, value) => {
    setActive(value)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1', alignItems: 'center' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between'}}>
         <div className='tab_container'> 
         <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Campaign Details" value="1" />
            <Tab label="Mobile App Set up" value="2" />
            <Tab label="Items List" value="3" />
            <Tab label="Free Gifts" value="4" />
          </TabList>
          <div className='status_container'>
          <div className='text_style'>Campaign Status</div>
          <div className='switch_container'>
          <Switch  onChange={handleToggle} size="small" />
          <div style={{color:'#84949C'}}>{active ? 'active' : 'inactive'}</div>
          </div>
          </div>
          </div>
        </Box>
        <TabPanel value="1"><CampaignDetails/></TabPanel>
        <TabPanel value="2"><MobileAppSetup/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}