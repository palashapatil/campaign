import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HorizontalLinearStepper from '../nav';
import LabTabs from '../nav/index1';
import PreorderCampaign from '../preorder-campaign';

const bell = require('../../assets/Bell.png')
const menu = require('../../assets/Menu.png')
const union = require('../../assets/Union.png')
const vector = require('../../assets/Vector.png')
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{ width: '100%'}}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Box sx={{display: 'flex', alignItems: 'center', width: '23%', justifyContent: 'space-around' }}>
        <img src={bell} width="20" height="23.5" />
        <img src={vector} width="24" height='24' />
        <img src={union} width="21.82" height='21.82' />
        <img src={menu} width="18" height='15' />
        </Box>
      <h3>Define Festive Campaign</h3>
      </Box>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', backgroundColor: '#F5F8F9',}}
      >
        <Tab label="Pre-Order Campaign" {...a11yProps(0)} />
        <Tab label="define Festive Campaign" {...a11yProps(1)} />
        <Tab label="Export Consolidated Orders" {...a11yProps(2)} />
        <Tab label="Time Slot Maintenance" {...a11yProps(3)} />
        {/* <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
       <PreorderCampaign />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <LabTabs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
    </Box>
  );
}