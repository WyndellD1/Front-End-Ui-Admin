import React from 'react';
import styled from 'styled-components';

import { YouthFooter } from '../../molecules/YouthFooter';
import { ManageAccountsYouth } from '../../admintemplates/ManageAccountsYouth';



const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
    
      <ManageAccountsYouth />
      <YouthFooter />
    </Container>
  );
};

export default Component;
