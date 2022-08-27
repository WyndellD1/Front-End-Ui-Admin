import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { Email, Menu as MenuIcon, Phone } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/images/Logo.png';
import Home from '../../../assets/images/Home.png';
import { theme } from '../../../config';
import { Button } from '../../atoms/Button';

const StyledButton = styled(Button)`
  &&& {
    background-color: ${theme.colors.secondary};

    :hover {
      background-color: ${theme.colors.primary02};
    }
  }
`;

const NavbarContainer = styled.div`
`;

const NavItem = styled.div<{ isButton?: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: ${theme.colors.gray01};
  font: normal normal normal 14px/18px Montserrat;
  gap: 0.2em;
  align-items: center;
  padding: 0 1em;

  ${({ isButton }) =>
    isButton
      ? ``
      : `:hover {
    background-color: ${theme.colors.primary02hover};
  }`};
`;

const StyledImg = styled.img`
  position: absolute;
  top: 10px;
  margin-left:100px;
  width: 70px;
  height: 70px;
  

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100px;
    height: 100px;
  }
`;
const StyledImg2 = styled.img`
  position:absolute;
  top: 35px;
  right:900px;
  width: 20px;
  height: 20px;
  

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 0px;
    height: 0px;
  }
`;

const MenuText = styled.span`
  font: normal normal normal 14px/18px Montserrat;
  color: ${theme.colors.gray01};
`;

export type Props = {
  children?: React.ReactElement | React.ReactElement[];
  isVisible?: boolean;
  anchor?: 'top' | 'bottom' | 'left' | 'right';
};

const Component = ({ children, isVisible = true, anchor = 'top' }: Props) => {
  const information = [
    {
      
      icon: <Email sx={{ fontSize: '16px', color: theme.colors.primary }} />,
    },
    {
    
      icon: <Phone sx={{ fontSize: '16px', color: theme.colors.primary }} />,
    },
  ];

  const mobileNavs = ['HOME', 'YOUTH COUNCIL', 'LOGIN/REGISTER'];

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navigate = useNavigate();

  return (
    <NavbarContainer>
      
      <AppBar
        sx={{
          background: theme.colors.white,
          boxShadow: `0px 5px 10px ${theme.colors.shadow}`,
          zIndex: 1400,
          height: 90,
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            

            <Box sx={{ flexGrow: .5, display: { md: 'flex' } }}>
              <StyledImg src={Logo} alt="Logo" />
            </Box>

             <Box sx={{ flexGrow: .5, display: { md: 'flex' } }}>
             
             <a href="/"> <StyledImg2 src={Home} alt="Home" /></a>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenDrawer}
                sx={{
                  color: theme.colors.primary,
                  gap: '.1em',
                }}
              >
                <MenuIcon />
                <MenuText>Menu</MenuText>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Drawer
          anchor={anchor}
          container={container}
          variant="temporary"
          open={openDrawer}
          onClose={handleOpenDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              top: '75px',
              height: '100%',
              background:
                'transparent linear-gradient(180deg, #FFFFFF 0%, #F5F5FDF8 33%, #717CAC8C 79%, #6975A798 100%) 0% 0% no-repeat padding-box',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            },
          }}
        >
          <List>
            {mobileNavs.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    font: 'normal normal normal 14px/18px Montserrat;',
                    color:
                      index === mobileNavs.length - 1
                        ? theme.colors.primary02
                        : theme.colors.black01,
                  }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
      {children}
    </NavbarContainer>
  ) ; 
};

export default Component;
