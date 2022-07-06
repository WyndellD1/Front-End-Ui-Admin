import React from 'react';
import styled from 'styled-components';
import { Appbar } from '../../molecules/Appbar';
import { VerifyEmail } from '../../templates/VerifyEmail';

const Container = styled.div``;

const Component = (): React.ReactElement => {
  return (
    <Container>
      <Appbar />
      <VerifyEmail />
    </Container>
  );
};

export default Component;
