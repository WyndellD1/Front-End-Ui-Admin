import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { ProfileHeader } from '../../molecules/ProfileHeader';
import {
  FourthCouncilor,
} from '../../../assets/images/homepage/section-04-councilors';
import ProfileDashboard  from './ProfileDashboard';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import YourEvents  from './YourEvents';
import YouthPoints  from './YouthPoints';
import Donations  from './Donations';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  margin-bottom:450px;
 background: transparent
    linear-gradient(
      180deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary02} 100%
    )
    0% 0% no-repeat padding-box;

    @media ${theme.breakpoints.mobile} {
    flex-direction: column-reverse;
  }
`;
const NavContainer = styled.div`
 display: flex;
  flex-direction: column;
  margin-top: 22.6em;
  margin-left: 8em;
  width: 20%;
  position: absolute;
  background:white;
  border-radius: 10px;
  height: 33%;
  margin-bottom: 10% ;
  box-shadow:1px 2px 7px #ebebeb;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top:100em;
  margin-left: 0em;
  width: 100%;
  height: 15%;
  box-shadow:none;
  border-radius: 0px;
  opacity: 0;
  }
`;

const UserContainer = styled.div`
 display: flex;
  flex-direction: column;
  margin-top: 10em;
  margin-left: 8em;
  width: 20%;
  position: absolute;
  background:white;
  border-radius: 10px;
  height: 30%;
  margin-bottom: 10% ;
  box-shadow:1px 2px 7px #ebebeb;
  @media ${theme.breakpoints.mobileAndTablet} {
    background:none;
    box-shadow:none;
  }
`;

const StyledYouthImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position: absolute;
  top: 30px; left: 6em;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top: 1em;
   
    
  }
`;
const UserFname = styled.div`
font: normal normal bold 17px/20px Montserrat;
   color: #8b8bf8;
   top: 8.5em; left: 4.8em;
 position: absolute;
 @media ${theme.breakpoints.mobileAndTablet} {
  margin-top: .3em;
  }
`;
const UserLname = styled.div`
font: normal normal bold 17px/20px Montserrat;
   color: #8b8bf8;
   top: 8.5em; left: 10em;
   position: absolute;
 @media ${theme.breakpoints.mobileAndTablet} {
  margin-top: .3em;
  }
`;

const Email = styled.div`
font: normal normal bold 15px/20px Montserrat;
color: #05050a;
top: 11em; left: 5em;
position: absolute;
`;
const Phonum = styled.div`
font: normal normal normal 14px/20px Montserrat;
color: #05050a;
position: absolute;
top: 13.5em; left: 7em;

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
  
 export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  type Person = {
    firstName: string
    lastName: string
    email: string
    phonum: number
  }
    const defaultData: Person[] = [
      {
        firstName: 'Christian',
        lastName: 'Barral',
        email: 'barral@gmail.com',
        phonum: 9494949494,
      }
    ]
    
  return (
    <Container>
      <ProfileHeader />
      <DetailsWrapper/>
      <UserContainer>
        <StyledYouthImage src={FourthCouncilor} />
        <table>
        {defaultData.map((item: {
          [x: string]: ReactNode; firstName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
}, i: React.Key | null | undefined) => (
          <><tr key={i}>
            <th><UserFname>{item.firstName}</UserFname></th>
            <th><UserLname>{item.lastName}</UserLname></th>
          </tr><tr>
              <td><Email>{item.email}</Email></td>
            </tr><tr>
              <td><Phonum>{item.phonum}</Phonum></td>
            </tr></> ))}
      </table>
      </UserContainer>
    
  <NavContainer>
       <Divider/>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        
      >
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Your Events" {...a11yProps(1)} />
        <Tab label="Youth Points" {...a11yProps(2)} />
        <Tab label="Donations" {...a11yProps(3)} />
        <Tab label="Account Settings" {...a11yProps(4)} />
      </Tabs>
      </NavContainer>
    
      <TabPanel value={value} index={0}>
      <ProfileDashboard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <YourEvents/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <YouthPoints/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Donations/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ProfileDashboard/>
      </TabPanel>
     
     
    </Container>
  );
};

