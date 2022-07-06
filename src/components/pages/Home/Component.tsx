import React from 'react';
import styled from 'styled-components';
import { Appbar } from '../../molecules/Appbar';
import { HomeFooter } from '../../molecules/HomeFooter';
import { Home } from '../../templates/Home';

const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
      <Appbar />
      <Home />
      <HomeFooter />
    </Container>
  );
};

export default Component;
