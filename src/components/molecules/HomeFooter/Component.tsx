import { FacebookRounded } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import { IconButton } from '../../atoms/Button/stories';
import { Messenger } from '../../atoms/Icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  background: ${theme.colors.black03};
  padding: 0 5em;
  flex-wrap: wrap;

  @media ${theme.breakpoints.mobile} {
    padding: 1em 0;
    height: auto;
    gap: 1em;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    :nth-child(1) {
      color: ${theme.colors.blue01};
    }

    :nth-child(2) {
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }

  @media ${theme.breakpoints.mobile} {
    flex: 1 1 100%;
    justify-content: center;
  }
`;

const Navigations = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font: normal normal normal 12px/15px Montserrat;

    ::after {
      content: '|';
      margin: 0 5px;

      @media ${theme.breakpoints.mobile} {
        content: '';
      }
    }

    :last-child {
      ::after {
        content: '';
      }
    }
  }

  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    gap: 0.5em;
  }
`;

const Copyright = styled.div`
  font: normal normal normal 12px/15px Montserrat;
  color: ${theme.colors.white};

  @media ${theme.breakpoints.mobile} {
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
      <SocialMedia>
        <IconButton size="small" label="" iconButton={<FacebookRounded />} />
        <IconButton size="small" label="" iconButton={<Messenger />} />
      </SocialMedia>
      <Navigations>
        <Link to="/">EVENT</Link>
        <Link to="/">HOW IT WORKS</Link>
        <Link to="/">DATA POLICY</Link>
        <Link to="/">TERMS & CONDITIONS</Link>
      </Navigations>
      <Copyright>Copyright © Sangguniang Kabataan - Tisa 2022</Copyright>
    </Container>
  );
};

export default Component;
