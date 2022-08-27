import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Container = styled.div`
 display: flex;
 margin-top: -32.2em;
  margin-left: 30em;
  height: 28em;
  width: 45em;
  position: absolute;
  background:white;
  border-radius: 10px;
  margin-bottom: 10% ;
  box-shadow:1px 2px 7px #ebebeb;
  padding:30px;
  display: inline-block;
  overflow-y: scroll;
  
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top: -20em;
  margin-left: 0em;
  background:none;
    box-shadow:none;
    width: 80%;
    height: 95em;
    overflow-y: hidden;
  }
`;

const CouncilInformationHeaderText = styled.div`
  font: normal normal bold 24px/35px Montserrat;
  width: 100%;
`;


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
 export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

return (
  <Container>
    <CouncilInformationHeaderText>DONATIONS
      <Divider />
    </CouncilInformationHeaderText> 
    <Box
      sx={{   borderBottom: 1, borderColor: 'divider' }}
    >
    <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="To Claim" {...a11yProps(0)} />
        <Tab label="Claimed" {...a11yProps(1)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
      Lorem ipsum
      </TabPanel>
      <TabPanel value={value} index={1}>
      Lorem ipsum,Lorem ipsum
      </TabPanel>
      </Box>
         
  </Container>
  );
};
