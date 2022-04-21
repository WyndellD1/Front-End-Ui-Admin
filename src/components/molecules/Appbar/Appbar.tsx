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
import { Email, Menu as MenuIcon, Phone } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/images/Logo.png';
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

const NavbarContainer = styled.div``;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  color: ${theme.colors.gray01};
  font: normal normal normal 14px/18px Montserrat;
  gap: 0.2em;
  align-items: center;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 15px;
  width: 80px;
  height: 80px;

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 85px;
    height: 85px;
  }
`;

const MenuText = styled.span`
  font: normal normal normal 14px/18px Montserrat;
  color: ${theme.colors.gray01};
`;

export type Props = {
  children?: React.ReactElement | React.ReactElement[];
  isVisible: boolean;
};

const Component = ({ children, isVisible = true }: Props) => {
  const information = [
    {
      label: 'sktisacouncil@gmail.com',
      icon: <Email sx={{ fontSize: '16px', color: theme.colors.primary }} />,
    },
    {
      label: '0900-000-0000',
      icon: <Phone sx={{ fontSize: '16px', color: theme.colors.primary }} />,
    },
  ];

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawerWidth = 240;

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return isVisible ? (
    <NavbarContainer>
      <Drawer
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
            width: drawerWidth,
          },
        }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar
        sx={{
          background: theme.colors.white,
          boxShadow: `0px 5px 10px ${theme.colors.shadow}`,
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                gap: '2em',
              }}
            >
              {information.map((info, index) => (
                <NavItem key={index}>
                  {info.icon}
                  <span>{info.label}</span>
                </NavItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
              <StyledImg src={Logo} alt="Logo" />
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: 'none', md: 'flex' },
                gap: '3em',
              }}
            >
              <NavItem>HOME</NavItem>
              <NavItem>YOUTH COUNCIL</NavItem>
              <NavItem>
                <StyledButton label="LOGIN/REGISTER" />
              </NavItem>
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
      </AppBar>
      {children}
    </NavbarContainer>
  ) : (
    <></>
  );
};

export default Component;
