import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { AdminHeader } from '../../molecules/AdminHeader';
import event from '../../../assets/images/homepage/section-2-the-council-goes-online/event.png';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '../../atoms/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;


const HeaderText = styled.div`
  font: normal normal bold 24px/35px Poppins;
  color: #FFFFFF;
  margin-top: 6.5em;
  margin-left: 8em;
`;

const Text = styled.div`
  font: normal normal normal 14px/35px Montserrat;
  color: #FFFFFF;
  margin-top: 13.5em;
  margin-left: -20em;
  margin-bottom: 2em;
`;



const SubHeader = styled.div`
  font: normal normal bold 15px/20px Montserrat;
  color: #444444;


`;

const SubTitle = styled.div`
  font: normal normal normal 14px/20px Montserrat;
  color: #444444;
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
  box-shadow: 0px 5px 10px #0000000d;
  border-radius: 10px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  margin-left: 5em;
  margin-right: -10em;
  :hover{
    transform: translate(0px, -15%);
    transition-duration: 1s;
  }
  @media ${theme.breakpoints.mobile} {
    width:150px;
    height: 120px;
  }
`;
 
 export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const CouncilButtonWrapper = styled.div<{ isMobile?: boolean }>`
  display: ${({ isMobile }) => (!isMobile ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 1em;
  width: 320px;
  height: 130px;
  margin-left: 32em;

  button {
    flex: 1;

    :hover {
      :nth-child(1) {
        background-color: ${theme.colors.primary02};
      }
    }

    :nth-child(1) {
      background-color: ${theme.colors.secondary};
      border: 0;
      color: ${theme.colors.white};
    }

    :nth-child(2) {
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  }

  @media ${theme.breakpoints.mobileAndTablet} {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
    button {
      flex: 1 1 100%;
    }
  }
`;
  
    
  return (
    <Container>
      <AdminHeader />
      
        
 
     
     
    </Container>
    
  );
};

