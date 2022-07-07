import React from 'react';
import styled from 'styled-components';
import { Appbar } from '../../molecules/Appbar';
import { EmailVerified } from '../../templates/EmailVerified';

const Container = styled.div``;

const Component = (): React.ReactElement => {
  return (
    <Container>
      <Appbar />
      <EmailVerified />
    </Container>
  );
};

export default Component;
