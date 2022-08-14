import React from 'react';
import styled from 'styled-components';

import { YouthFooter } from '../../molecules/YouthFooter';
import { YouthProfile } from '../../templates/YouthProfile';


const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
    
      <YouthProfile />
      <YouthFooter />
    </Container>
  );
};

export default Component;
