import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import event from '../../../assets/images/homepage/section-2-the-council-goes-online/event.png';

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
  margin-left: -2em;
  background:none;
    box-shadow:none;
    width: 88%;
    height: 95em;
    overflow-y: hidden;
  }
`;

const CouncilInformationHeaderText = styled.div`
  font: normal normal bold 24px/35px Montserrat;
  width: 100%;
`;

const SubHeader = styled.div`
  font: normal normal bold 15px/20px Montserrat;
  color: #05050a;


`;

const SubTitle = styled.div`
  font: normal normal normal 14px/20px Montserrat;
  color: #05050a;
  margin-bottom: 30px;

  
`;
const Time = styled.div`
  font: normal normal normal 14px/20px Montserrat;
  color: #5a5ae9;
  margin-bottom: 2px;


  
`;

const Event = styled.div<{ img: string }>`
  width: 230px;
  height: 130px;
  box-shadow: 0px 5px 20px #0000000d;
  border-radius: 10px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  :hover{
    transform: translate(0px, -15%);
    transition-duration: 1s;
  }
  @media ${theme.breakpoints.mobile} {
    width:150px;
    height: 120px;
  }
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
    <CouncilInformationHeaderText>YOUR EVENTS
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
        <Tab label="Upcomming Events" {...a11yProps(0)} />
        <Tab label="Past Events" {...a11yProps(1)} />
        <Tab label="For Evaluation" {...a11yProps(2)} /> 
      </Tabs>

      <TabPanel value={value} index={0}>
      <table>
          <tr>
          <th> <Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..</SubTitle></th>
          <th><Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</SubTitle></th>
          <th><Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</SubTitle></th>
        </tr> 
        <tr>
          <th> <Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</SubTitle></th>
          <th><Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</SubTitle></th>
          <th><Event img={event}/><SubHeader>Kabuhayan Program</SubHeader><Time>Saturday-Febuary 19,2022|9:00PM</Time>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</SubTitle></th>
        </tr> 
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
    <table>
          <tr>
          <th> <Event img={event}/><SubHeader>Kabuhayan Program</SubHeader>
          <Time>Saturday-Febuary 19,2022|9:00PM</Time></th>
          <th><Event img={event}/><SubHeader>Kabuhayan Program</SubHeader>
          <Time>Saturday-Febuary 19,2022|9:00PM</Time></th>
           </tr> 
        </table>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <table>
          <tr>
          <th> <Event img={event}/><SubHeader>Kabuhayan Program</SubHeader>
          <Time>Saturday-Febuary 19,2022|9:00PM</Time></th>
          </tr> 
        </table>
      </TabPanel>
      </Box>
         
  </Container>
  );
};
